import React from "react";

export const Home = () => {
  return (
    <div className="bg-light p-5 text center">
      <div id="home" className="container">
        <div className="d-flex align-items-center justify-content-between ">
          <div className=" me-5">
            <h3
              className="
            "
            >
              DIANA PANIAGUA PERLAZA
            </h3>
            <p className="lead">
              {" "}
              Frontend Developer con gran pasión por el diseño y desarrollo web{" "}
            </p>
            <a className="btn btn-primary j" href="#profile">
              {" "}
              Ver más
            </a>
          </div>
          <img
            src="./images/programadora.jpg"
            alt=""
            class="img-fluid rounded-circle w-50 d-none d-sm-block"
          ></img>
        </div>
      </div>
    </div>
  );
};
