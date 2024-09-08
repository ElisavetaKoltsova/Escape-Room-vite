import { AuthorizationStatus } from '../const.js';
import {store} from '../store/index.js';
import { BookingQuest, CurrentQuest, Quest } from './quest.js';
import { UserData } from './user-data.js';

export type QuestsData = {
  quests: Quest[];
  currentQuest: CurrentQuest | null;
  bookingQuests: BookingQuest[];
  selectedBookingQuest: BookingQuest | undefined;
  isQuestsDataLoading: boolean;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
