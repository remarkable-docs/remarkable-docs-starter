---
slug: /components/Button
menu: Components
---

# Button

Buttons allow users to take actions with a single click.

## Usage

```yml --preview
import: ./index
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
