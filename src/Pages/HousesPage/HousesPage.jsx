import React, { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../core/components/Loading/contexts/LoadingContext";
import { API } from "../../shared/consts/api.consts";
import { HousesGallery } from "./components/HousesGallery/HousesGallery";

export function HousesPage() {
  const [houses, setHouses] = useState([]);
  const {setIsLoading}= useContext(LoadingContext);


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
    <div style={{width:"90%",margin:"auto"}}>
      <HousesGallery houses={houses}  />
      
    </div>
  );
}
