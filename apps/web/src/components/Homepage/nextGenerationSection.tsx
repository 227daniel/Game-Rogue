import { Button } from '@repo/ui/components/nextui/button';
// import { useRouter } from 'next/router';

export default function NextGenerationSection() {
  // const router = useRouter();

  return (
    <section className="bg-muted pb-32 pt-20">
      <div className="px-4 lg:px-20">
        <div className="mx-auto grid max-w-[90%] grid-cols-1 grid-rows-2 items-center gap-0 lg:grid-cols-2 lg:grid-rows-1 lg:gap-28">
          <div className="border-3 max-w-[60rem] rounded-[30px] border-solid border-orange-400 bg-black p-5 pb-6 pt-10 text-center shadow-2xl">
            <h3 className="mb-4 text-3xl font-bold text-white">THE NEXT GENERATION OF ESPORTS</h3>
            <p className="text-md mb-4 text-white">
              Are you an event-hoster looking for an all-in-one package to produce pro-league level
              events from structure to productions?
            </p>
            <p className="text-md mb-4 text-white">
              Or a team looking to build with the most influential tools to win and grow?
            </p>
            <p className="text-md mb-4 text-white">
              Maybe you&apos;re just a player or content creator looking for casual play or
              professional development?
            </p>
            <p className="text-md mb-4 text-white">
              We have every feature bundled in low-cost packages with the most fundamental features
              always available for free!
            </p>
            <Button
              variant="solid"
              color="primary"
              className="rounded-none px-10 py-6"
              // onClick={() => {
              //   router.push('/plus-plans');
              // }}
            >
              <h4 className="text-2xl font-bold text-white">VIEW NOW</h4>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative size-96">
              <video
                className="absolute inset-0 size-full object-cover"
                poster="/static/images/home/laptop.png"
                loop
                autoPlay
                muted
              >
                <source src="/static/videos/laptop.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
