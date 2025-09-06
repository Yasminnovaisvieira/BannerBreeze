import { textos } from "../traduction.js";
import "../global.css";

import FotoEquipe from "../assets/FotoEquipe.svg";

function Time ({ language }) {
    return (
        <div>
            <h2 className="titulosDireita time">{textos[language].time}</h2>

            <div className="divImgEquipe">
                <div className="bordaColoridaFotoTime">
                    <img src={FotoEquipe} alt="Foto da equipe do Breeze" className="imgEquipe"/>
                </div>
            </div>
        </div>
    )
}

export default Time;