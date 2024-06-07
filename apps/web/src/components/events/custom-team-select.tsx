'use client';

import { Button } from '@ui/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@ui/components/ui/select';
import { cn } from '@ui/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export default function CustomSelectTeam() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div>
      <Select
        onValueChange={(v) => {
          setValue(v);
        }}
      >
        <SelectTrigger
          id="custom_select"
          className="w-full rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-8 py-6 text-white hover:border-white"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem key={`item`} value="production">
              <div className="flex w-full flex-row items-center justify-start gap-2">
                <Image
                  alt=""
                  height={30}
                  width={30}
                  src={'/static/images/home/dark_logo.png'}
                  className="object-cover object-center"
                />
                <span className="text-lg">Production</span>
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="mt-2 flex items-center gap-2">
        <Button
          disabled={!value}
          className={cn('w-[70%] uppercase', value ? 'bg-[#ffb707]' : 'bg-primary')}
        >
          Register - 35$.00
        </Button>
        <Button className="w-[30%] bg-primary uppercase">create team</Button>
      </div>
    </div>
  );
}
