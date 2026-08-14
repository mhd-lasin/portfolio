import Carousel3D from '../ui/Carousel3D';

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Full-Stack Development",
      description: "Building scalable, secure, and end-to-end web applications with robust backends (Node.js, Express, Laravel, Django, FastAPI) and high-performance, dynamic frontends (React, modern JavaScript).",
      rotate: "-rotate-2"
    },
    {
      id: "02",
      title: "Custom ERP & SaaS Solutions",
      description: "Designing and developing complex corporate portals, accounting modules, HR management platforms, and CRM systems tailored to optimize and automate custom business workflows.",
      rotate: "rotate-1"
    },
    {
      id: "03",
      title: "Database & API Architecture",
      description: "Engineering optimized, secure, and lightning-fast RESTful and GraphQL APIs connected to robust database systems (MongoDB, PostgreSQL) for seamless client-server communications.",
      rotate: "-rotate-1"
    },
    {
      id: "04",
      title: "Business Process Automation",
      description: "Integrating automated invoicing, billing pipelines, real-time inventory trackers, and local tax compliance systems (such as UAE VAT) to streamline industrial and corporate operations.",
      rotate: "rotate-2"
    },
    {
      id: "05",
      title: "Premium UI/UX Integration",
      description: "Translating custom designs into pixel-perfect, highly responsive, and user-centric interfaces featuring smooth micro-animations (Framer Motion) and top-tier client-side speeds.",
      rotate: "-rotate-2"
    }
  ];

  const carouselCards = services.map((service, index) => (
    <div 
      key={index} 
      className={`bg-[#eefc81] p-4 md:p-8 shadow-2xl transform ${service.rotate} hover:rotate-0 transition-transform duration-300 min-h-65 md:min-h-87.5 w-55 md:w-80 flex flex-col paper-grid`}
    >
      <h3 className="font-handwriting-md text-lg md:text-2xl text-black font-bold mb-2 md:mb-4">{service.title}</h3>
      <div className="mb-2 md:mb-4">
        <span className="font-handwriting-md text-[48px] md:text-[80px] text-black leading-none opacity-80">{service.id}</span>
      </div>
      <div className="mt-auto border-t border-gray-400/50 pt-2 md:pt-4">
        <p className="font-handwriting-md text-black text-sm md:text-lg leading-tight">{service.description}</p>
      </div>
    </div>
  ));

  return (
    <section className="px-margin-mobile md:px-margin-desktop py-section-gap bg-background relative overflow-hidden" id="services">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="relative z-10 max-w-[100vw]">
        <div className="mb-4 md:mb-12 text-center">
          <h2 className="font-headline-lg text-4xl md:text-headline-lg font-bold tracking-tighter uppercase text-primary inline-block pb-2 squiggles">Services</h2>
        </div>
        
        {/* 3D Carousel Implementation */}
        <div className="mt-8 md:mt-16 pb-20">
          <Carousel3D items={carouselCards} />
        </div>
      </div>
    </section>
  );
}
