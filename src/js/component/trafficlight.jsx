import React, {useState, useEffect} from "react";
import "../../styles/trafficlight.css";


const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [redOn, setRedOn] = useState(false);
    const [yellowOn, setYellowOn] = useState(false);
    const [greenOn, setGreenOn] = useState(false);
    const [purpleOn, setPurpleOn] = useState(false);

    const cycleLight = () => {

        setRedOn(!redOn);
        setTimeout(() => {
            setRedOn(false);
        }, 2000);

        setTimeout(() => {
            setYellowOn(!yellowOn);
            setTimeout(() => {
                setYellowOn(false);
            }, 2000);
        }, 2000);

        setTimeout(() => {
            setGreenOn(!greenOn);
            setTimeout(() => {
                setGreenOn(false);
            }, 2000);
        }, 4000);

        setTimeout(() => {
            setPurpleOn(!purpleOn);
            setTimeout(() => {
                setPurpleOn(false);
            }, 2000);
        }, 6000);
        
    }

    const [showDiv, setShowDiv] = useState(false);

    const handleButtonClick = () => {
      setShowDiv(true);
    };

    return <>
        <body>
            <div className= "container">

                <div>

                    <div className="palo">.</div>
                    <div className= "d-flex justify-content-center flex-column align-items-center boxWrap shadow">
                        <div className= {redOn == false? "red" : "red on"} onClick={(e) => { 
                            setRedOn(!redOn) 
                            setGreenOn(false)
                            setPurpleOn(false)
                            setYellowOn(false)
                        }}></div>
                        <div className= {!yellowOn ? "yellow" : "yellow on"} onClick={(e) => { 
                            setYellowOn(!yellowOn)
                            setRedOn(false) 
                            setGreenOn(false)
                            setPurpleOn(false)
                        }}></div>
                        <div className= {!greenOn ? "green" : "green on"} onClick={(e) => { 
                            setGreenOn(!greenOn)
                            setRedOn(false) 
                            setYellowOn(false)
                            setPurpleOn(false)
                        }}></div> {/*condicional ternario*/}
                        {showDiv && (
                            <div className= {!purpleOn ? "purple" : "purple on"} onClick={(e) => { 
                                setPurpleOn(!purpleOn)
                                setGreenOn(false)
                                setRedOn(false) 
                                setYellowOn(false)
                            }}></div>
                        )}
                    </div>

                </div>

                <div className="d-flex justify-content-center pt-3">
                    {redOn ? <h1>STOP!</h1> : <></>}
                    {yellowOn ? <h1>WAIT!</h1> : <></>}
                    {greenOn ? <h1>GO!</h1> : <></>}               
                </div>

                <div className="paper mt-4">
                    <div className="paper-content">
                        <div className="texto ms-3">Click the button to make the light cycle</div>
                        <button type="button" className="btn btn-primary my-2 buttonStyle" onClick={e => {cycleLight()}}>Cycle</button>
                        <div className="texto ms-3">Add an extra color!</div>
                        <button type="button" className="btn btn-primary my-2 buttonStyle" onClick={e => {handleButtonClick()}}>Color</button>
                    </div>
                </div>

            </div>
        </body>

    </>
}

export default TrafficLight