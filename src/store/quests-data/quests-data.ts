import { createSlice } from '@reduxjs/toolkit';
import { QuestsData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchCurrentQuestAction, fetchQuestsAction } from '../api-actions';

const initialState: QuestsData = {
  quests: [],
  currentQuest: null,
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
      });
  }
});
