import logoempresa from "../img/logoempresa.png";
import { Button } from "@nextui-org/button";
// import Table from "../../components/TablaProductos/App";
import Avat from "../../components/Avatar";
import App from "../../components/TablaProductos/TabInventario";
import { Link } from "react-router-dom";

export const Inventario = () => {
  return (
    <>
      <div className="nav">
        <img src={logoempresa} alt="Logo" className="navlg" />
        <div className="Avat">
          <Avat />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="tAb">
        <App />
      </div>
    </>
  );
};
