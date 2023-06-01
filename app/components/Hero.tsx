'use client'
import React from 'react'
import Title from './Title'
import Button from './Button'
import { TypeAnimation } from 'react-type-animation'

import { FiGithub } from 'react-icons/fi'
import { SiLinkedin } from 'react-icons/si'

export default function Hero() {
  return (
    <section className="flex items-center justify-center h-screen m-0 text-center bg-base">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:w-3/4 2xl:w-1/2 lg:justify-between lg:gap-4">
        <div className="flex flex-col lg:gap-4">
          <Title classN="text-4xl lg:text-6xl">Kelly-JSX</Title>
          <TypeAnimation
            sequence={[
              'React JS Developer',
              1000,
              'Front End Developer',
              1000,
              'JavaScript Developer',
              1000,
            ]}
            speed={50}
            className="font-lg lg:text-2xl"
            repeat={Infinity}
          />
        </div>
        <div className="grid grid-cols-3 gap-2 lg:gap-4">
          <Button link="#aboutme">about me</Button>
          <Button link="#skills">skills</Button>
          <Button link="#projects">projects</Button>
          <Button link="#contact">contact</Button>
          <a
            href="https://github.com/kelly-jsx"
            target="_blank"
            className="text-xl lowercase btn btn-outline btn-primary"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sebastian-b%C5%82och-165681264"
            target="_blank"
            className="text-xl lowercase btn btn-outline btn-primary"
          >
            <SiLinkedin />
          </a>
        </div>
      </div>
    </section>
  )
}
