import { cn } from '@ui/lib/utils';
import Image from 'next/image';

type UserAvatarProps = {
  active: boolean;
  image?: string;
  isUser?: boolean;
};

export default function UserAvatar({ active, image, isUser }: UserAvatarProps): JSX.Element {
  return (
    <div
      className={cn(
        'relative flex size-[100px] items-center justify-center rounded-full',
        isUser ? 'bg-[#757575]' : 'bg-white'
      )}
    >
      {/* {!image && <UserIcon className="size-[4.5rem] text-[#121212]" />} */}
      {image && (
        <Image
          src={image}
          alt=""
          height={100}
          className="size-full rounded-full bg-transparent object-cover"
          width={100}
        />
      )}
      {active && <span className="user_avater_badge"></span>}
    </div>
  );
}
