import { Button } from "example-lib"
import css from './button.module.less'

export default () => {
  return (
    <Button
      className={css.btn}
      onClick={() => alert('You clicked the button!')}
    >
      Button
    </Button>
  )
}
