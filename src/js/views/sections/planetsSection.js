import React, { useContext, useEffect } from "react";
import { Card } from "../../component/card";
import { Context } from "../../store/appContext";

export const PlanetsSection = () => {
  const { store, actions } = useContext(Context);
  const planets = store.planets;
  useEffect(() => {
    const fetchData = () => {
      actions.loadPlanetsData();
    };

    fetchData();
  }, []);

  return (
    <div>
      <p className="fs-1 fw-bold text-danger">Planets</p>
      <div className="overflow-x-auto d-flex flex-row gap-5">
        {planets.map((planet, index) => {
          return (
            <div key={index} style={{ minWidth: 400 }}>
              <Card planet={planet} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
