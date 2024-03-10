import { Key } from "react"
const Tasks = ( props:{tasks: any}) => {
    
  return (
    <div>
      {props.tasks.map((e: string, idx: Key | null | undefined) => <li key={idx}>{e}</li>)}
    </div>
  )
}

export default Tasks
// get each index for tasks