import { ZEvent } from './event';
import { ZTeam } from './team';
import { ZStream } from './stream';
import z from 'zod';

export const ZMatch = z.object({
  _id: z.string(),
  eventId: z.string(),
  teamIds: z.array(z.object({ teamId: z.string(), status: z.string(), score: z.number() })),
  streamId: z.string(),
  stageId: z.string(),
  stepId: z.number(),
  nextId: z.string().optional(),
  status: z.string().optional(),
  startAt: z.string().optional(),
  endAt: z.string().optional(),
  event: ZEvent.optional(),
  teams: z.array(ZTeam).optional(),
  stream: ZStream.optional(),
});

export type TMatch = z.infer<typeof ZMatch>;

export const ZMatchCreate = ZMatch.omit({
  _id: true,
  event: true,
  teams: true,
  stream: true,
});

export type TMatchCreate = z.infer<typeof ZMatchCreate>;

export const ZMatchUpdate = ZMatch.partial();

export type TMatchUpdate = z.infer<typeof ZMatchUpdate>;
