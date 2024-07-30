import { useState } from "react"


const Liftstate = () => {
    const [inputValue, setInputValue]= useState("");
  return (
    <>
      <InputComponents inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponents inputValue={inputValue}/>
    </>
  )
}

export default Liftstate


const InputComponents = ({inputValue, setInputValue}) => {
    return(
        <>
            <input type="text" placeholder="Enter the name" value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} ></input>
        </>
    )
}

const DisplayComponents = ({inputValue}) => {
    return(
        <>
            <p>The current input value is : {inputValue} </p>
        </>
    )
}