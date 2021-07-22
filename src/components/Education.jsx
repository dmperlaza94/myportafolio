import React from 'react'

export const Education = () => {
    return (
      <div>
        <div id="formation" className="container pt-5">
          <h2 className="text-center"> Formacion Academica</h2>
          <p className="lead m-5">
            En está sección se encuentra una breve descripcion de mi formacion
            academica, indicando las fechas, el lugar en el que los he realizado
            y su duracion.
          </p>
          <div className="row text-center">
            <div className="col-md m-3">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <h3 className="card-title mb-3"> Desarrollo web Frontend</h3>

                  <p className="card-text"> Comfenalco -2021</p>
                  <p className="card-text ">
                    {" "}
                    <strong> Duracion:</strong>
                    240 horas.
                  </p>
                  <p className="card-text ">
                    codificacion de sitios web utilizando los lenguajes base
                    como HTML, CSS y JavaScript.
                    <p> Framework JavaScript: ReactJS</p>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md m-3">
              <div className="card bg-secondary text-light">
                <div className="card-body text-center ">
                  <div className="h1 mb-3">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h3 className="card-title "> Tecnologa en Produccion</h3>

                  <p className="card-text text-primary fw-bold"> ITM -2016</p>

                  <p className="card-text ">
                    <strong> Duracion:</strong> 6 semestres.
                  </p>
                  <p>
                    {" "}
                    <strong> Institucion:</strong> ITM
                  </p>

                  <p>
                    Intervencion en los procesos de transformación de bienes,
                    para la toma de decisiones y su operación eficiente.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md m-3">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="fas fa-school"></i>
                  </div>
                  <h3 className="card-title mb-3"> Bachillerato Academico</h3>

                  <p className="card-text">
                    <p>
                      <strong> 2010 </strong>
                    </p>
                    <p>
                      {" "}
                      <strong> Duracion: </strong> 6 años
                    </p>
                    <p>
                      {" "}
                      <strong> Institucion:</strong> I. Ed Loma Hermosa
                    </p>
                    Poseo conocimientos, habilidades y destrezas que le permitan
                    el acceso a la educación superior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
