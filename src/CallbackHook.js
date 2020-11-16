import React, { useState, useCallback, useEffect } from "react";

export default function CallbackHook() {
    const [valueA, setValueA] = useState(10);
    const [valueB, setValueB] = useState(10);
    const [timestamp, setTimestamp] = useState(new Date().toLocaleTimeString());

    const calc = useCallback(() => {
        console.log(`CallbackHook: called calc(), A=${valueA}, B=${valueB}`);
        return valueA + valueB;
    }, [valueA, valueB]);

    const handleUpdate = () => {
        console.log("=================================");
        console.log("this should not call calc()");
        setTimestamp(new Date().toLocaleTimeString());
    };

    return (
        <div style={div1}>
            <h1>CallbackHook</h1>
            <div style={div2}>
                <Value name="A" value={valueA} handleUpdate={setValueA} />
                <Value name="B" value={valueB} handleUpdate={setValueB} />
                <Calc calc={calc} />
            </div>
            <button style={button} type="button" onClick={handleUpdate}>
                update timestamp (last update: {timestamp})
            </button>
        </div>
    );
}

function Value({ name, value, handleUpdate }) {
    const handleClick = (newValue) => {
        console.log(".................................");
        handleUpdate(newValue);
    };

    return (
        <div>
            <button style={button} type="button" onClick={() => handleClick(value - 1)}>
                -
            </button>
            <button style={button} type="button" onClick={() => handleClick(value + 1)}>
                +
            </button>
            {name} = {value}
        </div>
    );
}

function Calc({ calc }) {
    const [sum, setSum] = useState("?");
    const [timestamp, setTimestamp] = useState("--:--:--");

    const recalculateSum = useCallback(() => {
        console.log("CallbackHook: Calc --> recalculate sum");
        setSum(calc());
        setTimestamp(new Date().toLocaleTimeString());
    }, [calc]);

    const handleRecalculate = () => {
        console.log("---------------------------------");
        recalculateSum();
    };

    useEffect(() => {
        recalculateSum();
    }, [recalculateSum]);

    return (
        <div>
            <button style={button} type="button" onClick={handleRecalculate}>
                recalculate
            </button>
            A + B = {sum} (last update: {timestamp})
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
