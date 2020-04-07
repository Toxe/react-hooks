import React, { Component } from "react";
import SimpleStateHooks from "./SimpleStateHooks";
import SimpleEffectHooks from "./SimpleEffectHooks";
import StateHookWithPreviousState from "./StateHookWithPreviousState";

export default class App extends Component {
    render() {
        return (
            <div>
                <SimpleStateHooks />
                <SimpleEffectHooks />
                <StateHookWithPreviousState />
            </div>
        );
    }
}
