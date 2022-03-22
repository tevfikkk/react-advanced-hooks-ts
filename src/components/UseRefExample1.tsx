import React, { useRef } from 'react'

const UseRefExample1: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const paraRef = useRef<HTMLParagraphElement>(null)

  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log(inputRef?.current?.value)
    inputRef.current.value = 'Hellow'
    inputRef.current.style.backgroundColor = 'red'
    paraRef.current.innerText = 'Goodbye'
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' ref={inputRef} className='form-control mb-2' />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}></p>
      </form>
    </div>
  )
}

export default UseRefExample1
