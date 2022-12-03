import React from "react";
import Image from "next/image";
import styles from "../styles/products.module.css";

import img1 from "../public/images/img2.png";
import img2 from "../public/images/RACKING-AND-SHELT.jpg";

import { Card, Container, CardTitle, CardBody } from "reactstrap";
import Navbuttom from "../components/Layout/Navbuttom";

const products2 = () => {
  return (
    <>
       <Navbuttom />

      <div className={styles.content}>
        <div className={styles.containerproducts}>
          <Container>
            <Card className="card my-5 mx-3 p-3">
              <CardBody>
                <CardTitle>
                  {/* <h1 className="m-5">ชั้นวางสินค้าอุตสาหกรรม Heavy Rack</h1> */}
                  <h1 className="m-5">Industrial Shelf (HeavyRack)</h1>
                  <hr></hr>
                  <br></br>
                </CardTitle>

                <CardTitle>
                  <Image
                    alt="img"
                    src={img1}
                    width=""
                    height=""
                    layout="responsive"
                    // objectFit="cover"
                    className="d-inline-block align-top"
                  />
                  <br></br>
                  <p>
                    Industrial product shelf design service, shelf, inventory
                    shelf, storage layerSpare parts rack and general cargo
                    rackFree consultation from manufacturers and distributors of
                    products on shelves.
                  </p>

                  {/* <p>
                    บริการออกแบบผลิต ชั้นวางสินค้าอุตสาหกรรม
                    ชั้นเก็บสินค้า,ชั้นวางของ,ชั้นสต็อกสินค้า,ชั้นเก็บของ
                    ชั้นวางอะไหล่ และวางสินค้าทั่วไป
                    ผู้ผลิตและจัดจำหน่ายชั้นวางสินค้า รับปรึกษาฟรี
                  </p> */}

                  <ul>
                    {/* <li className="mb-2">ไมโครแร็ค (Micro Rack)</li>
                    <li className="mb-2">มีเดียมแร็ค (Medium Rack)</li>
                    <li className="mb-2">สายพานลำเลียง (conveyer belt)</li> */}
                    <li className="mb-2">Micro Rack</li>
                    <li className="mb-2">Medium Rack</li>
                    <li className="mb-2">conveyer belt</li>
                  </ul>

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
                </CardTitle>
              </CardBody>
            </Card>
          </Container>
        </div>
      </div>
    </>
  );
};

export default products2;
