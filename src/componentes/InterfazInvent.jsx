import { Link } from "react-router-dom";
import { Button } from "@nextui-org/button";
import logoempresa from "../img/logoempresa.png";
import Fact from "../img/LogoFac.jpeg";
import Inve from "../img/LogoInvent.jpeg";
import Rventa from "../img/LogoResVent.jpeg";
import InformeV from "../img/InformeV.jpg";
import Avat from "../../components/Avatar";

const InterfazInvent = () => {
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
      <br />
      <div className="QrpInv">
        <div>
          <h2 className="h2Invet">Interfaz Administrador</h2>
        </div>
        <div className="ContIma">
          <Link to="/factura">
            <img className="ImgS" src={Fact} />
            <h3 className="TextInv" >Factura</h3>
          </Link>
        </div>
        <div className="ContIma">
          <Link to="/inventario">
            <img className="ImgS" src={Inve} />
            <h3 className="TextInv">Inventario</h3>
          </Link>
        </div>
        <div className="ContIma">
          <Link to="/infventa">
            <img className="ImgS" src={Rventa} />
            <h3 className="TextInv">Registro Ventas</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default InterfazInvent;
