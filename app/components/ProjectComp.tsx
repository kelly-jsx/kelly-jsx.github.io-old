import React from 'react'

import { FiGithub } from 'react-icons/fi'

type Props = {
  screenshot: string
  title: string
  badges: string[]
  demo: string
  repository: string
}

export default function ProjectComp({
  screenshot,
  title,
  badges,
  demo,
  repository,
}: Props) {
  return (
    <div className="w-auto shadow-xl card card-compact bg-base-100">
      <figure>
        <img src={screenshot} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex gap-3">
          {badges.map((badge, index) => (
            <div className="badge badge-outline" key={index}>
              {badge}
            </div>
          ))}
        </div>
        <div className="justify-end card-actions">
          <a className="btn btn-primary" target="_blank" href={demo}>
            demo
          </a>
          <a
            className="text-xl btn btn-primary"
            target="_blank"
            href={repository}
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </div>
  )
}
