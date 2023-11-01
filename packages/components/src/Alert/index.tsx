import React from "react"
import { withClassNamePrefix } from 'with-classname-prefix'

const cls = withClassNamePrefix('myui')

export interface Props {
  className?: string
  children?: React.ReactNode;
}

export default function ({
  className,
  children
}: Props) {
  return (
    <div className={cls.raw(className).addPrefixed('Alert')}>
      {children}
    </div>
  )
}
