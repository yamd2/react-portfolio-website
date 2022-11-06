import React from "react";
import my from "../assets/my.png";
import { TopNav } from "./TopNav";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Hero = () => {
  return (
    <div className="hero">
      <TopNav />

      <Container>
        <Row className="mt-5 py-3">
          <Col md="6" className="text-center order-md-2">
            <img src={my} width="80%" alt="" />
          </Col>
          <Col md="6" className="mt-3 pb-3">
            hi 👋 i'm
            <div className="fs-1 fw-bolder mb-5">Yam Dangar</div>
            <p>
              Hi my name is Yam. I love coding. I am doing full stack
              development course at Dented code.
            </p>
            <Button variant="danger">Download Resume</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
