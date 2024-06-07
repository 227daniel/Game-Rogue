import { getEventById } from '@/services/event';
import { checkUserOwnedOrganization } from '@/services/organization';
import { log } from '@repo/logger';
import { NextFunction, Request, Response } from 'express';

export default async function (req: Request, res: Response, next: NextFunction) {
  try {
    const userId = String(res.locals.user._id);
    let organizationId;
    if (req.params.organizationId) {
      organizationId = req.params.organizationId;
    } else if (req.body.organizationId) {
      organizationId = req.body.organizationId;
    } else if (req.params.id) {
      const event = await getEventById(req.params.id);
      if (event) {
        organizationId = event.organizationId;
      }
    } else {
      return res.status(404).json({
        success: false,
        message: 'No Organization ID was specified',
      });
    }
    if (!organizationId) {
      const userOwnsOrg = await checkUserOwnedOrganization(userId, organizationId);
      if (userOwnsOrg) {
        next();
      } else {
        return res.status(403).json({
          success: false,
          message: 'User does not own organization',
        });
      }
    } else {
      return res.status(404).json({
        success: false,
        message: 'No Organization ID was specified',
      });
    }
  } catch (err) {
    log(err);
    // @ts-expect-error
    res.status(403).json({ success: false, message: err.message });
  }
}
