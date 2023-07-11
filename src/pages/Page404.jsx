import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Page404 = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Oops! Page not found</h1>
          <p>We're sorry, but the page you requested does not exist.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image style={{alignItems: "center"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlT75qmjHrdvC2ke0UGJH19ll4yHJaloHgrA&usqp=CAU" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Page404;