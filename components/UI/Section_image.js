import Image from "next/image";
import styles from "../../styles/homepage.module.css";
import icon1 from "../../public/images/icon1.png";
import icon2 from "../../public/images/icon2.png";
import icon3 from "../../public/images/icon3.png";
import icon4 from "../../public/images/icon4.png";

const Section_image = ({
  listUser = [
    {
      title: "PROFESSIONAL",
      text: "Engineer Consultation Team",
      icon: icon1,
    },
    {
      title: "AUTHORIZED DISTRIBUTOR",
      text: "Genuine Product Guarantee",
      icon: icon2,
    },
    {
      title: "SKILLFULL",
      text: "Installation Team",
      icon: icon3,
    },
    {
      title: "HIGH EXPERIENCE",
      text: "After-Sale Service and Maintenance Team",
      icon: icon4,
      // icon: "https://phopautomation.vercel.app/images/icon4.png",
    },
  ],
}) => {
  return (
    <>
   
      <div className={styles.section_image}>
        <div className="row">
          {listUser.map((listUsers , index) => (
            <div className="col-lg-3" key={index}>
              <div className={styles.section_image_in}>
                <Image
                  height="100"
                  width="100"
                  alt="hero-image"
                  src={listUsers.icon}
                />
                <div className={styles.boxtextinner}>
                  <h5>{listUsers.title}</h5>
                  <p>{listUsers.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section_image;
