import React from "react"
import prefixClass from "../internal/prefixClass";

export interface Props {
  className?: string
  children?: React.ReactNode;
}

export default function ({
  className,
  children
}: Props) {
  return (
    <div className={prefixClass.raw(className).addPrefixed('Alert')}>
      {children}
    </div>
  )
}
