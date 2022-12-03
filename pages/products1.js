import React from "react";
import Image from "next/image";
import styles from "../styles/products.module.css";

import img1 from "../public/images/img1.png";
import img2 from "../public/images/Conveyor.jpg";
import img3 from "../public/images/Conveyor02.jpg";
import img4 from "../public/images/Conveyor03.jpg";

import { Card, Container, CardTitle, CardBody } from "reactstrap";
import Navbuttom from "../components/Layout/Navbuttom";
import Lottie from "lottie-react";
import Infinite1 from "../infinite1.json";

const products1 = () => {
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
                  <h1 className="m-5">Conveyor</h1>
                  {/* <h1 className="m-5">คอนเวเยอร์</h1> */}
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
                    Manufacturers, distributors and importers Transport
                    machinery and innovation Industrial shelf system Production
                    line Line of conveyor line by professionals , complete from
                    start to finish.
                    {/* ผู้ผลิต จำหน่าย และนำเข้า
                    เครื่องจักรอุปกรณ์และนวัตกรรมด้านการขนส่งลำเลียง
                    ระบบจัดเก็บสินค้า ระบบชั้นวางสินค้าอุตสาหกรรม
                    และงานโลจิสติกส์ สร้างไลน์การผลิต (Production Line)
                    ไลน์คอนเวเยอร์ (Conveyor line) โดยมืออาชีพ
                    อย่างครบวงจรตั้งแต่เริ่มต้นจนเสร็จสิ้น */}
                  </p>

                  <ul>
                    <li className="mb-2">
                      Install and design a conveyor belt According to all kinds,
                      every spec, every form
                      {/* ติดตั้งและออกแบบสายพานลำเลียง ตามแบบทุกชนิด ทุกสเป็ค
                      ทุกรูปแบบ */}
                    </li>
                    <li className="mb-2">
                      belt cutting service pvc belt conveyer lfda pvc pu rubber
                      assembly line belt conveyer (pvc plastic) wire mesh belt
                      conveyer (stainless steel)
                      {/* บริการตัดต่อสายพาน pvc belt conveyer lfda pvc pu rubber
                      assembly line belt conveyer (pvc plastic) wire mesh belt
                      conveyer (stainless steel) */}
                    </li>
                    <li className="mb-2">
                      Conveyor belt
                      {/* สายพานลำเลียง (conveyer belt) */}
                    </li>
                    <li className="mb-2">
                      elevator belt mini belt conveyer wire belt
                      {/* สายพานกะพ้อ elevator belt mini belt conveyer wire belt */}
                    </li>
                  </ul>

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

                  <hr></hr>
                  <br></br>

                  <Image
                    alt="img"
                    src={img3}
                    width=""
                    height=""
                    layout="responsive"
                    // objectFit="cover"
                    className="d-inline-block align-top"
                  />

                  <hr></hr>
                  <br></br>

                  <Image
                    alt="img"
                    src={img4}
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

export default products1;
