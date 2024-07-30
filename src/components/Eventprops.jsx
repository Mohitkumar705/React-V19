import 'bootstrap/dist/css/bootstrap.css';

const Eventprops = () => {
    const HandleWelcomeUser = (user) => {
        alert(`Welcome ${user}`);
    }
    const handleHover = () => {
        alert(`hey Thanks me hover`);
    }
  return (
    <>
      <WelcomeUser onClick={() => HandleWelcomeUser("Mohit")} onMouseEnter={handleHover}/>
    </>
  )
}

export default Eventprops

const WelcomeUser = (props) => {
    const {onClick, onMouseEnter} = props;
    const handleGreating = () => {
        console.log(`Hey Greating`);
        props.onClick();
    }
    return (
        <>
            <button type="button" className="btn btn-success" onClick={onClick}>Click me</button>
            <br />
            <button type="button" className="btn btn-outline-warning" onMouseEnter={onMouseEnter}>Hover me</button>
            <br />
            <button type="button" className="btn btn-outline-success" onClick={handleGreating}>Greatting</button>
            <br />
        </>
    )
}
