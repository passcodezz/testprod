import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/homepage.module.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  CarouselProps,
  captionHeader,
} from "reactstrap";

const items = [
  {
    src: "https://phopautomation.vercel.app/images/img1.png",
    altText: "conveyor",
    caption:
      "Manufacturers, distributors and importersTransport machinery and innovationIndustrial shelf  systemProduction line ,line  conveyor  by professionals, complete from start to finish.",
    key: 1,

    // altText: "คอนเวเยอร์",
    // caption:
    //   "ผู้ผลิต จำหน่าย และนำเข้า เครื่องจักรอุปกรณ์และนวัตกรรมด้านการขนส่งลำเลียง ระบบจัดเก็บสินค้า ระบบชั้นวางสินค้าอุตสาหกรรม และงานโลจิสติกส์ สร้างไลน์การผลิต (Production Line) ไลน์คอนเวเยอร์ (Conveyor line) โดยมืออาชีพ อย่างครบวงจรตั้งแต่เริ่มต้นจนเสร็จสิ้น",
    // key: 1,
  },
  {
    src: "https://phopautomation.vercel.app/images/img2.png",
    altText: "Industrial Shelf (HeavyRack)",
    caption:
      "Industrial product shelf design service, shelf, inventory shelf, storage layerSpare parts rack and general cargo rackFree consultation from manufacturers and distributors of products on shelves.",
    key: 2,
    // altText: "ชั้นวางสินค้าอุตสาหกรรม Heavy Rack",
    // caption:
    //   "บริการออกแบบผลิต ชั้นวางสินค้าอุตสาหกรรม ชั้นเก็บสินค้า,ชั้นวางของ,ชั้นสต็อกสินค้า,ชั้นเก็บของ ชั้นวางอะไหล่ และวางสินค้าทั่วไป ผู้ผลิตและจัดจำหน่ายชั้นวางสินค้า รับปรึกษาฟรี",
    // key: 2,
  },
  {
    src: "https://phopautomation.vercel.app/images/img7.png",
    altText: "canvas tent tunnel Disinfect Covid-19 (COVID-19)",
    caption:
      "canvas tent tunnel Disinfect covids (COVID - 19). Body temperature scan with automatic alarm system. and in the tunnel There will be a disinfectant spray kit. as a mist spray automatic work order canvas tent tunnel Disinfect Covid-19 (COVID-19)",
    key: 3,
    // altText: "อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19)",
    // caption:
    //   "อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19) สแกนวัดอุณหภูมิร่างกายพร้อมทั้งระบบเตือนอัตโนมัติ และในตัวอุโมงค์ จะมีชุดพ่นน้ำยาฆ่าเชื้อ เป็นสเปรย์ละอองฝอย สั่งงานอัตโนมัติ อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19)",
    // key: 3,
  },
];

const Section_Image_Carousel = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className={styles.Section_Image_Carousel}>
          <Image
            src={item.src}
            alt={item.altText}
            width="90%"
            height="30%"
            layout="responsive"
          />

          <CarouselCaption
            className={styles.Text_Carousel}
            captionText={item.caption}
            captionHeader={item.altText}
          />
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Section_Image_Carousel;
