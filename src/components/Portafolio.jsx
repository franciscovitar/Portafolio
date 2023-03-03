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
                transition: { duration: 0.5, delay: 0.7 },
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
                  movil.
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
                transition: { duration: 0.5, delay: 0.7 },
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
                  Este es una desafrio de la página Front-End Mentor, donde
                  habia que realizar una applicación ToDo, para poder crear una
                  lista de tareas, donde se pueden agregar, eliminar, completar
                  y filtrar tareas a tu gusto.
                </p>
              )}
            </motion.p>

            <motion.a
              href="#contacto"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.5 },
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
                  tu carrito. También podes observar imágenes desde distintos
                  ángulos del producto presentado. A su vez es totalmente
                  responsive, apta para todo tamaño de pantalla.
                </p>
              )}
            </motion.p>

            <motion.a
              href="https://franvitar15.github.io/e-commerce/"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.8 },
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
              Rest Country-Api
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
                  Front-End mentor challenge, where I used an Api of countries,
                  to show each one on screen, you can also filter each country
                  by its name or continent, where by clicking on the country,
                  opens a new window with more data of it.
                </p>
              ) : (
                <p>
                  Desafío Front-End mentor, donde utlicé una Api de paises, para
                  poder mostrar a cada uno en pantalla, también podes filtrar
                  cada país por su nombre o continente, donde al presionar en el
                  país, se abre una nueva ventana con más datos del mismo.
                </p>
              )}
            </motion.p>

            <motion.a
              href="#contacto"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.7 },
              }}
              className="consultar"
            >
              {lengua ? "Go to the page!!" : "Ve a la página!!"}
            </motion.a>
          </div>
        </div>

        {/* SEIS */}

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
              Calculator
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
                  Front-End mentor challenge, where I made a fully functional
                  calculator, only with React.js, with 3 color themes and all
                  possible operations.
                </p>
              ) : (
                <p>
                  Desafio de Front-End mentor, donde realicé una calculadora
                  totalmente funcional, solo con React.js, con 3 temas de
                  colores y todas las operaciones posibles.
                </p>
              )}
            </motion.p>

            <motion.a
              href="#contacto"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.7 },
              }}
              className="consultar"
            >
              {lengua ? "Go to the page!!" : "Ve a la página!!"}
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portafolio;
