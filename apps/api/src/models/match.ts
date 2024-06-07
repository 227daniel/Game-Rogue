import { TMatch } from '@repo/types';
import { Schema, model, Document } from 'mongoose';

const matchTeamSchema = new Schema({
  teamId: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
  status: { type: String, required: true },
  score: { type: Number, default: 0 },
});

const matchSchema = new Schema(
  {
    eventId: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
    teamIds: [matchTeamSchema],
    streamId: { type: Schema.Types.ObjectId, ref: 'Stream' },
    stageId: { type: Schema.Types.ObjectId },
    stepId: { type: Number, default: 0 },
    nextId: { type: Schema.Types.ObjectId, ref: 'Match', required: false },
    status: { type: String, required: false },
    startAt: { type: Date, required: false },
    endAt: { type: Date, required: false },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    virtuals: {
      event: {
        options: {
          ref: 'Event',
          localField: 'eventId',
          foreignField: '_id',
          justOne: true,
        },
      },
      teams: {
        options: {
          ref: 'Team',
          localField: 'teamIds.teamId',
          foreignField: '_id',
          justOne: false,
        },
      },
      stream: {
        options: {
          ref: 'Stream',
          localField: 'streamId',
          foreignField: '_id',
          justOne: true,
        },
      },
    },
  }
);

const matchModel = model<TMatch & Document>('Match', matchSchema);

export default matchModel;
