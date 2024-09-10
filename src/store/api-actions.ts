import { createAsyncThunk } from '@reduxjs/toolkit';
import { BookingQuest, CurrentQuest, Quest, ReserveQuest, ReserveQuestData } from '../types/quest';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { redirectToRoute } from './action';
import { UserData } from '../types/user-data';

export const APIAction = {
  FETCH_QUESTS: 'quests/getQuests',
  FETCH_CURRENT_QUEST: 'quests/getCurrentQuest',
  FETCH_BOOKING_QUEST: 'quests/getBookingQuest',
  FETCH_RESERVATION_QUESTS: 'quests/getReservationQuests',
  POST_RESERVE_QUEST: 'quest/postReserveQuest',
  DELETE_RESERVE_QUEST: 'quest/deleteReserveQuest',
  CHECK_AUTH: 'user/checkAuth',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout'
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

export const fetchReservationQuests = createAsyncThunk<ReserveQuest[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.FETCH_RESERVATION_QUESTS,
  async (_arg, {extra: api}) => {
    const { data } = await api.get<ReserveQuest[]>(APIRoute.Reservation);
    return data;
  }
);

export const postReserveQuest = createAsyncThunk<void, ReserveQuestData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.POST_RESERVE_QUEST,
  async ({placeId, date, time, contactPerson, phone, withChildren, peopleCount, currentId}, {extra: api, dispatch}) => {
    await api.post(`${APIRoute.Quests}/${currentId}${APIRoute.Booking}`, {
      placeId, date, time, contactPerson, phone, withChildren, peopleCount
    });
    dispatch(redirectToRoute(AppRoute.MyQuests));
  }
);

export const deleteReserveQuest = createAsyncThunk<ReserveQuest[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.DELETE_RESERVE_QUEST,
  async (id, {extra: api}) => {
    await api.delete(`${APIRoute.Reservation}/${id}`);
    const { data } = await api.get<ReserveQuest[]>(APIRoute.Reservation);
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
