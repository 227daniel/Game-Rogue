import CarouselSection from '../Homepage/carouselSection';
import Footer from '../Homepage/Footer';
import EventsHeroSection from './events-hero-section';
import { EventsResults } from './events-results';

export default function EventIdexPage(): JSX.Element {
  return (
    <main className="mt-10 flex-1 bg-black">
      <EventsHeroSection />
      <CarouselSection />
      <EventsResults />
      <Footer />
    </main>
  );
}
