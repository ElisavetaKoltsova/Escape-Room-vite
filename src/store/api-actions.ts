import { createAsyncThunk } from '@reduxjs/toolkit';
import { BookingQuest, CurrentQuest, Quest } from '../types/quest';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { redirectToRoute } from './action';
import { UserData } from '../types/user-data';

export const APIAction = {
  FETCH_QUESTS: 'FETCH_QUESTS',
  FETCH_CURRENT_QUEST: 'FETCH_CURRENT_QUEST',
  FETCH_BOOKING_QUEST: 'FETCH_BOOKING_QUEST',
  CHECK_AUTH: 'CHECK_AUTH',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
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

export const fetchCurrentQuestAction = createAsyncThunk<CurrentQuest, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.FETCH_CURRENT_QUEST,
  async(id, {extra: api}) => {
    const { data } = await api.get<CurrentQuest>(`${APIRoute.Quests}/${id}`);
    return data;
  }
);

export const fetchBookingQuestAction = createAsyncThunk<BookingQuest[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.FETCH_BOOKING_QUEST,
  async (id, {extra: api}) => {
    const { data } = await api.get<BookingQuest[]>(`${APIRoute.Quests}/${id}${APIRoute.Booking}`);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.CHECK_AUTH,
  async (_arg, {extra: api}) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.LOGIN,
  async ({email, password}, {dispatch, extra: api}) => {
    const { data: { token }, data } = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.LOGOUT,
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
