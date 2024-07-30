import axios from "axios"
import { PayloadAction } from "@reduxjs/toolkit"

import { createAppSlice } from "store/createAppSlice"

import { RandomJoke, RandomJokeSliceState } from "./types"

const randomJokeInitialState: RandomJokeSliceState = {
  randomJoke: [],
  error: undefined,
  isFetching: false,
}

export const randomJokeSlice = createAppSlice({
  name: "RANDOM_JOKE",
  initialState: randomJokeInitialState,
  reducers: create => ({
    getRandomJoke: create.asyncThunk(
      async () => {
        let response = await axios.get(
          "https://official-joke-api.appspot.com/random_joke",
        )
        return response
      },
      {
        pending: (state: RandomJokeSliceState) => {
          state.error = undefined
          state.isFetching = true
        },
        fulfilled: (state: RandomJokeSliceState, action) => {
          state.randomJoke = [...state.randomJoke, action.payload.data]
          state.isFetching = false
        },
        rejected: (state: RandomJokeSliceState, action) => {
          state.error = action.error.message
          state.isFetching = false
        },
      },
    ),
    deleteRandomJoke: create.reducer(
      (state: RandomJokeSliceState, action: PayloadAction<string>) => {
        state.randomJoke = state.randomJoke.filter((randomJoke: RandomJoke) => {
          return randomJoke.id !== action.payload
        })
      },
    ),
    deleteAllJokes: create.reducer(() => randomJokeInitialState),
  }),
  selectors: {
    randomJoke: (state: RandomJokeSliceState) => state.randomJoke,
    error: (state: RandomJokeSliceState) => state.error,
    isfething: (state: RandomJokeSliceState) => state.isFetching,
  },
})

export const randomJokeActions = randomJokeSlice.actions

export const randomJokeSelectors = randomJokeSlice.selectors
