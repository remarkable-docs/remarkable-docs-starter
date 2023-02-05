import React from "react"
import { withClassNamePrefix } from 'with-classname-prefix'

const cls = withClassNamePrefix('example-lib')

export interface AlertProps {
  className?: string
  children?: React.ReactNode | string;
}

export const Alert: React.FC<AlertProps> = ({
  className,
  children
}) => {
  return (
    <div className={cls.raw(className).addPrefixed('Alert')}>
      {children}
    </div>
  )
}
