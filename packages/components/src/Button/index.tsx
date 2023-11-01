import React from "react"
import createClassNamePrefix from "../internal/createClassNamePrefix"

const cls = createClassNamePrefix('Button')

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  shape?: 'rounded' | 'default'
}

export default function ({
  className,
  shape,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cls.raw(className, cls.getPrefix()).addPrefixed(shape || 'default')}
    />
  )
}
