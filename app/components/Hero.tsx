'use client'
import React from 'react'
import Title from './Title'
import Button from './Button'
import LinkButton from './LinkButton'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section className="flex items-center justify-center w-screen h-screen text-center bg-base">
      <div className="flex flex-col gap-2">
        <Title />
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
          className="font-lg"
          repeat={Infinity}
        />
        <div className="flex gap-2">
          <Button title="about me" />
          <Button title="my projects" />
          <Button title="skills" />
          <Button title="contact" />
        </div>
      </div>
    </section>
  )
}
