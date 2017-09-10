import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';

export default class Product extends Component {
  propTypes = {
    product: PropTypes.object,
    cart: PropTypes.array,
    addToCart: PropTypes.func,
    deleteCartItem: PropTypes.func,
  }

  render() {
    const { product, cart, addToCart, deleteCartItem } = this.props;

    return (
      <Card>
        <CardImg top width="100%" src={product.img} alt="Card image cap" />
        <CardBlock>
          <CardTitle>{product.title}</CardTitle>
          <CardSubtitle>
            <h4>
              {
                product.discount
                  ? <Badge color="danger">特價：{product.price}</Badge>
                  : <Badge color="success">售價：{product.price}</Badge>
              }
            </h4>
          </CardSubtitle>
          <CardText>{product.desc}</CardText>
          <Button
            disabled={cart.find(item => item.id === product.id)}
            onClick={() => addToCart(product)}
          >
            購買
          </Button>{' '}
          <Button
            hidden={!cart.find(item => item.id === product.id)}
            color="danger"
            onClick={() => deleteCartItem(product)}
          >
            取消
          </Button>
        </CardBlock>
      </Card>
    );
  }
}
