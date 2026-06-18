import { Terminal, Code, Database, Users, Gauge, Palette, Layers, RefreshCw, ShieldCheck, Sparkles, FileCode, MonitorSmartphone, Zap } from 'lucide-react';

export default function Experience() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop pt-24 pb-section-gap md:pt-32 md:pb-section-gap bg-background relative overflow-hidden" id="experience">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-headline-lg text-4xl md:text-headline-lg font-bold tracking-tighter uppercase text-primary inline-block pb-2 squiggles">EXPERIENCE</h2>
        </div>
        
        <div className="space-y-12">
          {/* Role 1 */}
          <div className="border border-outline-variant bg-surface-container-low p-8 rounded-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="space-y-1">
                <h3 className="font-headline-lg text-2xl text-primary uppercase tracking-tighter">Afamia Software</h3>
                <p className="font-label-mono text-label-mono text-secondary">Software Developer | Dubai, UAE</p>
              </div>
              <div className="font-label-mono text-label-mono text-on-surface-variant bg-surface-container px-3 py-1 border border-outline-variant rounded-full">JUNE 2025 — PRESENT</div>
            </div>
            
            <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">
              I develop complete end-to-end business applications for companies across the UAE — including accounting systems for product-based, service-based, and garage businesses, CRM platforms, and HR management software. I also integrate AI technologies into ERP systems — from intelligent automation to AI-powered features — and lead the full development lifecycle from requirements to deployment and ongoing client support.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <span className="font-label-mono text-[10px] text-secondary uppercase mb-2 block">Software Built</span>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-body-md text-on-surface-variant"><Terminal className="text-secondary w-4 h-4 mt-1 shrink-0" /> <span>Accounting — Service-based Companies</span></li>
                    <li className="flex items-start gap-2 font-body-md text-on-surface-variant"><Terminal className="text-secondary w-4 h-4 mt-1 shrink-0" /> <span>Accounting — Product-based Companies</span></li>
                    <li className="flex items-start gap-2 font-body-md text-on-surface-variant"><Terminal className="text-secondary w-4 h-4 mt-1 shrink-0" /> <span>Accounting — Garage Management ERP</span></li>
                    <li className="flex items-start gap-2 font-body-md text-on-surface-variant"><Terminal className="text-secondary w-4 h-4 mt-1 shrink-0" /> <span>CRM Platform</span></li>
                    <li className="flex items-start gap-2 font-body-md text-on-surface-variant"><Terminal className="text-secondary w-4 h-4 mt-1 shrink-0" /> <span>HR Management Software</span></li>
                    <li className="flex items-start gap-2 font-body-md text-on-surface-variant"><Terminal className="text-secondary w-4 h-4 mt-1 shrink-0" /> <span>AI-Integrated ERP Features</span></li>
                  </ul>
                </div>
                <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded-r-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="text-secondary w-4 h-4" />
                    <span className="font-label-mono text-[10px] text-secondary uppercase">AI Integration in ERP Systems</span>
                  </div>
                  <p className="font-body-md text-primary font-bold italic text-sm">Building and integrating AI-powered features into business software — intelligent document processing, automated report generation, smart analytics dashboards, and AI-assisted workflows across accounting, HR, and CRM platforms.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-outline-variant/50 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-colors flex flex-col">
                  <Users className="text-secondary mb-3 w-6 h-6" />
                  <p className="font-label-mono text-[10px] text-on-surface-variant uppercase mb-2">Requirements & Analysis</p>
                  <p className="text-[10px] text-secondary leading-relaxed mt-auto">Gathering client needs and analyzing business processes to define system requirements.</p>
                </div>
                <div className="border border-outline-variant/50 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-colors flex flex-col">
                  <Layers className="text-secondary mb-3 w-6 h-6" />
                  <p className="font-label-mono text-[10px] text-on-surface-variant uppercase mb-2">System Architecture</p>
                  <p className="text-[10px] text-secondary leading-relaxed mt-auto">Designing scalable architecture, data models and technical approach for complex systems.</p>
                </div>
                <div className="border border-outline-variant/50 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-colors flex flex-col">
                  <Code className="text-secondary mb-3 w-6 h-6" />
                  <p className="font-label-mono text-[10px] text-on-surface-variant uppercase mb-2">Full-Stack Development</p>
                  <p className="text-[10px] text-secondary leading-relaxed mt-auto">Backend logic, frontend features, database design and API integrations.</p>
                </div>
                <div className="border border-outline-variant/50 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-colors flex flex-col">
                  <ShieldCheck className="text-secondary mb-3 w-6 h-6" />
                  <p className="font-label-mono text-[10px] text-on-surface-variant uppercase mb-2">Testing & QA</p>
                  <p className="text-[10px] text-secondary leading-relaxed mt-auto">Writing and running tests to ensure software reliability before every release.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Role 2 */}
          <div className="border border-outline-variant bg-surface-container-low p-8 rounded-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="space-y-1">
                <h3 className="font-headline-lg text-2xl text-primary uppercase tracking-tighter">Nexeor</h3>
                <p className="font-label-mono text-label-mono text-secondary">Full Stack Developer | Dubai, UAE</p>
              </div>
              <div className="font-label-mono text-label-mono text-on-surface-variant bg-surface-container px-3 py-1 border border-outline-variant rounded-full">JULY 2024 — JUNE 2025</div>
            </div>
            
            <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">
              Developed and maintained a comprehensive ERP module for Nexeor, focusing on streamlining core business processes. I built highly responsive frontend interfaces using Vue 3, Nuxt, Vuetify, and Pinia, ensuring a seamless user experience. On the backend, I engineered robust systems using FastAPI, Python, and PostgreSQL, while leveraging Docker for containerized deployments and efficient CI/CD workflows.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <span className="font-label-mono text-[10px] text-secondary uppercase mb-2 block">Core Features Developed</span>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-body-md text-on-surface-variant"><Terminal className="text-secondary w-4 h-4 mt-1 shrink-0" /> <span>Centralized Order Management</span></li>
                    <li className="flex items-start gap-2 font-body-md text-on-surface-variant"><Terminal className="text-secondary w-4 h-4 mt-1 shrink-0" /> <span>Automated Invoicing & Documentation</span></li>
                    <li className="flex items-start gap-2 font-body-md text-on-surface-variant"><Terminal className="text-secondary w-4 h-4 mt-1 shrink-0" /> <span>Inventory Management System</span></li>
                    <li className="flex items-start gap-2 font-body-md text-on-surface-variant"><Terminal className="text-secondary w-4 h-4 mt-1 shrink-0" /> <span>Customer & Vendor Database</span></li>
                    <li className="flex items-start gap-2 font-body-md text-on-surface-variant"><Terminal className="text-secondary w-4 h-4 mt-1 shrink-0" /> <span>User & Role Management</span></li>
                  </ul>
                </div>
                <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded-r-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="text-secondary w-4 h-4" />
                    <span className="font-label-mono text-[10px] text-secondary uppercase">Enterprise ERP Module</span>
                  </div>
                  <p className="font-body-md text-primary font-bold italic text-sm">Engineered a centralized system to handle complex business operations, from order lifecycles to real-time inventory tracking, significantly reducing manual overhead and operational errors.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-outline-variant/50 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-colors flex flex-col">
                  <Palette className="text-secondary mb-3 w-6 h-6" />
                  <p className="font-label-mono text-[10px] text-on-surface-variant uppercase mb-2">Frontend Architecture</p>
                  <p className="text-[10px] text-secondary leading-relaxed mt-auto">Crafting responsive interfaces with Vue 3, Nuxt, and Pinia for high-performance dashboards.</p>
                </div>
                <div className="border border-outline-variant/50 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-colors flex flex-col">
                  <Terminal className="text-secondary mb-3 w-6 h-6" />
                  <p className="font-label-mono text-[10px] text-on-surface-variant uppercase mb-2">Backend Engineering</p>
                  <p className="text-[10px] text-secondary leading-relaxed mt-auto">Developing high-concurrency APIs with FastAPI and Python to handle complex logic.</p>
                </div>
                <div className="border border-outline-variant/50 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-colors flex flex-col">
                  <Database className="text-secondary mb-3 w-6 h-6" />
                  <p className="font-label-mono text-[10px] text-on-surface-variant uppercase mb-2">Database Management</p>
                  <p className="text-[10px] text-secondary leading-relaxed mt-auto">Designing and optimizing PostgreSQL schemas for relational data integrity.</p>
                </div>
                <div className="border border-outline-variant/50 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-colors flex flex-col">
                  <RefreshCw className="text-secondary mb-3 w-6 h-6" />
                  <p className="font-label-mono text-[10px] text-on-surface-variant uppercase mb-2">DevOps & Deployment</p>
                  <p className="text-[10px] text-secondary leading-relaxed mt-auto">Containerizing applications with Docker for consistent multi-environment deployment.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Role 3 */}
          <div className="border border-outline-variant bg-surface-container-low p-8 rounded-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div className="space-y-1">
                <h3 className="font-headline-lg text-2xl text-primary uppercase tracking-tighter">Technocare</h3>
                <p className="font-label-mono text-label-mono text-secondary">Full Stack Web Developer | Doha, Qatar</p>
              </div>
              <div className="font-label-mono text-label-mono text-on-surface-variant bg-surface-container px-3 py-1 border border-outline-variant rounded-full">AUGUST 2023 — JULY 2024</div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <span className="font-label-mono text-[10px] text-secondary uppercase mb-2 block">Core Features</span>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-body-md text-on-surface-variant"><Terminal className="text-secondary w-4 h-4 mt-1 shrink-0" /> <span>Custom WordPress Themes</span></li>
                    <li className="flex items-start gap-2 font-body-md text-on-surface-variant"><Terminal className="text-secondary w-4 h-4 mt-1 shrink-0" /> <span>E-commerce Solutions</span></li>
                    <li className="flex items-start gap-2 font-body-md text-on-surface-variant"><Terminal className="text-secondary w-4 h-4 mt-1 shrink-0" /> <span>Corporate Business Portals</span></li>
                    <li className="flex items-start gap-2 font-body-md text-on-surface-variant"><Terminal className="text-secondary w-4 h-4 mt-1 shrink-0" /> <span>SEO-Optimized Websites</span></li>
                    <li className="flex items-start gap-2 font-body-md text-on-surface-variant"><Terminal className="text-secondary w-4 h-4 mt-1 shrink-0" /> <span>Multilingual Platforms</span></li>
                  </ul>
                </div>
                <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded-r-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="text-secondary w-4 h-4" />
                    <span className="font-label-mono text-[10px] text-secondary uppercase">Custom CMS & Web Solutions</span>
                  </div>
                  <p className="font-body-md text-primary font-bold italic text-sm">Developed tailored web architectures that balanced creative design with technical performance, ensuring rapid load times and intuitive content management for end-users.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-outline-variant/50 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-colors flex flex-col">
                  <FileCode className="text-secondary mb-3 w-6 h-6" />
                  <p className="font-label-mono text-[10px] text-on-surface-variant uppercase mb-2">WordPress Development</p>
                  <p className="text-[10px] text-secondary leading-relaxed mt-auto">Building custom themes and plugins for tailored CMS solutions.</p>
                </div>
                <div className="border border-outline-variant/50 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-colors flex flex-col">
                  <Terminal className="text-secondary mb-3 w-6 h-6" />
                  <p className="font-label-mono text-[10px] text-on-surface-variant uppercase mb-2">Backend Integration</p>
                  <p className="text-[10px] text-secondary leading-relaxed mt-auto">Connecting frontend interfaces with robust backend databases.</p>
                </div>
                <div className="border border-outline-variant/50 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-colors flex flex-col">
                  <MonitorSmartphone className="text-secondary mb-3 w-6 h-6" />
                  <p className="font-label-mono text-[10px] text-on-surface-variant uppercase mb-2">Responsive Design</p>
                  <p className="text-[10px] text-secondary leading-relaxed mt-auto">Crafting mobile-first layouts that adapt to any screen size.</p>
                </div>
                <div className="border border-outline-variant/50 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-colors flex flex-col">
                  <Zap className="text-secondary mb-3 w-6 h-6" />
                  <p className="font-label-mono text-[10px] text-on-surface-variant uppercase mb-2">Performance Tuning</p>
                  <p className="text-[10px] text-secondary leading-relaxed mt-auto">Optimizing load times and technical performance for end-users.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
