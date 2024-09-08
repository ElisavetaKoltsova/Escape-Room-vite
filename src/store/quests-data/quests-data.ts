import { createSlice } from '@reduxjs/toolkit';
import { QuestsData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchBookingQuestAction, fetchCurrentQuestAction, fetchQuestsAction } from '../api-actions';

const initialState: QuestsData = {
  quests: [],
  currentQuest: null,
  bookingQuest: null,
  isQuestsDataLoading: false
};

export const questsData = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
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
        state.bookingQuest = action.payload;
        state.isQuestsDataLoading = false;
      });
  }
});
