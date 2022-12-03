import React from "react";
import Image from "next/image";
import styles from "../styles/products.module.css";
import img1 from "../public/images/machine.png";
import img2 from "../public/images/WaterTubeBoiler.jpg";
import Navbuttom from "../components/Layout/Navbuttom";
import { Card, Container, CardTitle, CardBody } from "reactstrap";
import Lottie from "lottie-react";
import Infinite1 from "../infinite1.json";

const products3 = () => {
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
                  <h1 className="m-5">Steam Boiler</h1>
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
                  <p>
                    Water Tube Boiler (steam boiler) is a steam boiler system
                    that separates water for heating. This will help save a lot
                    of fuel. and heat quickly than the boiler system The fuel
                    used for combustion is gas, wood, coal. Benefits This
                    machine produces stable and fast steam. as well as providing
                    high heat, suitable for industrial plants, hotels,
                    hospitals, about washing medical equipment or a wood drying
                    plant steam heating room
                  </p>

                  <hr></hr>
                  <br></br>
                  <Image
                    alt="img"
                    src={img2}
                    width=""
                    height=""
                    layout="responsive"
                    // objectFit="cover"
                    className="d-inline-block align-top"
                  />
                </CardTitle>
              </CardBody>
            </Card>
          </Container>
        </div>
      </div>
    </>
  );
};

export default products3;
