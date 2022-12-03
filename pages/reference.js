import React from "react";
import styles from "../styles/reference.module.css";
import { Card, Container, CardBody, CardTitle, CardHeader } from "reactstrap";
import Image from "next/image";
import Navbuttom from "../components/Layout/Navbuttom";
import img1 from "../public/assets/ref1.png";
import img2 from "../public/assets/ref2.png";
import img3 from "../public/assets/ref3.png";
import img4 from "../public/assets/ref4.png";
import img5 from "../public/assets/ref5.png";
import img6 from "../public/assets/ref6.png";
import img7 from "../public/assets/ref7.png";
import img8 from "../public/assets/ref8.png";
import img9 from "../public/assets/ref9.png";
import img10 from "../public/assets/ref10.png";

import img20 from "../public/assets/ref20.png";
import img21 from "../public/assets/ref21.png";
import img22 from "../public/assets/ref22.png";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Infinite1 from "../infinite1.json";

const Reference = ({
  listUser = [
    {
      title:
        "COVID-19 disinfection tunnel, body temperature scan with automatic alarm system",
      image: "/assets/img7.png",
    },
    {
      title: "Project Control Program Design, Machine",
      image: "/assets/img3.png",
    },
    {
      title: "Conveyor",
      image: "/assets/Conveyor.jpg",
    },
    {
      title: "Steam Boiler",
      image: "/assets/WaterTubeBoiler.jpg",
    },
    {
      title: "Industrial Shelf (HeavyRack)",
      image: "/assets/RACKING-AND-SHELT.jpg",
    },
    {
      title: "AGV/AMRs",
      image: "/assets/img-agv.png",
    },
  ],
}) => {
  return (
    <>
      <Navbuttom />
      <motion.div 
      
      className={styles.content}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.9,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        },
      }}
    >
      <Lottie
          loop={true}
          animationData={Infinite1}
          title="konklom"
          style={{
            top: "20%",
            left: "5%",
            width: "100%",
            zIndex: -1,
            overflow: "hidden",
            position: "fixed",
          }}
        />
        <div className={styles.containerref}>
          <div>
            <Container>
              <h1 className="m-5">works (Reference)</h1>
              <hr></hr>
              <div>
                {listUser.map((listUsers, index) => (
                  <Card className="card my-5 mx-3 p-0" key={index}>
                    <CardHeader className="p-3" tag="h5">
                      {listUsers.title}
                    </CardHeader>
                    <CardBody className="p-4">
                      <CardTitle>
                        <Image
                          alt="img"
                          src={listUsers.image}
                          width="1920"
                          height="1000"
                          objectFit="fill"
                          position="relative"
                          className="d-inline-block align-center"
                        />
                      </CardTitle>
                    </CardBody>
                  </Card>
                ))}

                <Card className="card my-5 mx-3 p-3">
                  <CardBody>
                    <CardTitle>
                      <h1 className="m-5">COMPANY PROFILE</h1>
                      <hr></hr>
                      <br></br>
                    </CardTitle>
                    <CardTitle className={styles.imgcenter}>
                      <Image
                        alt="img"
                        src={img1}
                        width=""
                        height=""
                        // objectFit="scale-down"
                        // layout="responsive"
                        className="d-inline-block align-top "
                      />
                    </CardTitle>
                    <br></br>
                    <CardTitle>
                      <p>
                        We have engineers, expertise and experience in machinery
                        manufacturing. The company have more than 50employee
                        with work experience, ready to work 7 days a week. The
                        company is happy to meet the needs of customers in
                        building a structure and all types of machinery. Just
                        the customer has a Drawing or Layout,we can proceed from
                        the production process and until the installation for
                        you
                      </p>
                    </CardTitle>
                  </CardBody>
                </Card>

                <Card className="card my-5 mx-3 p-3">
                  <CardBody>
                    <CardTitle>
                      <h1 className="m-5">VISION</h1>
                      <hr></hr>
                      <br></br>
                    </CardTitle>
                    <br></br>
                    <CardTitle>
                      <p>
                        Phop Automation Company Limited will lead the creation
                        Innovations in designing, manufacturing and procuring
                        machines. Focus on creating added value and meeting
                        customers needs with international standards.
                      </p>
                    </CardTitle>
                  </CardBody>
                </Card>

                <Card className="card my-5 mx-3 p-3">
                  <CardBody>
                    <CardTitle>
                      <h1 className="m-5">MISSION</h1>
                      <hr></hr>
                      <br></br>
                    </CardTitle>
                    <br></br>
                    <CardTitle>
                      <p>
                        Continuous Improvement : Continuously improve and
                        develop the potential of the company Customer <br></br>
                        Satisfaction : Meet the values ​that customers want to
                        create maximum customer satisfaction. Quality Product{" "}
                        <br></br>
                        Innovation : The machines are of international quality.{" "}
                        <br></br>
                        Sustainable Growth : create sustainable growth under the
                        framework of business ethics and responsibility
                      </p>
                    </CardTitle>
                  </CardBody>
                </Card>

                <Card className="card my-5 mx-3 p-3">
                  <CardBody>
                    <CardTitle>
                      <h1 className="m-5">All Products</h1>
                      <hr></hr>
                      <br></br>
                    </CardTitle>
                    <CardTitle className={styles.imgcenter}>
                      <Image
                        alt="img"
                        src={img2}
                        width=""
                        height=""
                        className="d-inline-block align-top "
                      />

                      <Image
                        alt="img"
                        src={img3}
                        width=""
                        height=""
                        className="d-inline-block align-top "
                      />

                      <Image
                        alt="img"
                        src={img4}
                        width=""
                        height=""
                        className="d-inline-block align-top "
                      />
                    </CardTitle>
                  </CardBody>
                </Card>

                <Card className="card my-5 mx-3 p-3">
                  <CardBody>
                    <CardTitle>
                      <h1 className="m-5">Reference Work</h1>
                      <hr></hr>
                      <br></br>
                    </CardTitle>
                    <CardTitle className={styles.imgcenter}>
                      <Image
                        alt="img"
                        src={img5}
                        width=""
                        height=""
                        className="d-inline-block align-top "
                      />

                      <Image
                        alt="img"
                        src={img6}
                        width=""
                        height=""
                        className="d-inline-block align-top "
                      />

                      <Image
                        alt="img"
                        src={img7}
                        width=""
                        height=""
                        className="d-inline-block align-top "
                      />

                      <Image
                        alt="img"
                        src={img8}
                        width=""
                        height=""
                        className="d-inline-block align-top "
                      />

                      <Image
                        alt="img"
                        src={img9}
                        width=""
                        height=""
                        className="d-inline-block align-top "
                      />

                      <Image
                        alt="img"
                        src={img10}
                        width=""
                        height=""
                        className="d-inline-block align-top "
                      />
                    </CardTitle>
                  </CardBody>
                </Card>

                <Card className="card my-5 mx-3 p-3">
                  <CardBody>
                    <CardTitle>
                      <h1 className="m-5">Our Customer</h1>
                      <hr></hr>
                      <br></br>
                    </CardTitle>
                    <CardTitle className={styles.imgcenter}>
                      <Image
                        alt="img"
                        src={img20}
                        width=""
                        height=""
                        className="d-inline-block align-top "
                      />
                      <Image
                        alt="img"
                        src={img21}
                        width=""
                        height=""
                        className="d-inline-block align-top "
                      />
                      <Image
                        alt="img"
                        src={img22}
                        width=""
                        height=""
                        className="d-inline-block align-top "
                      />
                    </CardTitle>
                  </CardBody>
                </Card>
              </div>
            </Container>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Reference;
