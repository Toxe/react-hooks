import React, { Component } from "react";
import SimpleStateHooks from "./SimpleStateHooks";
import SimpleEffectHooks from "./SimpleEffectHooks";
import StateHookWithPreviousState from "./StateHookWithPreviousState";
import StateHookWithObject from "./StateHookWithObject";
import ConditionalEffects from "./ConditionalEffects";

export default class App extends Component {
    render() {
        return (
            <div>
                <SimpleStateHooks />
                <SimpleEffectHooks />
                <StateHookWithPreviousState />
                <StateHookWithObject />
                <ConditionalEffects />
            </div>
        );
    }
}
