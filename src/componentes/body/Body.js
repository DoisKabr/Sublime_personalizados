import React, { useEffect } from "react";
import Inicio from "./comps_body/Inicio";
import Fotos from "./comps_body/Fotos";
import Contatos from "./comps_body/Contatos";

import "./estiloBody.css";



export default function Body(props) {

    useEffect(() => {
        let pathname = window.location.pathname;

        if (pathname === "/" || pathname === "/inicio") {
            props.setPagina(1);
            document.querySelector("title").innerHTML = "Sublime | Inicio";
        } else
            if (pathname === "/fotos" || pathname === "/galeria") {
                props.setPagina(2);
                document.querySelector("title").innerHTML = "Sublime | Fotos";
            } else
                if (pathname === "/contatos" || pathname === "/contato" || pathname === "/telefone" || pathname === "/telefones") {
                    props.setPagina(3);
                    document.querySelector("title").innerHTML = "Sublime | Contatos";
                }

    });

    function mudarPagina(p) {
        if (p === 1) {
            return <Inicio />
        } else
            if (p === 2) {
                return <Fotos />
            } else
                if (p === 3) {
                    return <Contatos fotosIcones={props.fotosIcones} />
                }
    }

    return (
        <>
            {mudarPagina(props.pagina)}
        </>
    )
}