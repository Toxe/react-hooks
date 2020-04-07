import React, { useState, useEffect } from "react";

export default function ConditionalEffects() {
    const [clockVisible, setClockVisible] = useState(false);

    return (
        <div style={style}>
            <div>
                <button onClick={() => setClockVisible(!clockVisible)}>Toggle Clock</button>
            </div>
            {clockVisible && <Clock />}
        </div>
    );
}

function Clock() {
    const [clicks, setClicks] = useState(0);
    const [time, setTime] = useState("--:--:--");

    const handleClick = () => {
        console.log("Clock: button clicked --> update 'clicks' and 'time'");
        setClicks(clicks + 1);
        updateClock();
    };

    const updateClock = () => {
        console.log("Clock: update 'time'");
        const date = new Date();
        setTime(date.toLocaleTimeString());
    };

    useEffect(() => {
        console.log("Clock effect: update always");
    });

    useEffect(() => {
        console.log("Clock effect: update only after 'time' has changed");
    }, [time]);

    useEffect(() => {
        console.log("Clock effect: setup timer (only once)");
        const interval = setInterval(updateClock, 5000);
        return () => {
            console.log("Clock effect: remove timer (only once)");
            clearInterval(interval);
        };
    }, []);

    return (
        <div style={styleClock}>
            <div>Time (automatically updates every 5 seconds): {time}</div>
            <div>
                <button onClick={handleClick}>Update time now (clicked: {clicks} times)</button>
            </div>
        </div>
    );
}

const style = {
    background: "#eee",
    padding: "10px",
    margin: "10px",
};

const styleClock = {
    background: "#ddd",
    padding: "10px",
    margin: "10px",
};
