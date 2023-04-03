import React from "react";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";

const CardMobil = () => {
  const apiCarURL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car";
  const [valueCategory, setCategory] = useState("");
  const [valueHarga, setHarga] = useState("");
  const [valueStatus, setStatus] = useState("");
  const [carName, setCarName] = useState("");
  const [listCars, setListCars] = useState([]);
  console.log(listCars);

const handlerGetCar = async() => {
try{
  const config = {
    headers: {
    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY4MDUxMjcxN30.Ad5wk2qarIO_Uc_DKiNmbi6c4q1QFfERpyU0ApIKBT8"
    }
  }
  const getCar = await axios.get(apiCarURL, config)
  setListCars(getCar.data.cars)
} catch(error){
  console.log(error)
}
}

  useEffect(() => {
    // handleOnClick()
    handlerGetCar()
  },[])

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {listCars.map(( item ) =>
         ( 
        <div class="card" key={item.id}>
          <div style={{ width: "270px", height: "auto" }}>
            <img
              class="card-img-top"
              width="100%"
              height="auto"
              src={item.image}
              alt=""
            />
          </div>
          <div class="card-body">
            <h4 class="card-title">{item.name}</h4>
            <p class="card-text">{item.price}</p>
          </div>

          <Button
            // onClick={() => handlePilihMobil(id)}
            style={{
              margin: "1em",
              backgroundColor: "#5CB85F",
              border: "none",
              borderRadius: "2px",
            }}
          >
            Pilih Mobil
          </Button>
        </div>
        )
        )}
      </div>
    </div>
  );
};

export default CardMobil;
