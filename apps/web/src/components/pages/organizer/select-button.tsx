'use client';

import { TOrganization } from '@repo/types';
import { Button } from '@ui/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@ui/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useAuthOrganizations } from '@/hooks/use-organization';

type SelectButtonProps = {
  setSelectedOrg: (org: TOrganization) => void;
};

export default function SelectButton({ setSelectedOrg }: SelectButtonProps): JSX.Element {
  const [selected, setSelected] = useState<string | null>(null);
  const { data } = useAuthOrganizations();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-primary uppercase text-white">
          {selected ? <>{selected}</> : <>connect</>}
          <ChevronDown className="ml-2 size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-40"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
        }}
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-primary">Event Organizers</DropdownMenuLabel>
          {/* {data.event_organizer.map((organizer, i) => (
            <DropdownMenuItem key={`item-${i}`}>
              <span>{organizer.label}</span>
            </DropdownMenuItem>
          ))} */}
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-primary">Organizations</DropdownMenuLabel>
          {data?.map((organizer, i) => (
            <DropdownMenuItem
              onClick={() => {
                setSelectedOrg(organizer);
                setSelected(organizer.name);
              }}
              key={`item-${i}`}
            >
              <span>{organizer.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-primary">Teams</DropdownMenuLabel>
          {/* {data.teams.map((organizer, i) => (
            <DropdownMenuItem key={`item-${i}`}>
              <span>{organizer.label}</span>
            </DropdownMenuItem>
          ))} */}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
