import React, { FC } from 'react'
import useFetch from '../hooks/useFetch'

const CustomHookExample1: React.FC = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  return (
    <div>
      <h1>Custom Hook Example 1</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data &&
        data.map((post: any) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  )
}

export default CustomHookExample1
