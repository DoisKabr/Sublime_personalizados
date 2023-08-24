import React from "react";
import "./estiloMenu.css";

// import de imagens

export default function menuFlutuante() {
    return <>
        <div className="telaMenu" onClick={()=>{mover()}}><img src="./imagens/icone/svg/flecha_cima.svg" alt="subir" /></div>
    </>
}

function mover() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}