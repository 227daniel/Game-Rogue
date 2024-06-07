import { z } from 'zod';
import { TModel } from './document';

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
  start_date: z.date(),
  end_date: z.date(),
  registration_opens_date: z.date(),
  registration_ends_date: z.date(),
  prize_pool: z.number(),
  entry_fee: z.number(),
  platform: z.string(),
  game: z.string(),
  region: z.string(),
  timezone: z.string(),
  event_branding_primary_color: z.string(),
  event_branding_secondary_color: z.string(),
  event_branding_tertiary_color: z.string(),
  rulebook_file: z.string().optional(),
  terms_conditions_file: z.string().optional(),
  terms_privacy_policy_file: z.string().optional(),
});
export const ZEventUpdate = ZEvent.partial();
export type TEvent = z.infer<typeof ZEvent> & TModel;
export type TEventCreate = z.infer<typeof ZEvent>;
export type TEventUpdate = z.infer<typeof ZEventUpdate>;
