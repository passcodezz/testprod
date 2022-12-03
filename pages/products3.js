import React from "react";
import Image from "next/image";
import styles from "../styles/products.module.css";

import img1 from "../public/images/img3.png";
import img2 from "../public/images/autometion.jpg";
import img3 from "../public/images/Control.jpg";
import img4 from "../public/images/Control02.jpg";
import { Card, Container, CardTitle, CardBody } from "reactstrap";
import Navbuttom from "../components/Layout/Navbuttom";

const products3 = () => {
  return (
    <>
       <Navbuttom />

      <div className={styles.content}>
        <div className={styles.containerproducts}>
          <Container>
            <Card className="card my-5 mx-3 p-3">
              <CardBody>
                <CardTitle>
                  {/* <h1 className="m-5">รับออกแบบโปรแกรม Program Control</h1> */}
                  <h1 className="m-5">Program Design (Program Control)</h1>
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
                  <h5>AUTOMATION</h5>
                  {/* <p>
                    PROGRAMING AND CONTROL PANAL (โปรแกรมและตู้คอนโทรล) ออกแบบ
                    ติดตั้ง เขียนโปรแกรมควบคุมเครื่องจักร และ
                    โปรแกรมใช้งานทั่วไป
                  </p> */}
                  <p>
                    PROGRAMING AND CONTROL PANAL (program and control cabinet)
                    design, install, write machine control program and general
                    use program
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

                  <br></br>
                  <hr></hr>
                  <br></br>

                  <p>Machine Control Program</p>

                  {/* <ul>
                    <li className="mb-2">
                      วางระบบความคุมและ Monitor การทำงานของ Air Chiller
                      ทั้งหมดในโรงงาน
                    </li>
                    <li className="mb-2">
                      Monitor อุณหภูมิและความชื้น ภายในโรงงาน สามารถควาบคุมได้
                      ±1◦C
                    </li>
                    <li className="mb-2">
                      ควบคุมการใช้พลังงานโดยแยกประเภทของการผลิตและกลุ่มการใช้พลังงานเพื่อแสดงค่าการใช้พลังงานต่อหน่วยการผลิต
                    </li>
                    <li className="mb-2">
                      เพื่อเปรียบเทียบประสิทธิ์ภาพการใช้พลังงาน
                      ทำให้พนักงานสามาถรู้ถึงสถานการณ์ใช้พลังงาน
                      ณ.ขณะนั้นว่าใช้พลังงาน
                    </li>
                    <li className="mb-2">
                      คุ้มค่าต่อการผลิตหรือไม่ และมี Report
                      แจ้งปริมาณการใช้พลังงานเป็น Realtime
                    </li>
                  </ul> */}
                  <ul>
                    <li className="mb-2">
                      Set up a system to control and monitor the operation of
                      all Air Chiller in the factory.
                    </li>
                    <li className="mb-2">
                      Monitor temperature and humidity inside the factory, able
                      to control ±1◦C
                    </li>
                    <li className="mb-2">
                      Control energy consumption by separating production type
                      and energy consumption group to show the energy
                      consumption per unit of production.
                    </li>
                    <li className="mb-2">
                      to compare energy efficiency Make employees aware of the
                      energy use situation. At that time that energy
                    </li>
                    <li className="mb-2">
                      Is it worth the production and has a report informing the
                      amount of energy consumption in Realtime?
                    </li>
                  </ul>

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

                  <br></br>
                  <hr></hr>
                  <br></br>

                  {/* <h3>ระบบควบคุมเครื่องจักร </h3> */}
                  <h3>Machine control system </h3>
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

                  <br></br>

                  {/* <p>
                    รับออกแบบ ติดตั้ง เขียนโปรแกรม ควบคุมเครื่องจักรอุตสาหกรรม
                    ปรึกษาซ่อมบำรุงเครื่องจักร ระบบควบคุมต่างๆ
                    โดยวิศวกรชำนาญงานของทางบริษัท
                  </p>

                  <ul>
                    <li className="mb-2">
                      ออกแบบระบบ นิวเมติกส์ และ นิวเมติกส์ไฟฟ้า
                    </li>
                    <li className="mb-2">
                      ออกแบบระบบ สายพานลำเลียงด้วยมอเตอร์ เกียร์
                      อินเวอร์เตอร์(Invertor) เซ็นเซอร์(Sensors)
                    </li>
                    <li className="mb-2">
                      ออกแบบเขียนโปรแกรม PLC SIEMENS , OMRON , KEYENCE ,
                      MITSUBISHI , DELTA
                    </li>
                    <li className="mb-2">
                      ออกแบบเขียนโปรแกรม HMI TOUCH SCREEN
                    </li>
                    <li className="mb-2">ออกแบบเขียนโปรแกรม SCADA</li>
                    <li className="mb-2">
                      ออกแบบสร้างเครื่องจักรต่างๆในโรงงานอุตสาหกรรม
                    </li>
                    <li className="mb-2">
                      รับประกอบตู้คอนโทรลไฟฟ้า , เดินสาย Main ในโรงงานอุตสาหกรรม
                    </li>
                  </ul> */}
                  <p>
                    Design, install, write programs, control industrial machines
                    Consulting for machine maintenance various control systems
                    by professional engineers of the company
                  </p>

                  <ul>
                    <li className="mb-2">
                      Design of pneumatics and electric pneumatic systems
                    </li>
                    <li className="mb-2">
                      Design of conveyor systems with motors, gears, inverters,
                      sensors
                    </li>
                    <li className="mb-2">
                      Design and programming PLC SIEMENS , OMRON , KEYENCE ,
                      MITSUBISHI , DELTA
                    </li>
                    <li className="mb-2">
                      Design and programming HMI TOUCH SCREEN
                    </li>
                    <li className="mb-2">SCADA programming design</li>
                    <li className="mb-2">
                      Design and build various machines in industrial plants.
                    </li>
                    <li className="mb-2">
                    Assembling electrical control cabinets, wiring Main in industrial plants
                    </li>
                  </ul>
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
