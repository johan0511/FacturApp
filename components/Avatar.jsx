import React, { useState } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";

export default function Avat() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas cerrar sesión?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Eliminar datos de usuario del almacenamiento local
        localStorage.removeItem("user");
        window.location.href = "/";
      }
    });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <button
        onClick={toggleSidebar}
        className={`toggle-button ${isOpen ? "open" : ""}`}
      >
        {isOpen ? "Cerrar Menú" : "Abrir Menú"}
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="profile">
          <img
            src="../src/img/iniciosesion.jpg"
            alt="Nombre del usuario"
            className="profile-img"
          />
          <h3 className="profile-name">Administrador</h3>
        </div>
        <div className="menu">
          <div className="menu-item">
            <a href="http://localhost:3001/proveedor">Factura</a>
          </div>
          <div className="menu-item">
            <a href="http://localhost:3001/registrarusuario">Inventario</a>
          </div>
          <div className="menu-item">
            <a href="http://localhost:3001/empleados">Historial de clientes</a>
          </div>
          <div className="menu-item">
            <a href="http://localhost:3001/registrarusuario">
              Reporte de ventas
            </a>
          </div>
          <div className="menu-item">
            <a href="#" onClick={handleLogout}>
              Cerrar sesión
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
