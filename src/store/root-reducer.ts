import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { questsData } from './quests-data/quests-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Quests]: questsData.reducer,
  [NameSpace.User]: userProcess.reducer
});
