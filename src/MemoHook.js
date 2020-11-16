import React, { useState, useMemo } from "react";

export default function MemoHook() {
    const [valueA, setValueA] = useState(10);
    const [valueB, setValueB] = useState(10);
    const [timestamp, setTimestamp] = useState(new Date().toLocaleTimeString());

    const handleUpdateTimestamp = () => {
        console.log("=================================");
        console.log("this should not recalculate sum");
        setTimestamp(new Date().toLocaleTimeString());
    };

    const sum = useMemo(() => {
        console.log(`MemoHook: recalculate sum, A=${valueA}, B=${valueB}`);
        return valueA + valueB;
    }, [valueA, valueB]);

    return (
        <div style={div1}>
            <h1>MemoHook</h1>
            <div style={div2}>
                <Value name="A" value={valueA} handleUpdateValue={setValueA} />
                <Value name="B" value={valueB} handleUpdateValue={setValueB} />
                <div>A + B = {sum}</div>
            </div>
            <button style={button} type="button" onClick={handleUpdateTimestamp}>
                update timestamp (last update: {timestamp})
            </button>
        </div>
    );
}

function Value({ name, value, handleUpdateValue }) {
    return (
        <div>
            <button style={button} type="button" onClick={() => handleUpdateValue(value - 1)}>
                -
            </button>
            <button style={button} type="button" onClick={() => handleUpdateValue(value + 1)}>
                +
            </button>
            {name} = {value}
        </div>
    );
}

const div1 = {
    background: "lemonchiffon",
    padding: "10px",
    margin: "10px",
};

const div2 = {
    background: "blanchedalmond",
    padding: "10px",
};

const button = {
    margin: "2px 5px 2px 0px",
};
