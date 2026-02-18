const categories = [
  {
    title: 'Leadership',
    items: [
      '20-person org management',
      'P&L & budget ownership',
      'M&A technical SME',
      'Cross-functional partnerships',
      'Vendor management',
    ],
  },
  {
    title: 'AI/ML',
    items: [
      'AWS Bedrock (Titan, Claude)',
      'pgvector RAG architectures',
      'ElevenLabs voice integration',
      'Prompt engineering',
      'Context management',
    ],
  },
  {
    title: 'Development Practices',
    items: [
      'Code Review',
      'Playwright (Testing)',
      'GitFlow',
      'CI/CD Quality Gates',
      'Agile/Scrum',
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      'AWS (ECS, EC2, S3, CloudFront)',
      'Terraform (IaC)',
      'Docker, CI/CD',
      'PostgreSQL, MySQL, Redis',
      'New Relic, CloudWatch',
    ],
  },
  {
    title: 'Languages & Frameworks',
    items: [
      'TypeScript, Node.js, Python',
      'React, React Native',
      'Express, REST APIs',
      'AWS Lambda (serverless)',
    ],
  },
  {
    title: 'Mobile',
    items: [
      'React Native (iOS/Android)',
      'react-native-for-web',
      'CodePush OTA updates',
      'In-App Purchases (IAP)',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 mb-20">
      <h2 className="text-3xl sm:text-[32px] font-semibold text-text-primary mb-8 tracking-tight">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-bg-secondary border border-border-color rounded-md p-5"
          >
            <h3 className="text-sm font-semibold text-accent-purple uppercase tracking-wide mb-3">
              {cat.title}
            </h3>
            <ul>
              {cat.items.map((item) => (
                <li key={item} className="py-1 text-text-secondary text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
