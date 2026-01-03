import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedCollections />
      <Services />
      <Gallery />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
