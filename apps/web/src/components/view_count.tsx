import { cn } from '@ui/lib/utils';

interface LiveBadgeProps {
  className?: string;
  view_count: number | undefined;
}

export function ViewCountBadge({ className, view_count }: LiveBadgeProps): JSX.Element {
  console.log(view_count);

  return (
    <div
      className={cn(
        'bg-muted/40 text-center text-[10px] p--[1px] px-1.5 rounded-md uppercase font-semibold tracking-wide',
        className
      )}
    >
      {view_count} {view_count === 1 ? 'viewer' : 'viewers'}
    </div>
  );
}
