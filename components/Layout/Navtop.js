import Image from "next/image";
import styles from "../../styles/header.module.css";
import icon from "../../public/images/icon_phone.jpg";
import icon2 from "../../public/images/iogo2.png";
import { Container, Navbar, Nav, Row, Button } from "reactstrap";
import React, { useEffect, useState, useRef } from "react";
import logo from "/public/images/logo-new.png";

const Navtop = () => {
  function translateLanguage(lang) {
    googleTranslateElementInit();
    const frame = document.getElementsByClassName("goog-te-menu-frame")[0];
    if (!frame) return;
    const items = frame.contentDocument.documentElement.querySelectorAll(
      ".goog-te-menu2-item"
    );
    items.forEach((element) => {
      if (lang == element.getElementsByTagName("span")[1].innerText)
        element.click();
    });
    return false;
  }

  function googleTranslateElementInit() {
    if (!google) return;
    new google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,th", // include this for selected languages
        // layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        multilanguagePage: true,
      },
      "google_translate_element"
    );
  }

  useEffect(() => {
    let script = document.createElement("script");
    script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
    document.body.insertBefore(script, document.body.childNodes[0]);
  }, []);
  return (
    <div>
      {/* <div id="google_translate_element"></div> */}
      <CustomSelect onChange={translateLanguage} />
      {/* <div>This is just a table.</div> */}
    </div>
  );
};

const CustomSelect = ({ onChange }) => {
  const [lang, setLang] = useState(LANGS[1]);
  const [isShow, setIsShow] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setIsShow(false));
  return (
    <>
      {/* collapseOnSelect */}
      <Navbar className={styles.Navbarcolor} expand="lg">
        <Container>
          <div className={styles.navbar}>
            <Navbar>
              {/* <h6 id={styles.textheader}>
                มุ่งเน้นพัฒนาการผลิตที่ทันสมัยมีคุณภาพได้มาตรฐาน และ
                บริการที่ตรงความต้องการลูกค้า
              </h6> */}
              <h6 id={styles.textheader}>
                Focus on the development of modern production with standard
                quality and services that meet the needs of customers.
              </h6>{" "}
              <Nav className="float-right mx-4">
                <p className="mt-3" id={styles.textheader}>
                  <Image
                    alt="icon"
                    src={icon}
                    width="18"
                    height="18"
                    className={styles.iconphone}
                  />
                </p>
                <Nav
                  id={styles.textheader}
                  className="float-right text-white mt-3 ms-3"
                >
                  <p>087-260-7999, 085-108-4246</p>
                </Nav>
              </Nav>
            </Navbar>

            {/* <Nav className="float-right">
              <p className="mt-3" id={styles.textheader}>
                <Image
                  alt="icon"
                  src={icon}
                  width="18"
                  height="18"
                  className={styles.iconphone}
                />
              </p>
              <Nav
                id={styles.textheader}
                className="float-right text-white mt-3 ms-3"
              >
                <p>087-260-7999, 085-108-4246</p>
              </Nav>
            </Nav> */}

            <div className="w-24 cursor-pointer relative">
              <div onClick={() => setIsShow(false)} ref={ref}>
                {/* <span className={`flag-icon ${lang.icon}`} /> {` ${lang.name}`} */}
              </div>
              <div
                className={`border-b-0 absolute top-0 left-0  ${
                  !isShow && "hidden"
                }`}
              >
                {LANGS.map((lang, index) => (
                  <div
                    key={index}
                    className="border-b"
                    onClick={() => {
                      setLang(lang);
                      onChange(lang);
                    }}
                  >
                    {/* <span className={`flag-icon ${lang.icon}`} /> */}
                    {/* {` ${lang.name}`}  */}

                    <div className={styles.text}>
                      <Image
                        // style={{ marginTop: 10 }}
                        alt="icon"
                        src={icon2}
                        width="20"
                        height="20"
                      />
                    </div>
                    <div id="google_translate_element"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
const LANGS = [
  {
    name: "",
    icon: "flag-icon-us",
  },
  // {
  //   name: ".",
  //   icon: "flag-icon-fr",
  // },
  // { name: ".", icon: "flag-icon-es" },
];

const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(e);
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default Navtop;
