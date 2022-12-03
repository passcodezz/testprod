import React from "react";
import Link from "next/link";
import Image from "next/image";
import map from "../public/images/map.jpg";
import Navbuttom from "../components/Layout/Navbuttom";
import Head from "next/head";
import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import Infinite1 from "../infinite1.json";

import {
  Card,
  Container,
  CardBody,
  CardTitle,
  Row,
  Col,
  Form,
  Button,
  Label,
  Input,
  FormGroup,
} from "reactstrap";

function contact() {
  return (
    <>
      <Head>
        <title>CONTACT</title>
        <meta
          name="description"
          content="Phop Automation Company Address: 41/14 Moo 12, Lam Luk Ka Subdistrict, Lam Luk Ka District, Pathum Thani Province 12150 phopautomation@gmail.com 087-260-7999, 085-108-4246"
        />
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
      {/* <Lottie
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
        /> */}
        <div className="text-center">
          <Container>
            <Card className="card my-5 mx-3 p-3">
              <CardBody>
                <CardTitle>
                  <h1 className="m-5">Contact Us</h1>
                  {/* <h1 className="m-5">ติดต่อเรา</h1> */}
                  <hr></hr>
                  <br></br>
                </CardTitle>
                <CardTitle className="text-start">
                  <h4>contact</h4>
                  {/* <h4>การติดต่อ</h4> */}
                  <p>
                    {" "}
                    Phop Automation Company Address: 41/14 Moo 12, Lam Luk Ka
                    Subdistrict, Lam Luk Ka District, Pathum Thani Province
                    12150
                    {/* บริษัท ภพ ออโตเมชั่น จำกัด PHOP AUTOMATION CO.,LTD <br></br>
                    ที่อยู่: 41/14 ม.12 ต.ลำลูกกา อ.ลำลูกกา จ. ปทุมธานี 12150{" "} */}
                    <br></br>
                    <a href="mailto:phopautomation@gmail.com">
                      phopautomation@gmail.com
                    </a>
                    <br></br>
                    087-260-7999, 085-108-4246 <br></br>
                    {/* <Link href="https://www.phopautomation.co.th">
                      <a target="_blank">phopautomation</a>
                    </Link> */}
                  </p>
                </CardTitle>

                <br></br>
                <hr></hr>
                <br></br>

                <CardTitle className="text-start">
                  {/* <h4 className="mb-3">contact form</h4> */}
                  {/* <h4 className="mb-3">แบบฟอร์มการติดต่อ</h4> */}
                  {/* <Form>
                    <FormGroup>
                      <Row className="align-items-center">
                        <Col lg={6} md={12} xs="auto" className="mb-3">
                          <Label for="exampleEmail">name *</Label>
                          <Input
                            name="name"
                            placeholder=""
                            type="text"
                            required
                          />
                        </Col>

                        <Col lg={6} md={12} xs="auto" className="mb-3">
                          <Label for="exampleEmail">Email *</Label>
                          <Input
                            name="lastname"
                            placeholder=""
                            type="email"
                            required
                          />
                        </Col>

                        <Col lg={6} md={12} xs="auto" className="mb-3">
                          <Label for="exampleEmail">subject *</Label>
                          <Input name="title" type="text" required />
                        </Col>

                        <Col lg={6} md={12} xs="auto" className="mb-3">
                          <Label for="exampleEmail">message *</Label>
                          <Input name="text" type="text" required />
                        </Col>
                      </Row>
                    </FormGroup>

                    <FormGroup check className="mb-3">
                      <Input type="checkbox" />
                      <Label check>Send me a copy too (optional)</Label>
                    </FormGroup>

                    <Button color="primary">Submit</Button>
                  </Form> */}
                </CardTitle>

                {/* <hr></hr>
                <br></br> */}

                <CardTitle className="text-start">
                  <h4 className="mb-4">other information</h4>
                  {/* <h4 className="mb-4">ข้อมูลอื่นๆ</h4> */}
                  <Image
                    alt="img"
                    src={map}
                    width=""
                    height=""
                    objectFit="scale-down"
                    layout="responsive"
                    className="d-inline-block align-top"
                  />
                </CardTitle>
              </CardBody>
            </Card>
          </Container>
        </div>
      </motion.div>
    </>
  );
}

export default contact;
