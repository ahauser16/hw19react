import React from 'react';
// import EmployeeCard from "./components/EmployeeCard";
// import Wrapper from "./components/Wrapper";
import employees from './employees.json';

import Table from './components/Table';

import './App.css';

class App extends React.Component {
  state = {
    employees,
    direction: false,
    filtereddata: employees
  }

  sortByOccupation = (occupation) => {
    if (occupation==="List"){
      return this.fullList();
    }
    const filtereddata = this.state.employees.filter(employee => employee.occupation === occupation);
    this.setState({ filtereddata });
  }

  fullList = () => {
    this.setState({ filtereddata: this.state.employees });
  }

  sortBy = (key) => {
    const employees = this.state.direction ?
      this.state.employees.sort((a, b) => a[key] - b[key]) :
      this.state.employees.sort((a, b) => b[key] - a[key]);
    this.setState({ employees, direction: !this.state.direction });
  }

  render() {
    return (
      <div
        className="page-container"
      >
        <Table
          employees={this.state.filtereddata}
          sortBy={this.sortBy}
          sortByOccupation={this.sortByOccupation}
        />
      </div>
    )
  }
}

export default App


















//=============THIS CODE BELOW WORKS==================
// class App extends Component {

  //the state is the table and the table is the state so here we would want to return <Table /> which contains the state, handleInputChange, handleFormSubmit & render

  //pass the json...pass employees to the employee card which has the props data for employee. then do a map that creates a table row/data.
  //import in the card.




  // state =
  //   {
  //     employees
  //   };

  // render() {
  //   return (
  //     <Wrapper>
  //       {this.state.employees.map(employee => (
  //         <EmployeeCard // or Table
  //           // removeFriend={this.removeFriend}

  //           id={employee.id}
  //           name={employee.name}
  //           occupation={employee.occupation}
  //           location={employee.location}
  //         />
  //       ))}
  //     </Wrapper>
  //   );
  // }
//=============THIS CODE ABOVE WORKS==================


// }

// export default App;
