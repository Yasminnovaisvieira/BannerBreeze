import "../global.css";

import iconeGitHub from "../assets/iconeGitHub.svg";
import iconeLinkedIn from "../assets/iconeLinkedIn.svg";
import Enzo from "../assets/Enzo.svg";
import Rebeca from "../assets/Rebeca.svg";
import Thainara from "../assets/Thainara.svg";
import Yasmin from "../assets/Yasmin.svg";

const MembrosEquipe = [
    {
        nome: "Enzo Previtale",
        foto: Enzo,
        githubUrl: "https://github.com/enzoprevitale",
        linkedinUrl: "https://www.linkedin.com/in/enzo-gabriel-previtale-silva-9ba92a301",
    },
    {
        nome: "Rebeca Preza",
        foto: Rebeca,
        githubUrl: "https://github.com/rebecapreza",
        linkedinUrl: "https://www.linkedin.com/in/rebeca-preza-5b157a357",
    },
    {
        nome: "Thainara Marques",
        foto: Thainara,
        githubUrl: "https://github.com/tmarques2",
        linkedinUrl: "https://www.linkedin.com/in/thainara-marques-78900326b",
    },
    {
        nome: "Yasmin Vieira",
        foto: Yasmin,
        githubUrl: "https://github.com/yasminnovaisvieira",
        linkedinUrl: "https://www.linkedin.com/in/yasmin-novais-vieira",
    },
];

function Individuos () {
    return (
        <ul className="fotosEquipe">
                        {MembrosEquipe.map((membro) => (
                            <li key={membro.nome} className="imagemNomeIndividuo">
                                
                                <figure>
                                    <img 
                                        src={membro.foto} 
                                        alt={`Foto de ${membro.nome}`} 
                                        className="fotoMembro"
                                    />
                                    <figcaption className="nomes">{membro.nome}</figcaption>

                                </figure>

                                <ul className="links">
                                    <li>
                                        <a href={membro.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Perfil de ${membro.nome} no GitHub`}>
                                            <img src={iconeGitHub} alt="Ícone do GitHub" className="iconeGitHub"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={membro.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`Perfil de ${membro.nome} no LinkedIn`}>
                                            <img src={iconeLinkedIn} alt="Ícone do LinkedIn" className="iconeLinkedIn" />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
    )
}

export default Individuos;