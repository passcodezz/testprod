import React from "react";
import Image from "next/image";
import styles from "../styles/products.module.css";
import img1 from "../public/images/covide1.png";
import img2 from "../public/images/covid19-1.png";
import img3 from "../public/images/covid19-2.png";
import img4 from "../public/images/img7.png";
import { Card, Container, CardTitle, CardBody } from "reactstrap";
import Navbuttom from "../components/Layout/Navbuttom";

const Products7 = () => {
  return (
    <>
      <Navbuttom />
      <div className={styles.content}>
        <div className={styles.containerproducts}>
          <Container>
            <Card className="card my-5 mx-3 p-3">
              <CardBody>
                <CardTitle>
                  {/* <h1 className="m-5">
                    อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19)
                  </h1> */}
                  <h1 className="m-5">
                    Canvas Tent Tunnel Disinfect Covid-19 (COVID-19)
                  </h1>
                  <hr></hr>
                  <br></br>
                </CardTitle>
                <Image
                  alt="img"
                  src={img1}
                  width=""
                  height=""
                  layout="responsive"
                  // objectFit="cover"
                  className="d-inline-block align-top"
                />
                {/* <p>
                  อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19)
                  สแกนวัดอุณหภูมิร่างกายพร้อมทั้งระบบเตือนอัตโนมัติ
                  และในตัวอุโมงค์ จะมีชุดพ่นน้ำยาฆ่าเชื้อ เป็นสเปรย์ละอองฝอย
                  สั่งงานอัตโนมัติ อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19)
                  สแกนวัดอุณหภูมิร่างกายพร้อมทั้งระบบเตือนอัตโนมัติ
                  และในตัวอุโมงค์ จะมีชุดพ่นน้ำยาฆ่าเชื้อ เป็นสเปรย์ละอองฝอย
                  สั่งงานอัตโนมัติ และโครงสร้างทำด้วย วัตดุดิบสแตนเลส
                  ทนทานต่อสภาพอากาศ พร้อมเต็นท์ผ้าใบ ผลิตจากโรงงานที่ได้มาตรฐาน
                  รับประกันการใช้งาน 5 ปี
                </p> */}
                <p>
                  canvas tent tunnel Disinfect covids (COVID - 19). Body
                  temperature scan with automatic alarm system. and in the
                  tunnel There will be a disinfectant spray kit. as a mist spray
                  automatic work order canvas tent tunnel Disinfect covids
                  (COVID - 19). Body temperature scan with automatic alarm
                  system. and in the tunnel There will be a disinfectant spray
                  kit. as a mist spray automatic work order and the structure is
                  made with stainless steel raw material weather resistant with
                  canvas tent Manufactured from a standardized factory 5 year
                  warranty
                </p>
                {/* <h2>ราคาพิเศษ 82,500 บาท เท่านั้น</h2> */}
                <h2>Special price 82,500 baht only</h2>
                {/* <p>
                  เหมาะสำหรับบ้าน ที่พัก คอนโด ร้านอาหาร ผับ ร้านเหล้า ร้านค้า
                  ออฟฟิศ สำนักงาน โรมแรม หอพัก อพาร์ทเม้น
                  ห้องเช่ารายวัน/รายเดือน ร้านนวด สปา ฟิตเนต
                </p> */}
                <p>
                  Suitable for houses, accommodation, condos, restaurants, pubs,
                  liquor stores, shops, offices, offices, hotels, dormitories,
                  apartments, daily/monthly rental rooms, massage parlors, spas,
                  fitness centers.
                </p>
                {/* <ul>
                  <li className="mb-2">
                    ประหยัด ปลอดภัย เคลื่อนย้ายสะดวก ติดตั้งง่าย
                    เต้นท์สามารถพับเก็บได้ คุ้มต่อการลงทุน
                  </li>
                  <li className="mb-2">
                    อุปกรณ์มาตรฐาน
                    <ul>
                      <li className="mb-2">เต้นท์</li>
                      <li className="mb-2">ชุดสแกน & ชุดคอนโทรล</li>
                      <li className="mb-2">
                        ถัง 100L + รถเข็น + ปั๊ม (pump. )
                      </li>
                      <li className="mb-2">ชุดพ่นสเปรย์ Nozzle.</li>
                    </ul>
                  </li>
                  <li className="mb-2">อุปกรณ์เพิ่มพิเศษ ( Special )</li>
                  <ul>
                    <li className="mb-2">ไฟเตือน Tower Light</li>
                  </ul>
                </ul> */}
                <ul>
                  <li className="mb-2">
                    Economical, safe, easy to move, easy to install, the tent
                    can be folded up. worth the investment
                  </li>
                  <li className="mb-2">
                    standard equipment
                    <ul>
                      <li className="mb-2">tent</li>
                      <li className="mb-2">Scan & Control Unit</li>
                      <li className="mb-2">100L tank + cart + pump (pump.)</li>
                      <li className="mb-2">Spray nozzle set.</li>
                    </ul>
                  </li>
                  <li className="mb-2">Extra equipment ( Special )</li>
                  <ul>
                    <li className="mb-2">Tower Light</li>
                  </ul>
                </ul>
                <br></br>
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
                <br></br>
                {/* <p>- สินค้าพรีออเดอร์ 10-15 วัน</p>
                <p>- ส่งฟรีพร้อมติดตั้งฟรี ⚡️</p>
                <p>***ในเขตปริมณฑล***</p>
                <p>〰️ต่างจังหวัดมีค่าใช้จ่าย〰️</p>
                <p>- พร้อมให้คำปรึกษาตลอด 24 ชม.</p>
                <p>
                  - รับประกันคุณภาพสินค้า คงทนต่อทุกสภาพอากาศ เคลื่อนย้ายได้
                  พับเก็บได้ทันทีเมื่อใช้งานเสร็จ
                </p>
                <p>⛑รับประกันความปลอดภัย ⛑</p>
                <p>🌪 บริการดี ส่งถึงที่ โทรเลย 🌪</p>
                <br></br>
                <p>☎️ สนใจสอบถามข้อมูลเพิ่มเติมได้ที่ ☎️</p>
                <p>📱: 087-260-7999, 085-108-4246</p> */}
                <p>- Pre-order products 10-15 days</p>
                <p>- Free delivery with free installation ⚡️</p>
                <p>***In the metropolitan area***</p>
                <p>〰️ Other provinces have a fee 〰️</p>
                <p>- Ready to give advice 24 hours a day.</p>
                <p>
                  - Guaranteed product quality Resistant to all weather
                  conditions moveable Can be folded up immediately after use.
                </p>
                <p>⛑ SAFETY GUARANTEED ⛑</p>
                <p>🌪 Good service, delivered to the location. Call now 🌪</p>
                <br></br>
                <p>☎️ If interested, ask for more information at ☎️</p>
                <p>📱: 087-260-7999, 085-108-4246</p>
              </CardBody>
            </Card>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Products7;
