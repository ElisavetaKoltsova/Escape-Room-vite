import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getQuests = (state: Pick<State, NameSpace.Quests>) =>
  state[NameSpace.Quests].quests;
export const getCurrentQuest = (state: Pick<State, NameSpace.Quests>) =>
  state[NameSpace.Quests].currentQuest;
export const getBookingQuest = (state: Pick<State, NameSpace.Quests>) =>
  state[NameSpace.Quests].bookingQuest;

export const getQuestsDataLoadingStatus = (state: Pick<State, NameSpace.Quests>) =>
  state[NameSpace.Quests].isQuestsDataLoading;
