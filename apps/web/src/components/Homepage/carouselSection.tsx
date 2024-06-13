import Image from 'next/image';

const CarouselSection = () => {
  return (
    <section className="relative px-5 shadow-2xl lg:px-72">
      <div
        className="relative mx-auto mt-1 max-w-[100rem] pb-40 lg:pb-20"
        style={{
          boxShadow: 'rgba(255, 255, 255, 0.6) 0px 0px 50px 9px',
        }}
      >
        <Image
          src="/static/images/home/featured_bg.png"
          alt="Featured Tournament"
          width={1000}
          height={1000}
          className="w-full"
        />
        <div className="bg-foreground absolute bottom-0 left-0 flex w-full items-center justify-between gap-2 border-2 border-white px-2 py-4 text-center text-white">
          <div className="text-4xl font-bold text-black">$10,000 R6 SUMMER SERIES</div>
          <div className="text-2xl text-white">PC - R6 - OPEN QUALIFIERS I</div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
