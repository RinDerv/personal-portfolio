
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/icons8-moon-96.png";
import { useState } from "react";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  const handleNavIcon1Click = () => {
    window.open('https://www.linkedin.com/in/rinasdervishi/', '_blank');
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img className="logo" src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#" onClick={handleNavIcon1Click}>
                <img src={navIcon1} />
              </a>
            </div>
            <p>CopyRight 2024. All Right Reserved by Rinas</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};