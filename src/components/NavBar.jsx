import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Eeuu from "../image/eeuu.png";
import Mexico from "../image/mexico.png";

function NavBar({ setLengua, lengua }) {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const bgDiv = useRef("");
  const linksActive = useRef("");

  const handleClick = () => {
    bgDiv.current.classList.toggle("active");
    linksActive.current.classList.toggle("d-flex");
    setClicked(!clicked);
  };

  const changeBg = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <nav className="navbar-container">
      <div className={navbar ? "navbar-bg" : "navbar-nobg"}>
        <div className="left">
          <div className="links">
            <motion.a
              viewport={{ once: true }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
              className={navbar ? "underline-black" : " underline-white"}
              href="#inicio"
            >
              {lengua ? "Home" : "Inicio"}
            </motion.a>
            <motion.a
              viewport={{ once: true }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
              className={navbar ? " underline-black" : "underline-white"}
              href="#portafolio"
            >
              {lengua ? "Portfolio" : "Portafolio"}
            </motion.a>
            <motion.a
              viewport={{ once: true }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
              className={navbar ? "underline-black" : " underline-white"}
              href="#skills"
            >
              {lengua ? "Skills" : "Habilidades"}
            </motion.a>
            <motion.a
              viewport={{ once: true }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.6 },
              }}
              className={navbar ? " underline-black" : " underline-white"}
              href="#about"
            >
              {lengua ? "About" : "Sobre mi"}
            </motion.a>

            <motion.a
              viewport={{ once: true }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.8 },
              }}
              className={navbar ? "underline-black" : " underline-white"}
              href="#contacto"
            >
              {lengua ? "Contact" : "Contacto"}
            </motion.a>
          </div>
          <i
            type="button"
            onClick={handleClick}
            className={`menu bi ${navbar ? "text-dark" : "text-white "} ${
              clicked ? "bi-x text-white" : "bi-list"
            }`}
          ></i>
        </div>
        <div className="right">
          <div className="logo">
            <motion.img
              viewport={{ once: true }}
              initial={{ x: 100, opacity: 0 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setLengua(true);
              }}
              src={Eeuu}
            />
            <motion.img
              viewport={{ once: true }}
              initial={{ x: 100, opacity: 0 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setLengua(false);
              }}
              src={Mexico}
            />
          </div>
        </div>
        <div ref={bgDiv} className="bg-div">
          <div ref={linksActive} className="links-active">
            <a onClick={handleClick} href="#inicio">
              {lengua ? "Home" : "Inicio"}
            </a>
            <a onClick={handleClick} href="#portafolio">
              {lengua ? "Portfolio" : "Portafolio"}
            </a>
            <a onClick={handleClick} href="#skills">
              {lengua ? "Skills" : "Habilidades"}
            </a>
            <a onClick={handleClick} href="#about">
              {lengua ? "About me" : "Sobre mi"}
            </a>
            <a onClick={handleClick} href="#contacto">
              {lengua ? "Contact" : "Contacto"}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
