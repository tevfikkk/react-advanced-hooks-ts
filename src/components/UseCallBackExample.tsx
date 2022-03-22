import React, { useState, useCallback } from 'react'

const UseCallBackExample: React.FC = () => {
  const [tasks, setTasks] = useState([])

  const addTask = useCallback((): any => {
    setTasks((prevState: string[]) => [...prevState, 'Some Task'])
  }, [setTasks])

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  )
}

const Button = React.memo(({ addTask }: any) => {
  console.log('Button rendered')
  return (
    <div>
      <button onClick={addTask}>Add Task</button>
    </div>
  )
})

export default UseCallBackExample
