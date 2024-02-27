import React from "react"
import {useState} from "react"






const TrafficLight = () => {

     const [lightOn, setLightOn] = useState("yellow")

    return(

    <div className="parent">
        <div className="base"></div>
            <div className="box">
                <div onClick={()=>{ setLightOn("red")}} 
                className={"light red " + (lightOn == "red" ? "redOn": "")}></div>

                <div onClick={()=>{ setLightOn("yellow")}}  
                className={"light yellow " + (lightOn == "yellow" ? "yellowOn": "")}></div>

                <div onClick={()=>{ setLightOn("green")}}  
                className={"light green " + (lightOn == "green" ? "greenOn": "")}></div>
            </div>
    </div>
    )
    

} 
export default TrafficLight;