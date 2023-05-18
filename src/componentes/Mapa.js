import GoogleMapReact from "google-map-react";
import { useState } from "react";
import { LISTA_BARRAGENS } from "../mocks/Barragens";
import Marker from "./Marker";



function Mapa(props) {
  const DEFAULT_ZOOM = 8;
  const DEFAULT_CENTER = {
    lat: -8.470697,
    lng: -38.371057,
  };
  
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={DEFAULT_CENTER}
      defaultZoom={DEFAULT_ZOOM}
    >
      {props.listaBarragens?.map((barragem, indice) => {
        return (
          <Marker
            lat={barragem.localizacao.latitude}
            lng={barragem.localizacao.longitude}
            barragem={barragem}
            key={indice}
          />
        );
      })}
    </GoogleMapReact>
  );
}
export default Mapa;
