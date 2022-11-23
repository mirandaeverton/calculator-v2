import React from "react"
import "./Calculator.css"

import Display from "./Display"
import NumberButton from "./NumberButton"
import OperationButton from "./OperationButton"

export default function Calculator() {
    return (
        <div className="Calculator">
            <Display />
            <div className="ButtonsContainer">
                <OperationButton operation="CE" />
                <OperationButton operation="C" />
                <OperationButton operation="<" />
                <OperationButton operation="/" />
                <NumberButton number="7" />
                <NumberButton number="8" />
                <NumberButton number="9" />
                <OperationButton operation="*" />
                <NumberButton number="4" />
                <NumberButton number="5" />
                <NumberButton number="6" />
                <OperationButton operation="-" />
                <NumberButton number="1" />
                <NumberButton number="2" />
                <NumberButton number="3" />
                <OperationButton operation="+" />
                <NumberButton number="0" zero={true}/>
                <NumberButton number="." />
                <OperationButton operation="=" />
            </div>
        </div>
    )
}