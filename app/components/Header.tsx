import React from 'react'
import Title from './Title'
import Button from './Button'

import { FiGithub } from 'react-icons/fi'
import { SiLinkedin } from 'react-icons/si'

export default function Header() {
  return (
    <div className="sticky top-0 z-10 flex items-center w-screen px-4 py-4 lg:justify-between lg:px-12 bg-crust">
      <div className="lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 font-bold shadow menu menu-compact dropdown-content bg-base rounded-box w-52 text-primary"
          >
            <li>
              <a href="#aboutme">about me</a>
            </li>
            <li>
              <a href="#skills">skills</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/kelly-jsx">
                github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sebastian-b%C5%82och-165681264"
              >
                linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <a className="normal-case btn btn-ghost" href="#">
          <Title classN="text-2xl lg:text-4xl">Kelly-JSX</Title>
        </a>
      </div>
      <div className="hidden gap-4 lg:flex">
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
  )
}
