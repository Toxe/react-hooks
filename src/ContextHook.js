import React, { useState, useContext } from "react";

export const NameContext = React.createContext();
export const CountContext = React.createContext();

export default function ContextHook() {
    const [name, setName] = useState("unknown");
    const [count, setCount] = useState(10);

    return (
        <NameContext.Provider value={{ name, setName }}>
            <CountContext.Provider value={{ count, setCount }}>
                <div style={style}>
                    <h1>ContextHook</h1>
                    <div>
                        <div>name: {name}</div>
                        <div>count: {count}</div>
                        <ChildA />
                    </div>
                </div>
            </CountContext.Provider>
        </NameContext.Provider>
    );
}

function ChildA() {
    return (
        <div style={childStyleA}>
            <ChildB />
        </div>
    );
}

function ChildB() {
    return (
        <div style={childStyleB}>
            <ChildC />
        </div>
    );
}

function ChildC() {
    const { name, setName } = useContext(NameContext);
    const { count, setCount } = useContext(CountContext);

    return (
        <div style={childStyleC}>
            <div>name: {name}</div>
            <div>count: {count}</div>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <button onClick={() => setCount(count + 1)}>count + 1</button>
            </div>
        </div>
    );
}

const style = {
    background: "#eee",
    padding: "10px",
    margin: "10px",
};

const childStyleA = {
    background: "#ddd",
    padding: "10px 10px 5px 10px",
};

const childStyleB = {
    background: "#ccc",
    padding: "10px 10px 5px 10px",
};

const childStyleC = {
    background: "#bbb",
    padding: "10px 10px 5px 10px",
};
