import React from "react";
import produtos from "../../../JSON/arquivoFotos.json";


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
                <section className="secsBody secsBodyFotos">
                    {colocarImg()}
                </section>
            </main>
        </>
    )
}
