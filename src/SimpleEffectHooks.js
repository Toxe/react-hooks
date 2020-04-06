import React, { useState, useEffect } from "react";

export default function SimpleEffectHooks() {
    const [clicks, setClicks] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        console.log("SimpleEffectHooks effect fired");
    });

    useEffect(() => {
        console.log("SimpleEffectHooks mounted");
        return () => {
            console.log("SimpleEffectHooks unmounted");
        };
    });

    if (!visible)
        return null;

    return (
        <div style={style}>
            <div>
                <em>Look at Console for effect log messages</em>
            </div>
            <div>
                <button onClick={() => setClicks(clicks + 1)}>Click ({clicks})</button>
                <button onClick={() => setVisible(false)}>Remove me</button>
            </div>
        </div>
    );
}

const style = {
    background: "#ddd",
    padding: "10px",
    margin: "10px",
};
