import { AuthorizationStatus, Level, Type } from '../const.js';
import {store} from '../store/index.js';
import { BookingQuest, CurrentQuest, Quest, ReserveQuest } from './quest.js';
import { UserData } from './user-data.js';

export type QuestsData = {
  quests: Quest[];
  filteredQuests: Quest[];
  currentQuest: CurrentQuest | null;
  bookingQuests: BookingQuest[];
  selectedBookingQuest: BookingQuest | undefined;
  reservationQuests: ReserveQuest[];
  questThemeFilter: Type;
  questLevelFilter: Level;
  isQuestsDataLoading: boolean;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
