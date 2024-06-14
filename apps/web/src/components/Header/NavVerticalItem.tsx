import { cn } from '@ui/lib/utils';
import { useState } from 'react';

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
  active?: boolean;
}

const NavVerticalItem: React.FC<NavItemProps> = ({
  name,
  items,
  isDropdown,
  handleClick,
  active,
}) => {
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
        <button
          id={`${name}-button`}
          aria-controls={`${name}-menu`}
          aria-haspopup="true"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          onClick={handleClick}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          className={cn('w-full p-1 gif-once', active && 'bg-foreground')}
        >
          <span className="text-[12px] font-bold uppercase text-white">{name}</span>
        </button>
      </div>
      <div
        id={`${name}-menu`}
        className={cn(
          'text-[12px] absolute group-hover:transition-transform duration-200 ease-out origin-right left-full top-0 mt-1 invisible group-hover:visible -translate-x-0 flex-col items-center whitespace-nowrap rounded-md bg-amber-950 p-2 text-center text-white shadow-lg flex',
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

export default NavVerticalItem;
