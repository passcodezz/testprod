import Image from "next/image";
import heroImg from "../../public/images/team2.png";
import styles from "../../styles/header.module.css";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import Infinite from "../../people1.json";
import Infinite1 from "../../infinite1.json";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <section id={styles.hero} className="d-flex align-items-center">
      <Lottie
          loop={false}
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
        <div className="container f_flex top">
          <div className="row">
            <div 
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            
          >
              {/* <h4>บริษัท ภพ ออโตเมชั่น จำกัด</h4> */}
              <h2 className={styles.textpurple}>
                {/* Phop Automation Company Limited */}
                PHOP AUTOMATION COMPANY LIMITED
              </h2>
              <h2>
                {/* PHOP */}
                <span>
                  {/* <Typewriter
                    options={{
                      strings: ["PHOP AUTOMATION CO.,LTD."],
                      autoStart: true,
                      loop: true,
                    }}
                  /> */}
                </span>
              </h2>
              {/* <p>
                ดำเนินธุรกิจเกี่ยวกับ การผลิตเครื่องจักร 
                ชิ้นส่วน อะไหล่ รวมถึง Jig Test และงานประกอบเครื่องปรับอากาศ
                ประเภท Air Cooled Chiller / Water Cooled Chiller รวมถึงระบบไฟฟ้า
                ระบบคอนโทรล ระบบคอนโทรลควบคุมเครื่องจักร ระบบลำเลียงสายพาน
                (Conveyor) ด้วยเทคโนโลยีที่ทันสมัย และงานระบบอื่นๆ
                ที่เกี่ยวข้องกับเครื่องจักรในงานอุตสาหกรรม
                ทั้งในอาคารและสำนักงานต่างๆ
                รวมถึงการออกแบบตามความต้องการลูกค้าเป็นหลัก และในงานด้านบริการ
                งานติดตั้ง งานซ่อมบำรุงเครื่องจักร งานบริการหลังการขาย
                เรามีพร้อมให้บริการ ตามความพึงพอใจลูกค้า
              </p> */}
              <p>
                Mechanical manufacturing Spare parts include test fixture and
                air conditioning unit. Air cooler, water cooler, including
                electrical system. Belt conveyor control system With modern
                technology and other systems Industrial machinery In buildings
                and offices According to customer needs and service design.
                Installation and maintenance services We can according to
                customer satisfaction.
              </p>

              <div className="d-flex justify-content-center justify-content-lg-start">
                <Link href="/contact-us.html">
                  <a className={styles.btngetstarted}>CONTACT</a>
                </Link>

                <Link href="/reference">
                  <a className={styles.btngetstarteds}>REFERENCE</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2">
              {/* <div className={styles.heroimg}>
                <Image
                  alt="hero-image"
                  src={heroImg}
                  width="350"
                  height="350"
                  objectFit="scale-down"
                />
              </div> */}
              <Lottie loop={true} animationData={Infinite} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
