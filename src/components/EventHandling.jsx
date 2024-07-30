

const EventHandling = () => {
    // function handleButtanClick() {
    //     alert("Jai Mata Di");
    // }

    const handleButtanClick = () => {
        alert("Jai Mata Di");
    }
    const hanndlewel = (user) => {
        console.log(`Heyy ${user}, welocme`);
    }

  return (
    <>
      <button onClick={handleButtanClick}>click me</button>
      <br />

      <button onClick={(event) => console.log(event)}>Inline Function</button>
      <br />
      <button onClick={() => alert("Hii i am Mohit Kumar")}>Inline Arrow function</button>
      <br />
      <button onClick={() => hanndlewel("Mohit Kumar")}>click me</button>
    </>
  )
}

export default EventHandling
