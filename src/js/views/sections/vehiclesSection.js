import React, { useContext, useEffect } from "react";
import { Card } from "../../component/card";
import { Context } from "../../store/appContext";

export const VehiclesSection = () => {
  const { store, actions } = useContext(Context);
  const vehicles = store.vehicles;
  useEffect(() => {
    const fetchData = () => {
      actions.loadVehicleData();
    };

    fetchData();
  }, []);

  return (
    <div>
      <p className="fs-1 fw-bold text-danger">Vehicles</p>
      <div className="overflow-x-auto d-flex flex-row gap-5">
        {vehicles.map((vehicle, index) => {
          return (
            <div key={index} style={{ minWidth: 400 }}>
              <Card vehicle={vehicle} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
