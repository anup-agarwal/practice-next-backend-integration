import Link from "next/link";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`)
  const data = (await response.json())

  return <ul>
    {data.map(({ id, title }) => <li key={id}>
      <Link href={`/posts/${id}`}>
        {title}
      </Link>
    </li>)}
  </ul>;
}
