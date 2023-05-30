import React from 'react'
import Title from './Title'
import Button from './Button'

import { FiGithub } from 'react-icons/fi'

export default function Header() {
  return (
    <div className="sticky top-0 flex items-center justify-between w-screen px-12 py-4 bg-crust">
      <div>
        <Title classN="text-4xl">Kelly-JSX</Title>
      </div>
      <div className="flex gap-4">
        <Button link="#aboutme">about me</Button>
        <Button link="#skills">skills</Button>
        <Button link="#projects">projects</Button>
        <Button link="#contact">contact</Button>
        <Button blank link="https://github.com/kelly-jsx">
          <FiGithub />
        </Button>
      </div>
    </div>
  )
}
