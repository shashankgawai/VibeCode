'use client';

import { useEffect, useRef, useState } from 'react';

export default function Testimonials() {
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

  const testimonials = [
    {
      name: 'Priya Sharma',
      initials: 'PS',
      role: 'Bride',
      quote: 'The embroidery work on my bridal lehenga was absolutely breathtaking. Every stitch was perfect, and the attention to detail was incredible. Advik Embroidery Studio made my dream wedding outfit a reality.',
      rating: 5,
    },
    {
      name: 'Anjali Mehta',
      initials: 'AM',
      role: 'Fashion Designer',
      quote: 'Working with Advik has been a game-changer for my collections. Their craftsmanship is unparalleled, and they always deliver beyond expectations. True artisans in every sense.',
      rating: 5,
    },
    {
      name: 'Kavita Reddy',
      initials: 'KR',
      role: 'Boutique Owner',
      quote: 'I have collaborated with Advik Embroidery Studio for multiple projects, and each time I am amazed by their creativity and precision. Their work speaks luxury and elegance.',
      rating: 5,
    },
    {
      name: 'Riya Patel',
      initials: 'RP',
      role: 'Bride',
      quote: 'From the first consultation to the final fitting, the experience was exceptional. The custom Aari work on my outfit was the highlight of my wedding. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-[var(--cream-bg)] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--text-dark)] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[var(--text-dark)]/70 max-w-2xl mx-auto">
            Trusted by brides, designers, and fashion connoisseurs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${
                isVisible ? 'animate-item-reveal' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--sage-green)] to-[var(--sage-light)] flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)] text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-[var(--text-dark)]/60 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[var(--accent-gold)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[var(--text-dark)]/70 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
