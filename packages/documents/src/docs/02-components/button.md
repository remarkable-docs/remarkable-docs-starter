---
slug: /components/button
menu: Components
---

# Button

Buttons allow users to take actions with a single click.

## Usage

```tsx --preview --open
import '@remarkable-docs/example-ui/styles.css'
import { Button } from '@remarkable-docs/example-ui'

export default () => {
  return (
    <Button onClick={() => alert('You just clicked the button!')}>
      Button
    </Button>
  )
}
```

## Props

```yml --renderer=props
- name: className
  type: string
  desc: Specify the css class name.
- name: onClick
  type: '(e: MouseEvent) => void'
  desc: Specify the click event listener.
```
