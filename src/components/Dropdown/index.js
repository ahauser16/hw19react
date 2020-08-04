import React from "react"

export default function Dropdown(props) {
    return (
        <select onChange={e=>props.sortByOccupation(e.target.value)}>
            <option selected value="Supervisor">Supervisor</option>
            <option value="Driver">Driver</option>
            <option value="Security">Security</option>
            <option value="Clown">Clown</option>
            <option value="Accountant">Accountant</option>
            <option value="List">Full List</option>
        </select>

    )
}