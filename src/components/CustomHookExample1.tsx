import React from 'react'
import useFetch from '../hooks/useFetch'

const CustomHookExample1: React.FC = (): any => {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  )

  loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      {data && data.map((post: any) => <h3 key={post.id}>{post.title}</h3>)}
    </div>
  )
}

export default CustomHookExample1
