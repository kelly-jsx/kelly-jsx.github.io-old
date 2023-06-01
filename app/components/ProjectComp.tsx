import React from 'react'

import { FiGithub } from 'react-icons/fi'

export default function ProjectComp() {
  return (
    <div className="shadow-xl card card-compact w-96 bg-base-100">
      <figure>
        <img
          src="https://raw.githubusercontent.com/kelly-jsx/rock-paper-scissors/main/screenshot.png"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Rock Papers Scissors Game</h2>
        <div className="flex gap-3">
          <div className="badge badge-outline">React JS</div>
        </div>
        <div className="justify-end card-actions">
          <a
            className="btn btn-primary"
            target="_blank"
            href="https://glowing-meringue-074ec1.netlify.app/"
          >
            demo
          </a>
          <a
            className="text-xl btn btn-primary"
            target="_blank"
            href="https://github.com/kelly-jsx/rock-paper-scissors"
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </div>
  )
}
