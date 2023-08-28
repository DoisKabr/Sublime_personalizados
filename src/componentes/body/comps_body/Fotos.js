import React , { useState } from "react";
import produtos from "../../../JSON/arquivoFotos.json";


export default function Fotos(props) {
    
    const [valorIp1, setValorIp1] = useState('');
    const pegarValorInput = (e) => {
        setValorIp1(e.target.value);
    };


    let fotos = [];
    const colocarImg = () => {
        fotos = [];
        const prod = produtos
        prod.forEach(e=>{
            if(e.id.includes(valorIp1) || e.categoria.toLowerCase().includes(valorIp1.toLowerCase()) || 
            e.nome.toLowerCase().includes(valorIp1.toLowerCase())){
            fotos.push(
                <div className="divImg">
                    <img key={e.id} src={e.url} alt={e.nome} title={e.nome} className="fotos_fotos" />
                    <h3 className="textoPadraoImg">{e.nome}</h3>
                </div>
            );
            }
        })
        return (fotos)
    };



    return (
        <>
            <main className="sectionPadrao">
                <div className="divBarraPesquisa" >
                    <h3 className="padraoButton">Pesquisar</h3>
                    <input type="text" placeholder="=> categorias, nomes, ..." className="barraPesquisa" onInput={(e)=>{pegarValorInput(e)}} />
                </div>
                <section className="secsBody secsBodyFotos">
                    {colocarImg()}
                </section>
            </main>
        </>
    )
}

