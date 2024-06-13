import { TTeam } from '@repo/types';
import { Document, Schema, model } from 'mongoose';

const participantSchema = new Schema({
  userId: { type: String, required: true },
  role: { type: String, required: false },
  isActive: { type: Boolean, required: true },
});

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: false },
    userId: { type: Schema.ObjectId, ref: 'User', required: true },
    participantIds: [participantSchema],
    image: { type: String, required: false },
    banner: { type: String, required: false },
    title: { type: String, required: false },
    gameId: { type: Schema.ObjectId, ref: 'Game', required: true },
    inviteUrl: { type: String, required: false },
    accessCode: { type: String, required: false },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    virtuals: {
      user: {
        options: {
          ref: 'User',
          localField: 'userId',
          foreignField: '_id',
          justOne: true,
        },
      },
      game: {
        options: {
          ref: 'Game',
          localField: 'gameId',
          foreignField: '_id',
          justOne: true,
        },
      },
      participants: {
        options: {
          ref: 'User',
          localField: 'participantIds.userId',
          foreignField: '_id',
          justOne: false,
        },
      },
    },
  }
);

const teamModel = model<TTeam & Document>('Team', teamSchema);

export default teamModel;
