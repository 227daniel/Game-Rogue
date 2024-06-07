import { ZUser } from './user';
import z from 'zod';

export const ZTeam = z.object({
  _id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  name: z.string().min(3).max(50),
  description: z.string().optional(),
  userId: z.string(),
  image: z.string().optional(),
  banner: z.string().optional(),
  title: z.string().max(20).optional(),
  gameId: z.string(),
  inviteUrl: z.string().optional(),
  accessCode: z.string().optional(),
  participantIds: z.array(
    z.object({
      _id: z.string(),
      userId: z.string(),
      role: z.string().optional(),
      isActive: z.boolean(),
    })
  ),
  participants: z.array(ZUser),
  isActive: z.boolean().default(true),
});

export const ZTeamCreate = ZTeam.omit({
  _id: true,
  createdAt: true,
  updatedAt: true,
  inviteUrl: true,
  accessCode: true,
  participantIds: true,
  participants: true,
});

export const ZTeamUpdate = ZTeam.partial()
  .omit({ _id: true })
  .merge(z.object({ _id: z.string() }));

export const ZTeamUpdateParticipant = z.object({
  userId: z.string(),
  role: z.string().optional(),
  isActive: z.boolean(),
  kick: z.boolean().optional(),
});

export type TTeam = z.infer<typeof ZTeam>;

export type TTeamCreate = z.infer<typeof ZTeamCreate>;

export type TTeamUpdate = z.infer<typeof ZTeamUpdate>;

export type TTeamUpdateParticipant = z.infer<typeof ZTeamUpdateParticipant>;
