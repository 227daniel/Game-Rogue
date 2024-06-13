import { liveKitApiKey, liveKitApiUrl, liveKitSecretKey } from '@/config/const';
import streamModel from '@/models/stream';
import { TStream } from '@repo/types/stream';
import { RoomServiceClient } from 'livekit-server-sdk';
import { PipelineStage } from 'mongoose';

export const getStreamByUserId = async (userId: string) => {
  const stream = await streamModel.findOne({ userId }).populate('tags');
  return stream;
};

export const updateStreamById = async (data: Partial<TStream>, id: string | undefined) => {
  const stream = await streamModel.findByIdAndUpdate(id, data, { new: true });
  return stream;
};

export const deleteStreamThumbnailById = async (
  thumbnailUrl: string | undefined,
  id: string | undefined
) => {
  const stream = await streamModel.findByIdAndUpdate(
    id,
    {
      $unset: {
        thumbnailUrl,
      },
    },
    { new: true }
  );
  return stream;
};

export const updateStreamByUserId = async (data: Partial<TStream>, userId: string) => {
  const stream = await streamModel.findOneAndUpdate({ userId }, data, {
    new: true,
  });
  return stream;
};

export const getStreamsWithCategories = async () => {
  try {
    const aggregationPipeline = [
      { $match: { isLive: true } },
      {
        $lookup: {
          from: 'tags',
          localField: 'tags',
          foreignField: '_id',
          as: 'tagDetails',
        },
      },
      { $unwind: '$tagDetails' }, // Deconstruct the tagDetails array
      {
        $addFields: {
          tag: '$tagDetails.name', // Add tag name to the result
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'user',
        },
      },
      { $unwind: '$user' }, // Deconstruct the user array
      {
        $group: {
          _id: '$tagDetails._id',
          tag: { $first: '$tag' },
          streams: {
            $push: {
              _id: '$_id',
              name: '$name',
              thumbnailUrl: '$thumbnailUrl',
              description: '$description',
              ingressId: '$ingressId',
              serverUrl: '$serverUrl',
              streamKey: '$streamKey',
              isLive: '$isLive',
              isChatEnabled: '$isChatEnabled',
              isChatDelayed: '$isChatDelayed',
              isChatFollowersOnly: '$isChatFollowersOnly',
              isChatSubscriberOnly: '$isChatSubscriberOnly',
              user: '$user',
              createdAt: '$createdAt',
              updatedAt: '$updatedAt',
            },
          },
        },
      },
    ];

    const groupedStreams = await streamModel.aggregate(aggregationPipeline);
    for (const groupedStream of groupedStreams) {
      for (const stream of groupedStream.streams) {
        if (stream) {
          if (stream.isLive) {
            stream.view_count = await getViewerCount(stream.userId?._id.toString() ?? '');
          } else {
            stream.view_count = 0;
          }
        }
      }
    }
    return groupedStreams;
  } catch (error) {
    console.log(error);
  }
};

export const getStreams = async () => {
  const aggregationPipeline: PipelineStage[] = [
    { $match: { isLive: true } },
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'user',
      },
    },
    { $unwind: '$user' },
    {
      $lookup: {
        from: 'follows',
        localField: 'userId',
        foreignField: 'followingId',
        as: 'followers',
      },
    },
    { $addFields: { followerCount: { $size: '$followers' } } },
    { $sort: { followerCount: -1, createdAt: -1 } },
    {
      $project: {
        _id: 1,
        name: 1,
        thumbnailUrl: 1,
        description: 1,
        ingressId: 1,
        serverUrl: 1,
        streamKey: 1,
        isLive: 1,
        isChatEnabled: 1,
        isChatDelayed: 1,
        isChatFollowersOnly: 1,
        isChatSubscriberOnly: 1,
        view_count: 1,
        createdAt: 1,
        updatedAt: 1,
        user: {
          _id: '$user._id',
          name: '$user.name',
          email: '$user.email',
          image: '$user.image',
          banner: '$user.banner',
          role: '$user.role',
          country: '$user.country',
        },
        followerCount: 1,
      },
    },
  ];

  let streams = await streamModel.aggregate(aggregationPipeline);
  for (let stream of streams) {
    if (stream) {
      if (stream.isLive) {
        stream.view_count = await getViewerCount(stream.userId?._id.toString() ?? '');
      } else {
        stream.view_count = 0;
      }
    }
  }
  return streams;
};

export const getSearch = async (term?: string) => {
  try {
    let streams = [];

    let query: any = {
      $or: [
        { name: { $regex: term, $options: 'i' } },
        { 'user.name': { $regex: term, $options: 'i' } },
      ],
    };

    streams = await streamModel.find(query).sort({ isLive: -1, updatedAt: -1 });

    return streams;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const roomService = new RoomServiceClient(liveKitApiUrl, liveKitApiKey, liveKitSecretKey);

export const getViewerCount = async (userId: string) => {
  try {
    const res = await roomService.listParticipants(userId);
    return res.length;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    return 0;
  }
};
