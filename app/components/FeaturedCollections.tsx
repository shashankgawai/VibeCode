'use client';

import { useEffect, useRef, useState } from 'react';

export default function FeaturedCollections() {
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

  const collections = [
    {
      title: 'Bridal Elegance',
      description: 'Intricate Aari work designed exclusively for the modern bride, featuring timeless motifs and luxurious details.',
      icon: '👰',
    },
    {
      title: 'Royal Zardozi',
      description: 'Traditional Zardozi embroidery with gold and silver threads, perfect for regal occasions and festive celebrations.',
      icon: '👑',
    },
    {
      title: 'Contemporary Fusion',
      description: 'Modern designs that blend traditional embroidery techniques with contemporary aesthetics for the fashion-forward.',
      icon: '✨',
    },
  ];

  return (
    <section
      id="collections"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--text-dark)] mb-4">
            Featured Collections
          </h2>
          <p className="text-lg text-[var(--text-dark)]/70 max-w-2xl mx-auto">
            Discover our signature embroidery techniques that define luxury and craftsmanship
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className={`group bg-gradient-to-br from-[var(--cream-bg)] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                isVisible ? 'animate-item-reveal' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {collection.icon}
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--text-dark)] mb-4">
                {collection.title}
              </h3>
              <p className="text-[var(--text-dark)]/70 leading-relaxed">
                {collection.description}
              </p>
              <div className="mt-6">
                <button className="text-[var(--sage-green)] font-semibold hover:text-[var(--sage-dark)] transition-colors inline-flex items-center gap-2 group">
                  Learn More
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
