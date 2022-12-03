import React from "react";
import Image from "next/image";
import styles from "../styles/products.module.css";
import img1 from "../public/images/img-agv.png";
import img2 from "../public/images/img_agv2.png";
import img3 from "../public/images/img-agv3.png";
import { Card, Container, CardTitle, CardBody } from "reactstrap";
import Navbuttom from "../components/Layout/Navbuttom";

const products9 = () => {
  return (
    <>
      <Navbuttom />
      <div className={styles.content}>
        <div className={styles.containerproducts}>
          <Container>
            <Card className="card my-5 mx-3 p-3">
              <CardBody>
                <CardTitle>
                  <h1 className="m-5">AGV/AMRs</h1>
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
                  <p>AGV/AMRs</p>

                  <ul>
                    <li className="mb-2">
                      In people private livesWe are usually familiar with
                      robot vacuum cleaners.And the concept of self-driving
                      cars.Now, all industriesStart investing in automation on a
                      global scaleTo improve production and logistics.With the
                      flexibility of work, AGV provides a good choice to start
                      moving or uninstalling automation system.
                    </li>
                    <li className="mb-2">
                      AGV / AMRs is an abbreviation used to describe autonomous
                      vehicles used to transport products or materials around
                      them. warehouse or manufacturing plant which can help
                      increase efficiency and productivity At the same time
                      reducing damage and reducing the cost of products, for
                      example, large vehicles. It can be replaced with smaller
                      AGV/AMRs , thereby maximizing storage density.
                    </li>
                    <li className="mb-2">
                      AGV / AMRs are vehicles, simply referred to as vehicles
                      that are used for unmanned indoor transportation. that
                      helps to move goods and equipment inside the warehouse and
                      industrial plants accurately Outstanding weight support
                      and conveying properly and safely even without light or
                      able to work with humans effectively
                    </li>
                    <li className="mb-2">
                      moreover This is essential for any new business in this
                      era that operates on manufacturing. And the warehouse must
                      make the system more efficient. The use of Automated
                      Guided Vehicles (AGVs) and Robots has therefore become
                      popular. And its also a way to lead in the digital world.
                    </li>
                  </ul>

                  <hr></hr>
                  <br></br>

                  <p>How AGVs /AMRs can increase your productivity</p>

                  <ul>
                    <li className="mb-2">
                      With a highly competitive market and change throughout the
                      year. Thus leading to the era of IOT (Internet of Things)
                      or Industry 4.0, manufacturers are looking for different
                      methods. to be a market leader as well as the rise of
                      automated warehouse systems both in general warehouses and
                      in industrial plants.
                    </li>

                    <li className="mb-2">
                      AGV and E-COMMERCE, AGV vehicles or Robot AGVs have been
                      brought into warehouses until they are continuously
                      popular. because it is a complex area Every day, a large
                      number of goods are imported and exported. There are also
                      various types of products. Location management, order
                      picking, replenishment, stock management , if used by one
                      person alone can cause delays and a high chance of error.
                      In the E-COMMERCE market, the world leader in logistics,
                      Amazon Or Alibaba has used AGVs to manage a large number
                      of products in an intelligent warehouse system .
                    </li>
                    <li className="mb-2">
                      AGV and Manufacturing With the ability to withstand heavy
                      loads in handling and conveying, the Robot AGV can greatly
                      increase the efficiency of operations in industrial
                      production lines for handling pallets, raw materials or
                      finished goods .
                    </li>
                  </ul>

                  <hr></hr>
                  <br></br>

                  <p>How many types of AGV/AMRs are there?</p>
  
                  <ul>
                    <li className="mb-2">
                      These vehicles can be divided into two. Main categories
                      include: 
                      <br></br>
                      <ul>

                        <li>1. Navigation system type </li>
                        <li>2. Intelligent navigation system</li>
                      </ul>
                    </li>
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

                  <hr></hr>
                  <br></br>

                  <p>1. Navigation system</p>
                  <ul>
                    <li className="mb-2">
                      But before AGV It is a call used to describe a car that
                      moves autonomously.The AGV will be booted by configuring
                      it.Markers detected by a set of sensorsSome applications
                      may require multiple tags to provide AGV.The most popular
                      navigation method is
                      <ul>
                        <li>
                          Upper sensor for laser positioning by this methodAGV
                          It will scan the workpiece placed at a known position
                          in the workspace again.Then the vehicle analyzes the
                          signal from the workpiece again.And calculate the
                          accurate relative position.And a strip algorithm.
                        </li>
                        <li>
                          Other navigation methods include magnetic tape
                          navigation Built-in wired navigation map navigation
                          and light navigation
                        </li>
                      </ul>
                    </li>
                    
                    <li className="mb-2">
                      These navigation and methods vary depending on the type of
                      sensor or marker used.
                    </li>
                  </ul>

                  <hr></hr>
                  <br></br>

                  <p>2. intelligent navigation</p>

                  <ul>
                   
                    <li className="mb-2">
                      AMRs is a breakthrough of AGV technology, defined by
                      AMR.That is running without navigation Nor is it based
                      on various markers.Guide them to their destination.In some
                      cases, new destinations are needed.Magnetic stripe may be
                      the first choice for newer AMRs applications.More
                      intelligently, there is now 2d or 3d mapping.Including
                      cameras, sensors and algorithms with more complex
                      dimensions.Let more AMRs make their own decisions.Sensors
                      are used, among which lidar is the most popular choice.The
                      laser sensor adopts pulse laser.And the high sensitivity
                      detector is explored.And measure the distance from the
                      object. This is helpful for localization.And mapping
                      technology, while generating mapping from unknown
                      environment.And keep the position inside that map through
                      this advanced control.AMRsIt can set its own path to avoid
                      blocking.
                    </li>
                  </ul>

                  <hr></hr>
                  <br></br>
                 
                  <h5>
                    This paper mainly introduces the design of AGV/AMR car
                    {/* <br></br>  */}
                    AGV and AMR.It can be divided into five main
                    parts: battery, control box,Sensors, mechanisms and
                    propulsion systems
                  </h5>
                  <br></br>

                  <ul>
                    <li className="mb-2">
                      atteryThe energy of the car is the energy required by
                      every electrical equipment in the car.The types of
                      batteries used include lead and acid water,Nicad, lithium
                      ion, inductive power supply and batteryBefore the battery
                      is exhausted, AGV/AMRSome models will recommend replacing
                      the battery to keep it working.Some can be programmed back
                      to the charging station.
                    </li>
                    <li className="mb-2">
                      The control box is like the brain command of AGV/AMR.Use
                      PLC, PAC or IPC for control.A data program may be needed
                      to complete the corresponding work.HMI programming,
                      through Touchscreen orInput panel is like input.
                    </li>
                    <li className="mb-2">
                      Different types of sensorsIt acts on the eyes of the
                      vehicle and provides information about the vehicle
                      environment.Obstacles can be detected in two ways:Pressure
                      sensor for laser sensing or mechanical collision
                      detectionAccording to ANSI/ITSDF B56 safety standard.
                      5-2012Serve as a guide to AGV/AGV operation
                      requirements.AMR also uses a return signal device.Such as
                      an encoder, a solver or a Hall effect sensor.To calculate
                      the distance traveled and check the speed of the vehicle.
                    </li>
                    <li className="mb-2">
                      Any movementThe external drive system is classified as
                      peripheral mechanism, and in most vehicles, there may be
                      lifting mechanism.To lift the weight, and may become the
                      air intake tray of the door.Or an arm controlled by a
                      motor or actuator.
                    </li>
                    <li className="mb-2">
                      drive system It consists of a wheel drive shaft, an
                      electric motor and a gearhead. These components move and
                      control the vehicle. Typically, the direction of the car
                      is controlled by the rotation of the wheels in
                      synchronization or independently.
                    </li>
                  </ul>

                  <hr></hr>
                  <br></br>

                  <Image
                    alt="img"
                    src={img3}
                    width=""
                    height=""
                    layout="responsive"
                    // objectFit="scale-down"
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

export default products9;
