import React from "react"
import prefixClass from "../internal/prefixClass"

export type Props = React.HTMLAttributes<HTMLButtonElement>

export default function ({
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={prefixClass.raw(className).addPrefixed('Button')}
    />
  )
}
