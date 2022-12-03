import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, Container, CardBody, CardTitle } from "reactstrap";
import img1 from "../public/images/manager-1.png";
import img2 from "../public/images/application-1.png";
import img3 from "../public/images/settings.png";
import Navbuttom from "../components/Layout/Navbuttom";
import Head from "next/head";
import styles from "../styles/sitemaps.module.css";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Infinite1 from "../infinite1.json";

const Aboutpage = () => {
  return (
    <>
    <Head>
        <title>ABOUT</title>
        <meta name="description" content="Phop Automation Company Limited is very pleased and proud to have the opportunity to serve customers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbuttom />

      <motion.div
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
            left: "15%",
            zIndex: -999,
            overflow: "hidden",
            position: "fixed",
          }}
        />
        {/* <div className={abount.containerpage}> */}
        <div className="text-center">
          <Container>
            <Card className="card my-5 mx-3 p-3">
            <CardBody>
                <CardTitle>
                  <h1 className="m-5">About The Company</h1>
                  {/* <h1 className="m-5">เกี่ยวกับบริษัท</h1> */}
                  <hr></hr>
                  <br></br>
                </CardTitle>

                <CardTitle className="text-start">
                  <h4>Company History</h4>
                  {/* <h4>ประวัติความเป็นมาบริษัท</h4> */}
                  <h6>
                    Phop Automation Co., Ltd. was established on July 19, 2018.
                    Phop Automation Co., Ltd. will operate the business. focus
                    on development machinery manufacturing Machinery, parts,
                    spare parts, including Jig Test and air-conditioning
                    assembly work in type Air Cooled Chiller / Water Cooled
                    Chiller, including electrical system, control system,
                    machine control system Conveyor system with modern
                    technology and other system tasks related to industrial
                    machinery both in buildings and offices including designing
                    according to customer requirements mainly and in service,
                    installation and maintenance of machinery after sales
                    service We are ready to serve you. according to customer
                    satisfaction
                  </h6>
                  {/* <h6>
                    บริษัท ภพ ออโตเมชั่น จำกัด ได้เริ่มก่อตั้ง วันที่ 19 กรกฏาคม
                    2561 บริษัท ภพ ออโตเมชั่น จำกัด จะดำเนินธุรกิจ มุ่งเน้นพัฒนา
                    การผลิตเครื่องจักร Partเครื่องจักร ชิ้นส่วน อะไหล่ รวมถึง
                    Jig Test และงานประกอบเครื่องปรับอากาศ ประเภท Air Cooled
                    Chiller / Water Cooled Chiller รวมถึงระบบไฟฟ้า ระบบคอนโทรล
                    ระบบคอนโทรลควบคุมเครื่องจักร ระบบลำเลียงสายพาน (Conveyor)
                    ด้วยเทคโนโลยีที่ทันสมัย และงานระบบอื่นๆ
                    ที่เกี่ยวข้องกับเครื่องจักรในงานอุตสาหกรรม
                    ทั้งในอาคารและสำนักงานต่างๆ
                    รวมถึงการออกแบบตามความต้องการลูกค้าเป็นหลัก
                    และในงานด้านบริการ งานติดตั้ง งานซ่อมบำรุงเครื่องจักร
                    งานบริการหลังการขาย เรามีพร้อมให้บริการ ตามความพึงพอใจลูกค้า
                  </h6> */}
                </CardTitle>

                <CardTitle className="mt-4 text-start">
                  <h4>
                    Phop Automation Company Limited is very pleased and proud to
                    have the opportunity to serve customers.
                  </h4>
                  {/* <h4>
                    บริษัท ภพ ออโตเมชั่น จำกัด
                    มีความยินดีและภาคภูมิใจเป็นอย่างยิ่งที่ได้มีโอกาสได้บริการลูกค้า
                  </h4> */}

                  <br></br>

                  <h4>policy</h4>
                  {/* <h4>นโยบาย</h4> */}
                  <p>
                    Focus on the development of modern production with standard
                    quality and services that meet the needs of customers.
                  </p>
                  {/* <p>
                    มุ่งเน้นพัฒนาการผลิตที่ทันสมัยมีคุณภาพได้มาตรฐาน และ บริการ
                    ที่ตรงความต้องการลูกค้า
                  </p> */}
                </CardTitle>

                <CardTitle className="text-start">
                  <h4>objective</h4>
                  {/* <h4>วัตถุประสงค์</h4> */}
                  <ul>
                    <li>
                      Focus on quality production and deliver work according to
                      customer requirements
                    </li>
                    {/* <li>
                      มุ่งเน้นงานผลิตที่ได้คุณภาพ
                      และส่งมอบงานตามความต้องการลูกค้า
                    </li> */}
                    <li>
                      Develop personnel to be smart, good people, happy and work
                      as a team.
                    </li>
                    {/* <li>
                      พัฒนาบุคลากร เป็นคนเก่ง คนดี มีความสุข และทำงานเป็นทีม
                    </li> */}
                    <li>
                      Focus on environmental awareness, occupational health and
                      safety
                    </li>
                    {/* <li>
                      มุ่งเน้นจิตสำนึกสิ่งแวดล้อม อาชีวะอนามัย และความปลอดภัย
                    </li> */}
                    <li>
                      Bring technology to improve and develop continuously.
                    </li>
                    {/* <li>นำเทคโนโลยีมาปรับปรุงและพัฒนาอย่างต่อเนื่อง</li> */}
                  </ul>
                </CardTitle>
              </CardBody>
            </Card>

            <div>
              <div className="row align-equal align-center row-cols-1 row-cols-md-4 g-4">
                <div className="col-lg-4 col-md-12">
                  <div>
                    <Card className="p-3 mx-5 mb-3">
                      <Link href="#">
                        <a>
                          <Image
                            alt="img"
                            src={img1}
                            width="250"
                            height="200"
                            objectFit="scale-down"
                            className="image d-inline-block align-top"
                          />
                        </a>
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">
                          <b>PROFESSIONAL</b>
                        </h5>
                        <p className="card-text">Engineer Consultation Team</p>
                      </div>
                    </Card>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12">
                  <div>
                    <Card className="p-3 mx-5  mb-3">
                      <Link href="#">
                        <a>
                          <Image
                            alt="img"
                            src={img2}
                            width="250"
                            height="200"
                            objectFit="scale-down"
                            className="d-inline-block align-top"
                          />
                        </a>
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">
                          <b>PROFESSIONAL</b>
                        </h5>
                        <p className="card-text">Engineer Consultation Team</p>
                      </div>
                    </Card>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12">
                  <div>
                    <Card className="p-3 mx-5  mb-5">
                      <Link href="#">
                        <a>
                          <Image
                            alt="img"
                            src={img3}
                            width="250"
                            height="200"
                            objectFit="scale-down"
                            className="d-inline-block align-top"
                          />
                        </a>
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">
                          <b>PROFESSIONAL</b>
                        </h5>
                        <p className="card-text">Engineer Consultation Team</p>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </motion.div>
    </>
  );
};

export default Aboutpage;
