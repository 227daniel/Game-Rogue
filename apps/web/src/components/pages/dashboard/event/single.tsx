import { TEvent } from '@repo/types';
import { Button } from '@ui/components/ui/button';
import Link from 'next/link';

export default function SingleEventPageComponent(props: {
  id: string;
  isOrganizer: boolean;
  event: TEvent;
}) {
  const { id, isOrganizer, event } = props;
  return (
    <div className="flex flex-1 flex-col gap-2">
      <h1>{event.name}</h1>
      <Button asChild>
        <Link href={`/dashboard/event/${id}/edit`}>edit</Link>
      </Button>
    </div>
  );
}
