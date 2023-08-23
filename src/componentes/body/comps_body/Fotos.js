import React, { useEffect } from "react";

// Fotos do site

import f1 from "../../../imagens/canecas/01.jpg";
import f2 from "../../../imagens/canecas/02.jpg";
import f3 from "../../../imagens/canecas/03.jpg";
import f4 from "../../../imagens/canecas/04.jpg";
import f5 from "../../../imagens/canecas/05.jpg";
import f6 from "../../../imagens/canecas/06.jpg";
import f7 from "../../../imagens/canecas/07.jpg";
import f8 from "../../../imagens/canecas/08.jpg";
import f9 from "../../../imagens/canecas/09.jpg";
import f10 from "../../../imagens/canecas/10.jpg";
import f11 from "../../../imagens/canecas/11.jpg";
import f12 from "../../../imagens/canecas/12.jpg";
import f14 from "../../../imagens/canecas/14.jpg";
import f15 from "../../../imagens/canecas/15.jpg";
import f16 from "../../../imagens/canecas/16.jpg";
import f17 from "../../../imagens/canecas/17.jpg";
import f18 from "../../../imagens/canecas/18.jpg";
import f19 from "../../../imagens/canecas/19.jpg";
import f20 from "../../../imagens/canecas/20.jpg";
import f21 from "../../../imagens/canecas/21.jpg";
import f22 from "../../../imagens/canecas/22.jpg";
import f23 from "../../../imagens/canecas/23.jpg";
import f24 from "../../../imagens/canecas/24.jpg";
import f25 from "../../../imagens/canecas/25.jpg";
import f26 from "../../../imagens/canecas/26.jpg";
import f27 from "../../../imagens/canecas/27.jpg";
import f28 from "../../../imagens/canecas/28.jpg";
import f29 from "../../../imagens/canecas/29.jpg";
import f30 from "../../../imagens/canecas/30.jpg";
import f31 from "../../../imagens/canecas/31.jpg";
import f32 from "../../../imagens/canecas/32.jpg";
import f33 from "../../../imagens/canecas/33.jpg";
import f34 from "../../../imagens/canecas/34.jpg";
import f35 from "../../../imagens/canecas/35.jpg";

const arrayColocarFotos = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f14, f15, f16, f17, f18, f19, f20, f21, f22, f23, f24, f25, f26, f27, f28, f29, f30, f31, f32, f33, f34, f35];


export default function Fotos(props) {
    useEffect(
        () => {
            document.querySelector('.secsBodyFotos').innerHTML = '';
        }
    )


    return <>
        <section className="sectionPadrao">
            <section className="secsBody secsBodyFotos">
                {useEffect(() => { colocarImagens() })}
            </section>
        </section>
    </>
}


function colocarImagens() {
    arrayColocarFotos.forEach(e => {
        let div = document.createElement('img');
        div.src = e;
        div.alt = e
        div.className = "fotos_fotos";

        document.querySelector('.secsBodyFotos').appendChild(div);
    })
}