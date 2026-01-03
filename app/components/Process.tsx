'use client';

import { useEffect, useRef, useState } from 'react';

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your vision, style preferences, and the occasion. Understanding your requirements is our first priority.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Our designers create custom patterns and select premium threads, beads, and embellishments that match your vision.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Handcrafting',
      description: 'Expert artisans meticulously hand-embroider each piece using traditional Aari techniques, ensuring every stitch is perfect.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Quality Check',
      description: 'Each piece undergoes rigorous quality inspection to ensure it meets our high standards of excellence and craftsmanship.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Final Delivery',
      description: 'Your custom embroidered piece is beautifully packaged and delivered, ready to make your special occasion unforgettable.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--royal-blue)]/10 to-[var(--accent-gold)]/10 rounded-full border border-[var(--royal-blue)]/20 mb-4">
            <span className="text-[var(--royal-blue)] font-semibold text-sm tracking-wide uppercase">
              Our Process
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--text-dark)] mb-4">
            How We Create{' '}
            <span className="text-gradient-blue-gold">Magic</span>
          </h2>
          <p className="text-lg text-[var(--text-dark)]/70 max-w-2xl mx-auto">
            From concept to creation, every step is crafted with care and precision
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--royal-blue)]/20 via-[var(--accent-gold)]/40 to-[var(--royal-blue)]/20 -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                }`}
              >
                <div
                  className={`${
                    isVisible ? 'animate-item-reveal' : 'opacity-0'
                  } ${
                    index % 2 === 0
                      ? 'md:ml-auto md:mr-12'
                      : 'md:ml-12'
                  } max-w-xl`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`bg-gradient-to-br ${
                    index % 2 === 0
                      ? 'from-[var(--light-blue)] to-white'
                      : 'from-white to-[var(--light-blue)]'
                  } p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--royal-blue)]/10 group hover:scale-105`}>
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-[var(--royal-blue)] to-[var(--accent-gold)] rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                          {step.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="text-5xl font-bold text-[var(--royal-blue)]/10 mb-2">
                          {step.number}
                        </div>
                        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--text-dark)] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[var(--text-dark)]/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-[var(--royal-blue)] to-[var(--accent-gold)] rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up animate-delay-800' : 'opacity-0'}`}>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--royal-blue)] to-[var(--luxury-blue)] text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Your Project
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
