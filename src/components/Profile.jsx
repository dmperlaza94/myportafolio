import React from "react";

export const Profile = () => {
  return (
    <div className="mt-5 p-3 text center">
      <div id="profile" className="container ">
        <h1 className="text-center">Sobre mi </h1>
        <div className="p-3 d-lg-flex align-items-center justify-content-between">
          <div className="text-center">
            <img
              src="./images/perfil.png"
              alt=""
              class=" img-perfil rounded mx-auto d-block"
            />
          </div>
          <div className="p-5">
            <p className="lead ">
              Hola soy Diana Paniagua Perlaza tengo 27 años soy desarrolladora
              de software Front-end con enfasis en ReactJS y  mamá de unos hermosos
              gemelos;para mi el desarrollo web es un escape de la rutina lo
              defino como es hacer magia con mis manos por este motivo quisiera
              convertir cualquier sitio web en un fenómeno mundial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
