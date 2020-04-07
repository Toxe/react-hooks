import React, { useState } from "react";

export default function StateHookWithObject() {
    const [user, setUser] = useState({ name: "unknown", color: "red", language: "english" });

    return (
        <div style={style}>
            <div>
                <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                name: "{user.name}"
            </div>
            <div>
                <input type="text" value={user.color} onChange={(e) => setUser({ ...user, color: e.target.value })} />
                color: "{user.color}"
            </div>
            <div>
                <input type="text" value={user.language} onChange={(e) => setUser({ ...user, language: e.target.value })} />
                language: "{user.language}"
            </div>
        </div>
    );
}

const style = {
    background: "#eee",
    padding: "10px",
    margin: "10px",
};
