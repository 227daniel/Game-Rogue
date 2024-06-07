import { cn } from '@ui/lib/utils';
import Link from 'next/link';
import { MdChevronRight } from 'react-icons/md';

export type Menu = {
  label: string;
  links: ({ label: string; link?: string } | 'divider')[];
};

type MenuItemProps = {
  data: Menu;
  open: boolean;
  toggleOpen: () => void;
};

export function MenuItem({ data: { label, links }, open, toggleOpen }: MenuItemProps): JSX.Element {
  return (
    <div className={cn('w-full', open && 'bg-primary/20')}>
      <div className="flex items-center justify-between px-7 py-4 text-lg">
        <p className="text-[15px] text-white">{label}</p>
        {links.length > 0 && (
          <button
            onClick={toggleOpen}
            className="rounded-full p-2 text-white duration-200 hover:bg-white/10 active:bg-white/20 active:transition-colors"
          >
            <MdChevronRight
              className={cn('text-white rotate-90 className size-4', open && '-rotate-90')}
            />
          </button>
        )}
      </div>
      {open && (
        <div className="flex flex-col justify-start">
          {links.map((link, i) => {
            if (link === 'divider') {
              return <div className="h-[0.5px] w-full bg-white/20" key={`link-${i}`}></div>;
            } else {
              return (
                <Link
                  key={`link-${i}`}
                  className="flex w-full px-7 py-4 text-start text-[14px] text-white/80 duration-200 hover:bg-white/10 hover:transition-colors"
                  href={link.link !== undefined ? link.link : '#'}
                >
                  {link.label}
                </Link>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
