import seriesData from "../api/seriesData.json";
import SeriesData from "./SeriesData";

const Netfliex = () => {
  return (
    <ul className="grid grid-three--cols">
    {seriesData.map((curEle) => (
        <SeriesData key={curEle.id} data = {curEle}/>
    ))}
    </ul>
  )
}
export default Netfliex
