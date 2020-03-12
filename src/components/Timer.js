import React, {Fragment} from 'react';
import {Timer} from 'react-compound-timer';
var reactCompoundTimer = require("react-compound-timer")

function TimerStart(){
    return(
        <Timer
        initialTime={55000}
    >
        {({ start, resume, pause, stop, reset, timerState }) => (
            <Fragment>
                <div>
                    <Timer.Days /> days
                    <Timer.Hours /> hours
                    <Timer.Minutes /> minutes
                    <Timer.Seconds /> seconds
                    <Timer.Milliseconds /> milliseconds
                </div>
                <div>{timerState}</div>
                <br />
                <div>
                    <button onClick={start}>Start</button>
                    <button onClick={pause}>Pause</button>
                    <button onClick={resume}>Resume</button>
                    <button onClick={stop}>Stop</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </Fragment>
        )}
    </Timer>
    )
}

export default TimerStart;
