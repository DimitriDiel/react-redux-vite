import { createAppSlice } from "store/createAppSlice"

import { FeedbackSliceState } from "./types"

const feedbackInitialState = {
  like: 0,
  disLike: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    onLike: create.reducer((state: FeedbackSliceState) => {
      state.like = state.like + 1
    }),
    onDislike: create.reducer((state: FeedbackSliceState) => {
      state.disLike = state.disLike + 1
    }),
    resetResults: create.reducer((state: FeedbackSliceState) => {
      state.like = 0
      state.disLike = 0
    }),
  }),
  selectors: {
    like: (state: FeedbackSliceState) => {
      return state.like
    },
    disLike: (state: FeedbackSliceState) => {
      return state.disLike
    },
  },
})

export const feedbackSliceActions = feedbackSlice.actions

export const feedbackSliceSelectors = feedbackSlice.selectors
