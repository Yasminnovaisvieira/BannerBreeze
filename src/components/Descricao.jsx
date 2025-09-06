import { textos } from "../traduction.js";
import "../global.css";

function Descricao({ language }) {
    return (
        <div className="bordaDescricao">
            <div className="conteudoDescricao">
                <p className="textoDescricao"dangerouslySetInnerHTML={{ __html: textos[language].descricao }}/>
            </div>
        </div>
    )
}

export default Descricao;