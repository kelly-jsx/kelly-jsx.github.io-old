import React from 'react'
import Title from './Title'
import Button from './Button'
import LinkButton from './LinkButton'

export default function Hero() {
  return (
    <section className="w-screen h-screen bg-base">
      <Title />
      <p>React JS developer</p>
      {/* <p>Front end developer</p> */}
      <Button title="about me" />
      <LinkButton title="about me" />
    </section>
  )
}
