import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>مهارت‌ها</h2>
                <p>
                  من به دنبال فرصت‌هایی هستم که بتوانم مهارت‌هایم را به کار
                  بگیرم و در پروژه‌های جدید و چالش‌برانگیز شرکت کنم. علاقه‌مند
                  به یادگیری فناوری‌های جدید و به روزرسانی دانش خود هستم تا
                  بهترین راه‌حل‌ها را برای نیازهای مختلف فراهم کنم.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="meter1" />
                    <h5>HTML & CSS</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="meter2" />
                    <h5>JavaScript</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="meter3" />
                    <h5>Bootstrap</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="meter3" />
                    <h5>Figma</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="meter1" />
                    <h5>React</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          className="background-image-left"
          src={colorSharp}
          alt="colorSharp"
        />
      </section>
    </>
  );
};
