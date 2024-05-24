import { Link } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import Swal from "sweetalert2";
import Select from "react-select";
import logoempresa from "/src/img/logoempresa.png"; // Asegúrate de que la ruta a la imagen sea correcta

export const RegistroUsuario = () => {
  const [formData, setFormData] = useState({
    IdTipo_identificacion: "",
    IdUsuario: "",
    Correo: "",
    Contrasena: "",
    Verificar_Contrasena: "",
  });

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({
      ...formData,
      IdTipo_identificacion: selectedOption.value,
    });
  };

  const handleRegistro = async () => {
    // Verificar que todos los campos estén llenos
    for (const key in formData) {
      if (formData[key] === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Por favor complete todos los campos",
        });
        return;
      }
    }

    // Verificar que las contraseñas coincidan
    if (formData.Contrasena !== formData.Verificar_Contrasena) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden. Por favor verifique.",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/usuario/agregar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Usuario creado correctamente",
        });
        setFormData({
          IdTipo_identificacion: "",
          IdUsuario: "",
          Correo: "",
          Contrasena: "",
          Verificar_Contrasena: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al crear el usuario",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const tipoDocumentoOptions = [
    { value: "CC", label: "Cédula de Ciudadanía" },
    { value: "CE", label: "Cédula de Extranjería" },
    { value: "P", label: "Pasaporte" },
    { value: "DNI", label: "Documento Nacional de Identidad" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "white",
      zIndex: 9999, // Establece un z-index alto para que esté por encima de otros elementos
      border: "1px solid #ccc", // Agrega un borde para distinguir visualmente la lista
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "white",
      zIndex: 9999, // Establece un z-index alto para que esté por encima de otros elementos
      marginTop: "2px", // Ajusta el margen superior para que no se vea contenido detrás de la lista
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#0066ff" : "white", // Cambia el color de fondo cuando una opción está seleccionada
      color: state.isSelected ? "white" : "#000", // Cambia el color del texto cuando una opción está seleccionada
      "&:hover": {
        backgroundColor: state.isSelected ? "#0052cc" : "#f0f0f0", // Cambia el color de fondo al pasar el ratón por encima
      },
    }),
  };

  return (
    <div className="fondo">
      <div className="registro">
        <form className="form-inicio1" id="login-form">
          <img
            src={logoempresa}
            alt="Logo de la empresa"
            style={{ width: "150px", margin: "0 auto 20px" }}
          />
          <h1>Registrarse</h1>
          <Select
            options={tipoDocumentoOptions}
            placeholder="Seleccione su tipo de documento"
            onChange={handleSelectChange}
            className="respuesta1"
            styles={customStyles}
          />
          <Input
            isRequired
            type="text"
            label="Ingresa tu número de documento"
            value={formData.IdUsuario}
            className="respuesta1"
            onChange={(e) => handleInputChange(e, "IdUsuario")}
          />
          <Input
            isRequired
            type="email"
            label="Email"
            value={formData.Correo}
            className="respuesta1"
            onChange={(e) => handleInputChange(e, "Correo")}
          />
          <Input
            isRequired
            label="Contraseña"
            variant="password"
            placeholder="Ingrese su contraseña"
            value={formData.Contrasena}
            type="password"
            className="respuesta1"
            onChange={(e) => handleInputChange(e, "Contrasena")}
          />
          <Button color="primary" variant="ghost" onClick={handleRegistro}>
            Registrarse
          </Button>
          <br /> O <br />
          <Link to="/">
            <Button color="danger" variant="bordered">
              Volver al inicio
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegistroUsuario;
