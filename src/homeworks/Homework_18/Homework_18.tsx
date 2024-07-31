import { useAppDispatch, useAppSelector } from "store/hooks"
import { RandomJoke } from "store/redux/randomJoke/types"
import { v4 } from "uuid"
import {
  randomJokeActions,
  randomJokeSelectors,
  randomJokeSlice,
} from "store/redux/randomJoke/randomJokeSlice"
import Button from "components/Button/Button"

import {
  ButtonControl,
  PageWrapper,
  RandomJokeCard,
  RandomJokeContainer,
  RandomJokeText,
  RandomJokeWrapper,
} from "./styles"
import { useEffect } from "react"

function Homework_18() {
  const dispatch = useAppDispatch()
  const randomJoke = useAppSelector(randomJokeSelectors.randomJoke)
  const error = useAppSelector(randomJokeSelectors.error)
  const isFething = useAppSelector(randomJokeSelectors.isfething)

  const getRandomJoke = () => {
    dispatch(randomJokeActions.getRandomJoke())
  }

  const deleteAllJokes = () => {
    dispatch(randomJokeActions.deleteAllJokes())
  }

  const randomJokeParagraphs = randomJoke.map(
    (randomJoke: RandomJoke, index: number) => {
      return (
        <RandomJokeWrapper key={v4()}>
          <RandomJokeText>
            {`${index + 1}. `}
            {randomJoke.setup}
            {randomJoke.punchline}
          </RandomJokeText>
          <ButtonControl>
            <Button
              isRed
              name="Delete Joke"
              onClick={() => {
                dispatch(randomJokeActions.deleteRandomJoke(randomJoke.id))
              }}
            />
          </ButtonControl>
        </RandomJokeWrapper>
      )
    },
  )

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      <RandomJokeCard>
        {randomJoke.length > 0 && (
          <Button
            isRed={true}
            name="Delete All Jokes"
            onClick={deleteAllJokes}
          />
        )}
        <RandomJokeContainer>
          {randomJoke.length > 0 && randomJokeParagraphs}
        </RandomJokeContainer>
        <Button
          name="Get Random Joke"
          onClick={getRandomJoke}
          disabled={isFething}
        />
      </RandomJokeCard>
    </PageWrapper>
  )
}

export default Homework_18
