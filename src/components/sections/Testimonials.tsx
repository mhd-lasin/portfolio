import { Star } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    client: 'AFAMIA',
    project: 'Accounting Software',
    image: '/images/client_finance.jpg',
    stats: [
      { label: 'Industry', value: 'Finance' },
      { label: 'Location', value: 'UAE' },
      { label: 'Impact', value: '40% Faster' }
    ],
    testimonial: 'The accounting software completely transformed our financial workflows. We can now easily manage VAT reporting and multi-currency invoicing with no hassle, saving us countless hours every month.'
  },
  {
    id: 2,
    client: 'BMC',
    project: 'HR Management Platform',
    image: '/images/client_hr.jpg',
    stats: [
      { label: 'Industry', value: 'Tech' },
      { label: 'Users', value: '500+' },
      { label: 'Impact', value: 'Streamlined' }
    ],
    testimonial: 'Implementing this HR management platform saved us countless hours. Payroll processing and attendance tracking are finally streamlined into one highly efficient system.'
  },
  {
    id: 3,
    client: 'BTC',
    project: 'CRM Platform',
    image: '/images/client_crm.jpg',
    stats: [
      { label: 'Industry', value: 'Trading' },
      { label: 'Sales', value: '+30%' },
      { label: 'Pipeline', value: 'Kanban' }
    ],
    testimonial: 'A game-changer for our sales team. The Kanban pipelines and activity tracking helped us close deals 30% faster and brought complete visibility to our operations.'
  },
  {
    id: 4,
    client: 'Safety Power UAE',
    project: 'Enterprise ERP',
    image: '/images/client_erp.jpg',
    stats: [
      { label: 'Industry', value: 'Industrial' },
      { label: 'Inventory', value: 'Live Sync' },
      { label: 'Scale', value: 'Enterprise' }
    ],
    testimonial: 'Our order-to-delivery lifecycle is now fully centralized. The live inventory management gave us the exact control we needed to expand our operations securely.'
  }
];

function TestimonialCard({ data }: { data: typeof testimonialsData[0]; key?: string | number }) {
  return (
    <div className="relative w-[260px] md:w-[400px] h-[380px] md:h-[500px] rounded-3xl overflow-hidden group shrink-0 shadow-xl border border-outline-variant/20 bg-surface-container">
      <img 
        src={data.image} 
        alt={data.client} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/50" />

      {/* Glassmorphic Panel positioned at the bottom */}
      <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 flex flex-col justify-end transition-all duration-500">
        
        {/* The expanding text container */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
          <div className="overflow-hidden">
            <p className="font-body-md text-white text-sm md:text-base leading-snug md:leading-relaxed mb-3 md:mb-6 italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              "{data.testimonial}"
            </p>
          </div>
        </div>

        {/* Always visible elements */}
        <div className="flex gap-1 mb-2 md:mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-3 h-3 md:w-4 md:h-4 fill-white text-white" />
          ))}
        </div>
        
        <h3 className="font-headline-lg text-white text-xl md:text-2xl font-bold mb-0.5 md:mb-1 tracking-tight">{data.client}</h3>
        <p className="font-body-md text-white/80 text-xs md:text-sm mb-3 md:mb-4">{data.project}</p>

        <div className="flex justify-between items-center w-full pt-3 md:pt-4 border-t border-white/20">
          {data.stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-0.5 md:gap-1">
              <p className="font-headline-lg text-xs md:text-sm font-semibold text-white">{stat.value}</p>
              <p className="font-label-mono text-[8px] md:text-[10px] text-white/60 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate array to ensure smooth infinite scrolling
  const scrollItems = [...testimonialsData, ...testimonialsData, ...testimonialsData];

  return (
    <section className="pt-0 pb-section-gap md:pt-4 md:pb-section-gap bg-surface-container-lowest overflow-hidden" id="testimonials">
      <div className="px-margin-mobile md:px-margin-desktop mb-16 text-center">
        <h2 className="font-headline-lg text-4xl md:text-headline-lg font-bold tracking-tighter uppercase text-primary border-b-4 border-secondary inline-block pb-2">What My Clients Say</h2>
      </div>

      <div 
        className="relative w-full overflow-hidden flex"
        style={{ 
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 py-4 px-6">
          {scrollItems.map((item, i) => (
            <TestimonialCard key={`${item.id}-${i}`} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
