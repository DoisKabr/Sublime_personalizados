import React from "react";
import './estiloHeader.css';

export default function Header(props) {


    function Pagina(e) {
        if(e.target.innerHTML === "Inicio"){
            window.location.assign(window.location.origin + "/inicio");
        }
        if(e.target.innerHTML === "Imagens"){
            window.location.assign(window.location.origin + "/fotos");
        }
        if(e.target.innerHTML === "Contatos"){
            window.location.assign(window.location.origin + "/contatos");
        }
    }


    return <header className="secHeader">
        <img src="./imagens/icone/sublime.jpg" alt="icone-sublime" className="tamanhoFotoIcone"/>

        <nav className="menuHeader">
            <button className="navBtn" onClick={(e)=>Pagina(e)}>Inicio</button>
            <button className="navBtn" onClick={(e)=>Pagina(e)}>Imagens</button>
            <button className="navBtn" onClick={(e)=>Pagina(e)}>Contatos</button>
        </nav>

    </header>
}