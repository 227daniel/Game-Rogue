import { Storage, Bucket } from '@google-cloud/storage';
import { getGoogleServiceAccount } from '@repo/utils/config/const';
import { MulterGoogleCloudStorage } from '@duplexsi/multer-storage-google-cloud';
import multer from 'multer';
import path from 'path';
import { googleStorageBucketName, isDev } from '@/config/const';

const serviceAccount = getGoogleServiceAccount();

const bucketRoot = isDev ? 'dev' : 'prod';

const storage = serviceAccount
  ? new Storage({
      projectId: serviceAccount.project_id,
      credentials: serviceAccount,
    })
  : undefined;

const multerGoogleStorage = serviceAccount
  ? new MulterGoogleCloudStorage({
      bucketName: googleStorageBucketName,
      projectId: serviceAccount.project_id,
      credentials: serviceAccount,
      destination: (req, file, cb) => {
        const [...pathArr] = req.baseUrl.split('/');
        const subPath = pathArr.length > 3 ? pathArr[3] : pathArr[pathArr.length - 1];
        const filePath = path.join(
          bucketRoot,
          subPath,
          file.fieldname,
          String(new Date().getTime()),
          file.originalname
        );
        return cb(null, filePath.replace(/\\/g, '/'));
      },
    })
  : undefined;

const mediaBucket = storage?.bucket(isDev ? 'dev' : 'production');

const uploadToGoogleStorage = async (props: {
  bucket?: Bucket;
  path: string;
  name: string;
  blob: string | Buffer;
}) => {
  try {
    const { bucket: _bucket, path, name, blob } = props;
    const bucket = _bucket ?? mediaBucket;
    if (!bucket) {
      throw new Error('No bucket specified');
    }
    const file_path = require('path').join(path, name).replaceAll('\\', '/');
    await bucket.file(file_path).save(blob);
    await bucket.file(file_path).makePublic();
    return `https://storage.googleapis.com/${bucket.name}/${file_path}`;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const removeFromGoogleStorage = async (props: { bucket?: Bucket; url: string }) => {
  try {
    const { bucket: _bucket, url } = props;
    const bucket = _bucket ?? multerGoogleStorage?.selectedBucket;
    if (!bucket) {
      throw new Error('No bucket specified');
    }
    const [, , ...file] = url.split('/');
    const file_path = path
      .join(...file)
      .replace(/\\/g, '/')
      .replace(/%20/g, ' ');
    const res = await bucket.file(file_path).delete();
    console.log('removed file: ' + res[0].statusCode);
    return `https://storage.googleapis.com/${bucket.name}/${file_path}`;
  } catch (error) {
    // @ts-expect-error
    console.log('remove file error: ', error.message);
    return undefined;
  }
};

const profileUploader = multer({ storage: multerGoogleStorage }).fields([
  { name: 'image', maxCount: 1 },
  { name: 'banner', maxCount: 1 },
]);

const thumbnailUploader = multer({ storage: multerGoogleStorage }).fields([
  { name: 'thumbnail', maxCount: 1 },
]);

const eventImagesUploader = multer({ storage: multerGoogleStorage }).fields([
  { name: 'event_graphic', maxCount: 1 },
  { name: 'event_logo_dark', maxCount: 1 },
  { name: 'event_logo_light', maxCount: 1 },
  { name: 'rulebook_file', maxCount: 1 },
  { name: 'terms_conditions_file', maxCount: 1 },
  { name: 'terms_privacy_policy_file', maxCount: 1 },
]);

export {
  storage,
  mediaBucket,
  multerGoogleStorage,
  uploadToGoogleStorage,
  removeFromGoogleStorage,
  profileUploader,
  thumbnailUploader,
  eventImagesUploader,
};
