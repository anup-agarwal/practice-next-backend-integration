"use client";

import React, { useEffect, useState } from 'react'

const Page = ({ params }) => {
  const [data, setData] = useState(null)
  const { id } = React.use(params)

  useEffect(() => {
    async function fun() {
      const response = await fetch(`/api/posts/${id}`)
      const data = await response.json()
      setData(data)
    }
    fun()
  }, [id])

  return data && (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}

export default Page