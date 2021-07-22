import React from 'react'

export const Navbar = () => {
    return (
      <div className="col-xxl-12">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container">
            <a href="" className="navbar-brand">
              {" "}
              <img className="varita" src="./images/female-user.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
            >
              <span className="navbar-toggler-icon"> </span>
            </button>
            <div className="collapse navbar-collapse " id="navmenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#profile" className="nav-link">
                    Sobre mi
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#formation" className="nav-link">
                    {" "}
                    Formacion
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#proyectos" className="nav-link">
                    Mis proyectos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}
