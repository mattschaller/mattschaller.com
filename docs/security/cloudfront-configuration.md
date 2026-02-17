# CloudFront Security Configuration

This document outlines the required CloudFront configuration to implement best-in-class security headers for mattschaller.com.

**Status:** ⏳ Pending Implementation

---

## Prerequisites

- CloudFront distribution already created
- S3 bucket configured as origin
- AWS CLI configured (for testing)

---

## Step 1: Create Response Headers Policy

**Location:** CloudFront Console → Policies → Response headers policies → Create policy

### Configuration

**Policy Name:** `mattschaller-security-headers`

**Policy Type:** Custom policy

### Security Headers

#### Custom Headers (add these first)

1. **Content-Security-Policy**
   - Header name: `Content-Security-Policy`
   - Value:
     ```
     default-src 'self'; script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://region1.analytics.google.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
     ```
   - Override response: ☑ Yes
   - **Note on GTM Compatibility**: This CSP policy intentionally omits `'unsafe-inline'` and `'unsafe-eval'` from `script-src` and should be treated as the recommended baseline for production. Google Tag Manager is loaded via an external script from `https://www.googletagmanager.com`, which is explicitly allowed, and **must be tested in a staging environment with this CSP before going live**. If specific GTM features fail under this policy, first prefer refactoring your GTM container to avoid inline scripts. While a nonce-based CSP is generally the more secure alternative, it is not practical with this site's static export architecture; only if GTM functionality is business-critical and cannot be adapted should you explicitly choose to relax the policy (for example, by adding `'unsafe-inline'` to `script-src`), understanding and documenting that this reduces XSS protection.
   - **Note on Theme Script**: The site includes an inline script in `app/layout.tsx` to prevent theme flash on page load. This script will be blocked by the CSP shown above. To enable it, you must either: (1) add `'unsafe-inline'` to `script-src` (reduces security), (2) move the theme script to an external file served from `'self'`, or (3) accept the theme flash as a trade-off for stronger CSP.

2. **Permissions-Policy**
   - Header name: `Permissions-Policy`
   - Value: `camera=(), microphone=(), geolocation=()`
   - Override response: ☑ Yes

#### Standard Security Headers

Enable and configure these in the Security Headers section:

- **X-Frame-Options**
  - Value: `DENY`
  - Override response: ☑ Yes

- **X-Content-Type-Options**
  - Value: `nosniff`
  - Override response: ☑ Yes

- **Referrer-Policy**
  - Value: `strict-origin-when-cross-origin`
  - Override response: ☑ Yes

- **Strict-Transport-Security (HSTS)**
  - Value: `max-age=31536000; includeSubDomains; preload`
  - Override response: ☑ Yes
  - Note: Only enable after confirming HTTPS is working properly

**Save the policy.**

---

## Step 2: Configure Origin Access Control (OAC)

**Location:** CloudFront Console → Origin access → Create control setting

### Configuration

**Name:** `mattschaller-s3-oac`

**Description:** Origin access control for mattschaller.com S3 bucket

**Signing behavior:** Sign requests (recommended)

**Origin type:** S3

**Save the OAC.**

---

## Step 3: Update CloudFront Distribution Settings

**Location:** CloudFront Console → Distributions → [Your Distribution ID]

### General Settings (Edit)

- **Viewer Protocol Policy:** Redirect HTTP to HTTPS ✓
- **Supported HTTP Versions:** HTTP/2 and HTTP/3 ✓
- **Security Policy:** TLSv1.2_2021 (or later) ✓
- **Alternate Domain Names (CNAMEs):** Add `www.mattschaller.com` and `mattschaller.com` if not present
- **SSL Certificate:** Use your ACM certificate

### Origins Tab → Edit Origin

- **Origin Domain:** Your S3 bucket (e.g., `your-bucket-name.s3.us-east-1.amazonaws.com`)
- **Origin Access:** Origin access control settings (recommended) ✓
- **Origin Access Control:** Select `mattschaller-s3-oac` (created in Step 2)
- **Enable Origin Shield:** No (unless you need it)

**Important:** After saving, CloudFront will display a button to copy the S3 bucket policy. Copy this policy for Step 4.

### Behaviors Tab → Edit Default Behavior

- **Path Pattern:** `*` (default)
- **Viewer Protocol Policy:** Redirect HTTP to HTTPS ✓
- **Allowed HTTP Methods:** GET, HEAD, OPTIONS (or just GET, HEAD if OPTIONS not needed)
- **Cache Policy:** CachingOptimized (or your custom policy)
- **Response Headers Policy:** Select `mattschaller-security-headers` ✓ (from Step 1)
- **Compress Objects Automatically:** Yes ✓

**Save changes.**

---

## Step 4: Update S3 Bucket Policy

**Location:** S3 Console → Buckets → [Your Bucket] → Permissions → Bucket policy

### Remove Old Public Access Policy

If you have an old policy allowing public access, remove it.

### Add CloudFront OAC Policy

Replace `YOUR_BUCKET_NAME`, `YOUR_ACCOUNT_ID`, and `YOUR_DISTRIBUTION_ID` with your actual values:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipal",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::YOUR_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
        }
      }
    }
  ]
}
```

**Note:** CloudFront provides this exact policy after you configure OAC. Use the "Copy policy" button.

### Block Public Access Settings

Ensure these are all **enabled** (checked):

- ☑ Block public access to buckets and objects granted through new access control lists (ACLs)
- ☑ Block public access to buckets and objects granted through any access control lists (ACLs)
- ☑ Block public access to buckets and objects granted through new public bucket or access point policies
- ☑ Block public and cross-account access to buckets and objects through any public bucket or access point policies

---

## Step 5: Configure Custom Error Responses (Optional)

**Location:** CloudFront Console → Distributions → [Your Distribution] → Error pages tab

### Add Error Responses

1. **404 Not Found**
   - HTTP Error Code: 404
   - Customize Error Response: Yes
   - Response Page Path: `/404.html`
   - HTTP Response Code: 404
   - TTL: 300 (or as desired)

2. **403 Forbidden** (for S3 access denied → 404)
   - HTTP Error Code: 403
   - Customize Error Response: Yes
   - Response Page Path: `/404.html`
   - HTTP Response Code: 404
   - TTL: 300 (or as desired)

---

## Step 6: Invalidate CloudFront Cache

After making all changes, invalidate the cache to apply immediately:

```bash
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

Or use the CloudFront Console:
- Go to Invalidations tab
- Create invalidation
- Object paths: `/*`
- Submit

**Wait 2-5 minutes for invalidation to complete.**

---

## Step 7: Verification & Testing

### Test Security Headers

```bash
# Check all headers are present
curl -I https://www.mattschaller.com

# Expected headers:
# content-security-policy: default-src 'self'...
# x-frame-options: DENY
# x-content-type-options: nosniff
# referrer-policy: strict-origin-when-cross-origin
# permissions-policy: camera=()...
# strict-transport-security: max-age=31536000...
```

### Online Security Scanners

Test your site with these tools:

1. **SecurityHeaders.com**
   - URL: https://securityheaders.com
   - Target: https://www.mattschaller.com
   - **Goal:** A+ rating

2. **Mozilla Observatory**
   - URL: https://observatory.mozilla.org
   - Target: https://www.mattschaller.com
   - **Goal:** A+ rating

3. **SSL Labs**
   - URL: https://www.ssllabs.com/ssltest/
   - Target: https://www.mattschaller.com
   - **Goal:** A+ rating

### Browser DevTools Check

1. Open https://www.mattschaller.com in Chrome
2. Open DevTools (F12)
3. Network tab → Reload page
4. Click on the first request (document)
5. Headers tab → Response Headers
6. Verify all security headers are present

### GTM Verification

1. Open https://www.mattschaller.com
2. Chrome DevTools → Console
3. Type: `dataLayer`
4. Should see GTM data layer object
5. Network tab → Filter by "gtm" → Should see GTM requests

---

## Rollback Plan

If issues occur after deployment:

1. **Remove Response Headers Policy**
   - Edit CloudFront behavior
   - Set Response Headers Policy to "None"
   - Save changes

2. **Restore S3 Public Access** (if necessary)
   - Update S3 bucket policy to previous version
   - Adjust CloudFront origin back to OAI or public

3. **Invalidate Cache**
   - Run cache invalidation to apply rollback immediately

---

## Maintenance

### Regular Security Reviews

- **Monthly:** Run security header scans (SecurityHeaders.com, Mozilla Observatory)
- **Quarterly:** Review and update CSP policy if new third-party scripts added
- **After any third-party addition:** Update CSP in CloudFront if needed

### CSP Updates

If you add new third-party services, update the CSP header in the Response Headers Policy:

- **script-src:** Add new script domains
- **connect-src:** Add new API/analytics domains
- **img-src:** Add new image CDN domains
- **font-src:** Add new font CDN domains

### Certificate Renewal

- AWS ACM certificates auto-renew 60 days before expiration
- Monitor ACM console for any renewal issues
- CloudFront will automatically use renewed certificate

---

## Troubleshooting

### Site Not Loading

- **Check:** CloudFront distribution is deployed (Status: "Deployed")
- **Check:** DNS points to CloudFront distribution
- **Check:** S3 bucket policy allows CloudFront OAC access
- **Check:** Files exist in S3 bucket

### GTM Not Working

- **Check:** GTM container ID is correct (`GTM-5B2WMN`)
- **Check:** CSP allows `https://www.googletagmanager.com` in script-src
- **Check:** CSP allows `https://www.google-analytics.com` in connect-src
- **Check:** Browser console for CSP violations

### 403 Errors

- **Check:** S3 bucket policy is correct
- **Check:** OAC is properly configured
- **Check:** Files have correct permissions in S3
- **Check:** CloudFront is using OAC not public access

### Security Headers Not Applied

- **Check:** Response Headers Policy is attached to behavior
- **Check:** CloudFront cache has been invalidated
- **Check:** Testing the CloudFront domain (not S3 direct URL)
- **Wait:** Sometimes takes 15-30 minutes to propagate globally

---

## References

- [CloudFront Response Headers Policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/adding-response-headers.html)
- [CloudFront Origin Access Control](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html)
- [Content Security Policy Reference](https://content-security-policy.com/)
- [OWASP Security Headers](https://owasp.org/www-project-secure-headers/)

---

## Checklist

Before marking as complete, verify:

- [ ] Response Headers Policy created with all headers
- [ ] OAC created and configured
- [ ] CloudFront distribution updated with OAC and headers policy
- [ ] S3 bucket policy updated (CloudFront-only access)
- [ ] S3 public access blocked
- [ ] HTTPS redirect enabled
- [ ] TLS 1.2+ enforced
- [ ] Custom error pages configured (optional)
- [ ] Cache invalidated
- [ ] Security headers verified (curl test)
- [ ] A+ rating on SecurityHeaders.com
- [ ] GTM working properly (check dataLayer)
- [ ] Site fully functional
- [ ] DNS propagated (if changed)

**Completion Date:** ___________

**Verified By:** ___________
