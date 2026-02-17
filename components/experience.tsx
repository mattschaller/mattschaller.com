interface Position {
  title: string
  company: string
  date: string
  description?: string
  highlights?: string[]
}

const positions: Position[] = [
  {
    title: 'VP, Software Development',
    company: 'The Learning Experience',
    date: 'January 2026 - Present',
    description:
      'Lead 20+ person engineering organization with budget ownership alongside CTO. Technical strategy owner\u2014the go-to decision-maker for architecture, infrastructure direction, and technology investments across the business.',
    highlights: [
      'Partner cross-functionally with product, operations, franchise, content, marketing, and executive teams',
      'Driving SOC2 compliance initiatives with Drata automation',
      'Oversee mobile engineering: single React Native codebase \u2192 iOS, Android, Amazon, and web',
      'CodePush OTA updates and in-app purchase integration',
    ],
  },
  {
    title: 'Associate Vice President, Software Development',
    company: 'The Learning Experience',
    date: 'October 2023 - December 2025',
    description:
      'Served as software subject matter expert during PE acquisition (Golden Gate Capital \u2192 Harvest Partners, July 2025)\u2014presented to diligence team on architecture, tech stack, infrastructure, and development practices.',
    highlights: [
      'Architected RAG-based enterprise chatbot using AWS Bedrock (Amazon Titan + Claude Sonnet) with pgvector and custom ACL layer',
      "Directed ElevenLabs voice API integration for children's content platform",
      'Led infrastructure modernization from AWS Elastic Beanstalk to Docker/Terraform/ECS',
      'Directed Keycloak enterprise identity implementation across SaaS applications',
      'Spearheaded AI-assisted development rollout (Cursor, GitHub Copilot, Atlassian Rovo Dev)',
      'Designed CI/CD quality gates and directed migration to Playwright automated testing',
      'Built and scaled engineering team from scratch',
    ],
  },
  {
    title: 'Lead Software Engineer',
    company: 'The Learning Experience',
    date: 'April 2022 - October 2023',
    highlights: [
      'Standardized branching strategy and deployment processes via GitFlow',
      'Modernized full SDLC across engineering organization',
      'Led sprint planning, backlog management, and capacity planning',
      'Introduced code review processes and engineering standards',
    ],
  },
  {
    title: 'Sr. Applications Developer',
    company: 'The Learning Experience',
    date: '2020 - April 2022',
    description:
      'Started as contractor; converted to W2 employee after demonstrating impact on core platform development. Contributed to SaaS application development (TypeScript, Node.js, React) and mobile platform (React Native).',
  },
  {
    title: 'Development Director',
    company: 'multiplica.US',
    date: 'January 2019 - March 2020',
    highlights: [
      'Managed 10 developers across hiring, training, and professional development',
      'Oversaw planning and execution for all client projects totaling 20M+ visitors per month',
      'Collaborated as part of senior management team on strategic planning and business development',
    ],
  },
  {
    title: 'Development Manager',
    company: 'Gemaire Distributors (Watsco)',
    date: 'March 2017 - January 2019',
    highlights: [
      'Product owner for Gemaire.com (Magento Enterprise)\u2014responsible for backlog, sprint planning, and stakeholder management',
      'Led team of 5 engineers; owned code review, release management, deployment processes, and technical documentation',
      'Collaborated across Gemaire departments and Watsco subsidiaries on ERP and PIM integrations',
    ],
  },
  {
    title: 'Ecommerce Web Developer',
    company: 'Gemaire Distributors (Watsco)',
    date: 'November 2015 - March 2017',
    description:
      'Research, planning, and development for Magento Enterprise e-commerce platform. Developed and maintained web services for data exchange with ERP and PIM systems.',
  },
  {
    title: 'Sr. Web Developer',
    company: 'HiConversion',
    date: 'July 2012 - October 2015',
    highlights: [
      "Led team of 5 frontend developers building solutions for Pier 1, National Geographic, and L'Oreal",
      'Platform development using MEAN stack (MongoDB, Express, Angular, Node.js) for data collection and content delivery',
      'Sales engineering and platform training for enterprise clients',
    ],
  },
  {
    title: 'Programmer',
    company: 'TransUnion',
    date: 'January 2012 - July 2012',
    description:
      'Developed and managed internal ETL systems using Perl, MongoDB, and MySQL. Web development with PHP and JavaScript.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 mb-20">
      <h2 className="text-3xl sm:text-[32px] font-semibold text-text-primary mb-8 tracking-tight">
        Experience
      </h2>
      <div>
        {positions.map((pos, i) => (
          <div
            key={i}
            className="mb-10 last:mb-0 pl-6 border-l-2 border-border-accent relative"
          >
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-accent-blue" />
            <h3 className="text-lg font-semibold text-text-primary mb-1">
              {pos.title}
            </h3>
            <div className="text-base text-accent-blue mb-1">{pos.company}</div>
            <div className="text-sm font-mono text-text-dim mb-3">{pos.date}</div>
            {pos.description && (
              <p className="text-text-secondary text-[15px] leading-relaxed">
                {pos.description}
              </p>
            )}
            {pos.highlights && (
              <ul className="mt-3 space-y-1.5">
                {pos.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="relative pl-5 text-text-secondary text-sm before:content-['\2192'] before:absolute before:left-0 before:text-accent-cyan"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
