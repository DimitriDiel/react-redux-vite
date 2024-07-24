import { useAppDispatch, useAppSelector } from "store/hooks"
import Counter from "components/Counter/Counter"
import {
  counterSliceSelectors,
  counterSliceActions,
} from "store/redux/counter/counterSlice"
import { PageWrapper } from "./styles"

function Lesson_16() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(counterSliceSelectors.count)

  const onPlus = () => {
    dispatch(counterSliceActions.plus())
  }
  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }
  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(3))
  }
  const onDivide = () => {
    dispatch(counterSliceActions.divide(2))
  }

  return (
    <PageWrapper>
      <Counter
        count={count}
        onMinus={onMinus}
        onPlus={onPlus}
        onDivide={onDivide}
        onMultiply={onMultiply}
      />
    </PageWrapper>
  )
}

export default Lesson_16
