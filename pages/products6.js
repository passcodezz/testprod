import React from "react";
import Image from "next/image";
import styles from "../styles/products.module.css";
import img1 from "../public/images/img6.jpg";
import { Card, Container, CardTitle, CardBody } from "reactstrap";
import Navbuttom from "../components/Layout/Navbuttom";
import Lottie from "lottie-react";
import Infinite1 from "../infinite1.json";

const products6 = () => {
  return (
    <>
          <Navbuttom />
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
      <div className={styles.content}>
        <div className={styles.containerproducts}>
          <Container>
            <Card className="card my-5 mx-3 p-3">
              <CardBody>
                <CardTitle>
                  {/* <h1 className="m-5">เครื่องจักร Machine</h1> */}
                  <h1 className="m-5">Machine</h1>
                  <p>
                    Machine manufacturing and design the machine according to
                    the concept and provide advice to respond to every
                    application Provide machines and systems that are suitable
                    for the use of customers. 3D design work. Auto paint line.
                  </p>
                  <hr></hr>
                  <br></br>
                </CardTitle>

                <CardTitle>
                  <Image
                    alt="img"
                    src={img1}
                    width=""
                    height=""
                    layout="responsive"
                    // objectFit="cover"
                    className="d-inline-block align-top"
                  />
                  <br></br>

                  <br></br>
                </CardTitle>
              </CardBody>
            </Card>
          </Container>
        </div>
      </div>
    </>
  );
};

export default products6;
