'use client'
import React from 'react'
import Title from './Title'

export default function AboutMe() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-20 text-center bg-mantle">
      <Title classN="mb-14">About me</Title>
      <p className="text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
        accusantium officiis ullam veritatis, dicta ratione eligendi ipsa.
        Numquam assumenda animi non consectetur rem, quos iusto quisquam! Ullam
        tempora consectetur dolor!
      </p>
    </section>
  )
}
