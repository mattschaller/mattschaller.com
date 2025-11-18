'use client'

import React, { useState } from 'react'
import { FileText, GitBranch, Star, Code, Mail, Linkedin, ExternalLink, Terminal, BookOpen } from 'lucide-react'

export default function GitHubPortfolio() {
  const [activeTab, setActiveTab] = useState('readme')
  const [stars, setStars] = useState(42)
  const [isStarred, setIsStarred] = useState(false)

  const handleStar = () => {
    setIsStarred(!isStarred)
    setStars(isStarred ? stars - 1 : stars + 1)
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* GitHub-style header */}
      <header className="border-b border-[#30363d] bg-[#161b22]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Terminal className="w-8 h-8 text-[#58a6ff]" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[#58a6ff] hover:underline cursor-pointer">mattschaller</span>
                  <span className="text-[#8b949e]">/</span>
                  <span className="text-[#c9d1d9] font-semibold">portfolio</span>
                  <span className="px-2 py-0.5 text-xs border border-[#30363d] rounded-full text-[#8b949e]">Public</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="mailto:matt@mattschaller.com" className="flex items-center gap-2 px-3 py-1.5 bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors text-sm">
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Repo stats bar */}
        <div className="flex items-center gap-4 mb-6 text-sm">
          <button 
            onClick={handleStar}
            className={`flex items-center gap-2 px-3 py-1.5 border rounded-md transition-colors ${
              isStarred 
                ? 'bg-[#21262d] border-[#58a6ff] text-[#58a6ff]' 
                : 'bg-[#21262d] border-[#30363d] hover:bg-[#30363d]'
            }`}
          >
            <Star className={`w-4 h-4 ${isStarred ? 'fill-[#58a6ff]' : ''}`} />
            {isStarred ? 'Starred' : 'Star'} <span className="font-semibold">{stars}</span>
          </button>
          <div className="flex items-center gap-2 text-[#8b949e]">
            <GitBranch className="w-4 h-4" />
            <span className="font-semibold text-[#c9d1d9]">main</span>
          </div>
          <div className="flex items-center gap-2 text-[#8b949e]">
            <Code className="w-4 h-4" />
            <span>Next.js, TypeScript, React</span>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="border border-[#30363d] rounded-lg overflow-hidden">
          <div className="bg-[#161b22] border-b border-[#30363d]">
            <div className="flex">
              <button
                onClick={() => setActiveTab('readme')}
                className={`px-4 py-2 text-sm flex items-center gap-2 border-b-2 transition-colors ${
                  activeTab === 'readme'
                    ? 'border-[#f78166] text-[#c9d1d9]'
                    : 'border-transparent text-[#8b949e] hover:text-[#c9d1d9]'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                README.md
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-4 py-2 text-sm flex items-center gap-2 border-b-2 transition-colors ${
                  activeTab === 'experience'
                    ? 'border-[#f78166] text-[#c9d1d9]'
                    : 'border-transparent text-[#8b949e] hover:text-[#c9d1d9]'
                }`}
              >
                <FileText className="w-4 h-4" />
                EXPERIENCE.md
              </button>
              <button
                onClick={() => setActiveTab('stack')}
                className={`px-4 py-2 text-sm flex items-center gap-2 border-b-2 transition-colors ${
                  activeTab === 'stack'
                    ? 'border-[#f78166] text-[#c9d1d9]'
                    : 'border-transparent text-[#8b949e] hover:text-[#c9d1d9]'
                }`}
              >
                <Code className="w-4 h-4" />
                STACK.md
              </button>
            </div>
          </div>

          {/* Content area */}
          <div className="bg-[#0d1117] p-8">
            {activeTab === 'readme' && (
              <div className="prose prose-invert max-w-none">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#58a6ff] to-[#bc8cff] rounded-full flex items-center justify-center text-3xl font-bold">
                    MS
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-[#c9d1d9] mb-2 mt-0">Matt Schaller</h1>
                    <p className="text-xl text-[#8b949e] mb-3">VP of Software Engineering</p>
                    <div className="flex gap-3">
                      <a href="https://www.linkedin.com/in/mattschaller" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#58a6ff] hover:underline text-sm">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                      <a href="mailto:matt@mattschaller.com" className="flex items-center gap-1 text-[#58a6ff] hover:underline text-sm">
                        <Mail className="w-4 h-4" />
                        Email
                      </a>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-[#c9d1d9] border-b border-[#30363d] pb-2 mb-4">
                  <span className="text-[#f78166]">#</span> About
                </h2>
                <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 mb-6">
                  <p className="text-[#c9d1d9] leading-relaxed mb-0">
                    Software engineering leader with <strong>10+ years</strong> of experience building and scaling 
                    distributed engineering teams. Specialized in ecommerce platforms, SaaS solutions, and high-performance 
                    systems that handle <strong>$100M+ in annual transactions</strong>.
                  </p>
                </div>

                <h2 className="text-xl font-bold text-[#c9d1d9] border-b border-[#30363d] pb-2 mb-4">
                  <span className="text-[#f78166]">#</span> Core Competencies
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4">
                    <code className="text-[#79c0ff] text-sm">→</code> <span className="text-[#c9d1d9]">Engineering Leadership</span>
                  </div>
                  <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4">
                    <code className="text-[#79c0ff] text-sm">→</code> <span className="text-[#c9d1d9]">Product Development</span>
                  </div>
                  <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4">
                    <code className="text-[#79c0ff] text-sm">→</code> <span className="text-[#c9d1d9]">Distributed Systems</span>
                  </div>
                  <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4">
                    <code className="text-[#79c0ff] text-sm">→</code> <span className="text-[#c9d1d9]">Enterprise B2B SaaS</span>
                  </div>
                  <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4">
                    <code className="text-[#79c0ff] text-sm">→</code> <span className="text-[#c9d1d9]">Ecommerce at Scale</span>
                  </div>
                  <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4">
                    <code className="text-[#79c0ff] text-sm">→</code> <span className="text-[#c9d1d9]">Team Building</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-[#c9d1d9] border-b border-[#30363d] pb-2 mb-4">
                  <span className="text-[#f78166]">#</span> Currently
                </h2>
                <div className="bg-[#1f6feb]/10 border border-[#1f6feb] rounded-md p-4 mb-6">
                  <p className="text-[#c9d1d9] mb-2">
                    💡 Open to interesting opportunities, challenging projects, and connecting with like-minded technologists
                  </p>
                  <p className="text-[#8b949e] text-sm mb-0">
                    Always learning, always building, always growing as an engineer and leader
                  </p>
                </div>

                <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 mb-6 font-mono text-sm">
                  <div className="text-[#8b949e]">
                    <span className="text-[#6e7681]">/* </span><br/>
                    <span className="text-[#6e7681]"> * After 10 years, I've learned that the best solutions</span><br/>
                    <span className="text-[#6e7681]"> * are the ones you can explain to your team at 9am</span><br/>
                    <span className="text-[#6e7681]"> * and to your CEO at 9pm.</span><br/>
                    <span className="text-[#6e7681]"> */</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  <span className="px-2 py-1 bg-[#1f6feb]/20 text-[#58a6ff] rounded text-xs border border-[#1f6feb]/30">leadership</span>
                  <span className="px-2 py-1 bg-[#1f6feb]/20 text-[#58a6ff] rounded text-xs border border-[#1f6feb]/30">ecommerce</span>
                  <span className="px-2 py-1 bg-[#1f6feb]/20 text-[#58a6ff] rounded text-xs border border-[#1f6feb]/30">saas</span>
                  <span className="px-2 py-1 bg-[#1f6feb]/20 text-[#58a6ff] rounded text-xs border border-[#1f6feb]/30">distributed-systems</span>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="prose prose-invert max-w-none">
                <h1 className="text-2xl font-bold text-[#c9d1d9] mb-6">
                  <span className="text-[#f78166]">#</span> Career History
                </h1>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-[#30363d] pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-[#58a6ff] rounded-full"></div>
                    <div className="bg-[#161b22] border border-[#30363d] rounded-md p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-[#c9d1d9] mt-0 mb-1">VP of Software Engineering</h3>
                        <code className="text-[#8b949e] text-sm">2020 - Present</code>
                      </div>
                      <p className="text-[#58a6ff] text-sm mb-3">Enterprise Technology Company</p>
                      <ul className="text-[#c9d1d9] space-y-2 mb-0 pl-5">
                        <li>Led distributed engineering teams across multiple time zones</li>
                        <li>Oversaw product development for enterprise B2B ecommerce platform</li>
                        <li>Scaled transaction volume to $100M+ annually</li>
                        <li>Implemented modern development practices and CI/CD pipelines</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-2 border-[#30363d] pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-[#30363d] rounded-full"></div>
                    <div className="bg-[#161b22] border border-[#30363d] rounded-md p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-[#c9d1d9] mt-0 mb-1">Senior Engineering Manager</h3>
                        <code className="text-[#8b949e] text-sm">2017 - 2020</code>
                      </div>
                      <p className="text-[#58a6ff] text-sm mb-3">Leading Retail Technology Provider</p>
                      <ul className="text-[#c9d1d9] space-y-2 mb-0 pl-5">
                        <li>Delivered dozens of ecommerce implementations for major retail brands</li>
                        <li>Built and mentored high-performing engineering teams</li>
                        <li>Established technical standards and best practices</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-2 border-[#30363d] pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-[#30363d] rounded-full"></div>
                    <div className="bg-[#161b22] border border-[#30363d] rounded-md p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-[#c9d1d9] mt-0 mb-1">Software Engineer → Tech Lead</h3>
                        <code className="text-[#8b949e] text-sm">2014 - 2017</code>
                      </div>
                      <p className="text-[#58a6ff] text-sm mb-3">Various Technology Companies</p>
                      <ul className="text-[#c9d1d9] space-y-2 mb-0 pl-5">
                        <li>Full-stack development across multiple platforms and languages</li>
                        <li>Progressed from individual contributor to technical leadership</li>
                        <li>Specialized in ecommerce and SaaS solutions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-[#161b22] border border-[#30363d] rounded-md p-5">
                  <p className="text-[#c9d1d9] flex items-center gap-2 mb-0">
                    <ExternalLink className="w-4 h-4 text-[#58a6ff]" />
                    <span>For detailed career history, visit my </span>
                    <a href="https://www.linkedin.com/in/mattschaller" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline">
                      LinkedIn profile
                    </a>
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'stack' && (
              <div className="prose prose-invert max-w-none">
                <h1 className="text-2xl font-bold text-[#c9d1d9] mb-6">
                  <span className="text-[#f78166]">#</span> Technology Stack
                </h1>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#c9d1d9] mb-3">
                      <code className="text-[#79c0ff]">languages/</code>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">JavaScript</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">TypeScript</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">Python</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">Java</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">SQL</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#c9d1d9] mb-3">
                      <code className="text-[#79c0ff]">frontend/</code>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">React</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">Next.js</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">Gatsby</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">Tailwind CSS</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">GraphQL</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#c9d1d9] mb-3">
                      <code className="text-[#79c0ff]">backend/</code>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">Node.js</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">Express</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">Spring Boot</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">REST APIs</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">Microservices</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#c9d1d9] mb-3">
                      <code className="text-[#79c0ff]">cloud-infrastructure/</code>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">AWS</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">S3</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">Lambda</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">Docker</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">Kubernetes</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#c9d1d9] mb-3">
                      <code className="text-[#79c0ff]">devops/</code>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">GitHub Actions</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">CI/CD</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">Jenkins</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">Terraform</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">Git</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#c9d1d9] mb-3">
                      <code className="text-[#79c0ff]">databases/</code>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">PostgreSQL</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">MySQL</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">MongoDB</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">Redis</span>
                      <span className="px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-md text-sm">DynamoDB</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-[#21262d] border border-[#30363d] rounded-md p-4">
                  <h4 className="text-base font-semibold text-[#c9d1d9] mb-2 mt-0">
                    <code className="text-[#79c0ff]">this.site</code>
                  </h4>
                  <div className="text-[#8b949e] text-sm space-y-1">
                    <div><span className="text-[#ffa657]">framework:</span> <span className="text-[#a5d6ff]">&quot;Next.js&quot;</span></div>
                    <div><span className="text-[#ffa657]">styling:</span> <span className="text-[#a5d6ff]">&quot;Tailwind CSS&quot;</span></div>
                    <div><span className="text-[#ffa657]">deployment:</span> <span className="text-[#a5d6ff]">&quot;GitHub Actions → AWS S3&quot;</span></div>
                    <div><span className="text-[#ffa657]">source:</span> <a href="https://github.com/mattschaller/mattschaller.com" className="text-[#58a6ff] hover:underline">&quot;github.com/mattschaller/mattschaller.com&quot;</a></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-[#8b949e] text-sm pb-8">
          <div className="flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4" />
            <span>Built with Next.js • Deployed via GitHub Actions • Hosted on AWS S3</span>
          </div>
          <div className="mt-2">
            <a href="https://github.com/mattschaller/mattschaller.com" className="text-[#58a6ff] hover:underline">
              View source code
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
