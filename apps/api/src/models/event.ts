import { TEvent } from '@repo/types';
import { HydratedDocument, Schema, model } from 'mongoose';

const eventSchema = new Schema(
  {
    organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
    name: { type: String, required: true },
    tagline: { type: String, required: true },
    event_graphic: { type: String },
    event_logo_dark: { type: String },
    event_logo_light: { type: String },
    event_format: { type: String, required: true },
    course_type: { type: String, required: true },
    seed_type: { type: String, required: true },
    team_limit: { type: Number, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    registration_opens_date: { type: Date, required: true },
    registration_ends_date: { type: Date, required: true },
    prize_pool: { type: Number, required: true },
    entry_fee: { type: Number, required: true },
    platform: { type: String, required: true },
    game: { type: String, required: true },
    region: { type: String, required: true },
    timezone: { type: String, required: true },
    event_branding_primary_color: { type: String, required: true },
    event_branding_secondary_color: { type: String, required: true },
    event_branding_tertiary_color: { type: String, required: true },
    rulebook_file: { type: String, required: true },
    terms_conditions_file: { type: String, required: true },
    terms_privacy_policy_file: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    virtuals: {
      organization: {
        options: {
          ref: 'Organization',
          localField: 'organizationId',
          foreignField: '_id',
          justOne: true,
        },
      },
    },
  }
);

const eventModel = model<HydratedDocument<TEvent & Document>>('Event', eventSchema);

export default eventModel;
