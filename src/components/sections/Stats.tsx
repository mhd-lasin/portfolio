export default function Stats() {
  return (
    <section className="bg-surface-container-lowest border-t border-outline-variant py-20 px-margin-mobile md:px-margin-desktop overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative z-10">
        <div className="border-l border-outline-variant pl-8 py-4 group hover:bg-surface-container transition-colors duration-300">
          <div className="font-display-xl text-[64px] leading-none mb-2 text-primary group-hover:text-secondary transition-colors">10<span className="text-4xl align-top">+</span></div>
          <p className="font-label-mono text-label-mono uppercase text-on-surface-variant group-hover:text-on-surface">Projects Completed</p>
        </div>
        <div className="border-l border-outline-variant pl-8 py-4 group hover:bg-surface-container transition-colors duration-300">
          <div className="font-display-xl text-[64px] leading-none mb-2 text-primary group-hover:text-secondary transition-colors">3<span className="text-4xl align-top">+</span></div>
          <p className="font-label-mono text-label-mono uppercase text-on-surface-variant group-hover:text-on-surface">Years of Experience</p>
        </div>
        <div className="border-l border-outline-variant pl-8 py-4 group hover:bg-surface-container transition-colors duration-300">
          <div className="font-display-xl text-[64px] leading-none mb-2 text-primary group-hover:text-secondary transition-colors">15<span className="text-4xl align-top">+</span></div>
          <p className="font-label-mono text-label-mono uppercase text-on-surface-variant group-hover:text-on-surface">Technologies Mastered</p>
        </div>
        <div className="border-l border-outline-variant pl-8 py-4 group hover:bg-surface-container transition-colors duration-300">
          <div className="font-display-xl text-[64px] leading-none mb-2 text-primary group-hover:text-secondary transition-colors">100<span className="text-4xl align-top">%</span></div>
          <p className="font-label-mono text-label-mono uppercase text-on-surface-variant group-hover:text-on-surface">Client Satisfaction</p>
        </div>
      </div>
    </section>
  );
}
