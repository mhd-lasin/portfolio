import ScrollReveal from '../ui/ScrollReveal';

export default function About() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop pt-8 pb-section-gap md:pt-20 md:pb-section-gap bg-background relative overflow-hidden" id="about">
      <div className="mb-12 text-center">
        <h2 className="font-headline-lg text-4xl md:text-headline-lg font-bold tracking-tighter uppercase text-primary inline-block pb-2 squiggles">ABOUT ME</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-center relative z-10">
        <div className="flex flex-col gap-6">
          <h3 className="font-label-mono text-label-mono uppercase text-secondary">Who I Am</h3>
          <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed space-y-4">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={3}
              blurStrength={10}
              containerClassName="!my-0"
              textClassName="!text-sm md:!text-base !font-normal !leading-relaxed text-on-surface-variant"
            >
              I'm a passionate Full Stack Developer focused on building scalable, user-friendly web applications.
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={3}
              blurStrength={10}
              containerClassName="!my-0"
              textClassName="!text-sm md:!text-base !font-normal !leading-relaxed text-on-surface-variant"
            >
              I enjoy turning ideas into real-world products through clean code and modern development practices, ensuring that every application I build is both efficient and impactful.
            </ScrollReveal>
          </div>
          <div className="mt-8 opacity-20">
            <svg className="text-on-surface-variant animate-draw-line" fill="none" height="80" viewBox="0 0 120 80" width="120" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 40C30 10 50 70 70 40C90 10 110 70 130 40" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
            </svg>
          </div>
        </div>
        <div className="relative flex justify-center items-center py-12">
          <div className="relative w-full max-w-md group cursor-pointer">
            <div className="bg-white p-4 pb-12 shadow-xl transform rotate-1 absolute inset-0 transition-all duration-300 group-hover:rotate-0 group-hover:scale-105 group-hover:-translate-y-2"></div>
            <div className="bg-white p-4 pb-12 shadow-xl transform -rotate-3 absolute inset-0 transition-all duration-300 group-hover:rotate-0 group-hover:scale-105 group-hover:-translate-y-2"></div>
            <div className="relative bg-white p-4 pb-16 shadow-2xl transform -rotate-1 transition-all duration-300 group-hover:rotate-0 group-hover:scale-105 group-hover:-translate-y-2 z-10">
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img src="/images/Muhamed-Lasin.jpeg" alt="Muhamed Lasin" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 left-0 w-full text-center">
                <span className="font-handwriting-md text-xl text-black">Yep, that's me</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-end mb-4 opacity-40">
            <svg className="text-on-surface-variant animate-float-rotate" fill="none" height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10C30 10 10 30 10 50C10 70 30 90 50 90C70 90 90 70 90 50C90 30 70 10 50 10ZM40 40C42 40 44 42 44 44C44 46 42 48 40 48C38 48 36 46 36 44C36 42 38 40 40 40ZM60 40C62 40 64 42 64 44C64 46 62 48 60 48C58 48 56 46 56 44C56 42 58 40 60 40ZM30 65C35 75 65 75 70 65" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
            </svg>
          </div>
          <h3 className="font-label-mono text-label-mono uppercase text-secondary">Skills / Tools</h3>
          <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed space-y-4">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={3}
              blurStrength={10}
              containerClassName="!my-0"
              textClassName="!text-sm md:!text-base !font-normal !leading-relaxed text-on-surface-variant"
            >
              I work with React to create dynamic front-end experiences and use technologies like Node.js, Express.js, Django, FastAPI, and Laravel to build powerful back-end systems.
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={3}
              blurStrength={10}
              containerClassName="!my-0"
              textClassName="!text-sm md:!text-base !font-normal !leading-relaxed text-on-surface-variant"
            >
              I also have experience with MongoDB, PHP, jQuery, and AJAX, allowing me to develop fast and responsive applications across the full stack.
            </ScrollReveal>
          </div>
        </div>
      </div>

    </section>
  );
}
