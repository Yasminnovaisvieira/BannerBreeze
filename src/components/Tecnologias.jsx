import { textos } from "../traduction.js";
import "../global.css";

import Vue from "../assets/Vue.svg";
import SpringBoot from "../assets/SpringBoot.svg";
import Arduino from "../assets/Arduino.svg";
import MySQL from "../assets/MySQL.svg";

function Tecnologias({ language }) {
    return (
        <div className="totalTecnologias">
            <h2 className="titulos">{textos[language].tecnologia}</h2>

            <div className="divImagensTecnologias">
                <img src={Vue} alt="Logo do Vue" className="imagensTecnologias"/>
                <img src={SpringBoot} alt="Logo do Vue" className="imagensTecnologias"/>
                <img src={Arduino} alt="Logo do Vue" className="imagensTecnologias"/>
                <img src={MySQL} alt="Logo do Vue" className="imagensTecnologias"/>
            </div>
        </div>
    )
}

export default Tecnologias;