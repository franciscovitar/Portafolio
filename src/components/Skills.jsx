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
          <div></div>
          <div className="skills">
            <div>
              <h4>{lengua ? "Languages" : "Lenguajes"} :</h4>
              <motion.div
                className=" m-0 m-auto mb-2 line"
                viewport={{ once: true }}
                initial={{ width: 0 }}
                whileInView={{ width: "10%", transition: { duration: 1 } }}
              ></motion.div>
            </div>

            <div className="skill">
              <motion.img
                data-tooltip-id="html"
                data-tooltip-content={
                  lengua ? "HTML | Advanced" : " HTML | Avanzado"
                }
                viewport={{ once: true }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0 },
                }}
                whileHover={{ scale: 1.1 }}
                src={Html}
              />
              <ReactTooltip id="html" className="bg-danger" />

              <motion.img
                data-tooltip-id="css"
                data-tooltip-content={
                  lengua ? "CSS | Advanced" : " CSS | Avanzado"
                }
                viewport={{ once: true }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
                whileHover={{ scale: 1.1 }}
                src={Css}
              />
              <ReactTooltip id="css" variant="info" />
              <motion.img
                data-tooltip-id="js"
                data-tooltip-content={
                  lengua
                    ? "Javascript | Intermediate"
                    : " Javascript | Intermedio"
                }
                viewport={{ once: true }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
                whileHover={{ scale: 1.1 }}
                src={Js}
              />
              <ReactTooltip id="js" className="bg-warning" />
            </div>
          </div>

          {/* FRAMEWORK */}

          <div className="skills">
            <div>
              <h4>Framework:</h4>
              <motion.div
                className=" m-0 m-auto mb-2 line"
                viewport={{ once: true }}
                initial={{ width: 0 }}
                whileInView={{ width: "10%", transition: { duration: 1 } }}
              ></motion.div>
            </div>
            <div className="skill">
              <motion.img
                data-tooltip-id="react"
                data-tooltip-content={
                  lengua ? "React | Intermediate" : " React | Intermedio"
                }
                viewport={{ once: true }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0 },
                }}
                whileHover={{ scale: 1.1 }}
                src={ReactIcon}
              />
              <ReactTooltip id="react" className="bg-info" />
            </div>
          </div>

          {/* Preprocessors */}

          <div className="skills">
            <div>
              <h4>{lengua ? "Preprocessors" : "Preprocesadores"} :</h4>
              <motion.div
                className=" m-0 m-auto mb-2 line"
                viewport={{ once: true }}
                initial={{ width: 0 }}
                whileInView={{ width: "10%", transition: { duration: 1 } }}
              ></motion.div>
            </div>
            <div className="skill">
              <ReactTooltip id="sass" className="bg-sass" />
              <motion.img
                data-tooltip-id="sass"
                data-tooltip-content={
                  lengua ? "SASS | Advanced" : " SASS | Avanzado"
                }
                viewport={{ once: true }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0 },
                }}
                whileHover={{ scale: 1.1 }}
                src={Sass}
              />
            </div>
          </div>
        </div>
        {/* //corte */}{" "}
        <div className="skills-right">
          {/* LIBRERIAS */}

          <div className="skills">
            <div>
              <h4>{lengua ? "Libraries" : "Librerías"}:</h4>
              <motion.div
                className=" m-0 m-auto mb-2 line"
                viewport={{ once: true }}
                initial={{ width: 0 }}
                whileInView={{ width: "10%", transition: { duration: 1 } }}
              ></motion.div>
            </div>
            <div className="skill">
              <ReactTooltip id="axios" className="bg-primary" />
              <motion.img
                data-tooltip-id="axios"
                data-tooltip-content={
                  lengua ? "Axios | Intermediate" : " Axios | Intermedio"
                }
                viewport={{ once: true }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0 },
                }}
                whileHover={{ scale: 1.1 }}
                src={axiosIcon}
              />
              <ReactTooltip id="bootstrap" className="bg-bootstrap" />
              <motion.img
                data-tooltip-id="bootstrap"
                data-tooltip-content={
                  lengua ? "Bootstrap | Advanced" : " Bootstrap | Avanzado"
                }
                viewport={{ once: true }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
                whileHover={{ scale: 1.1 }}
                src={Bootstrap}
              />
              <ReactTooltip id="Tailwind" className="bg-tailwind" />
              <motion.img
                data-tooltip-id="Tailwind"
                data-tooltip-content={
                  lengua ? "Tailwind | Intermediate" : " Tailwind | Intermedio"
                }
                viewport={{ once: true }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
                whileHover={{ scale: 1.1 }}
                src={Tailwind}
              />
              <ReactTooltip id="framermotion" className="bg-motion" />
              <motion.img
                data-tooltip-id="framermotion"
                data-tooltip-content={
                  lengua
                    ? "Framer Motion | Intermediate"
                    : " Framer Motion | Intermedio"
                }
                viewport={{ once: true }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
                whileHover={{ scale: 1.1 }}
                src={motionIcon}
              />
              <ReactTooltip id="Formik" className="bg-primary" />
              <motion.img
                data-tooltip-id="Formik"
                data-tooltip-content={
                  lengua ? "Formik | Intermediate" : " Formik | Intermedio"
                }
                viewport={{ once: true }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.8 },
                }}
                whileHover={{ scale: 1.1 }}
                src={FormikIcon}
              />
            </div>
          </div>

          {/* GIT */}

          <div className="skills">
            <div className="title">
              <h4>{lengua ? "Control Version" : "Control de Versión"}:</h4>
              <motion.div
                className=" m-0 m-auto mb-2 line"
                viewport={{ once: true }}
                initial={{ width: 0 }}
                whileInView={{ width: "10%", transition: { duration: 1 } }}
              ></motion.div>
            </div>
            <div className="skill">
              <motion.img
                data-tooltip-id="git"
                data-tooltip-content={
                  lengua ? "GIT | Intermediate" : " GIT | Intermedio"
                }
                viewport={{ once: true }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0 },
                }}
                whileHover={{ scale: 1.1 }}
                src={gitItcon}
              />
              <ReactTooltip id="git" className="bg-danger" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
