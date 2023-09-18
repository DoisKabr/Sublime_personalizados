import React, { useState } from "react";
import "./estiloPadrao.css";

// Componentes imports

import Header from "./componentes/header/Header";
import Body from "./componentes/body/Body";
import Footer from "./componentes/footer/Footer";
import MenuFlutuante from "./componentes/menu/menuFlutuante";

export default function App() {


  const [pagina, setPagina] = useState(1);

  return (<>
    <Header pagina={pagina} setPagina={setPagina} />
    <Body pagina={pagina} setPagina={setPagina} />
    <Footer />
    <MenuFlutuante />
  </>)
}