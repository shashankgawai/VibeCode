'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--cream-bg)] to-[var(--sage-light)]/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJva2xjaCgwLjU1IDAuMTQgMTY1KSIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-[var(--sage-green)] font-medium text-lg tracking-wide uppercase">
              Handcrafted Excellence
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-dark)] leading-tight">
              Luxury Handcrafted{' '}
              <span className="text-[var(--sage-green)]">Aari Embroidery</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-dark)]/80 leading-relaxed">
              Exquisite embroidery that brings your bridal couture dreams to life with 
              intricate craftsmanship and timeless elegance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#collections"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--sage-green)] text-white font-semibold rounded-md hover:bg-[var(--sage-dark)] transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Collections
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--sage-green)] text-[var(--sage-green)] font-semibold rounded-md hover:bg-[var(--sage-green)] hover:text-white transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-[var(--sage-light)] to-[var(--sage-green)] flex items-center justify-center">
              <svg
                className="w-32 h-32 text-white/30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--accent-gold)] rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--sage-green)] rounded-full blur-3xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
}
