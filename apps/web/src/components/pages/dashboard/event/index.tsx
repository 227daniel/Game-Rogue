'use client';

import EventsHeroSection from '@/components/events/events-hero-section';
import { EventsResults } from '@/components/events/events-results';
import CarouselSection from '@/components/Homepage/carouselSection';
import Footer from '@/components/Homepage/Footer';

export default function EventIndexPageComponent() {
  return (
    <main className="mt-10 flex-1 bg-black">
      <EventsHeroSection />
      <CarouselSection />
      <EventsResults />
      <Footer />
    </main>
  );
}
