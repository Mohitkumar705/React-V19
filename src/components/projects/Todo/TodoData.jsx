import { useEffect, useState } from "react";

const TodoData = () => {
  const [setDate, setDateTime] = useState("");

  //Todo Date and Time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatteDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formatteDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2 className="date-time">{setDate}</h2>
    </>
  );
};

export default TodoData;
