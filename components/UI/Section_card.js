import Slider from "react-slick";
import Image from "next/image";
import styles from "../../styles/homepage.module.css";

import img1 from "../../public/images/img1.png";
import img2 from "../../public/images/img2.png";
import img3 from "../../public/images/img3.png";
import img4 from "../../public/images/img4.png";
import img5 from "../../public/images/img5.png";
import img6 from "../../public/images/img6.jpg";
import img7 from "../../public/images/img7.png";
import img8 from "../../public/images/img8.png";
import img9 from "../public/images/img-agv.png";

import React, { Component } from "react";
import Link from "next/link";

import { Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";

export default class Section_card extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className={styles.Section_card}>
          <h4>PRODUCTS & SERVICE</h4>

          <div className="row">
            <Slider {...settings}>
              <div className="col-lg-3 col-md-6 ">
                <Link href="/products1">
                  <a>
                    <Card className={styles.card}>
                      <Image
                        height="250"
                        width="500"
                        objectFit="fill"
                        alt="image"
                        src={img1}
                      />
                      <CardBody>
                        <CardTitle tag="h5">คอนเวเยอร์ Conveyor</CardTitle>
                        <CardSubtitle
                          className="mb-2 text-muted"
                          tag="h6"
                        ></CardSubtitle>
                        <CardText>
                          ผู้ผลิต จำหน่าย และนำเข้า
                          เครื่องจักรอุปกรณ์และนวัตกรรมด้านการขนส่งลำเลียง
                          ระบบจัดเก็บสินค้า ระบบชั้นวางสินค้าอุตสาหกรรม
                          และงานโลจิสติกส์ สร้างไลน์การผลิต (Production Line)
                          ไลน์คอนเวเยอร์ (Conveyor line) โดยมืออาชีพ
                          อย่างครบวงจรตั้งแต่เริ่มต้นจนเสร็จสิ้น
                        </CardText>
                      </CardBody>
                    </Card>
                  </a>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 ">
                <Link href="/products2">
                  <a>
                    <Card className={styles.card}>
                      <Image
                        height="250"
                        width="500"
                        objectFit="fill"
                        alt="image"
                        src={img2}
                      />
                      <CardBody>
                        <CardTitle tag="h5">
                          ชั้นวางสินค้าอุตสาหกรรม Heavy Rack
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          {/* Card subtitle */}
                        </CardSubtitle>
                        <CardText>
                          บริการออกแบบผลิต ชั้นวางสินค้าอุตสาหกรรม
                          ชั้นเก็บสินค้า,ชั้นวางของ,ชั้นสต็อกสินค้า,ชั้นเก็บของ
                          ชั้นวางอะไหล่ และวางสินค้าทั่วไป
                          ผู้ผลิตและจัดจำหน่ายชั้นวางสินค้า รับปรึกษาฟรี
                        </CardText>
                      </CardBody>
                    </Card>
                  </a>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 ">
                <Link href="/products3">
                  <a>
                    <Card className={styles.card}>
                      <Image
                        height="250"
                        width="500"
                        objectFit="cover"
                        alt="image"
                        src={img3}
                      />
                      <CardBody>
                        <CardTitle tag="h5">
                          รับออกแบบโปรแกรม Program Control
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          {/* Card subtitle */}
                        </CardSubtitle>
                        <CardText>
                          รับออกแบบ ติดตั้ง เขียนโปรแกรม
                          ควบคุมเครื่องจักรอุตสาหกรรม ปรึกษาซ่อมบำรุงเครื่องจักร
                          ระบบควบคุมต่างๆ โดยวิศวกรชำนาญงานของทางบริษัท
                        </CardText>
                      </CardBody>
                    </Card>
                  </a>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 ">
                <Link href="/products4">
                  <a>
                    <Card className={styles.card}>
                      <Image
                        height="250"
                        width="500"
                        objectFit="fill"
                        alt="image"
                        src={img4}
                      />
                      <CardBody>
                        <CardTitle tag="h5">หม้อต้มไอน้ำ Boiler</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          {/* Card subtitle */}
                        </CardSubtitle>
                        <CardText>
                          Water Tube Boiler (หม้อต้มไอน้ำ) เป็นระบบ หม้อต้มไอน้ำ
                          แบบแยกน้ำเผาให้ความร้อน
                          ซึ่งจะช่วยประหยัดเชื้อเพลิงมากข้น และให้ความร้อนเร็ว
                          กว่าระบบหม้อต้มไอน้ำ เชื้อเพลิงที่ใช้ในการเผาไหม้ คือ
                          แก๊ส ไม้ ถ่านหิน ประโยชน์
                          เครื่องนี้ผลิตไอน้ำได้คงที่และรวดเร็ว
                          พร้อมทั้งให้ความร้อนสูง
                        </CardText>
                      </CardBody>
                    </Card>
                  </a>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 ">
                <Link href="/products5">
                  <a>
                    <Card className={styles.card}>
                      <Image
                        height="250"
                        width="500"
                        objectFit="fill"
                        alt="image"
                        src={img5}
                      />
                      <CardBody>
                        <CardTitle tag="h5">เครื่องทำน้ำเย็น Chiller</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          {/* Card subtitle */}
                        </CardSubtitle>
                        <CardText>
                          ระบายความร้อนด้วยอากาศ (Air Cooled Water Chiller)
                          <br></br>
                          ระบายความร้อนด้วยน้ำ (Water Cooled Water Chiller)
                        </CardText>
                      </CardBody>
                    </Card>
                  </a>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 ">
                <Link href="/products6">
                  <a>
                    <Card className={styles.card}>
                      <Image
                        height="250"
                        width="500"
                        objectFit="fill"
                        alt="image"
                        src={img6}
                      />
                      <CardBody>
                        <CardTitle tag="h5">เครื่องจักร Machine</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          {/* Card subtitle */}
                        </CardSubtitle>
                        <CardText>
                          รับผลิตเครื่องจักร และออกแบบเครื่องจักรตาม Concept
                          พร้อมให้คำแนะนำ เพื่อตอบสนองต่อทุกการใช้งาน
                          ให้เครื่องจักรและระบบเหมาะสมกับการใช้งานของลูกค้า
                          งานออกแบบ 3D เครื่อง ไลน์พ่นสีออโต
                        </CardText>
                      </CardBody>
                    </Card>
                  </a>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 ">
                <Link href="/products7">
                  <a>
                    <Card className={styles.card}>
                      <Image
                        height="250"
                        width="500"
                        objectFit="cover"
                        alt="image"
                        src={img7}
                      />
                      <CardBody>
                        <CardTitle tag="h5">
                          อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19)
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          {/* Card subtitle */}
                        </CardSubtitle>
                        <CardText>
                          อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19)
                          สแกนวัดอุณหภูมิร่างกายพร้อมทั้งระบบเตือนอัตโนมัติ
                          และในตัวอุโมงค์ จะมีชุดพ่นน้ำยาฆ่าเชื้อ
                          เป็นสเปรย์ละอองฝอย สั่งงานอัตโนมัติ อุโมงค์เต็นท์ผ้าใบ
                          ฆ่าเชื้อโควิด (COVID - 19)
                        </CardText>
                      </CardBody>
                    </Card>
                  </a>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 ">
                <Link href="/products8">
                  <a>
                    <Card className={styles.card}>
                      <Image
                        height="250"
                        width="500"
                        objectFit="cover"
                        alt="image"
                        src={img8}
                      />
                      <CardBody>
                        <CardTitle tag="h5">
                          อุโมงค์ฆ่าเชื้อโควิด COVID-19 series2
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          {/* Card subtitle */}
                        </CardSubtitle>
                        <CardText>
                          อุโมงค์พ่นน้ำยาฆ่าเชื้อโรค COVID-19<br></br>
                          อุโมงค์เต้นผ้าใบฆ่าเชื้อโควิด-19 เป็นอุโมงค์
                          ที่สามารถเคลื่อนที่ ติดตั้งได้ง่าย
                          ในตัวอุโมงค์จะมีชุดพ่นน้ำยาฆ่าเชื้อ COVID 19
                        </CardText>
                      </CardBody>
                    </Card>
                  </a>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 ">
                <Link href="/products8">
                  <a>
                    <Card className={styles.card}>
                      <Image
                        height="250"
                        width="500"
                        objectFit="cover"
                        alt="image"
                        src={img9}
                      />
                      <CardBody>
                        <CardTitle tag="h5">AGV/AMRs</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          {/* Card subtitle */}
                        </CardSubtitle>
                        <CardText>
                          ในชีวิตส่วนตัวของคนเรา
                          เรามักคุ้นเคยกับเครื่องดูดฝุ่นหุ่นยนต์
                          และแนวคิดเรื่องรถยนต์ที่ขับเคลื่อนด้วยตัวเองอยู่แล้ว
                          ซึ่งในปัจจุบัน อุตสาหกรรมต่างๆ
                          ทั่วโลกเริ่มลงทุนในระบบอัตโนมัติ
                          เพื่อปรับปรุงการผลิตและโลจิสติกส์
                          ด้วยความยืดหยุ่นในการทำงาน AGV จึงเป็นตัวเลือกที่ดีในการเริ่มต้นระบบอัตโนมัติในการเคลื่อนย้ายหรือขนถ่ายสินค้า
                        </CardText>
                      </CardBody>
                    </Card>
                  </a>
                </Link>
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}
