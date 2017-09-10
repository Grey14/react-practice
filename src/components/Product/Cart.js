import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'reactstrap';

export default class Cart extends Component {
   propTypes = {
    cart: PropTypes.array,
    deleteCartItem: PropTypes.func,
  }

  render() {
    const { cart, deleteCartItem } = this.props;

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>品項</th>
              <th>價格</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  {/* <td><Button color="danger" onClick={() => deleteCartItem(index)}>X</Button>{' '}</td> */}
                  <td><Button color="danger" onClick={() => deleteCartItem(item)}>X</Button>{' '}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    );
  }
}
