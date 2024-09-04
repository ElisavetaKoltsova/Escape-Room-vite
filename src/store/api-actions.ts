import { createAsyncThunk } from '@reduxjs/toolkit';
import { Quest } from '../types/quest';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';

export const APIAction = {
  FETCH_QUESTS: 'FETCH_QUESTS'
};

export const fetchQuestsAction = createAsyncThunk<Quest[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.FETCH_QUESTS,
  async(_arg, {extra: api}) => {
    const { data } = await api.get<Quest[]>(APIRoute.Quests);
    return data;
  }
);
