import React from "react";
import { useLocation } from "react-router-dom";

export const Detail = () => {
  const location = useLocation();

  console.log(location.state);

  const data = location.state;

  return (
    <div>
      <div className="d-flex flex-row">
        <img
          src="https://via.placeholder.com/400x200/c0c0c0/FFFFFF?text=400x200"
          alt="Placeholder Image"
          style={{ width: 800 }}
        />
        <div className="d-flex flex-column justify-content-center align-items-center p-10">
          <p className="fs-1 text-center">
            {data.character
              ? data.character.name
              : data.planet
              ? data.planet.name
              : data.vehicle.name}
          </p>
          <p className="fs-5 text-center p-2">
            En un rincón distante del universo, más allá de las galaxias
            conocidas y los confines del espacio explorado, se encuentra un
            sistema estelar en el que los secretos del cosmos convergen en una
            danza eterna de luz y oscuridad. En este reino de maravillas
            cósmicas, donde los mundos nacen y mueren en un ciclo interminable,
            la vida florece en formas inimaginables y las historias se
            entrelazan en la vastedad del tiempo y el espacio.
          </p>
        </div>
      </div>
      <div
        style={{
          marginBlock: 50,
          backgroundColor: "red",
          height: "1px",
          width: "100%",
        }}
      ></div>
      <div
        className="d-flex flex-row justify-content-around fw-bolder"
        style={{ color: "red" }}
      >
        <div>
          <p>Nombre</p>
          <p>
            {data.character
              ? data.character.name
              : data.planet
              ? data.planet.name
              : data.vehicle.name}
          </p>
        </div>
        <div>
          <p>
            {data.character
              ? "Año de nacimiento"
              : data.planet
              ? "Pupolation"
              : "Modelo"}
          </p>
          <p>
            {data.character
              ? data.character.birth_year
              : data.planet
              ? data.planet.population
              : data.vehicle.model}
          </p>
        </div>
        <div>
          <p>
            {data.character
              ? "Gender"
              : data.planet
              ? "Gravitry"
              : "Manufacturer"}
          </p>
          <p>
            {data.character
              ? data.character.gender
              : data.planet
              ? data.planet.gravity
              : data.vehicle.manufacturer}
          </p>
        </div>
        <div>
          <p>
            {data.character
              ? "Height"
              : data.planet
              ? "Diameter"
              : "Vehicle class"}
          </p>
          <p>
            {data.character
              ? data.character.height
              : data.planet
              ? data.planet.diameter
              : data.vehicle.vehicle_class}
          </p>
        </div>
        <div>
          <p>
            {data.character
              ? "Mass"
              : data.planet
              ? "Climate"
              : "Cost in credits"}
          </p>
          <p>
            {data.character
              ? data.character.mass
              : data.planet
              ? data.planet.climate
              : data.vehicle.cost_in_credits}
          </p>
        </div>
        <div>
          <p>
            {data.character
              ? "Skin color"
              : data.planet
              ? "Terrain"
              : "Passengers"}
          </p>
          <p>
            {data.character
              ? data.character.skin_color
              : data.planet
              ? data.planet.terrain
              : data.vehicle.passengers}
          </p>
        </div>
      </div>
    </div>
  );
};
