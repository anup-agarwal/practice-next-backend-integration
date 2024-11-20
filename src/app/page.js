"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fun = async () => {
      const data = await fetch("/api/posts")
      setData(await data.json())
    }
    fun()
  }, [])

  return <ul>
    {data.map(({ id, title }) => <li key={id}>{title}</li>)}
  </ul>;
}
