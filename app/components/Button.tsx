import React from 'react'

type Props = {
  children: any
  link?: string
  blank?: boolean
}

export default function Button({ children, link, blank }: Props) {
  return (
    <a
      href={link}
      target={`${blank && '_blank'}`}
      className="text-xl lowercase btn btn-outline btn-primary"
    >
      {children}
    </a>
  )
}
