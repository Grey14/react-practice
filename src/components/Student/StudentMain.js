import React, { Component } from 'react';
import {
  Input, Button
} from 'reactstrap';
import Student from './Student';
import StudentJosn from '../../data/Student.json';

export default class StudentMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [],
      tempStudent: StudentJosn,
      filterKey: ''
    };

    this.ShowFilter = this.ShowFilter.bind(this);
  }

  GetData = () => {
    this.setState({
      student: this.state.tempStudent
    });

  }

  Clear = () => {
    this.setState({
      student: [],
    });

  }

  // 一定要用bind 的樣子
  ShowFilter(event) {
    const filterKey = event.target.value;
    this.setState({
      filterKey,
      student: this.state.tempStudent.filter(row => Object.keys(row).some(key => String(row[key]).toLowerCase().indexOf(filterKey) > -1))
    });

  }

  render() {
    const { student } = this.state;

    return (
      <div className="card border-secondary">
        <div className="card-header">
          資料表
          </div>
        <div className="card-block">

          <Button onClick={() => this.GetData()} color="success">Get Data</Button>{' '}
          <Button onClick={() => this.Clear()}>Clear</Button>
          <hr />
          <Input type="text" value={this.state.filterKey} onChange={this.ShowFilter} placeholder="filter" />
          <Student student={student} />
        </div>
      </div >
    );
  }
}
