import React, { Component } from 'react';
import {
  Container, Row, Col, Button, Jumbotron, Modal, ModalHeader, ModalBody, ModalFooter, Alert
} from 'reactstrap';

import AlbumJSON from '../../data/Album.json';
import Product from './Product';
import Cart from './Cart';

export default class ProductMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      album: AlbumJSON,
      cart: [],
    };

    // this.toggle = this.toggle.bind(this);
  }

  // 代替bind
  // toggle() {}
  toggle = () => {
    this.setState({
      // 呼叫setState函式
      modal: !this.state.modal
    });
  }

  addToCart = (product) => {
    const newCart = this.state.cart;
    newCart.push(product);

    this.setState({
      cart: newCart,
    });
  }

  // deleteCartItem = (index) => {
  deleteCartItem = (product) => {
    const cart = this.state.cart;
    const index = this.state.cart.indexOf(product);
    cart.splice(index, 1);

    this.setState({
      cart
    });
  }

  checkOut = (totalPrice) => {
    alert(`已經扣除${totalPrice}`);
  }

  render() {
    const { album, cart } = this.state;
    const TotalPrice = this.state.cart.reduce((acc, item) => acc + item.price, 0);
    // acc = 0, price
    // acc + price
    // o 是初始值
    // 直接return 可以不用加{}

    return (
      <Container>
        <Row>
          <Col md="12">
            <Jumbotron>
              <h1 className="display-3">美客唱片</h1>
              <p className="lead">
                美客唱片成立以來，結合實體唱片通路、唱片公司、網站，因而擁有豐富、完整的音樂資源。
                並與電視、廣播等媒體進行策略聯盟，已迅速打響知名度，並廣受各界好評。
                不僅如此，美客唱片將跨足大中華地區，透過舉辦跨國、跨區域的大型頒獎典禮、演唱會以及音樂活動。
                進一步擴大影響力，提昇流行音樂產業的動能。
              </p>
              <hr className="my-2" />
              <p className="lead">
                <Button onClick={this.toggle} color="primary">
                  購物車({this.state.cart.length})
                </Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          {
            // AlbumJSON.map(p => (
            album.map(p => (
              <Col sm="6" md="4">
                <Product
                  // 名稱要一樣
                  product={p}
                  cart={cart}
                  addToCart={this.addToCart}
                  deleteCartItem={this.deleteCartItem}
                />
              </Col>
            ))
          }
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>購買商品</ModalHeader>
          <ModalBody>
            <Cart
              cart={cart}
              deleteCartItem={this.deleteCartItem}
            />
            <Alert color="success" className="text-right">
              總價：{TotalPrice} 元
            </Alert>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" disabled={cart.length === 0} onClick={() => this.checkOut(TotalPrice)}>結帳</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>取消</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
