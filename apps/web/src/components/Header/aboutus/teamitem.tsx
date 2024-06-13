import Image from 'next/image';

type TeamItemProps = {
  image: string;
  name: string;
  position: string;
  nickname: string;
};

export function TeamItem({ image, name, position, nickname }: TeamItemProps): JSX.Element {
  return (
    <div className="w-36 text-center lg:mb-12">
      <a href="//#endregion" data-phx-link="redirect" data-phx-link-state="push">
        <Image src={image} alt="profile" className="mb-2 size-36" height={200} width={200} />
      </a>
      <p className="text-2xl font-semibold text-primary">{nickname}</p>
      <p>{name}</p>
      <p className="text-sm text-[#a3a3a3]">{position}</p>
    </div>
  );
}
