import React from 'react';
import { Link, IndexLink } from 'react-router';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           <br/>
//           <StudentInfo />
//         </p>
//       </div>
//     );
//   }
// }
const CustomNavLink = { color: 'white' };
const App = (props) => (
  <div>
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse bg-faded fixed-top">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand"><img src={logo} className="App-logo" alt="logo" /></a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active"><li><IndexLink style={CustomNavLink} to="/">Home</IndexLink></li></a>
          <a className="nav-item nav-link"><li><Link style={CustomNavLink} to="/product">Product</Link></li></a>
          <a className="nav-item nav-link"><li><Link style={CustomNavLink} to="/student">Student</Link></li></a>
          <a className="nav-item nav-link"><li><Link style={CustomNavLink} to="/charts">Chart</Link></li></a>
        </div>
      </div>
    </nav>
    <div className="App-intro">
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.object,
};

export default App;
