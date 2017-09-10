// 引用react 元件
import React from 'react';
import { Button } from 'reactstrap'; // 因為export沒有default 所以要大誇號
import '../../css/practice.css';

// 繼承react compoent
// 還要export
export default class Hello extends React.Component {
  state = {
    count: 1,
  };
  addCount = () => {
    this.setState({ // 註冊事件?
      count: this.state.count += 1,
    });
  }
  divStyle = {
    color: 'blue'
  };
  render() {
    return (
      <div className="content">
        <h1>{this.state.count}</h1>
        <button onClick={this.addCount} >Click Me</button>
        <Button onClick={() => { alert('hi'); }} className="practice" >Hello</Button>
        <Button color="danger">danger</Button>
      </div>
    );
  }
}
