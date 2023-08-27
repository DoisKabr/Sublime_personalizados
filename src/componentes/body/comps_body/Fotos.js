import React from "react";
import produtos from "../../../JSON/arquivoFotos.json";
import searchIcon from "../../../icones/search.svg";


export default function Fotos(props) {

    const fotos = []

    const colocarImg = () => {
            const prod = produtos
                prod.forEach(e=>{
                    fotos.push(<img key={e.id} src={e.url} alt={e.nome} title={e.nome} className="fotos_fotos" />)
                })
        return (fotos)
    };


    return (
        <>
            <main className="sectionPadrao">
                <div className="divBarraPesquisa" >
                    <input type="text" placeholder="=> canecas..." className="barraPesquisa" />
                    <button className="padraoButton"><img src={searchIcon} alt="icone-pesquisa-sublime" /></button>
                </div>
                <section className="secsBody secsBodyFotos">
                    {colocarImg()}
                </section>
            </main>
        </>
    )
}
