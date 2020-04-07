import React, { useState } from "react";

export default function SimpleStateHooks() {
    const [counter, setCounter] = useState(10);
    const [name, setName] = useState("Test");

    return (
        <div style={style}>
            <h1>SimpleStateHooks</h1>
            <div>Counter = {counter}</div>
            <div>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            <div>
                <div>Name = {name}</div>
                <div>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
        </div>
    );
}

const style = {
    background: "#eee",
    padding: "10px",
    margin: "10px",
};
