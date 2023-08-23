import React from "react";
import "./estiloMenu.css";

// import de imagens
import flecha_cima from "../../imagens/icone/svg/flecha_cima.svg";

export default function menuFlutuante() {
    return <>
        <div className="telaMenu" onClick={()=>{mover()}}><img src={flecha_cima} alt="subir" /></div>
    </>
}

function mover() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

function aparecerMenu() {
    const tela = window.scrollY;
    const menu = document.querySelector('.telaMenu');

    if(tela > 300) {
        menu.style = `display: flex !important;`;
    }else{
        menu.style = `display: none !important;`;
    }
}
setInterval(aparecerMenu , 0);