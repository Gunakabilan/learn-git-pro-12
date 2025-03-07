import React from 'react'

const App = () => {
  let x=1;
    const handleAdd = ()=>{
      x=x+1;
      console.log("x")
    }

  return (
    <div>
      <h1>{x}</h1>
      <button>Add</button>
    </div>
  )
}

export default App