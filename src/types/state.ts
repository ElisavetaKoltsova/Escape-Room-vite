import {store} from '../store/index.js';
import { Quest } from './quest.js';

export type QuestsData = {
  quests: Quest[];
  isQuestDataLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
