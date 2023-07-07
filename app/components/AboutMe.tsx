import React from 'react'
import Title from './Title'

export default function AboutMe() {
  return (
    <section
      id="aboutme"
      className="flex justify-center py-20 lg:py-28 bg-mantle"
    >
      <div className="flex flex-col items-center w-3/4 px-4 text-center lg:px-32 gap-14 lg:gap-16">
        <Title classN="text-4xl lg:text-6xl lg:mb-0">About me</Title>
        <p className="text-justify">
          Hello there! I'm Kelly, and I am a passionate front-end developer
          specializing in creating interactive and responsive websites. <br />
          <br />
          While my professional experience may still be limited, I am brimming
          with enthusiasm and a strong desire to expand my skills in this field.{' '}
          <br />
          <br />
          My primary focus lies in technologies such as React, Next.js, and
          TypeScript. I thoroughly enjoy building scalable and modular solutions
          that make code management a breeze while facilitating the development
          of robust applications. When it comes to styling, I frequently employ
          Tailwind CSS, as it empowers me to create visually stunning and highly
          adaptable interfaces. <br />
          <br />
          Being an avid Linux user and a proponent of Free and Open Source
          Software, I draw inspiration from the Linux community and actively
          engage with open-source projects. During my leisure time, I indulge in
          philosophical pursuits, anime, manga, and stay abreast of the latest
          developments in the Linux ecosystem. These interests play a
          significant role in shaping my design approach and creative
          problem-solving skills.
          <br />
          <br />
          My motivation as a front-end developer stems from my unwavering
          commitment to continuous growth and delivering exceptional user
          experiences. In the long run, my goal is to become a well-rounded
          expert in front-end development, spearheading the creation of
          innovative and impactful web applications.
          <br />
          <br />
          Feel free to explore my projects and portfolio, which can be found in
          the designated section. If you have any questions or would like to
          discuss potential collaborations, I would be thrilled to connect with
          you.
        </p>
      </div>
    </section>
  )
}
