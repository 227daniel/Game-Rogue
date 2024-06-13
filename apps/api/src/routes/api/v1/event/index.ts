import auth from '@/middleware/auth';
import { eventImagesUploader } from '@/utils/storage';
import { Router } from 'express';
import {
  createEventController,
  deleteEventByIdController,
  getAllEventsByStatusController,
  getAllEventsController,
  getAllEventsGroupedByStatusController,
  getAllOrganizationEventsGroupedByStatusController,
  getEventByIdController,
  getEventByOrganizationIdController,
  updateEventByIdController,
  updateEventTeam,
} from './default';

const eventRouter = Router();

eventRouter.get('/id/:id', [auth], getEventByIdController);
eventRouter.get('/organization/:organizationId', [auth], getEventByOrganizationIdController);
eventRouter.post('/', [auth, eventImagesUploader], createEventController);
eventRouter.put('/:id', [auth, eventImagesUploader], updateEventByIdController);
eventRouter.delete('/:id', [auth], deleteEventByIdController);
eventRouter.get('/', getAllEventsController);
eventRouter.get('/status/grouped', getAllEventsGroupedByStatusController);
eventRouter.get(
  '/organization/:id/status/grouped',
  getAllOrganizationEventsGroupedByStatusController
);
eventRouter.get('/status', getAllEventsByStatusController);
eventRouter.put('/:id/team', updateEventTeam);
export default eventRouter;
