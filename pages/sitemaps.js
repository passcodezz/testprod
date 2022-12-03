import React from "react";
import styles from "../styles/sitemaps.module.css";
import Link from "next/link";
import { Card, Container, CardTitle, CardBody } from "reactstrap";
import Navbuttom from "../components/Layout/Navbuttom";
import Head from "next/head";
import { motion } from "framer-motion";


import Lottie from "lottie-react";
import Infinite1 from "../infinite1.json";

const sitemaps = () => {
  return (
    <>
       <Head>
        <title>Phop Automation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbuttom />
      
      {/* <Lottie
          // className=" container mx-auto px-4 justify-center lg:w-1/2 m-8 sm:m-10 lg:m-5"
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
        /> */}

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

        <div className={styles.containersitemaps}>
          <Container>
            <Card className="card my-5 mx-3 p-3">
              <CardBody className={styles.cardbg}>
                <CardTitle>
                  <h1 className="m-5">Sitemaps</h1>
                  {/* <h1 className="m-5">แผนผังเว็บไซต์</h1> */}
                  <hr></hr>
                  <br></br>
                </CardTitle>

                <CardTitle>
                  <ul>
                    <li className="mb-2">
                      <Link href="/">
                        <a>HomePage</a>
                        {/* <a>หน้าหลัก</a> */}
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/about">
                        <a>About Us</a>
                        {/* <a>เกี่ยวกับบริษัท</a> */}
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/">
                        <a>Products and Service</a>
                        {/* <a>สินค้าและบริการ</a> */}
                      </Link>
                      <ul>
                        <li className="mb-2">
                          <Link href="/products3">
                            <a>Program Control</a>
                            {/* <a>รับออกแบบโปรแกรม</a> */}
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link href="/products6">
                            <a>Machine</a>
                            {/* <a>เครื่องจักร</a> */}
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link href="/products5">
                            <a>water cooler (Chiller)</a>
                            {/* <a>เครื่องทำน้ำเย็น</a> */}
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link href="/products1">
                            <a>Conveyor</a>
                            {/* <a>คอนเวเยอร์</a> */}
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link href="/products4">
                            <a>Steam Boiler</a>
                            {/* <a>หม้อต้มไอน้ำ</a> */}
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link href="/products2">
                            <a>Industrial Shelf (HeavyRack)</a>
                            {/* <a>ชั้นวางสินค้าอุตสาหกรรม</a> */}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <Link href="/reference">
                        <a>Reference</a>
                        {/* <a>ผลงาน</a> */}
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/contact-us.html">
                        <a>Contact</a>
                        {/* <a>ติดต่อเรา</a> */}
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/sitemaps">
                        <a>Sitemap</a>
                        {/* <a>แผนผังเว็บไซต์</a> */}
                      </Link>
                    </li>
                  </ul>
                </CardTitle>
              </CardBody>
            </Card>
          </Container>
        </div>
      </motion.div>
    </>
  );
};

export default sitemaps;
