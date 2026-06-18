import { Terminal, CheckCircle2, Server, Layout, Database, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const skillCategories = ["All", "Frontend", "Backend", "Database & Tools"];
  const skills = [
    { name: "React", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "jQuery", category: "Frontend" },
    { name: "AJAX", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "Django", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "Laravel", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "MongoDB", category: "Database & Tools" },
    { name: "Vite", category: "Database & Tools" },
    { name: "Framer Motion", category: "Database & Tools" },
    { name: "Git", category: "Database & Tools" },
    { name: "Postman", category: "Database & Tools" }
  ];
  
  const filteredSkills = activeFilter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  const projects = [
    {
      id: "01",
      category: "Business Applications",
      title: "Accounting Software",
      status: "Live Project",
      url: "https://afamia.afamiasoft.com",
      description: "Complete accounting systems built for both product-based and service-based companies in the UAE. Covers the full financial workflow from invoicing to VAT reporting.",
      features: [
        "Invoice & billing management",
        "Accounts payable & receivable",
        "VAT & tax reporting for UAE compliance",
        "Financial dashboards & P&L reports",
        "Multi-currency & AED support"
      ],
      tags: ["Full-Stack", "UAE VAT", "ERP", "Finance"],
      icon: <Database className="w-8 h-8 text-secondary" />
    },
    {
      id: "02",
      category: "Business Applications",
      title: "HR Management Software",
      status: "Live Project",
      url: "https://hrbmc.afamiasoft.com",
      description: "A complete HR management platform handling everything from employee records and attendance tracking to payroll processing and leave management.",
      features: [
        "Employee directory & profile management",
        "Attendance tracking & reporting",
        "Payroll processing & salary management",
        "Leave requests & approval workflows",
        "Performance evaluation modules"
      ],
      tags: ["HRMS", "Payroll", "Attendance", "Full-Stack"],
      icon: <Server className="w-8 h-8 text-secondary" />
    },
    {
      id: "03",
      category: "Business Applications",
      title: "CRM Platform",
      status: "Under Development",
      url: "https://demo.afamiasoft.com/crm",
      description: "A full Customer Relationship Management system with kanban-style sales pipelines, contact management, and deal tracking — built for UAE-based businesses.",
      features: [
        "Kanban sales pipeline management",
        "Contact & company database",
        "Deal tracking & forecasting",
        "Activity logs & follow-up reminders",
        "Sales performance reports"
      ],
      tags: ["CRM", "Sales Pipeline", "Full-Stack"],
      icon: <Layout className="w-8 h-8 text-secondary" />
    },
    {
      id: "04",
      category: "Enterprise ERP",
      title: "Safety Power UAE ERP",
      status: "Live Project",
      url: "https://safetypoweruae.com/",
      description: "A centralised ERP system built for Safety Power UAE — an industrial engineering & safety equipment trading company in the UAE. Covers the full order-to-delivery lifecycle, live inventory, and vendor management.",
      features: [
        "Centralized order management & lifecycle tracking",
        "Real-time inventory & stock level monitoring",
        "Automated invoicing & purchase order generation",
        "Customer & vendor relationship database",
        "Role-based access & user management"
      ],
      tags: ["ERP", "Industrial", "Vue 3", "FastAPI", "PostgreSQL", "Full-Stack"],
      icon: <Globe className="w-8 h-8 text-secondary" />
    }
  ];

  return (
    <section className="px-margin-mobile md:px-margin-desktop pt-section-gap pb-12 md:pb-20 bg-surface-container-lowest" id="work">
      <div className="mb-12 text-center">
        <h2 className="font-headline-lg text-4xl md:text-headline-lg font-bold tracking-tighter uppercase text-primary border-b-4 border-secondary inline-block pb-2">Projects</h2>
      </div>
      
      <div className="space-y-12">
        {projects.map((project) => (
          <div key={project.id} className="border border-outline-variant bg-surface-container-low p-8 rounded-2xl relative overflow-hidden group hover:border-secondary/50 transition-colors duration-300">
            {/* Top Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-6 gap-4">
              <div className="flex items-start gap-6">
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-xl bg-surface-container border border-outline-variant group-hover:bg-secondary/10 transition-colors shrink-0">
                  {project.icon}
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-handwriting-md text-3xl text-secondary leading-none">{project.id}</span>
                    <span className="font-label-mono text-xs text-on-surface-variant uppercase tracking-widest bg-surface-container px-3 py-1 rounded-full border border-outline-variant leading-none">{project.category}</span>
                    {project.status && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 font-label-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full leading-none border transition-all duration-300 hover:scale-105 cursor-pointer ${
                          project.status === "Live Project"
                            ? "text-green-400 bg-green-400/10 border-green-400/20 hover:border-green-400/50"
                            : "text-amber-400 bg-amber-400/10 border-amber-400/20 hover:border-amber-400/50"
                        }`}
                      >
                        <span className="relative flex h-2 w-2">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                            project.status === "Live Project" ? "bg-green-400" : "bg-amber-400"
                          }`}></span>
                          <span className={`relative inline-flex rounded-full h-2 w-2 ${
                            project.status === "Live Project" ? "bg-green-500" : "bg-amber-500"
                          }`}></span>
                        </span>
                        {project.status}
                      </a>
                    )}
                  </div>
                  <h3 className="font-headline-lg text-3xl md:text-4xl text-primary uppercase tracking-tighter mt-4">{project.title}</h3>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="font-body-md text-on-surface-variant text-lg leading-relaxed mb-8 max-w-4xl md:pl-22 lg:ml-[88px]">
              {project.description}
            </p>

            {/* Features and Tags grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:pl-22 lg:ml-[88px]">
              <div className="lg:col-span-2 space-y-4">
                <span className="font-label-mono text-[10px] text-secondary uppercase mb-2 block">Key Features</span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 font-body-sm text-on-surface-variant">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <span className="font-label-mono text-[10px] text-secondary uppercase mb-2 block">Technologies & Domains</span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="font-label-mono text-xs text-primary bg-primary/10 px-3 py-1.5 rounded border border-primary/20 leading-none">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mt-24 border border-outline-variant bg-surface-container-low p-8 md:p-10 rounded-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 pb-6 border-b border-outline-variant/50">
          <div className="flex items-center gap-3">
            <Terminal className="text-secondary w-6 h-6" />
            <h3 className="font-headline-lg text-3xl text-primary uppercase tracking-tighter">My Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-label-mono text-xs uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-secondary text-surface-container-lowest border-secondary shadow-[0_0_15px_rgba(205,255,113,0.3)]'
                    : 'bg-surface-container text-on-surface-variant border-outline-variant hover:border-secondary/50 hover:text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 flex flex-wrap gap-3">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name}
              className="font-label-mono text-sm uppercase text-primary bg-surface-container-lowest border border-outline-variant px-5 py-3 rounded-xl shadow-sm hover:border-secondary hover:text-secondary hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
