import React from "react";
import Image from "next/image";
import styles from "../styles/products.module.css";
import { Card, Container, CardTitle, CardBody } from "reactstrap";
import img1 from "../public/images/teable.png";
import Navbuttom from "../components/Layout/Navbuttom";

const Products8 = () => {
  return (
    <>
      <Navbuttom />
      <div className={styles.content}>
        <div className={styles.containerproducts}>
          <Container>
            <Card className="card my-5 mx-3 p-3">
              <CardBody>
                <CardTitle>
                  {/* <h1 className="m-5">อุโมงค์ฆ่าเชื้อโควิด COVID-19 series2</h1> */}
                  <h1 className="m-5">COVID-19 Disinfection Tunnel Series2</h1>
                  <hr></hr>
                  <br></br>
                </CardTitle>

                {/* <p>อุโมงค์พ่นน้ำยาฆ่าเชื้อโรค COVID-19</p> */}
                <p>Disinfectant spray tunnel for COVID-19</p>

                {/* <ul>
                  <li className="mb-2">
                    อุโมงค์เต้นผ้าใบ ฆ่าเชื้อโควิด-19 เป็นอุโมงค์
                    ที่สามารถเคลื่อนที่
                  </li>
                  <li className="mb-2">
                    ติดตั้งได้ง่าย ในตัวอุโมงค์จะมีชุดพ่นน้ำยาฆ่าเชื้อ COVID -
                    19 -
                  </li>
                  <li className="mb-2">
                    อุโมงค์ฆ่าเชื้อโควิดเหมาะกับพื้นที่ชุมชน เช่น ตลาด อาคาร และ
                    จุดอื่นๆ
                  </li>
                </ul> */}
                <ul>
                  <li className="mb-2">
                    canvas dance tunnel Disinfection of COVID-19 is a tunnel
                    that can move
                  </li>
                  <li className="mb-2">
                    easy to install Inside the tunnel, there will be a
                    disinfectant spray kit for COVID - 19 -
                  </li>
                  <li className="mb-2">
                    The covid disinfection tunnel is suitable for community
                    areas such as markets, buildings and other points.
                  </li>
                </ul>

                <hr></hr>
                <br></br>

                <Image
                  alt="img"
                  src={img1}
                  width=""
                  height=""
                  layout="responsive"
                  // objectFit="cover"
                  className="d-inline-block align-top"
                />
              </CardBody>
            </Card>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Products8;
