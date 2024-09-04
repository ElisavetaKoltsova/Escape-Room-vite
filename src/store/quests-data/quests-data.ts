import { createSlice } from '@reduxjs/toolkit';
import { QuestsData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchQuestsAction } from '../api-actions';

const initialState: QuestsData = {
  quests: [],
  isQuestDataLoading: false
};

export const questsData = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isQuestDataLoading = true;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isQuestDataLoading = false;
      });
  }
});
