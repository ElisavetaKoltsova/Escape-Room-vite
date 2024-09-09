import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuestsData } from '../../types/state';
import { NameSpace } from '../../const';
import { deleteReserveQuest, fetchBookingQuestAction, fetchCurrentQuestAction, fetchQuestsAction, fetchReservationQuests } from '../api-actions';
import { BookingQuest } from '../../types/quest';

const initialState: QuestsData = {
  quests: [],
  currentQuest: null,
  bookingQuests: [],
  selectedBookingQuest: undefined,
  reservationQuests: [],
  isQuestsDataLoading: false
};

export const questsData = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    setSelectedQuest: (state, action: PayloadAction<BookingQuest>) => {
      state.selectedBookingQuest = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isQuestsDataLoading = true;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isQuestsDataLoading = false;
      })
      .addCase(fetchCurrentQuestAction.pending, (state) => {
        state.isQuestsDataLoading = true;
      })
      .addCase(fetchCurrentQuestAction.fulfilled, (state, action) => {
        state.currentQuest = action.payload;
        state.isQuestsDataLoading = false;
      })
      .addCase(fetchBookingQuestAction.pending, (state) => {
        state.isQuestsDataLoading = true;
      })
      .addCase(fetchBookingQuestAction.fulfilled, (state, action) => {
        state.bookingQuests = action.payload;
        state.selectedBookingQuest = action.payload[0];
        state.isQuestsDataLoading = false;
      })
      .addCase(fetchReservationQuests.pending, (state) => {
        state.isQuestsDataLoading = true;
      })
      .addCase(fetchReservationQuests.fulfilled, (state, action) => {
        state.reservationQuests = action.payload;
        state.isQuestsDataLoading = false;
      })
      .addCase(deleteReserveQuest.fulfilled, (state, action) => {
        state.reservationQuests = action.payload;
      });
  }
});

export const { setSelectedQuest } = questsData.actions;
