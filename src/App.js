import React, { Component } from "react";
import SimpleStateHooks from "./SimpleStateHooks";
import SimpleEffectHooks from "./SimpleEffectHooks";

export default class App extends Component {
    render() {
        return (
            <div>
                <SimpleStateHooks />
                <SimpleEffectHooks />
            </div>
        );
    }
}
