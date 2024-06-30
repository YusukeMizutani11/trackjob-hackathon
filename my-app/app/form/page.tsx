"use client"
import React from 'react'
import { schema } from '../api/post/route'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

type FormType = z.infer<typeof schema>

const Page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormType>({ resolver: zodResolver(schema) })

  const onsubmit = async (formData: FormType) => {
    const response = await fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      console.log("success")
    } else {
      console.log("failed submission")
    }

    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label>Company</label>
          <input {...register("company")} />
          {errors.company && <p>{errors.company.message}</p>}
        </div>
        <div>
          <label>URL</label>
          <input {...register("url")} />
          {errors.url && <p>{errors.url.message}</p>}
        </div>
        <div>
          <label>Hiring</label>
          <input type="checkbox" {...register("hiring")} />
          {errors.hiring && <p>{errors.hiring.message}</p>}
        </div>
        <div>
          <label>Event Name</label>
          <input {...register("event_name")} />
          {errors.event_name && <p>{errors.event_name.message}</p>}
        </div>
        <div>
          <label>Event Detail</label>
          <input {...register("event_detail")} />
          {errors.event_detail && <p>{errors.event_detail.message}</p>}
        </div>
        <div>
          <label>Target Student</label>
          <input {...register("target_student")} />
          {errors.target_student && <p>{errors.target_student.message}</p>}
        </div>
        <div>
          <label>Recruit Begin</label>
          <input type="date" {...register("recruit_begin")} />
          {errors.recruit_begin && <p>{errors.recruit_begin.message}</p>}
        </div>
        <div>
          <label>Recruit End</label>
          <input type="date" {...register("recruit_end")} />
          {errors.recruit_end && <p>{errors.recruit_end.message}</p>}
        </div>
        <div>
          <label>Tech Stack</label>
          <input {...register("tech_stack")} />
          {errors.tech_stack && <p>{errors.tech_stack.message}</p>}
        </div>
        <div>
          <label>場所</label>
          <input {...register("remote")} />
          {errors.remote && <p>{errors.remote.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    
    </div>
  )
}

export default Page
