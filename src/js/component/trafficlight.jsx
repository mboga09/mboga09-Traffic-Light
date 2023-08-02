import React, {useState, useEffect} from "react";
import "../../styles/trafficlight.css";

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [redOn, setRedOn] = useState(false);
    const [yellowOn, setYellowOn] = useState(false);
    const [greenOn, setGreenOn] = useState(false);

    return <>
        <body>
            <div className= "container">

                <div>

                    <div className="palo">.</div>
                    <div className= "d-flex justify-content-center flex-column align-items-center box shadow">
                        <div className= {redOn == false? "red" : "red on"} onClick={(e) => { 
                            setRedOn(!redOn) 
                            setGreenOn(false)
                            setYellowOn(false)
                        }}></div>
                        <div className= {!yellowOn ? "yellow" : "yellow on"} onClick={(e) => { 
                            setYellowOn(!yellowOn)
                            setRedOn(false) 
                            setGreenOn(false)
                        }}></div>
                        <div className= {!greenOn ? "green" : "green on"} onClick={(e) => { 
                            setGreenOn(!greenOn)
                            setRedOn(false) 
                            setYellowOn(false)
                        }}></div> {/*condicional ternario*/}
                    </div>

                </div>

                <div className="d-flex justify-content-center pt-3">
                    {redOn ? <h1>STOP!</h1> : <></>}
                    {yellowOn ? <h1>WAIT!</h1> : <></>}
                    {greenOn ? <h1>GO!</h1> : <></>}                
                </div>

                <div class="paper mt-4">
                    <div class="paper-content">
                        <div className="texto ms-3">Click the button to make the light cycle</div>
                        <button type="button" class="btn btn-primary my-2 buttonStyle">Cycle</button>
                        <div className="texto ms-3">Add an extra color!</div>
                        <button type="button" class="btn btn-primary my-2 buttonStyle">Color</button>
                    </div>
                </div>

            </div>
        </body>

    </>
}

export default TrafficLight