import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./TestiMonial.css";
import { Autoplay} from "swiper/modules";
import Image from "react-bootstrap/Image";
import { Col, Container, Row } from "react-bootstrap";

const TestiMonial = () => {
  return (
    <section>
      <Container>
       <Row>
         <Col>
           <div>
             <p>Our Service</p>
           </div>
         </Col>
       </Row>
       <Row>
         <Col lg={11} xs={10}>
           <div>
             <h2>Testimonial</h2>
             <p>
               diam sit amet, efficitur eros.Sed consectetur dapibus ornare.
               Suspendisse id tempor nisl. Curabitur at massa dui. Praesent
               lobortis, dui et convallis tincidunt, ipsum diam molestie magna,
             </p>
           </div>
         </Col>
         <Col lg={1} xs={1}>
           <div >
             <a
               className="text-center"
               style={{
                 border: "1px solid black",
                 borderRadius: "40px",
                 color: "black",
                 padding: "5px 9px 5px 9px",
                 fontSize: "30px",
               }}
             >
               <i class="bi bi-arrow-right-short"></i>
             </a>
           </div>
         </Col>
       </Row>
     </Container>
      <Container fluid>
        <Row>
          <Col>
            <Swiper
              slidesPerView={2.4}
              spaceBetween={30}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <Row>
                <Col>
                  <SwiperSlide>
                    <div className="p-4">
                      <Row
                        style={{ borderRadius: "30rem" }}
                        className="shadow bg-body-tertiary"
                      >
                        <Col lg={4} className="text-center">
                          <div className="p-2">
                            <Image
                              src={require("../../Images/Home/Review1.png")}
                            />
                          </div>
                        </Col>
                        <Col lg={7}>
                          <div className="p-1">
                            <h3>Avanthika Muthuvel</h3>
                            <p>CityGate</p>
                            <p style={{fontSize:'10px'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque tempus sodales urna, ut vulputate
                              nunc tempor et. Fusce vitae urna elementum,
                            </p>
                            <p style={{ color: "yellow" }}>
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-4">
                      <Row
                        style={{ borderRadius: "30rem" }}
                        className="shadow bg-body-tertiary"
                      >
                        <Col lg={4}>
                          <div className="p-2">
                            <Image
                              src={require("../../Images/Home/Review2.png")}
                            />
                          </div>
                        </Col>
                        <Col lg={7}>
                          <div className="p-1">
                            <h3>Avanthika Muthuvel</h3>
                            <p>CityGate</p>
                            <p style={{fontSize:'10px'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque tempus sodales urna, ut vulputate
                              nunc tempor et. Fusce vitae urna elementum,
                            </p>
                            <p style={{ color: "yellow" }}>
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-4">
                      <Row
                        style={{ borderRadius: "30rem" }}
                        className="shadow bg-body-tertiary"
                      >
                        <Col lg={4}>
                          <div className="p-2">
                            <Image
                              src={require("../../Images/Home/Review3.png")}
                            />
                          </div>
                        </Col>
                        <Col lg={7}>
                          <div className="p-1">
                            <h3>Avanthika Muthuvel</h3>
                            <p>CityGate</p>
                            <p style={{fontSize:'10px'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque tempus sodales urna, ut vulputate
                              nunc tempor et. Fusce vitae urna elementum,
                            </p>
                            <p style={{ color: "yellow" }}>
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-4">
                      <Row
                        style={{ borderRadius: "30rem" }}
                        className="shadow bg-body-tertiary"
                      >
                        <Col lg={4}>
                          <div className="p-2">
                            <Image
                              src={require("../../Images/Home/Review1.png")}
                            />
                          </div>
                        </Col>
                        <Col lg={7}>
                          <div className="p-1">
                            <h3>Avanthika Muthuvel</h3>
                            <p>CityGate</p>
                            <p style={{fontSize:'10px'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque tempus sodales urna, ut vulputate
                              nunc tempor et. Fusce vitae urna elementum,
                            </p>
                            <p style={{ color: "yellow" }}>
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                </Col>
              </Row>
            </Swiper>
          </Col>
        </Row>

        <Row>
          <Col>
            <Swiper
              slidesPerView={2.4}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <Row>
                <Col>
                  <SwiperSlide>
                    <div className="p-4">
                      <Row
                        style={{ borderRadius: "30rem" }}
                        className="shadow bg-body-tertiary"
                      >
                        <Col lg={4} className="text-center">
                          <div className="p-2">
                            <Image
                              src={require("../../Images/Home/Review3.png")}
                            />
                          </div>
                        </Col>
                        <Col lg={7}>
                          <div className="p-1">
                            <h3>Avanthika Muthuvel</h3>
                            <p>CityGate</p>
                            <p style={{fontSize:'10px'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque tempus sodales urna, ut vulputate
                              nunc tempor et. Fusce vitae urna elementum,
                            </p>
                            <p style={{ color: "yellow" }}>
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-4">
                      <Row
                        style={{ borderRadius: "30rem" }}
                        className="shadow bg-body-tertiary"
                      >
                        <Col lg={4}>
                          <div className="p-2">
                            <Image
                              src={require("../../Images/Home/Review6.png")}
                            />
                          </div>
                        </Col>
                        <Col lg={7}>
                          <div className="p-1">
                            <h3>Avanthika Muthuvel</h3>
                            <p>CityGate</p>
                            <p style={{fontSize:'10px'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque tempus sodales urna, ut vulputate
                              nunc tempor et. Fusce vitae urna elementum,
                            </p>
                            <p style={{ color: "yellow" }}>
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-4">
                      <Row
                        style={{ borderRadius: "30rem" }}
                        className="shadow bg-body-tertiary"
                      >
                        <Col lg={4}>
                          <div className="p-2">
                            <Image
                              src={require("../../Images/Home/Review7.png")}
                            />
                          </div>
                        </Col>
                        <Col lg={7}>
                          <div className="p-1">
                            <h3>Avanthika Muthuvel</h3>
                            <p>CityGate</p>
                            <p style={{fontSize:'10px'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque tempus sodales urna, ut vulputate
                              nunc tempor et. Fusce vitae urna elementum,
                            </p>
                            <p style={{ color: "yellow" }}>
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-4">
                      <Row
                        style={{ borderRadius: "30rem" }}
                        className="shadow bg-body-tertiary"
                      >
                        <Col lg={4}>
                          <div className="p-2">
                            <Image
                              src={require("../../Images/Home/Review2.png")}
                            />
                          </div>
                        </Col>
                        <Col lg={7}>
                          <div className="p-1">
                            <h3>Avanthika Muthuvel</h3>
                            <p>CityGate</p>
                            <p style={{fontSize:'10px'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque tempus sodales urna, ut vulputate
                              nunc tempor et. Fusce vitae urna elementum,
                            </p>
                            <p style={{ color: "yellow" }}>
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                </Col>
              </Row>
            </Swiper>
          </Col>
        </Row>

        <Row>
          <Col>
            <Swiper
              slidesPerView={2.4}
              spaceBetween={30}
              autoplay={{
                delay: 2100,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <Row>
                <Col>
                  <SwiperSlide>
                    <div className="p-4">
                      <Row
                        style={{ borderRadius: "30rem" }}
                        className="shadow bg-body-tertiary"
                      >
                        <Col lg={4} className="text-center">
                          <div className="p-2">
                            <Image
                              src={require("../../Images/Home/Review9.png")}
                            />
                          </div>
                        </Col>
                        <Col lg={7}>
                          <div className="p-1">
                            <h3>Avanthika Muthuvel</h3>
                            <p>CityGate</p>
                            <p style={{fontSize:'10px'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque tempus sodales urna, ut vulputate
                              nunc tempor et. Fusce vitae urna elementum,
                            </p>
                            <p style={{ color: "yellow" }}>
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-4">
                      <Row
                        style={{ borderRadius: "30rem" }}
                        className="shadow bg-body-tertiary"
                      >
                        <Col lg={4}>
                          <div className="p-2">
                            <Image
                              src={require("../../Images/Home/Review10.png")}
                            />
                          </div>
                        </Col>
                        <Col lg={7}>
                          <div className="p-1">
                            <h3>Avanthika Muthuvel</h3>
                            <p>CityGate</p>
                            <p style={{fontSize:'10px'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque tempus sodales urna, ut vulputate
                              nunc tempor et. Fusce vitae urna elementum,
                            </p>
                            <p style={{ color: "yellow" }}>
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-4">
                      <Row
                        style={{ borderRadius: "30rem" }}
                        className="shadow bg-body-tertiary"
                      >
                        <Col lg={4}>
                          <div className="p-2">
                            <Image
                              src={require("../../Images/Home/Review11.png")}
                            />
                          </div>
                        </Col>
                        <Col lg={7}>
                          <div className="p-1">
                            <h3>Avanthika Muthuvel</h3>
                            <p>CityGate</p>
                            <p style={{fontSize:'10px'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque tempus sodales urna, ut vulputate
                              nunc tempor et. Fusce vitae urna elementum,
                            </p>
                            <p style={{ color: "yellow" }}>
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>{" "}
                              <i class="bi bi-star-fill"></i>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                </Col>
              </Row>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestiMonial;
