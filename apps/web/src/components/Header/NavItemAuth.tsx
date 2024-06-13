import { Button } from '@ui/components/nextui/button';
import { cn } from '@ui/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { MdChevronRight } from 'react-icons/md';

interface MenuItem {
  name: string;
  key: string;
  isLink?: boolean;
  to?: string;
  newTab?: boolean;
  handleClick?: () => void;
}

interface NavItemProps {
  name: string;
  items?: MenuItem[];
  isDropdown?: boolean;
  handleClick?: () => void;
}

const NavItemAuth: React.FC<NavItemProps> = ({ name, items, isDropdown, handleClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => {
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="group relative px-1">
      <div className="max-w-[calc(100vw - 4rem)]">
        <div className="flex cursor-pointer items-center">
          <Button
            id={`${name}-button`}
            aria-controls={`${name}-menu`}
            aria-haspopup="true"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            onClick={handleClick}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            className={cn('hover:bg-hover z-50 cursor-pointer rounded-3xl bg-transparent')}
          >
            <Image src="/static/images/avatar/default.png" width={50} height={50} alt="" />
            <MdChevronRight className={cn('text-primary size-14 group-hover:rotate-90')} />
          </Button>
        </div>
      </div>
      <div
        id={`${name}-menu`}
        className={cn(
          'absolute group-hover:transition-transform duration-200 ease-out origin-top left-1/2 top-full mt-1 invisible group-hover:visible -translate-x-1/2 flex-col items-center whitespace-nowrap rounded-md bg-amber-950 p-2 text-center text-white shadow-lg flex',
          !isDropdown && 'opacity-0 pointer-events-none'
        )}
      >
        {items &&
          items.map((item) => {
            if (item.name === '_divider') {
              return <hr key={item.key} />;
            }
            return (
              <div className="w-full" key={item.key}>
                {item.isLink ? (
                  <a
                    href={item.to || '#'}
                    className="block px-2 py-1 hover:bg-amber-800/50 hover:text-white"
                    target={item.newTab === true ? '_blank' : '_self'}
                  >
                    {item.name}
                  </a>
                ) : (
                  <div
                    className="block px-2 py-1 hover:bg-amber-800/50 hover:text-white"
                    onClick={item.handleClick}
                  >
                    {item.name}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NavItemAuth;
