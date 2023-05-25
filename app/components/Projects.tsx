import React from 'react'
import Title from './Title'

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex justify-center px-5 py-20 lg:py-28 bg-mantle"
    >
      <div className="flex flex-col items-center text-center lg:w-2/4 lg:flex-row lg:justify-between lg:gap-40">
        <div>
          <Title classN="text-4xl lg:text-6xl mb-14 lg:mb-0">Projects</Title>
        </div>
        <div>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            aliquid cum ea necessitatibus fugiat, unde ipsum adipisci earum
            accusamus autem veritatis molestiae recusandae, laboriosam id.
            Perferendis molestias quisquam itaque error. Esse voluptatibus eum
            doloremque explicabo culpa consequuntur nulla unde nostrum, quos a
            dolore dolor odio cumque maiores magnam perferendis consequatur.
            Fugit neque omnis nihil reiciendis voluptatem quos sit nesciunt
            consequatur! Incidunt, dicta officiis pariatur repudiandae doloribus
            velit delectus aperiam facere illo itaque dolorem, voluptatum
            molestias est corporis dolores. Corrupti eveniet enim ea sapiente
            deserunt debitis nostrum voluptate laudantium iste dolore.
          </p>
        </div>
      </div>
    </section>
  )
}
