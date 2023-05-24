'use client'
import React, { useState } from 'react'

type Props = {
  title: string
}

export default function Button({ title }: Props) {
  const [effect, setEffect] = useState(false)
  return (
    <button
      className={`${
        effect && 'animate-jump'
      } px-3 py-2 transition duration-500 border-2 rounded-lg border-pink text-pink hover:text-base hover:bg-pink`}
      onClick={() => setEffect(true)}
      onAnimationEnd={() => setEffect(false)}
    >
      {title}
    </button>
  )
}
