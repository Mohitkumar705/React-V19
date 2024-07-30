import { useState } from "react";

// // const Datas = [
//     {name : "Mohit Kumar" , age: 20},
//     {name : "Vikas Kumar" , age: 20},
//     {name : "Sandeep Kumar" , age: 40},
//     {name : "Jann Kumar" , age: 30},
//     {name : "Pooja Rani" , age: 20},
// ]
const Datahook = () => {
  const [data, setData] = useState([
    { name: "Mohit Kumar", age: 20 },
    { name: "Vikas Kumar", age: 20 },
    { name: "Sandeep Kumar", age: 40 },
    { name: "Jann Kumar", age: 30 },
    { name: "Pooja Rani", age: 20 },
  ]);

  const drived = data.length;
  console.log(drived);
  // const subdrive = ((curr, subcur) => subcur + data.curr)

  return (
    <>
      <h1 className=" text-center bg-red-500">There are five data list</h1>
      <ul className="text-center bg-green-500">
        {data.map((curEle, index) => {
          return (
            <li key={index}>
              {curEle.name} , {curEle.age} , year
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Datahook;
