import React from "react"
import createClassNamePrefix from "../internal/createClassNamePrefix";

const cls = createClassNamePrefix('Alert')

export interface Props {
  className?: string
  children?: React.ReactNode;
}

export default function ({
  className,
  children
}: Props) {
  return (
    <div className={cls.raw(className).root().toString()}>
      {children}
    </div>
  )
}
