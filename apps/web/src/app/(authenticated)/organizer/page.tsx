'use client';

import { Button } from '@ui/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const data = {
  event_organizer: [{ label: 'eurogames', tagline: 'awesome gaming' }],
  organization: [{ label: 'eurogames', tagline: 'awesome gaming' }],
  teams: [{ label: 'web1' }],
};

export default function OrganisePage(): JSX.Element {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col justify-start">
      <div
        className="flex w-full flex-col justify-start px-6 pb-4"
        style={{
          background: 'linear-gradient(to top, rgb(74, 40, 7) -20%, rgb(34, 18, 4) 80%)',
        }}
      >
        <h1 className="mb-4 mt-10 text-[2rem] font-semibold italic tracking-tight">
          Event Organizer
        </h1>
        <div
          className="mb-6 w-full rounded-md bg-[#180e05] px-7 py-4 shadow-md"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
          }}
        >
          <div className="flex items-center justify-between">
            <h1 className="mb-4 text-[2rem] font-semibold italic tracking-tight">
              My Event Organizers
            </h1>
            <Button
              onClick={() => {
                router.push('/event/create');
              }}
              className="bg-primary uppercase"
            >
              create event
            </Button>
          </div>
          {data.event_organizer.length > 0 ? (
            <div className="flex flex-col justify-start gap-2">
              {data.event_organizer.map((event, i) => (
                <OrganiserItem key={`item-${i}`} data={event} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center py-4 text-white">
              <p>No Event organizers</p>
            </div>
          )}
        </div>
        <div
          className="mb-6 w-full rounded-md bg-[#180e05] px-7 py-4 shadow-md"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
          }}
        >
          <div className="flex items-center justify-between">
            <h1 className="mb-4 text-[2rem] font-semibold italic tracking-tight">
              My Organizations
            </h1>
            <Button className="bg-primary uppercase">create organisation</Button>
          </div>
          {data.event_organizer.length > 0 ? (
            <div className="flex flex-col justify-start gap-2">
              {data.organization.map((event, i) => (
                <OrganiserItem key={`item-${i}`} data={event} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center py-4 text-white">
              <p>No Event organizers</p>
            </div>
          )}
        </div>

        <div
          className="mb-6 w-full rounded-md bg-[#180e05] px-7 py-4 shadow-md"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
          }}
        >
          <div className="flex items-center justify-between">
            <h1 className="mb-4 text-[2rem] font-semibold italic tracking-tight">My Teams</h1>
            <Button className="bg-primary uppercase">create team</Button>
          </div>
          {data.event_organizer.length > 0 ? (
            <div className="mb-2 flex flex-col justify-start gap-2">
              {data.teams.map((event, i) => (
                <OrganiserItem key={`item-${i}`} data={event} />
              ))}
            </div>
          ) : (
            <div className="mb-2 flex items-center justify-center py-4 text-white">
              <p>No Event organizers</p>
            </div>
          )}
          <Button
            className="border-primary/50 hover:text-primary hover:bg-primary/20 w-full bg-transparent uppercase"
            variant={'outline'}
          >
            create account
          </Button>
        </div>
      </div>
      <div className="bg-primary/5 relative flex w-full items-center justify-end py-8 pr-4 shadow-md">
        <div className="absolute left-1/2 -translate-x-1/2">
          <p className="text-xl text-white">Welcome to Game Rogue</p>
        </div>
        <Image src="/static/images/home/gr_letters.png" alt="" width={100} height={100} />
      </div>
    </div>
  );
}

type OrganiserItemProps = {
  data: { label: string; tagline?: string; image?: string };
};

function OrganiserItem({ data }: OrganiserItemProps): JSX.Element {
  return (
    <a
      href="#"
      className="hover:bg-primary/10 flex w-full justify-start gap-4 rounded-md p-2 outline outline-1 outline-[#ffffff80]"
    >
      <Image
        src={data?.image ?? '/static/images/home/gr_letters.png'}
        alt=""
        width={50}
        height={50}
      />
      {data?.tagline !== undefined ? (
        <div className="grid grid-rows-2">
          <p className="text-[1rem] text-white">{data.label}</p>
          <h6 className="text-[0.875rem] text-[#808080]">{data.tagline}</h6>
        </div>
      ) : (
        <div className="flex items-center py-2">
          <p className="text-2xl font-semibold text-white">{data.label}</p>
        </div>
      )}
    </a>
  );
}
