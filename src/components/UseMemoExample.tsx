import React, { useState, useEffect, useRef, useMemo } from 'react'

const getSqrt = (n: number) => Math.sqrt(n)

const UseMemoExample: React.FC = () => {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  //const sqrt = getSqrt(number)
  const sqrt = useMemo(() => getSqrt(number), [number])

  const renders = useRef(1)

  useEffect(() => {
    renders.current = renders.current + 1
  })

  const onClick = (): void => {
    setInc(prevState => {
      console.log(prevState)
      return prevState + 1
    })
  }

  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e: any) => setNumber(e.target.value)}
      />

      <h2>
        The sqrt of {number} is {sqrt}
      </h2>
      <button onClick={onClick}>Re-render</button>
      <h3>Renders: {renders.current}</h3>
    </div>
  )
}

export default UseMemoExample
