---
slug: /get-started
menu: 使用说明
---

# 快速开始

## 安装依赖

```sh
npm i @remarkable-docs/example-ui
```

## 引入样式文件

在开始使用 UI 组件前，请确保已引入组件样式文件。请在项目入口文件中添加以下代码以引入组件样式：

```tsx
import '@remarkable-docs/example-ui/styles.css'
```

## 使用示例

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

您可以阅读组件文档以了解更多详情。
