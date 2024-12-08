import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowLeftCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((preDelta) => preDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">به سایت من خوش آمدید</span>
              <h1>
                {"سلام، من محمد هستم! "}
                <br />
                <span className="wrap">{text}</span>
              </h1>
              <p>
                محمد ناطقی هستم، برنامه‌نویس مسلط در حوزه توسعه وب! تخصص من
                استفاده از زبان React برای ایجاد رابط‌های کاربری پویا و تعاملی
                است که تجربه کاربری روان و لذت‌بخشی را فراهم می‌کند.
              </p>
              <button onClick={() => console.log("connect")}>
                <span style={{ marginLeft: "10px" }}>در تماس باشید</span>
                <ArrowLeftCircle size={25} />
              </button>
            </Col>

            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header Img" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
