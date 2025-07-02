import { createContext, useContext, useState } from "react";

// FarmContext.js
const FarmContext = createContext();

export const useFarm = () => useContext(FarmContext);

export const FarmProvider = ({ children }) => {
  const [farms, setFarms] = useState([]);

  const addFarm = (newFarm) => {
    setFarms((prev) => [...prev, newFarm]);
    localStorage.setItem("farms", JSON.stringify(farms));
  };

  const addReportToFarm = (farmIndex, report) => {
    const updatedFarms = [...farms];
    updatedFarms[farmIndex].reports.push(report);
    setFarms(updatedFarms);
    localStorage.setItem("farms", JSON.stringify(updatedFarms));
  };

  return (
    <FarmContext.Provider value={{ farms, addFarm, addReportToFarm }}>
      {children}
    </FarmContext.Provider>
  );
};
