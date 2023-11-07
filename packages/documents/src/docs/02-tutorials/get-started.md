---
slug: /get-started
menu: Tutorials
---

# Get started

## Installation

```sh
npm i @remarkable-docs/example-ui
```

## Import styles

Before start using the ui components, please make sure you have the styles imported. Add the following import statement to your entry script.

```tsx
import '@remarkable-docs/example-ui/styles.css'
```

## Usage

```tsx
import React from 'react'
import { Button } from '@remarkable-docs/example-ui'

export default function App() {
  return (
    <Button onClick={() => alert('You just clicked the button!')}>
      Button
    </Button>
  )
}
```

You can read the documents for the components for more details.
