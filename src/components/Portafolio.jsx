import React from "react";
import { motion } from "framer-motion";
import Spa from "../image/Spa.png";
import Contadores from "../image/Contadores.png";
import Todo from "../image/Todo.png";
import eCommerce from "../image/e-commerce.png";
import calculadora from "../image/calculadora.jpg";
import Countries from "../image/countries.png";

function Portafolio({ lengua }) {
  return (
    <div id="portafolio" className="tratamientostexto-container">
      <div className="tratamientos-cuerpo">
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          }}
        >
          {lengua ? "Some of my projects" : "Algunos de mis proyectos"}
        </motion.h2>
        <motion.div
          className="line m-auto"
          viewport={{ once: true }}
          initial={{ width: 0 }}
          whileInView={{
            width: "10%",
            transition: { duration: 0.5, delay: 0.2 },
          }}
        ></motion.div>
      </div>

      {/* FLEX */}

      <div className="fila">
        {/* UNO */}
        <div className="galeria">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="imagen"
          >
            <div className="imagen-zoom">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 3, ease: [1, 1, 1, 1] },
                }}
                viewport={{ once: true }}
                src={Spa}
              />
            </div>
          </motion.div>
          <div className="texto">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
            >
              Spa Center
            </motion.h3>
            <motion.div
              className="line mt-1 mb-3"
              viewport={{ once: true }}
              initial={{ width: 0 }}
              whileInView={{
                width: "10%",
                transition: { duration: 1, delay: 0.4 },
              }}
            >
              {" "}
            </motion.div>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
            >
              {lengua ? (
                <p>
                  I made a web page about a Spa center, where I probably overdid
                  it with effects and animations, but I consider that it is a
                  quite nice page visually, with all the corresponding
                  information that it should have.
                </p>
              ) : (
                <p>
                  Realicé una página web sobre un centro de Spa, donde
                  probablemente me excedí poniendo efectos y animaciones, pero
                  considero que es una página bastante agradable visualmente,
                  con toda la información correspondiente que debería tener.
                </p>
              )}
            </motion.p>

            <motion.a
              href="https://spacenter.website/"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
              className="consultar"
            >
              {lengua ? "Go to the page!" : "Ve a la página!"}!
            </motion.a>
          </div>
        </div>

        {/* DOS */}

        <div className="galeria">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="imagen"
          >
            <div className="imagen-zoom">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 3, ease: [1, 1, 1, 1] },
                }}
                viewport={{ once: true }}
                src={Contadores}
              />
            </div>
          </motion.div>

          <div className="texto bg-light">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
            >
              Estudio Contable
            </motion.h3>
            <motion.div
              className="line mt-1 mb-3"
              viewport={{ once: true }}
              initial={{ width: 0 }}
              whileInView={{
                width: "10%",
                transition: { duration: 1, delay: 0.4 },
              }}
            >
              {" "}
            </motion.div>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
            >
              {lengua ? (
                <p>
                  I made a website, which is about an accounting firm. I tried
                  to make it informative, aesthetically pleasing to the user and
                  adaptable to any mobile device.
                </p>
              ) : (
                <p>
                  Realicé una página web, la cual trata sobre un estudio
                  contable. Intenté que quede bien informativa, estéticamente
                  agradable para el usuario y adaptable a cualquier dispositivo
                  móvil.
                </p>
              )}
            </motion.p>

            <motion.a
              href="https://estudiocontable.ml/"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
              className="consultar"
            >
              {lengua ? "Go to the page!!" : "Ve a la página!!"}
            </motion.a>
          </div>
        </div>

        {/* TRES */}
        <div className="galeria">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="imagen"
          >
            <div className="imagen-zoom">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 3, ease: [1, 1, 1, 1] },
                }}
                viewport={{ once: true }}
                src={calculadora}
              />
            </div>
          </motion.div>

          <div className="texto bg-light">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
            >
              Estudio Jurídico Mancini Abogados
            </motion.h3>
            <motion.div
              className="line mt-1 mb-3"
              viewport={{ once: true }}
              initial={{ width: 0 }}
              whileInView={{
                width: "10%",
                transition: { duration: 1, delay: 0.4 },
              }}
            >
              {" "}
            </motion.div>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
            >
              {lengua ? (
                <p>
                  Page that we made with a colleague, about a law firm, where we
                  tried to make it look modern and informative. This project put
                  our teamwork skills to the test.
                </p>
              ) : (
                <p>
                  Página que realizamos con un compañero, sobre un estudio de
                  abogados, donde intentamos que quede bien moderna e
                  informativa. Este proyecto logró poner a prueba nuestras
                  habilidades de trabajo en equipo.
                </p>
              )}
            </motion.p>

            <motion.a
              href="https://manciniabogados.website//"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
              className="consultar"
            >
              {lengua ? "Go to the page!!" : "Ve a la página!!"}
            </motion.a>
          </div>
        </div>
        <div className="galeria">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="imagen"
          >
            <div className="imagen-zoom">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 3, ease: [1, 1, 1, 1] },
                }}
                viewport={{ once: true }}
                src={Countries}
              />
            </div>
          </motion.div>

          <div className="texto bg-light">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
            >
              Gustavo Hernandez Studio
            </motion.h3>
            <motion.div
              className="line mt-1 mb-3"
              viewport={{ once: true }}
              initial={{ width: 0 }}
              whileInView={{
                width: "10%",
                transition: { duration: 1, delay: 0.4 },
              }}
            >
              {" "}
            </motion.div>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
            >
              {lengua ? (
                <p>
                  Another page that I made together with a colleague, where we
                  tested our skills in css flexbox, creating a website about
                  photographs.
                </p>
              ) : (
                <p>
                  Otra página que realice en conjunto con un compañero, donde
                  pusimos a prueba nuestras habilidades en css flexbox, creando
                  un sitio web sobre fotografías.
                </p>
              )}
            </motion.p>

            <motion.a
              href="https://fotografia.ga"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
              className="consultar"
            >
              {lengua ? "Go to the page!!" : "Ve a la página!!"}
            </motion.a>
          </div>
        </div>
        {/* CUATRO */}
        <div className="galeria">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="imagen"
          >
            <div className="imagen-zoom">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 3, ease: [1, 1, 1, 1] },
                }}
                viewport={{ once: true }}
                src={Todo}
              />
            </div>
          </motion.div>
          <div className="texto">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
            >
              Todo App
            </motion.h3>
            <motion.div
              className="line mt-1 mb-3"
              viewport={{ once: true }}
              initial={{ width: 0 }}
              whileInView={{
                width: "10%",
                transition: { duration: 1, delay: 0.4 },
              }}
            >
              {" "}
            </motion.div>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
            >
              {lengua ? (
                <p>
                  This is a challenge of the Front-End Mentor page, where it was
                  necessary to make a ToDo to do a ToDo application, in order to
                  create a list of tasks, where you could where you can add,
                  delete, complete and filter tasks as you like. tasks to your
                  liking.
                </p>
              ) : (
                <p>
                  Este es un desafío de la página Front-End Mentor, donde había
                  que realizar una aplicación ToDo, para poder crear una lista
                  de tareas, donde se pueden agregar, eliminar, completar y
                  filtrar tareas a tu gusto.
                </p>
              )}
            </motion.p>

            <motion.a
              href="https://franciscovitar.github.io/todo-app/"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
              className="consultar"
            >
              {lengua ? "Go to the page!!" : "Ve a la página!!"}
            </motion.a>
          </div>
        </div>

        {/* CINCO */}

        <div className="galeria">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="imagen"
          >
            <div className="imagen-zoom">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 3, ease: [1, 1, 1, 1] },
                }}
                viewport={{ once: true }}
                src={eCommerce}
              />
            </div>
          </motion.div>
          <div className="texto">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
            >
              E-commerce
            </motion.h3>
            <motion.div
              className="line mt-1 mb-3"
              viewport={{ once: true }}
              initial={{ width: 0 }}
              whileInView={{
                width: "10%",
                transition: { duration: 1, delay: 0.4 },
              }}
            >
              {" "}
            </motion.div>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
            >
              {lengua ? (
                <p>
                  This is another Front-End challenge, where the goal is to
                  simulate an E-commerce, in which you can add and remove
                  products to your cart. You can also see images from different
                  angles of the product presented. At the same time it is fully
                  responsive, suitable for all screen sizes.
                </p>
              ) : (
                <p>
                  Este es otro desafío de Front-End, donde se busca simular un
                  E-commerce, en el cual se pueden agregar y quitar productos a
                  tu carrito. También podés observar imágenes desde distintos
                  ángulos del producto presentado. A su vez es totalmente
                  responsive, apta para todo tamaño de pantalla.
                </p>
              )}
            </motion.p>

            <motion.a
              href="https://franciscovitar.github.io/e-commerce/"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
              className="consultar"
            >
              {lengua ? "Go to the page!!" : "Ve a la página!!"}
            </motion.a>
          </div>
        </div>

        {/* SEIS */}
      </div>
    </div>
  );
}

export default Portafolio;
