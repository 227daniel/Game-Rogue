import Image from 'next/image';

type OrganiserItemProps = {
  data: { label: string; tagline?: string; image?: string };
};

export default function OrganiserItem({ data }: OrganiserItemProps): JSX.Element {
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
