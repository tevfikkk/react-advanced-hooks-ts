import React, { useState, useEffect, useRef } from 'react'

const UserRefExample2: React.FC = () => {
  const [name, setName] = useState('')
  const renders = useRef(1)
  const prevName = useRef('')

  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name
  }, [name])

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input
        type='text'
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      />
    </div>
  )
}

export default UserRefExample2
