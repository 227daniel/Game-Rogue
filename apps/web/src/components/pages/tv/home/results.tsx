'use client';

import type { TStream, TUser } from '@repo/types';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@ui/components/ui/skeleton';
import { ResultCard, ResultCardSkeleton } from './result-card';
import { getStreams, getStreamsWithCategories } from '@/request/stream';

export function Results(): JSX.Element {
  const { data, isLoading } = useQuery({
    queryKey: ['streams'],
    queryFn: async () => {
      return await getStreams();
    },
    refetchInterval: 10000,
  });
  const { data: streamCategories, isLoading: isLoading2 } = useQuery({
    queryKey: ['streamswithcategories'],
    queryFn: async () => {
      return await getStreamsWithCategories();
    },
    refetchInterval: 10000,
  });
  if (isLoading || isLoading2) {
    return <>{null}</>;
  }
  return (
    <>
      <div className="mb-4">
        <h2 className="mb-4 text-lg font-semibold">Streams, We think you&apos;ll like...</h2>
        {data === undefined ||
          (data.length === 0 && (
            <div className="text-muted-foreground text-center text-sm">No Steams found!</div>
          ))}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {data?.map((result: TStream & { user: TUser }) => (
            <ResultCard
              key={result._id}
              data={{
                isLive: result.isLive,
                user: result.user,
                name: result.name ?? '',
                thumbnailUrl: result.thumbnailUrl,
                view_count: result.view_count,
              }}
            />
          ))}
        </div>
      </div>
      {streamCategories?.map((result) => (
        <div key={result._id} className="mb-4">
          <h2 className="mb-4 text-lg font-semibold capitalize">
            {result.tag} streams ({result.streams.length})
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {result.streams?.map((stream: TStream & { user: TUser }) => (
              <ResultCard
                key={stream._id}
                data={{
                  isLive: stream.isLive,
                  user: stream.user,
                  name: stream.name ?? '',
                  thumbnailUrl: stream.thumbnailUrl,
                  view_count: stream.view_count,
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export function ResultsSkeleton(): JSX.Element {
  return (
    <div className="w-max">
      <Skeleton className="mb-4 h-8 w-full" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {[[1, 2, 3, 4].map((_) => <ResultCardSkeleton key={_} />)]}
      </div>
    </div>
  );
}
