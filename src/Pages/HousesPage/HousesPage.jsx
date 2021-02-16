import React, { useEffect, useState } from "react";
import { API } from "../../shared/consts/api.consts";
import { HousesGallery } from "./components/HousesGallery/HousesGallery";

export function HousesPage() {
  const [houses, setHouses] = useState([]);


  const getHouses = () => {
    API.get("show/houses").then((res) => {
      
      setHouses(res.data);
      console.log(res.data);
    });


  };

  

  useEffect(getHouses, []);

  return (
    <div>
      <HousesGallery houses={houses}  />
    </div>
  );
}
