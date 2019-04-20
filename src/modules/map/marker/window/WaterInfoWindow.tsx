import * as React from "react";

export interface WaterInfoWindowProps {
  reporter: string;
}

const WaterInfoWindow = ({ reporter }: WaterInfoWindowProps) => (
  <div>
    <h3>Ponto de Alagamento</h3>
    <p>Reportado por {reporter}</p>
  </div>
);

export { WaterInfoWindow };
