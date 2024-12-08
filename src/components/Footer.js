import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from "../logo.svg";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col sm={6}>
              <img src={logo} alt="logo" />
            </Col>
            <Col sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/nategh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a
                  href="https://t.me/mhmdnategh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon2} alt="Telegram" />
                </a>
                <a
                  href="https://www.instagram.com/mhmdnategh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon3} alt="Instagram" />
                </a>
              </div>
              <p>CopyRight 2024. All Right Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
