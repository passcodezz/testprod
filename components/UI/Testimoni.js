import React, { useState } from "react";

import Slider from "react-slick";
import Image from "next/image";

import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import styles from "../../styles/homepage.module.css";
import Link from "next/link";

const Testimoni = ({
  listTestimoni = [
    {
      path: "/products1",
      title: "Conveyor",
      text: "Manufacturers, distributors and importersTransport machinery and innovationIndustrial shelf systemProduction line ,line conveyor by professionals, complete from start to finish.",
      // title: "คอนเวเยอร์",
      // text: " ผู้ผลิต จำหน่าย และนำเข้า เครื่องจักรอุปกรณ์และนวัตกรรมด้านการขนส่งลำเลียง ระบบจัดเก็บสินค้า ระบบชั้นวางสินค้าอุตสาหกรรม และงานโลจิสติกส์ สร้างไลน์การผลิต (Production Line) ไลน์คอนเวเยอร์ (Conveyor line) โดยมืออาชีพ อย่างครบวงจรตั้งแต่เริ่มต้นจนเสร็จสิ้น",
      image: "/assets/img1.png",
    },
    {
      path: "/products9",
      title: "AGV/AMRs",
      text: "In people's private livesWe are usually familiar with robot vacuum cleaners.And the concept of self-drivingcars.Now, all industriesStart investing in automation on a global scaleTo improve production and logistics.With theflexibility of work, AGV provides a good choice to start moving or uninstalling automation system.",
      image: "/assets/img-avg1.png",
      // text: " ในชีวิตส่วนตัวของคนเรา เรามักคุ้นเคยกับเครื่องดูดฝุ่นหุ่นยนต์ และแนวคิดเรื่องรถยนต์ที่ขับเคลื่อนด้วยตัวเองอยู่แล้วซึ่งในปัจจุบัน อุตสาหกรรมต่างๆทั่วโลกเริ่มลงทุนในระบบอัตโนมัติเพื่อปรับปรุงการผลิตและโลจิสติกส์ด้วยความยืดหยุ่นในการทำงาน AGV จึงเป็นตัวเลือกที่ดีในการเริ่มต้นระบบอัตโนมัติในการเคลื่อนย้ายหรือขนถ่ายสินค้า",
      // image: "/assets/img-avg1.png",
    },
    {
      path: "/products6",
      title: "Machine",
      text: "Machine manufacturing and design the machine according to the concept and provide advice to respond to every application Provide machines and systems that are suitable for the use of customers. 3D design work. Auto paint line.",
      // title: "เครื่องจักร ",
      // text: "รับผลิตเครื่องจักร และออกแบบเครื่องจักรตาม Concept พร้อมให้คำแนะนำ เพื่อตอบสนองต่อทุกการใช้งาน ให้เครื่องจักรและระบบเหมาะสมกับการใช้งานของลูกค้า งานออกแบบ 3D เครื่อง ไลน์พ่นสีออโต",
      image: "/assets/img6.jpg",
    },
    {
      path: "/products3",
      title: "Program Control (Design Automation)",
      text: "PROGRAMING AND CONTROL PANAL (program and control cabinet) design, install, write machine control program and general use program",
      // title: "รับออกแบบโปรแกรม",
      // text: "รับออกแบบ ติดตั้ง เขียนโปรแกรม คุมเครื่องจักรอุตสาหกรรม ปรึกษาซ่อมบำรุงเครื่องจักร ระบบควบคุมต่างๆ โดยวิศวกรชำนาญงานของทางบริษัท",
      image: "/assets/img3.png",
    },
    {
      path: "/products2",
      title: "Industrial Shelf (HeavyRack)",
      text: "Industrial product shelf design service, shelf, inventory shelf, storage layerSpare parts rack and general cargo rackFree consultation from manufacturers and distributors of products on shelves.",
      // title: "ชั้นวางสินค้าอุตสาหกรรม",
      // text: "บริการออกแบบผลิต ชั้นวางสินค้าอุตสาหกรรม ชั้นเก็บสินค้า,ชั้นวางของ,ชั้นสต็อกสินค้า,ชั้นเก็บของ ชั้นวางอะไหล่ และวางสินค้าทั่วไปผู้ผลิตและจัดจำหน่ายชั้นวางสินค้า รับปรึกษาฟรี",
      image: "/assets/img2.png",
    },
    {
      path: "/products4",
      title: "Steam Boiler",
      text: "Water Tube Boiler (steam boiler) is a steam boiler system that separates water for heating. This will help save a lot of fuel. and heat quickly than the boiler system The fuel used for combustion is gas, wood, coal. Benefits This machine produces stable and fast steam. as well as providing high heat, suitable for industrial plants, hotels, hospitals, about washing medical equipment Or is it a drying plant? steam heating room",
      // title: "หม้อต้มไอน้ำ",
      // text: "Water Tube Boiler (หม้อต้มไอน้ำ) เป็นระบบ หม้อต้มไอน้ำ แบบแยกน้ำเผาให้ความร้อน ซึ่งจะช่วยประหยัดเชื้อเพลิงมากข้น และให้ความร้อนเร็ว กว่าระบบหม้อต้มไอน้ำ เชื้อเพลิงที่ใช้ในการเผาไหม้ คือ แก๊ส ไม้ ถ่านหิน ประโยชน์ เครื่องนี้ผลิตไอน้ำได้คงที่และรวดเร็ว พร้อมทั้งให้ความร้อนสูง",
      image: "/assets/img4.png",
    },
    {
      path: "/products5",
      title: "Water Cooler (Chiller)",
      text: "Air Cooled Water Chiller, Water Cooled Water Chiller",
      // title: "เครื่องทำน้ำเย็น ",
      // text: "ระบายความร้อนด้วยอากาศ (Air Cooled Water Chiller), ระบายความร้อนด้วยน้ำ (Water Cooled Water Chiller)",
      image: "/assets/img5.png",
    },
    {
      path: "/products7",
      title: "Canvas Tent Tunnel Disinfect Covid-19",
      text: "canvas tent tunnel Disinfect covids (COVID - 19). Body temperature scan with automatic alarm system. and in the tunnel There will be a disinfectant spray kit. as a mist spray automatic work order canvas tent tunnel Disinfect covids (COVID - 19). Body temperature scan with automatic alarm system. and in the tunnel There will be a disinfectant spray kit. as a mist spray automatic work order and the structure is made with stainless steel raw material weather resistant with canvas tent Manufactured from a standardized factory 5 year warranty",
      // title: "อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19)",
      // text: "อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19) สแกนวัดอุณหภูมิร่างกายพร้อมทั้งระบบเตือนอัตโนมัติ และในตัวอุโมงค์ จะมีชุดพ่นน้ำยาฆ่าเชื้อ เป็นสเปรย์ละอองฝอย สั่งงานอัตโนมัติ อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19)",
      image: "/assets/img7.png",
    },
    {
      path: "/products8",
      title: "Covid-19 Disinfection Tunnel Series2",
      text: "Disinfectant spray tunnel for COVID-19 canvas dance tunnel Disinfection of COVID-19 is a tunnel that can move easy to install Inside the tunnel, there will be a disinfectant spray kit for COVID - 19 - The covid disinfection tunnel is suitable for community areas such as markets, buildings and other points.",
      // title: "อุโมงค์ฆ่าเชื้อโควิด COVID-19 series2",
      // text: "อุโมงค์พ่นน้ำยาฆ่าเชื้อโรค COVID-19 อุโมงค์เต้นผ้าใบฆ่าเชื้อโควิด-19 เป็นอุโมงค์ ที่สามารถเคลื่อนที่ ติดตั้งได้ง่าย ในตัวอุโมงค์จะมีชุดพ่นน้ำยาฆ่าเชื้อ COVID 19",
      image: "/assets/img8.png",
    },
  ],
}) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 830,
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
          dots: false,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <div className={styles.Section_card}>
        <h4>PRODUCTS & SERVICE</h4>

        <Slider {...settings} arrows={true} ref={setSliderRef} className="">
          {listTestimoni.map((listTestimonis, index) => (
            <div className="px-3 flex items-stretch" key={index}>
              <Link href={listTestimonis.path}>
                <a>
                  <Card className={styles.card}>
                    <div>
                      <Image
                        height="250"
                        width="500"
                        // objectFit="fill"
                        alt="image"
                        src={listTestimonis.image}
                        layout="responsive"
                      />

                      <CardBody className="p-3 mb-3">
                        <CardTitle tag="h5">{listTestimonis.title}</CardTitle>
                        <CardText className={styles.cardtext}>
                          {listTestimonis.text}
                        </CardText>
                      </CardBody>
                    </div>
                  </Card>
                </a>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimoni;
