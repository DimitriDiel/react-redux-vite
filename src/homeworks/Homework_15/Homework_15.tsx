import Button from "components/Button/Button"
import Counter from "components/Counter/Counter"
import Input from "components/Input/Input"

import { Homework15Wrapper } from "./styles"

function Homework_15() {
  return (
    <Homework15Wrapper>
      <Button name="Button" />
      {/* <Counter count={0} onPlus={() => {}} onMinus={() => {}} /> */}
      <Input id="" name="Input" label="input label" />
    </Homework15Wrapper>
  )
}

export default Homework_15
