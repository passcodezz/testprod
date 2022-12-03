import React, { useState } from "react";

import Slider from "react-slick";
import Image from "next/image";

import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import styles from "../../styles/cardimage.module.css";
import Link from "next/link";

const Testimoni = ({
  listTestimoni = [
    // {
    //   path: "/products6",
    //   title: "Machine",
    //   text: "Machine manufacturing and design the machine according to the concept and provide advice to respond to every application Provide machines and systems that are suitable for the use of customers. 3D design work. Auto paint line.",
    //   title: "เครื่องจักร ",
    //   text: "รับผลิตเครื่องจักร และออกแบบเครื่องจักรตาม Concept พร้อมให้คำแนะนำ เพื่อตอบสนองต่อทุกการใช้งาน ให้เครื่องจักรและระบบเหมาะสมกับการใช้งานของลูกค้า งานออกแบบ 3D เครื่อง ไลน์พ่นสีออโต",
    //   image: "/assets/machinery/IOT - 1.png",
    // },
    {
      image: "/assets/machinery/Ultra Sonic (1).png",
    },
    {
      image: "/assets/machinery/Ultra Sonic (2).png",
    },
    {
      image: "/assets/machinery/Ultra Sonic (3).png",
    },
    {
      image: "/assets/machinery/Ultra Sonic (4).png",
    },
    {
      image: "/assets/machinery/Ultra Sonic.png",
    },
    {
      image: "/assets/machinery/เครื่องตัดผ้า -PICTURE-1 (1).png",
    },
    {
      image: "/assets/machinery/เครื่องตัดผ้า -PICTURE-1 (2).png",
    },
    {
      image: "/assets/machinery/เครื่องตัดผ้า -PICTURE-1 (3).png",
    },
    {
      image: "/assets/machinery/เครื่องตัดผ้า -PICTURE-1 (4).png",
    },
    {
      image: "/assets/machinery/เครื่องตัดผ้า -PICTURE-1.png",
    },
    {
      image: "/assets/machinery/จำหน่าย รถ AGV (1).png",
    },
    {
      image: "/assets/machinery/จำหน่าย รถ AGV (2).png",
    },
    {
      image: "/assets/machinery/จำหน่าย รถ AGV (3).png",
    },
    {
      image: "/assets/machinery/จำหน่าย รถ AGV (4).png",
    },
    // {
    //   image: "/assets/machinery/จำหน่าย รถ AGV.png",
    // },
    {
      image: "/assets/machinery/รูป หน้าเครื่องบรรจุ (1).png",
    },
    {
      image: "/assets/machinery/รูป หน้าเครื่องบรรจุ (2).png",
    },
    {
      image: "/assets/machinery/รูป หน้าเครื่องบรรจุ (3).png",
    },
    {
      image: "/assets/machinery/รูป หน้าเครื่องบรรจุ (4).png",
    },
    {
      image: "/assets/machinery/รูป หน้าเครื่องบรรจุ (5).png",
    },
    {
      image: "/assets/machinery/รูป หน้าเครื่องบรรจุ.png",
    },
  ],
}) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
        <h4>PRODUCTS</h4>
        <Slider {...settings} arrows={true} ref={setSliderRef} className="">
          {listTestimoni.map((listTestimonis, index) => (
            <div className="container" key={index}>
              <div className={styles.cards_list}>
                <div className={styles.card}>
                  <div className={styles.card_image}>
                    <Image
                      height="500"
                      width="500"
                      objectFit="cover"
                      alt="image"
                      src={listTestimonis.image}
                    />
                  </div>
                  {/* <div className={styles.card_title}>
                    <p className={styles.title_white}>Card Title</p>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimoni;
