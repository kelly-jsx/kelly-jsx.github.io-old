import React from 'react'

type Props = {
  children: any
  link?: string
}

export default function Button({ children, link }: Props) {
  return (
    <a href={link} className="text-xl lowercase btn btn-outline btn-primary">
      {children}
    </a>
  )
}
