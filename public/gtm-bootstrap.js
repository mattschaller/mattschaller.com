// Google Tag Manager bootstrap script
// GTM_ID will be injected by the server/build process via a data attribute
(function() {
  var gtmId = document.currentScript?.getAttribute('data-gtm-id');
  if (!gtmId) {
    console.error('GTM ID not provided');
    return;
  }
  
  (function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer',gtmId);
})();
