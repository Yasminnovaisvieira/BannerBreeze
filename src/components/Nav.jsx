import { textos } from "../traduction.js";
import "../global.css";

import Logo from "../assets/Logo.svg";
import nomeBreeze from "../assets/Breeze.svg";

function Nav({ language, toggleLanguage }) {
    return (
        <div className='totalNav'>
            <div className="bordaSuperior"></div>

            <div className="divBotaoIdioma">
                <div className="bordaBotaoIdioma">
                    <button onClick={toggleLanguage} className="botaoMudarIdioma">
                        {language === "pt" ? "Switch to English" : "Mudar para Português"}
                    </button>
                </div>
            </div>

            <div className='logoNomeBreeze'>
                <img src={Logo} alt="Logo do Breeze" className='logo' />
                <img src={nomeBreeze} alt="" />
            </div>
            <h1 className='subtituloNav'>{textos[language].subTitulo}</h1>
        </div>
    );
}

export default Nav;