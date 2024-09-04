import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getQuests = (state: Pick<State, NameSpace.Quests>) =>
  state[NameSpace.Quests].quests;
