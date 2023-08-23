import React from "react";

export default function Contatos(props) {
    return <>
        <section className="sectionPadrao">
            <section className="secsBody">
                <img src={props.fotosIcones[0]} alt="icone-facebook-sublime" className="fotosIcones" title="Ir para Facebook" />
                <img src={props.fotosIcones[1]} alt="icone-whatsapp-sublime" className="fotosIcones" title="Ir para Whatsapp" />
                <img src={props.fotosIcones[2]} alt="icone-instagram-sublime" className="fotosIcones" title="Ir para Instagram" />
            </section>
        </section>
    </>
}