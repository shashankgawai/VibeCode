'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[var(--light-blue)] to-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJva2xjaCgwLjQ1IDAuMTggMjU1KSIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjA4Ii8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--royal-blue)] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--accent-gold)] rounded-full blur-3xl opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--royal-blue)]/10 to-[var(--accent-gold)]/10 rounded-full border border-[var(--royal-blue)]/20">
            <span className="w-2 h-2 bg-[var(--accent-gold)] rounded-full animate-pulse"></span>
            <span className="text-[var(--royal-blue)] font-semibold text-sm tracking-wide uppercase">
              Premium Craftsmanship Since 2010
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-dark)] leading-tight">
              Luxury{' '}
              <span className="text-gradient-blue-gold">Handcrafted</span>
              {' '}Aari Embroidery
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-dark)]/70 leading-relaxed">
              Exquisite embroidery that transforms your bridal couture dreams into reality with 
              intricate craftsmanship and timeless elegance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#collections"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--royal-blue)] to-[var(--luxury-blue)] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[var(--royal-blue)]/30 transition-all duration-300 hover:scale-105"
            >
              Explore Collections
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--royal-blue)] text-[var(--royal-blue)] font-semibold rounded-full hover:bg-[var(--royal-blue)] hover:text-white transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-blue-gold">500+</div>
              <div className="text-sm text-[var(--text-dark)]/60">Happy Brides</div>
            </div>
            <div className="w-px h-12 bg-[var(--royal-blue)]/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-blue-gold">15+</div>
              <div className="text-sm text-[var(--text-dark)]/60">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-[var(--royal-blue)]/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-blue-gold">100%</div>
              <div className="text-sm text-[var(--text-dark)]/60">Handcrafted</div>
            </div>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
            <div className="w-full h-full bg-gradient-to-br from-[var(--royal-blue)] via-[var(--luxury-blue)] to-[var(--accent-gold)] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <svg
                className="w-40 h-40 text-white/30 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0.8}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
          </div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[var(--accent-gold)] rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-[var(--royal-blue)] rounded-full blur-3xl opacity-30 animate-pulse"></div>
          
          <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-[var(--royal-blue)]/10 animate-item-reveal animate-delay-300">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-gold)] to-[var(--gold-light)] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-[var(--text-dark)]">Premium Quality</div>
                <div className="text-sm text-[var(--text-dark)]/60">Certified Artisans</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#collections" className="text-[var(--royal-blue)]/50 hover:text-[var(--royal-blue)] transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
