import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import FeaturedCollections from './components/FeaturedCollections';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <FeaturedCollections />
      <Services />
      <Process />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
