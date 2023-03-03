import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Contacto({ lengua }) {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <div id="contacto" className="contacto-container ">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5 },
        }}
        viewport={{ once: true }}
        className="container"
      >
        <div className="titulos">
          <h2>{lengua ? "Let's work together!" : "Trabajemos juntos!"}</h2>
          <motion.div
            className="line"
            viewport={{ once: true }}
            initial={{ width: 0 }}
            whileInView={{ width: 150, transition: { duration: 1 } }}
          >
            {" "}
          </motion.div>
        </div>
        <Formik
          initialValues={{
            nombre: "",
            telefono: "",
            email: "",
            textarea: "",
          }}
          validate={(valores) => {
            let errores = {};

            // Validacion nombre
            if (!valores && lengua === false) {
              errores.nombre = "Por favor ingresa un nombre";
            } else if (
              !/^[a-zA-ZÀ-ÿ\s]{1,20}$/.test(valores.nombre) &&
              lengua === false
            ) {
              errores.nombre =
                "El nombre solo puede contener letras y espacios, no debe tener más de 20 caracteres.";
            } else if (!valores && lengua === true) {
              errores.nombre = "Please introduce your name";
            } else if (
              !/^[a-zA-ZÀ-ÿ\s]{1,20}$/.test(valores.nombre) &&
              lengua === true
            ) {
              errores.nombre =
                "The name can only contain letters and sapces, it must not be longer than 20 characters";
            }
            // Validacion correo
            if (!valores.email && lengua === false) {
              errores.email = "Por favor ingresa un correo electrónico.";
            } else if (!valores.email && lengua === true) {
              errores.email = "Please,  write your Email.";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.email
              ) &&
              lengua === false
            ) {
              errores.email = "El correo es inválido.";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.email
              ) &&
              lengua === true
            ) {
              errores.email = "The mail is not valid.";
            }
            //Validacion textarea
            if (!valores.textarea && lengua === false) {
              errores.textarea = "Por favor ingresa tu mensaje";
            } else if (!valores.textarea && lengua === true) {
              errores.textarea = "Please, write your message";
            }

            return errores;
          }}
          onSubmit={async (valores, { resetForm }) => {
            // const url = "http://localhost:3149/mail";
            // const data = {
            //   nombre: valores.nombre,
            //   telefono: valores.telefono,
            //   correo: valores.email,
            //   consulta: valores.textarea,
            // };

            // await axios
            //   .post(url, data)
            //   .then(function (response) {
            //     console.log("success");
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });
            resetForm();
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado(false), 5000);
          }}
        >
          {({ errors }) => (
            <Form className="formulario">
              <Field
                name="nombre"
                type="text"
                placeholder={lengua ? "Name..." : "Nombre..."}
              ></Field>
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
              <Field
                name="email"
                type="text"
                placeholder={lengua ? "Email..." : "Correo electrónico..."}
              ></Field>
              <ErrorMessage
                name="email"
                component={() => <div className="error">{errors.email}</div>}
              />
              <Field
                as="textarea"
                name="textarea"
                type="text"
                placeholder={lengua ? "Your messagge..." : "Mensaje..."}
              ></Field>
              <ErrorMessage
                name="textarea"
                component={() => <div className="error">{errors.textarea}</div>}
              />
              <motion.button whileHover={{ scale: 1.05 }} type="submit">
                {lengua ? "Send" : "Enviar"}
              </motion.button>
              {formularioEnviado && <p className="exito">Enviado con éxito!</p>}
            </Form>
          )}
        </Formik>
        <div className="redes">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="container-icon instagram"
          >
            <a href="https://www.instagram.com/francisco.vitar/">
              <i class="bi bi-instagram text-white"></i>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="container-icon bg-white"
          >
            <a href="https://www.linkedin.com/in/franciscovitar">
              <i class="bi bi-linkedin linkedin"></i>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="container-icon whatsapp"
          >
            <a href="https://wa.me/5493517303606">
              <i class="bi bi-whatsapp text-white"></i>
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="container-icon">
            <a href="https://github.com/franvitar15">
              <i class="bi bi-github "></i>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contacto;
