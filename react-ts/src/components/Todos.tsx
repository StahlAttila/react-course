import React from 'react'

const Todos: React.FC<{items: string[]}> = (props) => {
  return (
    <div>
      {props.items.map(item => <li key={item}>{item}</li>)}
    </div>
  )
}

export default Todos

