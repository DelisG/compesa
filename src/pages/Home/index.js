import DropdownFilter from "../../componentes/DropdownFilter";
import Seachbar from "../../componentes/SeachBar";
import icone from "../../assets/icone-compesa.png";
import Mapa from "../../componentes/Mapa";
import { useEffect, useState } from "react";
import { LISTA_BARRAGENS } from "../../mocks/Barragens";
import { filtrarBarragens } from "../../utils";
import {
  DEFAULT_CENTER,
  DEFAULT_ZOOM_IN,
  DEFAULT_ZOOM_OUT,
} from "../../states/mapa";

function Home() {
  const [listaBarragens, setListaBarragens] = useState(LISTA_BARRAGENS);
  const [busca, setBusca] = useState("");
  const [barragens, setBarragens] = useState(LISTA_BARRAGENS);
  const [risco, setRisco] = useState("");
  const [dpa, setDpa] = useState("");
  const [coordenadas, setCoordenadas] = useState(DEFAULT_CENTER);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM_OUT);

  useEffect(() => {
    const barragensFiltradas = filtrarBarragens(
      LISTA_BARRAGENS,
      busca,
      risco,
      dpa
    );
    setBarragens(barragensFiltradas);
  });

  return (
    <div className="home-container">
      <div className="inputs-container ">
        <div className="search-bar-input">
        <img alt="icone-compesa" className="icone-compesa" src={icone} />
          <DropdownFilter
            opcoes={[
              "Filtrar por categoria de risco",
              "Todos",
              "Baixo",
              "Médio",
              "Alto",
              "Muito Alto",
            ]}
          />
          <DropdownFilter
            opcoes={[
              "Filtrar por dano potencial",
              "Todos",
              "Baixo",
              "Médio",
              "Alto",
              "Muito Alto",
            ]}
          />
          <Seachbar setBusca={setBusca} className="search-bar-input" />
        </div>
      </div>
      <div className="google-map">
        <Mapa listaBarragens={listaBarragens} />
      </div>
    </div>
  );
}

export default Home;
