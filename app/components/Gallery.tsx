'use client';

import { useEffect, useRef, useState } from 'react';

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

  const galleryItems = [
    { id: 1, title: 'Bridal Lehenga Detail', span: 'md:col-span-2 md:row-span-2' },
    { id: 2, title: 'Zardozi Work', span: 'md:col-span-1 md:row-span-1' },
    { id: 3, title: 'Aari Embroidery', span: 'md:col-span-1 md:row-span-1' },
    { id: 4, title: 'Gold Thread Work', span: 'md:col-span-1 md:row-span-2' },
    { id: 5, title: 'Floral Motif', span: 'md:col-span-2 md:row-span-1' },
    { id: 6, title: 'Pearl Embellishment', span: 'md:col-span-1 md:row-span-1' },
    { id: 7, title: 'Contemporary Design', span: 'md:col-span-1 md:row-span-1' },
    { id: 8, title: 'Traditional Pattern', span: 'md:col-span-1 md:row-span-1' },
  ];

  const gradients = [
    'from-[var(--sage-green)] to-[var(--sage-light)]',
    'from-[var(--accent-gold)] to-[var(--sage-light)]',
    'from-[var(--sage-light)] to-[var(--sage-green)]',
    'from-[var(--sage-dark)] to-[var(--sage-green)]',
    'from-[var(--sage-green)] to-[var(--accent-gold)]',
    'from-[var(--accent-gold)] to-[var(--sage-dark)]',
    'from-[var(--sage-light)] to-[var(--accent-gold)]',
    'from-[var(--sage-dark)] to-[var(--sage-light)]',
  ];

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--text-dark)] mb-4">
            Our Work
          </h2>
          <p className="text-lg text-[var(--text-dark)]/70 max-w-2xl mx-auto">
            A glimpse into our portfolio of exquisite embroidery craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                item.span
              } ${isVisible ? 'animate-item-reveal' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item.id)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} transition-transform duration-500 group-hover:scale-110`}
              ></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white/40 group-hover:text-white/60 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-4xl w-full aspect-[4/3] bg-gradient-to-br from-[var(--sage-green)] to-[var(--sage-light)] rounded-lg"></div>
        </div>
      )}
    </section>
  );
}
