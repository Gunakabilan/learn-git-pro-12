import React,{useState} from 'react'

const App = () => {
  const [num, setNum] = useState(1);
  let x=1;
    const handleAdd = ()=> {
      //x=x+1;
      //console.log("x",x)
      //setNum(10)
      setNum((currval) => {
        return currval +1
      })
    };
    console.log(num);

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}    

export default App