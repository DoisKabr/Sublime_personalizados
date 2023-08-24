import React from "react";
import "./estiloFooter.css";

export default function Footer(props) {
    return (
        <>
            <footer className="secFooter">
                <section className="mais">
                    <div className="textoEmCaixas">Nós da Sublime personalizados trabalhamos para entregar sempre o melhor produto para todos os nossos clientes .</div>
                    <div className="textoEmCaixas"><br /> Estamos sempre dispostos a lhe atender da melhor forma possível , Então não deixe de nos chamar em um de nossos contatos</div>
                </section>
                <img src="./imagens/icone/sublime.jpg" alt="icone-sublime-personalizados" width="80px" />
            </footer>
        </>
    )
}