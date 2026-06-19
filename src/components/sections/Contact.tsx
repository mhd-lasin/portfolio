import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="px-margin-mobile md:px-margin-desktop pt-8 pb-section-gap md:pt-20 md:pb-section-gap bg-background relative overflow-hidden" id="contact">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Column 1: Info & Details */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="font-label-mono text-label-mono uppercase text-secondary">Say Hello</span>
              <h2 className="font-headline-lg text-4xl md:text-headline-lg font-bold tracking-tighter uppercase text-primary inline-block pb-2 mt-2 squiggles">
                Contact Me Here
              </h2>
            </div>
            
            <div className="font-body-md text-on-surface-variant max-w-lg leading-relaxed text-sm md:text-base">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={2}
                blurStrength={10}
                containerClassName="!my-0"
                textClassName="!text-sm md:!text-base !font-normal !leading-relaxed text-on-surface-variant"
              >
                Have questions or want to collaborate? Feel free to reach out! Whether it's about a project, feedback, or just to say hello, I'm always happy to connect. Let's create something amazing together!
              </ScrollReveal>
            </div>
            
            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {/* Email Card */}
              <a 
                href="mailto:lasinthangal4@gmail.com" 
                className="group flex flex-col gap-2 p-5 bg-surface-container/40 border border-outline-variant/30 hover:border-secondary/50 rounded-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-surface-container-high text-secondary group-hover:bg-secondary group-hover:text-background transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-label-mono text-[10px] uppercase tracking-wider text-on-surface-variant">Email</span>
                </div>
                <span className="font-body-md text-sm md:text-base font-semibold text-primary truncate mt-1">
                  lasinthangal4@gmail.com
                </span>
              </a>

              {/* Mobile Card */}
              <a 
                href="tel:+971556545781" 
                className="group flex flex-col gap-2 p-5 bg-surface-container/40 border border-outline-variant/30 hover:border-secondary/50 rounded-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-surface-container-high text-secondary group-hover:bg-secondary group-hover:text-background transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-label-mono text-[10px] uppercase tracking-wider text-on-surface-variant">Mobile</span>
                </div>
                <span className="font-body-md text-sm md:text-base font-semibold text-primary truncate mt-1">
                  +971 556545781
                </span>
              </a>

              {/* Location Card */}
              <div 
                className="flex flex-col gap-2 p-5 bg-surface-container/40 border border-outline-variant/30 rounded-xl cursor-default"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-surface-container-high text-secondary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-label-mono text-[10px] uppercase tracking-wider text-on-surface-variant">Location</span>
                </div>
                <span className="font-body-md text-sm md:text-base font-semibold text-primary truncate mt-1">
                  Dubai, UAE
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3 mt-4">
              <span className="font-label-mono text-xs uppercase tracking-wider text-on-surface-variant">Connect with me</span>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://linkedin.com/in/muhamed-lasin/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-outline-variant/40 hover:border-secondary bg-surface-container/20 text-on-surface-variant hover:text-primary transition-all duration-300 text-sm font-medium"
                >
                  <Linkedin className="w-4 h-4 text-secondary" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/mhd-lasin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-outline-variant/40 hover:border-secondary bg-surface-container/20 text-on-surface-variant hover:text-primary transition-all duration-300 text-sm font-medium"
                >
                  <Github className="w-4 h-4 text-secondary" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Decorative SVG Doodle */}
            <div className="mt-6 hidden lg:block opacity-20 self-start">
              <svg className="text-on-surface-variant animate-float" fill="none" height="60" viewBox="0 0 100 60" width="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20Q30 5 50 20T90 20" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fill="none" />
                <path d="M90 20L82 12M90 20L82 28" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          
          {/* Column 2: Contact Form Card */}
          <div className="relative max-w-xl mx-auto lg:max-w-none w-full group">
            {/* Skeuomorphic Backing Cards for Retro Vibe */}
            <div className="hidden lg:block absolute inset-0 bg-[#eefc81] rounded-2xl transform rotate-1 translate-y-1 translate-x-1 shadow-xl pointer-events-none opacity-90 paper-grid group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
            
            <div className="relative bg-surface-container p-6 md:p-8 rounded-2xl border border-outline shadow-2xl transform rotate-0 lg:-rotate-1 group-hover:rotate-0 transition-transform duration-300 z-10 flex flex-col gap-6">
              
              {!isSubmitted ? (
                <>
                  <div>
                    <h3 className="font-handwriting-md text-xl md:text-2xl text-primary font-bold">Send a Message</h3>
                    <p className="font-body-md text-xs text-on-surface-variant mt-1">Got an idea? Let's turn it into reality.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-label-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="Muhammed Lasin" 
                        disabled={isSubmitting}
                        className="font-body-md bg-background/80 border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary text-primary rounded-lg px-4 py-3 outline-none transition-all placeholder:text-on-surface-variant/30 text-sm"
                      />
                    </div>
                    
                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-label-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="name@example.com" 
                        disabled={isSubmitting}
                        className="font-body-md bg-background/80 border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary text-primary rounded-lg px-4 py-3 outline-none transition-all placeholder:text-on-surface-variant/30 text-sm"
                      />
                    </div>
                    
                    {/* Message Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="font-label-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                        Message
                      </label>
                      <textarea 
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="Hi Lasin, let's build something epic together..." 
                        disabled={isSubmitting}
                        className="font-body-md bg-background/80 border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary text-primary rounded-lg px-4 py-3 outline-none transition-all placeholder:text-on-surface-variant/30 text-sm resize-none"
                      />
                    </div>
                    
                    {/* Retro Styled Submit Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="mt-2 w-full border border-outline py-3.5 flex items-center justify-center gap-2 font-bold text-background bg-[#eefc81] shadow-none lg:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-0 hover:translate-y-0 lg:hover:translate-x-1 lg:hover:translate-y-1 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin"></span>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                /* Success State Card */
                <div className="flex flex-col items-center text-center py-8 px-4 gap-6 animate-float">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center border border-secondary/30">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-handwriting-md text-2xl text-primary font-bold">Message Sent!</h3>
                    <p className="font-body-md text-sm text-on-surface-variant max-w-sm">
                      Thank you for reaching out! Your message was sent successfully. I will get back to you as soon as possible.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="border border-outline px-6 py-2.5 flex items-center justify-center gap-2 font-bold text-background bg-secondary shadow-none lg:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:translate-x-0 hover:translate-y-0 lg:hover:translate-x-0.5 lg:hover:translate-y-0.5 transition-all duration-200 cursor-pointer rounded-lg text-sm"
                  >
                    <span>Send Another Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
