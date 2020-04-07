import React, { useState, useEffect } from "react";

export default function CustomHook() {
    const [clockVisible, setClockVisible] = useState(false);

    return (
        <div style={style}>
            <h1>CustomHook</h1>
            <div>
                <button onClick={() => setClockVisible(!clockVisible)}>Toggle Clock</button>
            </div>
            {clockVisible && <Clock />}
        </div>
    );
}

function Clock() {
    const time = useTimer();

    return (
        <div style={styleClock}>
            <div>Time: {time}</div>
        </div>
    );
}

function useTimer() {
    const currentTime = () => {
        return new Date().toLocaleTimeString();
    };

    const [time, setTime] = useState(currentTime());

    useEffect(() => {
        const interval = setInterval(() => setTime(currentTime()), 1000);
        return () => clearInterval(interval);
    }, []);

    return time;
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
