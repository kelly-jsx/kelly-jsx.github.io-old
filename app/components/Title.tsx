import React from 'react'

type Props = {
  children: string
  classN?: string
}

export default function Title({ children, classN }: Props) {
  return (
    <h1
      className={`${classN} font-bold text-pink`}
      style={{ fontFamily: 'Jetbrains Mono, monospace' }}
    >
      {children}
    </h1>
  )
}
