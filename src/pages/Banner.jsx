import React, { useState } from "react";

import "../global.css";

import Nav from "../components/Nav";
import Descricao from "../components/Descricao";
import Tecnologias from "../components/Tecnologias";
import Time from "../components/Time";
import Individuos from "../components/Individuos";


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

                <section className="divEquipeIndividuos">
                    <Individuos/>
                </section>

                <footer>
                    <img src={logoBosch} alt="Logo da Bosch" className="logoBosch"/>
                    <img src={ETS65anos} alt="Logo do Evento de 65 anos da ETS" className="ETS65anos"/>
                </footer>
            </div>
        </div>
    );
}

export default Banner;