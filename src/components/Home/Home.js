import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

const Home = () => (
  <Container>
    <Row>
      <Col md="12">
        <Jumbotron>
          <h1 className="display-3">Home</h1>
          <p className="lead">
            React 練習
          </p>
          <hr className="my-2" />
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default Home;
