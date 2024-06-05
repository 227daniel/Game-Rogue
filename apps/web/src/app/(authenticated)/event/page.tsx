import EventsHeroSection from '@/components/events/EventsHeroSection';
import { EventsResults } from '@/components/events/EventsResults';
import CarouselSection from '@/components/Homepage/carouselSection';
import Footer from '@/components/Homepage/Footer';

export default function EventPage(): JSX.Element {
  return (
    <main className="mt-10 flex-1 bg-black">
      <EventsHeroSection />
      <CarouselSection />
      <EventsResults />
      <Footer />
    </main>
  );
}
