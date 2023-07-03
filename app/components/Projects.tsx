import React from 'react'
import Title from './Title'
import ProjectComp from './ProjectComp'
import projects from '../PROJECT_DATA.json'

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex justify-center py-20 lg:py-28 bg-mantle"
    >
      <div className="flex flex-col items-center px-4 text-center lg:px-32 gap-14 lg:gap-16">
        <Title classN="text-4xl lg:text-6xl lg:mb-0">Projects</Title>
        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"> */}
        <div className="grid gap-4 w-96 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
          {projects.map((project, index) => (
            <ProjectComp
              key={index}
              screenshot={project.screenshot}
              title={project.title}
              badges={project.badges}
              demo={project.demo}
              repository={project.repository}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
