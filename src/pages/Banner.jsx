import React, { useState } from "react";

import "../global.css";

import Nav from "../components/Nav";
import Descricao from "../components/Descricao";
import Tecnologias from "../components/Tecnologias";
import Time from "../components/Time";

import Enzo from "../assets/Enzo.svg";
import Rebeca from "../assets/Rebeca.svg";
import Thainara from "../assets/Thainara.svg";
import Yasmin from "../assets/Yasmin.svg";
import iconeGitHub from "../assets/iconeGitHub.svg";
import iconeLinkedIn from "../assets/iconeLinkedIn.svg";
import logoBosch from "../assets/logoBosch.svg";
import ETS65anos from "../assets/ETS65anos.svg"

function Banner() {
    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage(prev => (prev === "pt" ? "en" : "pt"));
    };

    return (
        <div className="banner">
            <Nav language={language} toggleLanguage={toggleLanguage} />

            <div className="conteudo">
                <main>
                    <Descricao language={language} toggleLanguage={toggleLanguage} />
                    <Tecnologias language={language} toggleLanguage={toggleLanguage} />
                    <Time language={language} toggleLanguage={toggleLanguage} />
                </main>

                <div className="divEquipeIndividuos">
                    <div className="fotosEquipe">
                        <div className="imagemNomeIndividuo">
                            <img src={Enzo} alt="" className="fotosEquipe" />
                            <p className="nomes">Enzo Previtale</p>
                            <div className="links">
                                <img src={iconeGitHub} alt="" />
                                <img src={iconeLinkedIn} alt="" className="iconeLinkedIn" />
                            </div>
                        </div>

                        <div className="imagemNomeIndividuo">
                            <img src={Rebeca} alt="" className="fotosEquipe" />
                            <p className="nomes">Rebeca Preza</p>
                            <div className="links">
                                <img src={iconeGitHub} alt="" />
                                <img src={iconeLinkedIn} alt="" className="iconeLinkedIn" />
                            </div>
                        </div>

                        <div className="imagemNomeIndividuo">
                            <img src={Thainara} alt="" className="fotosEquipe fotoThainara" />
                            <p className="nomes">Thainara Marques</p>
                            <div className="links">
                                <img src={iconeGitHub} alt="" />
                                <img src={iconeLinkedIn} alt="" className="iconeLinkedIn" />
                            </div>
                        </div>

                        <div className="imagemNomeIndividuo">
                            <img src={Yasmin} alt="" className="fotosEquipe" />
                            <p className="nomes">Yasmin Vieira</p>
                            <div className="links">
                                <img src={iconeGitHub} alt="" />
                                <img src={iconeLinkedIn} alt="" className="iconeLinkedIn" />
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <img src={logoBosch} alt="" />
                    <img src={ETS65anos} alt="" />
                </footer>
            </div>
        </div>
    );
}

export default Banner;