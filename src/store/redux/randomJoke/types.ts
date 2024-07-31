export interface RandomJoke {
  id: string
  setup: string
  punchline: string
  type: string
}

export interface RandomJokeSliceState {
  randomJoke: RandomJoke[]
  error: string | undefined
  isFetching: boolean
}
