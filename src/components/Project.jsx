import React from 'react'

export const Project = () => {
    return (
      <div id="proyectos" className="p-5">
        <div className="container">
          <div>
            <h2 className="text-center"> Mis proyectos</h2>
            <p className=" m-5 lead">
              En está sección se encuentra la descripcion de algunos proyectos
              que he realizado en el trancurso de mi carrera.
            </p>
          </div>
          <div className="mt-5 d-md-flex flex-wrap justify-content-center">
            <div className=" cont-proyec col-lg text-center border border-5 m-4">
              <img
                className="img-proyectos img-fluid"
                src="./images/imagenes/e-comerce.jpg"
                alt=""
              />
              <a className="" href="https://e-comerce-teiluyalmacen.vercel.app/">Ir</a>
            </div>
            <div className="cont-proyec col-lg  text-center border border-5 m-4">
              <img
                className="img-proyectos img-fluid"
                src="./images/imagenes/proyecto1.png"
                alt=""
              />
              <a href="https://proyecto1-comfenalco.vercel.app/">ir</a>
            </div>
            <div className=" cont-proyec col-lg text-center border border-5 m-4">
              <img
                className="img-proyectos img-fluid"
                src="./images/blackjack.png"
                alt=""
              />
              <a href="https://juego-blackjack.vercel.app/">ir</a>
            </div>
            <div className=" cont-proyec col-lg text-center border border-5 m-4">
              <img
                className="img-proyectos img-fluid"
                src="./images/crud.png"
                alt=""
              />
              <a href="https://crud-eight.vercel.app/"> ir</a>
            </div>
          </div>
        </div>
      </div>
    );
}
