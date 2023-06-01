import React from 'react'
import Title from './Title'
import ProjectComp from './ProjectComp'

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex justify-center py-20 lg:py-28 bg-mantle"
    >
      <div className="flex flex-col items-center px-4 text-center lg:px-32 gap-14 lg:gap-16">
        <Title classN="text-4xl lg:text-6xl lg:mb-0">Projects</Title>
        <div className="grid">
          <ProjectComp />
        </div>
      </div>
    </section>
  )
}
