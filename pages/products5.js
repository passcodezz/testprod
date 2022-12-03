import React from "react";
import Image from "next/image";
import styles from "../styles/products.module.css";
import img1 from "../public/images/img5.png";
import { Card, Container, CardTitle, CardBody } from "reactstrap";
import Navbuttom from "../components/Layout/Navbuttom";
import Lottie from "lottie-react";
import Infinite1 from "../infinite1.json";

const products5 = () => {
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
                  <h1 className="m-5">Water Cooler (Chiller)</h1>
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

                  <ul>
                    <li className="mb-2">Air Cooled Water Chiller</li>
                    <li className="mb-2">Water Cooled Water Chiller</li>
                  </ul>

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

export default products5;
