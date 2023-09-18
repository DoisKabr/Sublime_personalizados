import React from "react";

export default function Inicio() {


    return (
        <>
            <main className="sectionPadrao">
                <section className="secsBody secsBodyFotos secsBodyFotosInicio">
                    <div className="divContainer">
                        <img src="./imagens/canecas/11.jpg" alt="Mae-de-gato-gatinha-e" className="fotos_fotosInicio foto1" />
                        <div className="texto_texto txt1"><strong>Bem vindo(a) a Sublime personalizados.</strong><br />
                            Ficamos muito felizes que está aqui !
                        </div>
                    </div>
                    <div className="separador"></div>
                    <div className="divContainer">
                        <div className="texto_texto  txt1"><strong>Nós trabalhamos com vários tipos de sublimação</strong><br />
                            De Canecas de café até canecas de Chopp
                            <br/>
                            De Squize até panos personalizados.
                        </div>
                        <img src="./imagens/canecas/19.jpg" alt="Mae-de-gato-gatinha-e" className="fotos_fotosInicio foto1" />
                    </div>
                    <div className="separador"></div>
                    <div className="divContainer">
                        <img src="./imagens/chopp/01.jpg" alt="Mae-de-gato-gatinha-e" className="fotos_fotosInicio foto1" />
                        <div className="texto_texto txt1"><strong>Agradecemos desde já !</strong><br />
                            Fique a vontade para olhar a nossa galeria de imagens !
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}