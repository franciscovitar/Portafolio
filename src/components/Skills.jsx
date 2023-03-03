import React from "react";
import Css from "../image/css.png";
import Html from "../image/html.png";
import Js from "../image/javascript.png";
import ReactIcon from "../image/react.png";
import Bootstrap from "../image/bootstrap.png";
import Sass from "../image/sass.png";
import Tailwind from "../image/tailwind.png";
import motionIcon from "../image/framer-motion.webp";
import FormikIcon from "../image/Formik.png";
import gitItcon from "../image/git.png";
import responsive from "../image/responsive.png";
import axiosIcon from "../image/axios.png";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";

function Skills({ lengua }) {
  return (
    <div className="contenedor" id="skills">
      <motion.h2
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 2, delay: 0 },
        }}
      >
        {lengua ? "Skills" : "Habilidades"}
      </motion.h2>
      <motion.div
        className="m-auto line"
        viewport={{ once: true }}
        initial={{ width: 0 }}
        whileInView={{ width: "6%", transition: { duration: 1 } }}
      >
        {" "}
      </motion.div>
      <div className="container-skills">
        <div className="skills-left">
          <h4>Front-End</h4>
          <motion.div
            className="m-auto mb-3 line"
            viewport={{ once: true }}
            initial={{ width: 0 }}
            whileInView={{ width: "7%", transition: { duration: 1 } }}
          >
            {" "}
          </motion.div>
          <div className="skills">
            <div className="skill">
              <motion.img
                data-tooltip-id="html"
                data-tooltip-content="HTML"
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0 },
                }}
                whileHover={{ scale: 1.1 }}
                src={Html}
              />
              <ReactTooltip id="html" className="bg-danger" />

              <motion.img
                data-tooltip-id="css"
                data-tooltip-content="CSS"
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
                whileHover={{ scale: 1.1 }}
                src={Css}
              />
              <ReactTooltip id="css" variant="info" />
            </div>
            {/* <div className="barra-container">
              <div className="barra">
                <motion.div
                  className="barra-cargada"
                  viewport={{ once: true }}
                  initial={{ width: 0 }}
                  whileInView={{
                    width: "90%",
                    transition: { duration: 2 },
                  }}
                ></motion.div>
              </div>
              <CountUp start={0} end={90} delay={0}>
                {({ countUpRef }) => (
                  <p>
                    <span ref={countUpRef}></span>
                    <b>%</b>
                  </p>
                )}
              </CountUp>
            </div> */}
          </div>
          <div className="skills">
            <div className="skill">
              <motion.img
                data-tooltip-id="js"
                data-tooltip-content="JavaScript"
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
                whileHover={{ scale: 1.1 }}
                src={Js}
              />
              <ReactTooltip id="js" className="bg-warning" />
            </div>
            {/* <div className="barra-container">
              <div className="barra">
                <motion.div
                  className="barra-cargada"
                  viewport={{ once: true }}
                  initial={{ width: 0 }}
                  whileInView={{
                    width: "80%",
                    transition: { duration: 2, delay: 0 },
                  }}
                ></motion.div>
              </div>
              <CountUp start={0} end={80} delay={0}>
                {({ countUpRef }) => (
                  <p>
                    <span ref={countUpRef}></span>
                    <b>%</b>
                  </p>
                )}
              </CountUp>
            </div> */}
          </div>
          <div className="skills">
            <div className="skill">
              <motion.img
                data-tooltip-id="react"
                data-tooltip-content="React"
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
                whileHover={{ scale: 1.1 }}
                src={ReactIcon}
              />
              <ReactTooltip id="react" className="bg-info" />
            </div>
            {/* <div className="barra-container">
              <div className="barra">
                <motion.div
                  className="barra-cargada"
                  viewport={{ once: true }}
                  initial={{ width: 0 }}
                  whileInView={{
                    width: "80%",
                    transition: { duration: 2, delay: 0 },
                  }}
                ></motion.div>
              </div>
              <CountUp start={0} end={80} delay={0}>
                {({ countUpRef }) => (
                  <p>
                    <span ref={countUpRef}></span>
                    <b>%</b>
                  </p>
                )}
              </CountUp>
            </div> */}
          </div>
        </div>
        {/* //corte */}{" "}
        <div className="skills-right">
          <h4>{lengua ? "Others" : "Otras"}</h4>
          <motion.div
            className="m-auto mb-3 line"
            viewport={{ once: true }}
            initial={{ width: 0 }}
            whileInView={{ width: "7%", transition: { duration: 1 } }}
          >
            {" "}
          </motion.div>
          <div className="skills">
            <div>
              <ReactTooltip id="sass" className="bg-sass" />
              <motion.img
                data-tooltip-id="sass"
                data-tooltip-content="Sass"
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0 },
                }}
                whileHover={{ scale: 1.1 }}
                src={Sass}
              />
              <ReactTooltip id="bootstrap" className="bg-bootstrap" />
              <motion.img
                data-tooltip-id="bootstrap"
                data-tooltip-content="Bootstrap"
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0 },
                }}
                whileHover={{ scale: 1.1 }}
                src={Bootstrap}
              />
              <ReactTooltip id="Tailwind" className="bg-tailwind" />
              <motion.img
                data-tooltip-id="Tailwind"
                data-tooltip-content="Tailwind"
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
                whileHover={{ scale: 1.1 }}
                src={Tailwind}
              />
            </div>
            <div>
              <ReactTooltip id="framermotion" className="bg-motion" />
              <motion.img
                data-tooltip-id="framermotion"
                data-tooltip-content="Framer Motion"
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
                whileHover={{ scale: 1.1 }}
                src={motionIcon}
              />
              <ReactTooltip id="Formik" className="bg-primary" />
              <motion.img
                data-tooltip-id="Formik"
                data-tooltip-content="Formik"
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
                whileHover={{ scale: 1.1 }}
                src={FormikIcon}
              />
              <ReactTooltip id="git" className="bg-danger" />
              <motion.img
                data-tooltip-id="git"
                data-tooltip-content="Git"
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
                whileHover={{ scale: 1.1 }}
                src={gitItcon}
              />
            </div>
            <div>
              <ReactTooltip id="responsive" className="bg-success" />
              <motion.img
                data-tooltip-id="responsive"
                data-tooltip-content="Diseño Responsive"
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
                whileHover={{ scale: 1.1 }}
                src={responsive}
              />
              <ReactTooltip id="axios" className="bg-primary" />
              <motion.img
                data-tooltip-id="axios"
                data-tooltip-content="Axios"
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
                whileHover={{ scale: 1.1 }}
                src={axiosIcon}
              />
              <ReactTooltip id="hooks" className="bg-info" />
              <motion.img
                data-tooltip-id="hooks"
                data-tooltip-content="React Hooks"
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
                whileHover={{ scale: 1.1 }}
                src={ReactIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
