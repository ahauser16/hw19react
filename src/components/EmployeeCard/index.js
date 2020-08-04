import React from "react";
import "./style.css";


function EmployeeCard(props) { // or Table
    return (


        //================OLD ACTIVITY
        <div className="card">

            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>ID:</strong> {props.id}
                    </li>
                    <li>
                        <strong>Occupation:</strong> {props.occupation}
                    </li>
                    <li>
                        <strong>Location:</strong> {props.location}
                    </li>
                </ul>
            </div>

            {/* 
          <span onClick={() => props.removeFriend(props.id)} className="remove">
            𝘅
          </span> */}

        </div>
    );
}

export default EmployeeCard;
