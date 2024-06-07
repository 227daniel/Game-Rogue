import { Router } from 'express';
import {
  createTeam,
  deleteTeam,
  getTeam,
  getTeams,
  updateTeam,
  updateTeamParticipant,
} from './default';
import { profileUploader } from '@/utils/storage';

const router = Router();

router.get('/', getTeams);

router.get('/:id', getTeam);

router.post('/', [profileUploader], createTeam);

router.put('/:id', [profileUploader], updateTeam);

router.put('/:id/participant', updateTeamParticipant);

router.delete('/:id', deleteTeam);

export default router;
