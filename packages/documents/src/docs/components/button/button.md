---
url: /components/button
menu: Components
---

# Button

The `<button>` HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs an action, such as submitting a form or opening a dialog.

By default, HTML buttons are presented in a style resembling the platform the user agent runs on, but you can change buttons' appearance with CSS.

```yml --preview --open
import: ./button
```

## Props

```yml --renderer=props --sort
- name: autofocus
  type: boolean
  desc: This Boolean attribute specifies that the button should have input focus when the page loads. Only one element in a document can have this attribute.
- name: children
  type: node
  desc: The content of the button.
- name: onClick
  type: '(event: MouseEvent) => void'
  desc: The `click` event listener.
- name: className
  type: string
  desc: A string representing the `class` of the button.
- name: disabled
  type: boolean
  desc: |
    This Boolean attribute prevents the user from interacting with the button: it cannot be pressed or focused.
- name: type
  type: |
    'submit' | 'reset' | 'button'
  desc: |
    The default behavior of the button. Possible values are:

    * `submit`: The button submits the form data to the server. This is the default if the attribute is not specified for buttons associated with a `<form>`, or if the attribute is an empty or invalid value.
    * `reset`: The button resets all the controls to their initial values, like `<input type="reset">`. (This behavior tends to annoy users.)
    * `button`: The button has no default behavior, and does nothing when pressed by default. It can have client-side scripts listen to the element's events, which are triggered when the events occur.
```
