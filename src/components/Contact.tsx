import React, { useState, useEffect, useRef } from "react";
import { contactData} from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeUser, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Contact: React.FC = () => {
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();
  const { theme } = useTheme();

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


  const [cursorBlink, setCursorBlink] = useState<boolean>(true);

  cursorBlink;
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 400);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  //   const codeSnippet2 = `
  // // 🚀 Initiating Quantum Email Transmission 🪐
  // const launchEmail = async () => {
  //   try {
  //     const response = await fetch('https://alpaycelik.dev/send',{
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //      sender,
  //      recipient,
  //      subject,
  //      message
  //     })
  //    });

  //    if (response.ok) {
  //    console.log('🌌 Transmission successful!');
  //    } else {
  //    console.error('🌠 Cosmic glitch encountered...');
  //    }
  //   } catch (error) {
  //   console.error('🌪 Quantum disturbance detected:', error);
  //   }
  // };
  // // 🚀 Ready for Liftoff? 🛸
  // launchEmail();`;

  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[1921px]:px-[55rem] mt-16"
        id="contact"
      >
        <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16  max-lg:p-16"
          ref={ref}
        >
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "center",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-[--orange]">&lt;</span>
              {language === "DE" ? contactData.title.de : contactData.title.en}
              <span className="text-[--orange]">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center">
              {language === "DE"
                ? contactData.description.de
                : contactData.description.en}
            </h2>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center items-start px-32 pt-32 mb-32 max-lg:flex-col max-lg:p-10">


          <div className="w-1/2  bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-darkblue duration-500 transition-all  quote-outer-container text-left max-lg:hidden cursor-progress">
            <MapContainer center={[-18.923055170515973, 47.52774445326951]} zoom={15} style={{ width:'100%', height: '500px' }} scrollWheelZoom={false}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[-18.923055170515973, 47.52774445326951]}>
                <Popup>
                    My home
                </Popup>
              </Marker>
            </MapContainer>

          </div>

          <div className="flex flex-col gap-6 justify-center items-center  px-32 w-1/2 max-lg:w-full max-lg:p-10">
            <div className={`${
                  theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow px-10 py-10  rounded-t-xl rounded-b-xl w-full"
                    : "bg-[--icewhite] dark-shadow px-10 py-10  rounded-t-xl rounded-b-xl w-full"
                }`}>
                  <FontAwesomeIcon icon={faHomeUser} style={{fontSize: "20px"}}/>
                  <span style={{fontSize: "20px"}}>&nbsp;&nbsp;&nbsp;Lot III F 108 A Mahamasina, Antananarivo</span>
            </div>
            <div className={`${
                  theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow px-10 py-10  rounded-t-xl rounded-b-xl w-full"
                    : "bg-[--icewhite] dark-shadow px-10 py-10  rounded-t-xl rounded-b-xl w-full"
                }`}>
                  <FontAwesomeIcon icon={faPhone} style={{fontSize: "20px"}}/>
                  <span style={{fontSize: "20px"}}>&nbsp;&nbsp;&nbsp;+261 32 96 757 33</span>
            </div>
            <div className={`${
                  theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow px-10 py-10  rounded-t-xl rounded-b-xl w-full"
                    : "bg-[--icewhite] dark-shadow px-10 py-10  rounded-t-xl rounded-b-xl w-full"
                }`}>
                    <FontAwesomeIcon icon={faMailBulk} style={{fontSize: "20px"}}/>
                  <span style={{fontSize: "20px"}}>&nbsp;&nbsp;&nbsp;henitsoaramaroson@gmail.com</span>
            </div>
            <div className={`${
                  theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow px-10 py-10  rounded-t-xl rounded-b-xl w-full"
                    : "bg-[--icewhite] dark-shadow px-10 py-10  rounded-t-xl rounded-b-xl w-full"
                }`}>
                    <FontAwesomeIcon icon={faLinkedin} style={{fontSize: "20px"}}/>
                  <span style={{fontSize: "20px"}}>&nbsp;&nbsp;&nbsp;Tahiry RAMAROSON</span>
            </div>
            <div className={`${
                  theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow px-10 py-10  rounded-t-xl rounded-b-xl w-full"
                    : "bg-[--icewhite] dark-shadow px-10 py-10  rounded-t-xl rounded-b-xl w-full"
                }`}>
                    <FontAwesomeIcon icon={faFacebook} style={{fontSize: "20px"}}/>
                  <span style={{fontSize: "20px"}}>&nbsp;&nbsp;&nbsp;Tahiry Ramaroson</span>
            </div>
            <div className={`${
                  theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow px-10 py-10  rounded-t-xl rounded-b-xl w-full"
                    : "bg-[--icewhite] dark-shadow px-10 py-10  rounded-t-xl rounded-b-xl w-full"
                }`}>
                    <FontAwesomeIcon icon={faGithub} style={{fontSize: "20px"}}/>
                  <span style={{fontSize: "20px"}}>&nbsp;&nbsp;&nbsp;TahiryRamaroson (TahiryHenitsoa)</span>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
