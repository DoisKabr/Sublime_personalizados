import React from "react";
import Inicio from "./comps_body/Inicio";
import Fotos from "./comps_body/Fotos";
import Contatos from "./comps_body/Contatos";

import "./estiloBody.css";



export default function Body(props) {

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