import Feedback from "components/Feedback/Feedback"

import { Homework16Wrapper } from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlice"

function Homework_16() {
  const dispatch = useAppDispatch()

  const like = useAppSelector(feedbackSliceSelectors.like)
  const dislike = useAppSelector(feedbackSliceSelectors.disLike)

  const onLike = () => {
    dispatch(feedbackSliceActions.onLike())
  }
  const onDisLike = () => {
    dispatch(feedbackSliceActions.onDislike())
  }
  const resetResult = () => {
    dispatch(feedbackSliceActions.resetResults())
  }

  return (
    <Homework16Wrapper>
      <Feedback
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDisLike}
        resetResults={resetResult}
      />
    </Homework16Wrapper>
  )
}

export default Homework_16
