import React from "react"
import { withClassNamePrefix } from 'with-classname-prefix'

const cls = withClassNamePrefix('myui')

export type Props = React.HTMLAttributes<HTMLButtonElement>

export default function ({
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cls.raw(className).addPrefixed('Button')}
    />
  )
}
