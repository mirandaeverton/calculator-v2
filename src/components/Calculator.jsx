import React, { useState } from "react"
import "./Calculator.css"

import Display from "./Display"
import Button from "./Button"

export default function Calculator() {

    const [previousValue, setPreviousValue] = useState("0")
    const [currentValue, setCurrentValue] = useState("0")
    const [operation, setOperation] = useState("")
    const [currentOperation, setCurrentOperation] = useState("")

    function handleClick(button) {
        const type = button.type
        const value = button.value

        operate[type](value)
    }

    const operate = {
        number: (number) => {
            if (currentValue === "0" || operation != "") {
                setCurrentOperation(operation)
                setOperation("")
                setCurrentValue(number)
            } else {
                setCurrentValue(prev => prev + number)
            }
        },
        operation: (operation) => {
            if (currentOperation != "") {
                const result = calculateResult()

                setCurrentValue(String(result))
                setPreviousValue(String(result))

                setOperation(_ => operation)
            } else {
                setPreviousValue(currentValue)
                setOperation(_ => operation)
            }
        },
        action: (action) => {
            switch (action) {
                case "CE":
                    actions[action]()
                    break
                case "C":
                    actions[action]()
                    break
                case "BKSP":
                    actions[action]()
                    break
                case "=":
                    actions[action]()
                    break
                default:
                    break
            }
        }
    }

    const actions = {
        "CE": () => {
            setCurrentOperation("")
            setOperation("")
            setCurrentValue("0")
            setPreviousValue("0")
        },
        "C": () => {
            setCurrentValue("0")
            setOperation(currentOperation)
        },
        "BKSP": () => {
            setCurrentValue(prev => prev.substring(0, prev.length - 1))
        },
        "=": () => {
            let result = "0"
            if (currentOperation != ""){
                result = calculateResult()
            } else {
                result = currentValue
            }
            setCurrentValue(String(result))
            setPreviousValue(String(result))
            setOperation(_ => "")
            setCurrentOperation(_ => "")
        }
    }

    const operations = {
        "/": (prev, curr) => prev / curr,
        "*": (prev, curr) => prev * curr,
        "-": (prev, curr) => prev - curr,
        "+": (prev, curr) => prev + curr,
    }

    function calculateResult() {
        const prevValue = Number(previousValue)
        const currValue = Number(currentValue)
        return operations[currentOperation](prevValue, currValue)
    }



    return (
        <div className="calculator">
            <Display currentValue={currentValue} />
            <div className="buttons-container">
                <Button value="CE" handleClick={handleClick} />
                <Button value="C" handleClick={handleClick} />
                <Button value="BKSP" handleClick={handleClick} />
                <Button value="/" handleClick={handleClick} />
                <Button value="7" handleClick={handleClick} />
                <Button value="8" handleClick={handleClick} />
                <Button value="9" handleClick={handleClick} />
                <Button value="*" handleClick={handleClick} />
                <Button value="4" handleClick={handleClick} />
                <Button value="5" handleClick={handleClick} />
                <Button value="6" handleClick={handleClick} />
                <Button value="-" handleClick={handleClick} />
                <Button value="1" handleClick={handleClick} />
                <Button value="2" handleClick={handleClick} />
                <Button value="3" handleClick={handleClick} />
                <Button value="+" handleClick={handleClick} />
                <Button value="0" handleClick={handleClick} />
                <Button value="." handleClick={handleClick} />
                <Button value="=" handleClick={handleClick} />
            </div>
        </div>
    )
}