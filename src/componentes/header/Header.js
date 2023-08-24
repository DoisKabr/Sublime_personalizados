import React from "react";
import './estiloHeader.css';

export default function Header(props) {


    function Pagina(e) {
        if(e.target.innerHTML === "Inicio"){
            props.setPagina(1);
        }
        if(e.target.innerHTML === "Imagens"){
            props.setPagina(2);
        }
        if(e.target.innerHTML === "Contatos"){
            props.setPagina(3);
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