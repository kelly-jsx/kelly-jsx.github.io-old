import React from 'react'

type Props = {
  children: string
  classN?: string
}

export default function title({ children, classN }: Props) {
  return (
    <h1
      className={`${classN} text-4xl font-bold lg:text-6xl text-pink title`}
      style={{ fontFamily: 'Jetbrains Mono, monospace' }}
    >
      {children}
    </h1>
  )
}
