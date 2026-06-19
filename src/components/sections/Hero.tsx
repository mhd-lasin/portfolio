import { Aperture } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-32 min-h-[70vh] flex flex-col justify-center px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      <div className="absolute top-[19%] md:top-1/2 -translate-y-1/2 opacity-20 pointer-events-none left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 lg:right-24">
        <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[480px] md:h-[480px] border-2 border-secondary rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '30s' }}>
          <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[320px] md:h-[320px] border-2 border-outline-variant rounded-full flex items-center justify-center">
            <Aperture className="text-secondary w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56" />
          </div>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl">
        <h1 className="font-display-xl text-[64px] md:text-display-xl leading-none uppercase mb-unit tracking-tighter text-center md:text-left">
          Full Stack<br /><span className="text-secondary">Developer</span>
        </h1>
        <div className="mt-48 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-gutter">
          <div className="max-w-xl bg-surface-container-low/80 backdrop-blur-sm p-8 border-l-4 border-secondary relative flex flex-col gap-6">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              A <span className="text-primary font-bold">full stack developer</span> dedicated to building <span className="text-primary font-bold">scalable</span> and <span className="text-secondary font-bold italic underline underline-offset-4">high-performance</span> web applications.
            </p>
            <p className="font-body-sm text-on-surface-variant/80 leading-relaxed">
              With a strong foundation in modern web technologies, I specialize in transforming complex problems into elegant, user-centric solutions. From responsive front-ends to robust back-ends, I bring ideas to life.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <a href="#work" className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold hover:bg-secondary hover:text-on-secondary transition-colors text-sm uppercase tracking-wider">View My Work</a>
              <a href="#contact" className="border border-outline-variant text-on-surface px-6 py-3 rounded-full font-bold hover:border-primary hover:text-primary transition-colors text-sm uppercase tracking-wider">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
