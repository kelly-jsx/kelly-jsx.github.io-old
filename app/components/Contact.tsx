'use client'

import React from 'react'
import { FormEvent, useState } from 'react'
import Title from './Title'

export default function Contact() {
  const [isSubmitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const webhookBody = {
      embeds: [
        {
          title: 'Contact Form Submitted',
          fields: [
            { name: 'Sender', value: name },
            { name: 'Email', value: email },
            { name: 'Message', value: message },
          ],
        },
      ],
    }

    const webhookUrl =
      'https://discordapp.com/api/webhooks/1125441703579488276/ISfxLsO872U8qszPhdzmtEx7eM35rmuOABXsuPSIA7Iw6ls30JpkKpFRbuR9dIczybwI'

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify(webhookBody),
        headers: {
          'content-type': 'application/json',
        },
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } catch (err: any) {
      console.error('Err', err)
    }
  }

  return (
    <section
      id="contact"
      className="flex justify-center py-20 lg:py-28 bg-base"
    >
      <div className="flex flex-col items-center w-full px-4 text-center lg:px-32 gap-14 lg:gap-16">
        <Title classN="text-4xl lg:text-6xl lg:mb-0">Contact</Title>
        {isSubmitted ? (
          <div>
            <h1 className="text-3xl font-semibold text-center ">
              Thank you for your message!
            </h1>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col w-2/4 gap-8">
            <div className="">
              <label className="font-semibold label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                className="w-full input input-bordered input-primary"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="font-semibold label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="w-full input input-bordered input-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label className="font-semibold label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="w-full textarea textarea-primary"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  )

  // return (
  //   <section
  //     id="contact"
  //     className="flex justify-center py-20 lg:py-28 bg-base"
  //   >
  //     {isSubmitted ? (
  //       <div>
  //         <h1 className="text-3xl font-semibold text-center ">
  //           Thank you for your message!
  //         </h1>
  //       </div>
  //     ) : (
  //       <form onSubmit={handleSubmit} className="flex flex-col gap-8">
  //         <div className="">
  //           <label className="font-semibold label">
  //             <span className="label-text">Full Name</span>
  //           </label>
  //           <input
  //             className="w-full input input-bordered input-primary"
  //             value={name}
  //             onChange={(e) => setName(e.target.value)}
  //             type="text"
  //             placeholder="John Doe"
  //           />
  //         </div>
  //         <div>
  //           <label className="font-semibold label">
  //             <span className="label-text">Email</span>
  //           </label>
  //           <input
  //             className="w-full input input-bordered input-primary"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //             type="email"
  //             placeholder="name@example.com"
  //           />
  //         </div>
  //         <div>
  //           <label className="font-semibold label">
  //             <span className="label-text">Message</span>
  //           </label>
  //           <textarea
  //             className="w-full textarea textarea-primary"
  //             value={message}
  //             onChange={(e) => setMessage(e.target.value)}
  //           ></textarea>
  //         </div>
  //         <button className="btn btn-primary" type="submit">
  //           Submit
  //         </button>
  //       </form>
  //     )}
  //   </section>
  // )
}
