import React from 'react'

const Page = async ({ params }) => {
  const { id } = params
  const response = await fetch(`/api/posts/${id}`)
  const data = await response.json()

  return data && (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}

export default Page