import { useEffect, useState } from "react";
import "./index.css";

const Chalange = () => {
   const [count , setCount] = useState(0)
   const [name, setName] = useState();

   useEffect(() => {
    document.title = `count : ${count}`; // Title ko Change krna ka liiya use kiya ha ya useeffect
   }, [count])

   useEffect(() => {
    console.log(name);
   },[name])

  return (
    <>
      <div className="container effect-container">
        <h1>useEffect Challenge</h1>
        <p>
          Count: <span> {count} </span>
        </p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>
          Name: <span> {name} </span>
        </p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </>
  );
};

export default Chalange;
