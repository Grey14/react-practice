import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

export default class Student extends Component {
  propTypes = {
    student: PropTypes.array
  }

  render() {
    const { student } = this.props;

    return (
      <Table>
        <thead>
          <tr>
            <th >#</th>
            <th >姓名</th>
            <th >身高</th>
            <th >體重</th>
            <th >BMI</th>
            <th >備註</th>
          </tr>
        </thead>
        <tbody>
          {
            student.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.Name}</td>
                <td>{item.Height}</td>
                <td>{item.Weight}</td>
                <td>{item.BMI}</td>
                <td>{item.Memo}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    );
  }
}
