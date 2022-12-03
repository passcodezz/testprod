// import React, { useEffect, useState, useRef } from "react";

// export default function IndexPage() {
//   function translateLanguage(lang) {
//     googleTranslateElementInit();
//     const frame = document.getElementsByClassName("goog-te-menu-frame")[0];
//     if (!frame) return;
//     const items = frame.contentDocument.documentElement.querySelectorAll(
//       ".goog-te-menu2-item"
//     );
//     items.forEach((element) => {
//       if (lang == element.getElementsByTagName("span")[1].innerText)
//         element.click();
//     });
//     return false;
//   }

//   function googleTranslateElementInit() {
//     if (!google) return;
//     new google.translate.TranslateElement(
//       {
//         pageLanguage: "en",
//         includedLanguages: "en,th", // include this for selected languages
//         layout: google.translate.TranslateElement.InlineLayout.Horizontal,
//         autoDisplay: false,
//         // multilanguagePage: true,
//       },
//       "google_translate_element"
//     );
//   }

//   useEffect(() => {
//     let script = document.createElement("script");
//     script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
//     document.body.insertBefore(script, document.body.childNodes[0]);
//   }, []);
//   return (
//     <div>
//       <div id="google_translate_element"></div>
//       <CustomSelect onChange={translateLanguage} />
//       {/* <div>This is just a table.</div> */}
//     </div>
//   );
// }

// const CustomSelect = ({ onChange }) => {
//   const [lang, setLang] = useState(LANGS[1]);
//   const [isShow, setIsShow] = useState(false);
//   const ref = useRef(null);
//   useClickOutside(ref, () => setIsShow(false));
//   return (
//     <div className="w-24 cursor-pointer relative">
//       <div onClick={() => setIsShow(false)} ref={ref}>
//         {/* <span className={`flag-icon ${lang.icon}`} /> {` ${lang.name}`} */}
//       </div>
//       <div
//         className={`border-b-0 absolute top-6 left-0 bg-white ${
//           !isShow && "hidden"
//         }`}
//       >
//         {LANGS.map((lang, index) => (
//           <div
//             key={index}
//             className="border-b"
//             onClick={() => {
//               setLang(lang);
//               onChange(lang);
//             }}
//           >
//             <span className={`flag-icon ${lang.icon}`} />
//             {` ${lang.name}`}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const LANGS = [
//   {
//     name: "แปลภาษา",
//     // icon: "flag-icon-us",
//   },
//   {
//     name: ".",
//     icon: "flag-icon-fr",
//   },
//   { name: ".", icon: "flag-icon-es" },
// ];

// const useClickOutside = (ref, callback) => {
//   const handleClick = (e) => {
//     if (ref.current && !ref.current.contains(e.target)) {
//       callback(e);
//     }
//   };
//   React.useEffect(() => {
//     document.addEventListener("click", handleClick);
//     return () => {
//       document.removeEventListener("click", handleClick);
//     };
//   });
// };
