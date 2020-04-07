import React, { useState } from "react";

export default function StateHookWithPreviousState() {
    const [counter, setCounter] = useState(0);

    const addFive = () => {
        for (let i = 0; i < 5; i++) {
            setCounter((prevCounter) => prevCounter + 1);
        }
    };

    return (
        <div style={style}>
            <div>Counter = {counter}</div>
            <div>
                <button onClick={addFive}>+5</button>
            </div>
        </div>
    );
}

const style = {
    background: "#eee",
    padding: "10px",
    margin: "10px",
};
