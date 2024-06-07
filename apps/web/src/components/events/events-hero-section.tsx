export default function EventsHeroSection(): JSX.Element {
  return (
    <section
      className="relative flex h-[998px] items-center justify-center"
      style={{
        backgroundImage: 'url("/static/images/home/event_banner.png")',
        backgroundPosition: 'center center',
        position: 'relative',
        WebkitBoxPack: 'center',
        WebkitBoxAlign: 'center',
      }}
    >
      <video
        autoPlay
        loop
        poster="/static/images/home/event_banner.png"
        className="h-full"
        style={{
          objectFit: 'cover',
          overflowClipMargin: 'content-box',
          overflow: 'clip',
        }}
      >
        <source src="/static/videos/event_banner.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
