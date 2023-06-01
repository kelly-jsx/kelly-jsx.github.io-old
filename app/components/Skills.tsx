import React from 'react'
import Title from './Title'

import { ImHtmlFive, ImCss3 } from 'react-icons/im'
import { FaJsSquare } from 'react-icons/fa'
import { BsGit, BsTerminalFill } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import {
  SiNpm,
  SiLinux,
  SiVim,
  SiVscodium,
  SiDocker,
  SiJquery,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiGatsby,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
} from 'react-icons/si'

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex justify-center w-full py-20 lg:py-28 bg-base"
    >
      <div className="flex flex-col items-center w-full px-4 text-center lg:px-32 gap-14 lg:gap-16">
        <Title classN="text-4xl lg:text-6xl lg:mb-0">Skills</Title>
        <div className="flex justify-around w-full gap-2">
          <div className="w-1/2">
            <Title>General</Title>
            <div className="grid gap-2">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <ImHtmlFive />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <ImCss3 />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <FaJsSquare />
              </a>
              <a
                href="https://git-scm.com/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <BsGit />
              </a>
              <a
                href="https://gihub.com/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.zsh.org/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <BsTerminalFill />
              </a>
              <a
                href="https://www.npmjs.com/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <SiNpm />
              </a>
              <a
                href="https://www.linux.org/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <SiLinux />
              </a>
              <a
                href="https://www.vim.org/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <SiVim />
              </a>
              <a
                href="https://vscodium.com/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <SiVscodium />
              </a>
              <a
                href="https://www.docker.com/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <SiDocker />
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <Title>Javascript & CSS</Title>
            <div className="grid gap-2">
              <a
                href="https://jquery.com/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <SiJquery />
              </a>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <SiTypescript />
              </a>
              <a
                href="https://react.dev/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <SiReact />
              </a>
              <a
                href="https://redux.js.org/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <SiRedux />
              </a>
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <SiNextdotjs />
              </a>
              <a
                href="https://www.gatsbyjs.com/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <SiGatsby />
              </a>
              <a
                href="https://sass-lang.com/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <SiSass />
              </a>
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <SiBootstrap />
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="text-2xl btn btn-secondary"
              >
                <SiTailwindcss />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
