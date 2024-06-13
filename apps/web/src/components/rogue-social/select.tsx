import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

// Define interfaces for the props and the items
interface Item {
  value: string;
}

interface SelectProps {
  item: Item[];
  pleacholder?: Item;
  className?: string;
  onChange?: void;
}

const Select: React.FC<SelectProps> = ({
  item,
  pleacholder,
  className = '',
}) => {
  const [selected, setSelected] = useState<Item>(
    pleacholder ? pleacholder : item[0]
  );

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }: any) => (
        <>
          <div className="relative mt-2">
            <ListboxButton
              className={`relative w-full cursor-default rounded-md bg-[#f5831f] py-1.5 pl-3 pr-10 text-left font-bold text-white shadow-sm outline-none sm:text-sm sm:leading-6 ${className ? className : ' bg-[#f5831f]'
                }`}
            >
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected.value}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon className="size-5 text-white" aria-hidden="true" />
              </span>
            </ListboxButton>
            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-[#342b23] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {item.map((person, index) => (
                  <ListboxOption
                    key={index}
                    className={({ active }: any) =>
                      classNames(
                        active ? 'bg-[#ffffff14] text-white' : '',
                        !active ? 'text-white' : '',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }: any) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {person.value}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="size-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default Select;
