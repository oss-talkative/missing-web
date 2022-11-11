import React, {Component} from "react";
import './App.css';

import Table from './component/Table/Table'

const list = [
  {id: 1, name: "John Doe", Age: 28},
  {id: 2, name: "John Doe", Age: 45},
  {id: 3, name: "John Smith", Age: 32},
  {id: 4, name: "Pipi", Age: "22"},
]

const colNames = ['id', 'Name', 'Age']

class App extends Component {
  render() {
    return <div className="App">
      <Table list={list} colNames={colNames}/>
    </div>
  }
}

export default App;
