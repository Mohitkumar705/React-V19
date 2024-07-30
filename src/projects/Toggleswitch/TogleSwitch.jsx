import { useState } from "react"
import "./togleSwitch.css";
import { IoIosWifi } from "react-icons/io";


const TogleSwitch = () => {
    const [isOn, setIsOn] = useState(false)

    const handleToggleSwitch = () => {
        setIsOn(!isOn)
    }
    const condition = isOn ?  "on" : "off";
    const st = {backgroundColor: isOn ?  "#4caf50" :""}


  return (
    <>
    <h1 className={{color: "bg-green-400"}}>Toggle button </h1> <IoIosWifi/>
    <div className="toggle-switch" style={st} onClick={handleToggleSwitch}>
        <div className={`switch ${condition}`}>
            <span className="switch-state" >{condition}</span>
        </div>
    </div>
    </>
  )
}

export default TogleSwitch
