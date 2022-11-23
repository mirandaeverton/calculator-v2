import React from "react"

export default function NumberButton(props) {
    return(
        <button className={`Button Number ${props.zero ? "Zero": null}`}>{props.number}</button>
    )
}