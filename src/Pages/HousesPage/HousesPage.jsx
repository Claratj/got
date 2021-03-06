import React, { useContext, useEffect, useState } from "react";
import { Footer } from "../../core/components/Footer/Footer";
import { LoadingContext } from "../../core/components/Loading/contexts/LoadingContext";
import { API } from "../../shared/consts/api.consts";
import { HousesGallery } from "./components/HousesGallery/HousesGallery";

export function HousesPage() {
  const [houses, setHouses] = useState([]);
  const { setIsLoading } = useContext(LoadingContext);


  const getHouses = () => {
    setIsLoading(true);
    API.get("show/houses").then((res) => {
      setIsLoading(false);
      setHouses(res.data);
      console.log(res.data);
    });


  };



  useEffect(getHouses, []);

  return (
    <div className="gallery-container">
      <HousesGallery houses={houses} />
    </div>
  );
}
