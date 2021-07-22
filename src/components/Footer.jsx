import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-dark pt-3">
        <div className="text-center text-light">
          <a
            className="icon-redsocial"
            href="https://api.whatsapp.com/send?phone=+573013300959&text= Mire%20tu%20portafolio"
          >
            <i className="fab fa-whatsapp fa-2x p-2"></i>
          </a>
          <a
            className="icon-redsocial"
            href="https://www.linkedin.com/in/diana-marcela-p-9b6a6883/"
          >
            <i className="fab fa-linkedin-in fa-2x p-2"></i>
          </a>
          <a className="icon-redsocial" href="https://github.com/dmperlaza94">
            <i className="fab fa-github-alt fa-2x p-2"></i>
          </a>
          <a className="icon-redsocial" href="dmperlaza94@gmail.com">
            <i className="fas fa-envelope fa-2x p-2"></i>
          </a>
          <a
            className="icon-redsocial"
            href="https://www.freecodecamp.org/fcc9998cf76-9e02-4c3c-81db-95ea821098de"
          >
            <i className="fab fa-free-code-camp fa-2x p-2"></i>
          </a>

        </div>
      </footer>
    </div>
  );
};
