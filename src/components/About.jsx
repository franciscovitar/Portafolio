import React from "react";
import { motion } from "framer-motion";

function About({ lengua }) {
  return (
    <div className="about-container" id="about">
      <div className="contenedor">
        <motion.h2
          viewport={{ once: true }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          }}
        >
          {lengua ? "About me" : "Sobre mi"}
        </motion.h2>
        <motion.div
          className="line m-auto "
          viewport={{ once: true }}
          initial={{ width: 0 }}
          whileInView={{
            width: "7%",
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          {" "}
        </motion.div>
        <div className="parrafos">
          <motion.p
            viewport={{ once: true }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.1 },
            }}
          >
            {lengua ? (
              <p>
                <i class="bi bi-play-circle-fill"></i> Hello! my name is{" "}
                <b>Francisco Vitar</b>, I am from Córdoba, Argentina.
              </p>
            ) : (
              <p>
                <i class="bi bi-play-circle-fill"></i> Hola! mi nombre es{" "}
                <b>Francisco Vitar</b>, soy de Córdoba, Argentina.
              </p>
            )}
          </motion.p>

          <motion.p
            viewport={{ once: true }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
          >
            {lengua ? (
              <p>
                <i class="bi bi-play-circle-fill"></i> I'm 21 years old, I'm
                studying systems engineering, but also, I decided to study{" "}
                <b>Front-End Web Development</b> in a <b>self-taught way</b>,
                with online courses, videos and lots and <b>lots of practice</b>
                . I've been studying for about a year now and I consider that
                I've reached a pretty advanced level, although I'm aware that
                the <b>study will never end</b> in this profession.
              </p>
            ) : (
              <p>
                <i class="bi bi-play-circle-fill"></i> Tengo 21 años, estoy
                estudiando ingeniera en sistemas, pero además, decidí estudiar{" "}
                <b>Desarrollo Web Front-End</b> de manera <b>autodidacta</b>,
                con cursos online, videos y mucha mucha pero{" "}
                <b>mucha práctica</b>. Llevo aproximadamente un año desde que
                empecé a estudiar y considero que llegue a un nivel bastante
                avanzado, aunque soy consciente que el{" "}
                <b>estudio no va a terminar nunca</b> en esta profesión.
              </p>
            )}
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
          >
            {lengua ? (
              <p>
                <i class="bi bi-play-circle-fill"></i> In this regard, I
                consider that my greatest virtue is my ability to <b>learn</b>{" "}
                technologies in a really <b>fast and effective</b> way, so I
                keep myself in <b>constant progress</b> and <b>updated</b>,
                which, in my opinion, is the most important thing in this
                profession.
              </p>
            ) : (
              <p>
                <i class="bi bi-play-circle-fill"></i> Con respecto a eso,
                considero que mi mayor virtud, es la capacidad que tengo de{" "}
                <b>aprender</b> tecnologías de manera realmente{" "}
                <b>rápida y efectiva</b>, entonces me mantengo en{" "}
                <b>constante progreso</b> y <b>actualizado</b>, que, a mi
                parecer, es lo más importante en este oficio.
              </p>
            )}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default About;
