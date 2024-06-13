import { TTeam } from '@repo/types';
import { create } from 'zustand';

interface TeamStore {
  currentTeam: TTeam | undefined;
  setCurrentTeam: (team: TTeam | undefined) => void;
}

export const useTeam = create<TeamStore>((set) => ({
  currentTeam: undefined,
  setCurrentTeam(team) {
    set({ currentTeam: team });
  },
}));
