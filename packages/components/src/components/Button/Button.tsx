import React from "react"
import { withClassNamePrefix } from 'with-classname-prefix'

const cls = withClassNamePrefix('example-lib')

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cls.raw(className).addPrefixed('Button')}
    />
  )
}
