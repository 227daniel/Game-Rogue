import { getViewerCount } from '@/services/stream';
import { TStream } from '@repo/types';
import { HydratedDocument, Schema, model } from 'mongoose';

const streamSchema = new Schema(
  {
    name: { type: String },

    thumbnailUrl: { type: String },
    description: { type: String },

    ingressId: { type: String, unique: false },
    serverUrl: { type: String },
    streamKey: { type: String },

    isLive: { type: Boolean, default: false },
    isChatEnabled: { type: Boolean, default: true },
    isChatDelayed: { type: Boolean, default: false },
    isChatFollowersOnly: { type: Boolean, default: false },
    isChatSubscriberOnly: { type: Boolean, default: false },

    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
      required: true,
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
      },
    ],
  },
  {
    strict: false,
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    virtuals: {
      user: {
        options: {
          ref: 'User',
          localField: 'userId',
          foreignField: '_id',
          justOne: true,
        },
      },
    },
  }
);

streamSchema.virtual('view_count').get(function () {
  // Placeholder for view_count virtual
  //@ts-ignore
  return this?._view_count;
});

// Middleware to calculate view_count after find
streamSchema.post('find', async function (docs) {
  for (let doc of docs) {
    if (doc.isLive) {
      doc._view_count = await getViewerCount(doc.userId?._id.toString() ?? '');
    } else {
      doc._view_count = 0;
    }
  }
});

// Middleware to calculate _view_count after findOne
streamSchema.post('findOne', async function (doc) {
  if (doc) {
    if (doc.isLive) {
      doc._view_count = await getViewerCount(doc.userId?._id.toString() ?? '');
    } else {
      doc._view_count = 0;
    }
  }
});

const streamModel = model<HydratedDocument<TStream & Document>>('Stream', streamSchema);

export default streamModel;
