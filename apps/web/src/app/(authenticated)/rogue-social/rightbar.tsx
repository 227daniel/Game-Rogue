'use client';
import { Input } from '@repo/ui/components/nextui/input';
import { Accordion, AccordionItem } from '@ui/components/nextui/accordion';
import { Checkbox } from '@ui/components/nextui/check-box';
import { Button } from '@ui/components/ui/button';
import { SearchIcon } from 'lucide-react';
import React from 'react';

export default function RightBar() {
  return (
    <>
      <div className="search-box  justify-items-center">
        <Input
          className="mb-3"
          id="search"
          name="search"
          placeholder="Search"
          height="40px"
          startContent={<SearchIcon size={18} color="white" />}
        />
        <hr className="border-[1.5px] border-orange-500" />
        <h6 className="px-1 text-center max-sm:text-[12px] md:text-[16px] xl:text-[20px]">
          There are no current match-chats available for you.
        </h6>
        <br />
        <Button className="w-full uppercase">Join an Event</Button>
        <br />
        <br />
        <Accordion variant="shadow" className="border border-solid border-orange-500">
          <AccordionItem key="1" aria-label="SelectCategory" title="Select Cateogries">
            <div className="space-y-1">
              <h2 className="text-[24px]">Game</h2>
              <Checkbox
                classNames={{
                  base: '!border-white',
                  wrapper:
                    'rounded-sm border-white border-solid border group-data-[selected=true]:after:bg-link group-data-[selected=true]:after:scale-80 after:rounded-[1px] before:border-transparent group-data-[invalid=true]:before:border-accent-red',
                  icon: 'group-data-[selected=true]:border-transparent',
                }}
              >
                <span className="text-white">Rainbow Six Siege</span>
              </Checkbox>
              <h2 className="text-[24px]">Platform</h2>
              <div className="space-x-2 space-y-1">
                <Checkbox
                  classNames={{
                    base: '!border-white',
                    wrapper:
                      'rounded-sm border-white border-solid border group-data-[selected=true]:after:bg-link group-data-[selected=true]:after:scale-80 after:rounded-[1px] before:border-transparent group-data-[invalid=true]:before:border-accent-red',
                    icon: 'group-data-[selected=true]:border-transparent',
                  }}
                >
                  <span className="text-white">Xbox</span>
                </Checkbox>
                <Checkbox
                  classNames={{
                    base: '!border-white',
                    wrapper:
                      'rounded-sm border-white border-solid border group-data-[selected=true]:after:bg-link group-data-[selected=true]:after:scale-80 after:rounded-[1px] before:border-transparent group-data-[invalid=true]:before:border-accent-red',
                    icon: 'group-data-[selected=true]:border-transparent',
                  }}
                >
                  <span className="text-white">PC</span>
                </Checkbox>
                <Checkbox
                  classNames={{
                    base: '!border-white',
                    wrapper:
                      'rounded-sm border-white border-solid border group-data-[selected=true]:after:bg-link group-data-[selected=true]:after:scale-80 after:rounded-[1px] before:border-transparent group-data-[invalid=true]:before:border-accent-red',
                    icon: 'group-data-[selected=true]:border-transparent',
                  }}
                >
                  <span className="text-white">PS4</span>
                </Checkbox>
                <Checkbox
                  classNames={{
                    base: '!border-white',
                    wrapper:
                      'rounded-sm border-white border-solid border group-data-[selected=true]:after:bg-link group-data-[selected=true]:after:scale-80 after:rounded-[1px] before:border-transparent group-data-[invalid=true]:before:border-accent-red',
                    icon: 'group-data-[selected=true]:border-transparent',
                  }}
                >
                  <span className="text-white">Cross-platform</span>
                </Checkbox>
              </div>
              <h2 className="text-[24px]">Region</h2>
              <div className="space-x-2 space-y-1">
                <Checkbox
                  classNames={{
                    base: '!border-white',
                    wrapper:
                      'rounded-sm border-white border-solid border group-data-[selected=true]:after:bg-link group-data-[selected=true]:after:scale-80 after:rounded-[1px] before:border-transparent group-data-[invalid=true]:before:border-accent-red',
                    icon: 'group-data-[selected=true]:border-transparent',
                  }}
                >
                  <span className="text-white">North America</span>
                </Checkbox>
                <Checkbox
                  classNames={{
                    base: '!border-white',
                    wrapper:
                      'rounded-sm border-white border-solid border group-data-[selected=true]:after:bg-link group-data-[selected=true]:after:scale-80 after:rounded-[1px] before:border-transparent group-data-[invalid=true]:before:border-accent-red',
                    icon: 'group-data-[selected=true]:border-transparent',
                  }}
                >
                  <span className="text-white">Latin America</span>
                </Checkbox>
                <Checkbox
                  classNames={{
                    base: '!border-white',
                    wrapper:
                      'rounded-sm border-white border-solid border group-data-[selected=true]:after:bg-link group-data-[selected=true]:after:scale-80 after:rounded-[1px] before:border-transparent group-data-[invalid=true]:before:border-accent-red',
                    icon: 'group-data-[selected=true]:border-transparent',
                  }}
                >
                  <span className="text-white">Europe</span>
                </Checkbox>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
