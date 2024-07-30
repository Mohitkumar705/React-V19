import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const Statehooks = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(); // Initialize name with a default value of 0

  const handleButtonClick = () => {
    setCount(count + name); // Use the name state value
  };

  const handleButton = () => {
    setCount(count - name); // Use the name state value
  };

  const handleButtonReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>The Test of usestate in the React practices</h1>
      <h1>{count}</h1>
      <input
        type="number"
        value={name}
        onChange={(e) => setName(Number(e.target.value))}
        placeholder="Enter increment value"
      />
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={handleButtonClick} disabled = { count >= 100 }
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={handleButton} disabled = { count <= 0 }
      >
        Decrement
      </button>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={handleButtonReset} 
      >
        Reset
      </button>
    </>
  );
};

export default Statehooks;
