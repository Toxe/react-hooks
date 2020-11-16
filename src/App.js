import React, { Component } from "react";
import SimpleStateHooks from "./SimpleStateHooks";
import SimpleEffectHooks from "./SimpleEffectHooks";
import StateHookWithPreviousState from "./StateHookWithPreviousState";
import StateHookWithObject from "./StateHookWithObject";
import ConditionalEffects from "./ConditionalEffects";
import ContextHook from "./ContextHook";
import CustomHook from "./CustomHook";
import CallbackHook from "./CallbackHook";
import MemoHook from "./MemoHook";

export default class App extends Component {
    render() {
        return (
            <div>
                <SimpleStateHooks />
                <SimpleEffectHooks />
                <StateHookWithPreviousState />
                <StateHookWithObject />
                <ConditionalEffects />
                <ContextHook />
                <CustomHook />
                <CallbackHook />
                <MemoHook />
            </div>
        );
    }
}
