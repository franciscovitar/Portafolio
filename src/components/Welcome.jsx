import React, { useState } from "react";
import Avatar from "../image/avatar.png";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Nubes from "../image/nubes.png";

function Welcome({ lengua }) {
  const [cejas, setCejas] = useState(false);

  return (
    <div className="welcome-container" id="inicio">
      <div className="welcome">
        <div className="container-1">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0 },
            }}
          >
            {lengua ? <h2>Hi! I'm </h2> : <h2>Hola! Soy </h2>}
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.1 },
            }}
          >
            {lengua ? <h2>Francisco Vitar</h2> : <h2>Francisco Vitar</h2>}
          </motion.div>
          <motion.h2
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
          >
            {lengua ? (
              <h2>Front-End developer</h2>
            ) : (
              <h2>Desarrolador Front-End</h2>
            )}
          </motion.h2>
          <a href="#portafolio">
            <motion.button
              viewport={{ once: true }}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
              whileHover={{ scale: 1.05 }}
            >
              {lengua ? "Look at portfolio" : "Ver portafolio"}
            </motion.button>
          </a>
        </div>
        <div className="right">
          <ReactTooltip id="hola" className="bg-light text-dark fw-bold" />
          <motion.img
            data-tooltip-id="hola"
            data-tooltip-content={
              lengua
                ? "What are you looking? keep scrolling"
                : "Que mirás? seguí bajando"
            }
            className="position-relative"
            viewport={{ once: true }}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            // whileHover={{ scale: 1.05 }}
            src={Avatar}
            onMouseEnter={() => {
              setCejas(true);
            }}
            onMouseLeave={() => {
              setCejas(false);
            }}
          />
          <div
            onMouseEnter={() => {
              setCejas(true);
            }}
            className={cejas ? "cejas" : ""}
          >
            <div className="ceja1"></div>
            <div className="ceja2"></div>
          </div>
          <div
            onMouseEnter={() => {
              setCejas(true);
            }}
            className={cejas ? "bocas" : ""}
          >
            <div className="boca"></div>
          </div>
          <div>
            <motion.img
              viewport={{ once: true }}
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
              src={Nubes}
            ></motion.img>
            <motion.img
              viewport={{ once: true }}
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.6 },
              }}
              src={Nubes}
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
