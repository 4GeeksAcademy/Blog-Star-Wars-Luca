import React from "react";
import { CharacteresSection } from "./sections/characteresSection";
import { PlanetsSection } from "./sections/planetsSection";
import { VehiclesSection } from "./sections/vehiclesSection";

export const Home = () => (
  <div>
    <CharacteresSection />
    <PlanetsSection />
    <VehiclesSection />
  </div>
);
