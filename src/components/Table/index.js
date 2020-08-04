import React from "react";
import Dropdown from "../Dropdown"


export default function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Occupation</th>
          <th>Location</th>
        </tr>
        <tr>
          <th role="button" onClick={() => props.sortBy('id')}>ID</th>
          <th>Name Button</th>
          <th>
            <Dropdown
              sortByOccupation={props.sortByOccupation}
            />
          </th>
          <th>Location Button</th>
        </tr>
      </thead>

      <tbody>
        {
          props.employees.map(row => (
            <tr key={row.id}>

              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.occupation}</td>
              <td>{row.location}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )


}
