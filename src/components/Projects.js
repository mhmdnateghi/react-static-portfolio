import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <>
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <h2 class="text-center">پروژه‌ها</h2>
              <p class="text-center">
                در این صفحات می توانید برخی از نمونه کارهای طراحی سایت پیاده
                سازی شده توسط من را مشاهده کنید.
              </p>

              {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return (
                          <>
                            <ProjectCard key={index} {...project} />
                          </>
                        );
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container> */}

              <div class="container d-flex flex-column align-items-center">
                <div class="card mb-4 w-75">
                  <img src={projImg1} class="card-img-top" alt="projImg1" />
                  <div class="card-body text-end">
                    <h3 class="card-title">لَمـ بِده</h3>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>

                <div class="card mb-4 w-75">
                  <img src={projImg2} class="card-img-top" alt="projImg2" />
                  <div class="card-body text-end">
                    <h3 class="card-title">اسکالند</h3>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>

                <div class="card w-75">
                  <img src={projImg3} class="card-img-top" alt="projImg3" />
                  <div class="card-body text-end">
                    <h3 class="card-title">Stratalis</h3>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          className="background-image-right"
          src={colorSharp2}
          alt="colorSharp2"
        />
      </section>
    </>
  );
};
