import React, { useState } from "react";
import "./estiloPadrao.css";

// Componentes imports

import Header from "./componentes/header/Header";
import Body from "./componentes/body/Body";
import Footer from "./componentes/footer/Footer";
import MenuFlutuante from "./componentes/menu/menuFlutuante";

// Fotos imports icones

import Icone from "./imagens/icone/sublime.jpg";
import Face from "./imagens/icone/redesSociais/face.png";
import Whats from "./imagens/icone/redesSociais/whats.png";
import Insta from "./imagens/icone/redesSociais/insta.png";
const fotosIcones = [Face, Whats, Insta];

export default function App() {


  const [pagina, setPagina] = useState(1);


  return <>
    <Header icone={Icone} pagina={pagina} setPagina={setPagina} />
    <Body pagina={pagina} fotosIcones={fotosIcones} />
    <Footer icone={Icone} />
    <MenuFlutuante />
  </>
}