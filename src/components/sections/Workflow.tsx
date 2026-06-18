import { useState } from 'react';

const workflowSteps = [
  {
    id: "01",
    title: "Discovery Phase",
    description: "Every project starts with a conversation. I take the time to understand your goals, target audience, and vision to create a strong foundation for success.",
    image: "/images/workflow_discovery.png",
    stringLength: 80,
    delay: 0,
    duration: 5.5,
  },
  {
    id: "02",
    title: "Research",
    description: "Good design is backed by strategy. I analyze industry trends, competitors, and user expectations to ensure the website stands out and meets business objectives.",
    image: "/images/workflow_research.png",
    stringLength: 140,
    delay: 1.2,
    duration: 6.2,
  },
  {
    id: "03",
    title: "UI Design",
    description: "With a research-backed approach, I craft an intuitive and visually appealing interface, ensuring a seamless user experience that aligns with your brand.",
    image: "/images/workflow_design.png",
    stringLength: 60,
    delay: 0.5,
    duration: 5.8,
  },
  {
    id: "04",
    title: "Website Building",
    description: "Time to bring the vision to life! I develop a fully responsive website, ensuring smooth interactions and optimized functionality.",
    image: "/images/workflow_build.png",
    stringLength: 110,
    delay: 2.1,
    duration: 6.5,
  }
];

export default function Workflow() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop pt-section-gap pb-12 md:pb-20 bg-background relative overflow-hidden" id="workflow">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="mb-16 text-center">
          <h2 className="font-headline-lg text-4xl md:text-headline-lg font-bold tracking-tighter uppercase text-primary inline-block pb-2 squiggles">My Workflow</h2>
          <p className="mt-6 max-w-2xl mx-auto font-body-md text-on-surface-variant">A well-structured process leads to better results. My workflow ensures that every project moves smoothly from concept to completion.</p>
        </div>

        {/* Chime Container */}
        <div className="relative max-w-5xl mx-auto pt-8 pb-12 md:pb-32 overflow-visible">
          {/* Top Horizontal Bar */}
          <div className="w-[90%] md:w-full h-[2px] bg-outline-variant/30 relative z-10 mb-[-2px] mx-auto"></div>

          <div className="flex justify-center gap-1 sm:gap-4 md:gap-16">
            {workflowSteps.map((step) => (
              <div 
                key={step.id} 
                className="relative flex flex-col items-center animate-swing"
                style={{ 
                  transformOrigin: 'top center', 
                  animationDelay: `${step.delay}s`,
                  animationDuration: `${step.duration}s`
                }}
              >
                {/* String */}
                <div 
                  className="w-[2px] bg-outline-variant/50" 
                  style={{ height: `${step.stringLength}px` }}
                ></div>
                
                {/* Clip */}
                <div className="w-6 md:w-10 h-[4px] bg-outline-variant/80 mb-[-2px] z-10 rounded-sm"></div>

                {/* Polaroid Frame */}
                <div className="bg-[#f4f1ea] p-1.5 pb-6 sm:p-2 sm:pb-8 md:p-4 md:pb-12 shadow-2xl rounded-sm w-[85px] sm:w-[120px] md:w-[240px] transform transition-transform duration-500 hover:scale-105 hover:z-20 group relative cursor-pointer">
                  
                  {/* Step ID Badge */}
                  <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-6 h-6 sm:w-6 sm:h-6 md:w-10 md:h-10 bg-secondary rounded-full flex items-center justify-center font-label-mono text-[9px] sm:text-[10px] md:text-sm font-bold text-surface-container-lowest shadow-lg z-20">
                    {step.id}
                  </div>

                  {/* Image Container */}
                  <div className="w-full aspect-[4/5] bg-surface-container relative overflow-hidden mb-2 sm:mb-4 md:mb-6 border border-black/10">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    
                    {/* Hover Info Overlay */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-1 sm:p-2 md:p-4">
                      <p className="text-white text-[8px] sm:text-[9px] md:text-sm text-center font-body-md leading-tight md:leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Polaroid Text */}
                  <h3 className="font-handwriting-md text-black text-center text-[10px] sm:text-xs md:text-xl font-bold tracking-tight px-0.5 sm:px-1 md:px-2 leading-tight">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-12 hidden md:block">
          <p className="font-body-md text-on-surface-variant leading-relaxed">I start by <span className="text-primary font-bold">understanding</span> your vision and audience, then dive into research to build a <span className="text-primary font-bold">strong design foundation</span>. Once the UI is crafted, I focus on transforming it into a <span className="text-secondary font-bold">fully functional website</span>.</p>
        </div>
      </div>
    </section>
  );
}
