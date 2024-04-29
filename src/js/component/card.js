import React, { useContext, useEffect, useState } from "react";
import { getCharacter, getPlanet, getVehicle } from "../services/enpoints";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({ character, planet, vehicle }) => {
  const { store, actions } = useContext(Context);

  const addToFavorites = (item) => {
    actions.addFavorites(item);
  };

  const isFavorite = () => {
    const res = store.favorites.find(
      (item) => item.name === (character?.name || planet?.name || vehicle?.name)
    );
    return res;
  };

  return (
    (character || planet || vehicle) && (
      <div className="card">
        <img
          src="https://via.placeholder.com/400x200/c0c0c0/FFFFFF?text=400x200"
          className="card-img-top"
          alt="Placeholder Image"
        />
        <div className="card-body">
          <h5 className="card-title">
            {character ? character.name : planet ? planet.name : vehicle.name}
          </h5>
          {character && <p className="card-text">Gender: {character.gender}</p>}
          <p className="card-text">
            {character
              ? `Hair color: ${character.hair_color}`
              : planet
              ? `Population: ${planet.population}`
              : `Model: ${vehicle.model}`}
          </p>
          <p className="card-text">
            {character
              ? `Eye color: ${character.eye_color}`
              : planet
              ? `Terrain: ${planet.terrain}`
              : `Manufacturer: ${vehicle.manufacturer}`}
          </p>
          <div className="d-flex justify-content-between">
            <Link
              to={`/detail/${
                character ? character.name : planet ? planet.name : vehicle.name
              }`}
              state={
                character
                  ? { character: character }
                  : planet
                  ? { planet: planet }
                  : { vehicle: vehicle }
              }
              className="btn btn-primary"
            >
              Learn more!
            </Link>
            <button
              type="button"
              className={`btn ${
                isFavorite() ? "btn-danger" : "btn-outline-danger"
              }`}
              onClick={() => {
                addToFavorites(
                  character ? character : planet ? planet : vehicle
                );
              }}
            >
              <i
                className={`far ${isFavorite() ? "fa-heart" : "fa-heart"}`}
              ></i>
            </button>
          </div>
        </div>
      </div>
    )
  );
};
