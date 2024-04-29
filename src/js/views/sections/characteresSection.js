import React, { useContext, useEffect } from "react";
import { Card } from "../../component/card";
import { Context } from "../../store/appContext";

export const CharacteresSection = () => {
  const { store, actions } = useContext(Context);
  const characteres = store.characteres;
  useEffect(() => {
    const fetchData = () => {
      actions.loadCharacteresData();
    };

    fetchData();
  }, []);

  return (
    <div>
      <p className="fs-1 fw-bold text-danger">Characteres</p>
      <div className="overflow-x-auto d-flex flex-row gap-5">
        {characteres.map((character, index) => {
          return (
            <div key={index} style={{ minWidth: 400 }}>
              <Card character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
