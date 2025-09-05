import { textos } from "../traduction.js";
import "../global.css";

function Descricao({ language }) {
    return (
        <div className="bordaDescricao">
            <div className="conteudoDescricao">
                <p className="textoDescricao">{textos[language].descricao}</p>
            </div>
        </div>
    )
}

export default Descricao;