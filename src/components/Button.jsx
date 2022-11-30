import React from "react"

export default function Button(props) {

    const operations = ["+", "-", "*", "/"]
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."]
    const actions = ["CE", "C", "BKSP", "="]

    const value = props.value
    const isButtonZero = value === "0" ? "zero" : null

    let type

    if (operations.includes(value)) {
        type = "operation"
    }
    if (numbers.includes(value)) {
        type = "number"
    }
    if (actions.includes(value)) {
        type = "action"
    }


    return (
        <button
            className={`button ${type} ${isButtonZero}`}
            onClick={_ => props.handleClick({ type, value })}
        >
            {value}
        </button>
    )
}