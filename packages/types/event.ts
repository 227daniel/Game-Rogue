import { ZTeam } from './team';
import { z } from 'zod';
import { TModel } from './document';

const teamStatus = z.enum(['PENDING', 'ACCEPTED']);

export const ZEvent = z.object({
  organizationId: z.string(),
  name: z.string(),
  tagline: z.string(),
  event_graphic: z.string().optional(),
  event_logo_dark: z.string().optional(),
  event_logo_light: z.string().optional(),
  event_format: z.string(),
  course_type: z.string(),
  seed_type: z.string(),
  team_limit: z.number(),
  start_date: z.string(),
  end_date: z.string(),
  registration_opens_date: z.string(),
  registration_ends_date: z.string(),
  prize_pool: z.number(),
  entry_fee: z.number(),
  platform: z.string(),
  gameId: z.string(),
  region: z.string(),
  timezone: z.string(),
  event_branding_primary_color: z.string(),
  event_branding_secondary_color: z.string(),
  event_branding_tertiary_color: z.string(),
  rulebook_file: z.string().optional(),
  terms_conditions_file: z.string().optional(),
  terms_privacy_policy_file: z.string().optional(),
  status: z.enum(['COMPLETED', 'UPCOMING', 'ONGOING']).default('UPCOMING'),
  inviteUrl: z.string().optional(),
  accessCode: z.string().optional(),
  teamIds: z.array(
    z.object({
      team: ZTeam.optional(),
      status: teamStatus,
      score: z.number(),
      teamId: z.string(),
    })
  ),
  teams: z.array(ZTeam),
});
export const ZEventUpdate = ZEvent.omit({
  teamIds: true,
  teams: true,
}).partial();
export const ZEventCreate = ZEvent.omit({
  inviteUrl: true,
  accessCode: true,
  teamIds: true,
  teams: true,
});
export type TEvent = z.infer<typeof ZEvent> & TModel;
export type TEventCreate = z.infer<typeof ZEventCreate>;
export type TEventUpdate = z.infer<typeof ZEventUpdate>;

export const ZEventUpdateTeam = z.object({
  teamId: z.string(),
  score: z.number().optional(),
  status: teamStatus,
  remove: z.boolean().optional(),
});

export type TEventUpdateTeam = z.infer<typeof ZEventUpdateTeam>;
