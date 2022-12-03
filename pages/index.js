import Head from "next/head";
import Testimoni from "/components/UI/Testimoni";
import Section_image from "../components/UI/Section_image";
import Section_Image_Carousel from "../components/UI/Section_Image_Carousel";
import Header from "../components/Layout/Header";
import Navbuttom from "../components/Layout/Navbuttom";
import Cardimages from "../components/UI/Cardimages";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>บริษัท ภพ ออโตเมชั่น</title>
        <meta
          name="description"
          content="เครื่องจักร
automation
ภพ
phop
phopautomation
ระบบโรงงาน
บริษัทภพ
เครื่องจักร
บริษัท ภพ ออโตเมชั่น"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbuttom />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 1,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <Header />
        <Section_image />
        <Testimoni />
        <Cardimages />
      </motion.div>
      {/* <Section_Image_Carousel /> */}
    </>
  );
}
