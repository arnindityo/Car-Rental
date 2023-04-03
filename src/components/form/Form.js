import React from "react";
import { catOptions, hargaOptions, statusOptions } from "../../constants";
import Textfield from "./Textfield";
import Select from "./Select";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const Form = () => {
  const apiCarURL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car";
    const [valueCategory, setCategory] = useState("");
    const [valueHarga, setHarga] = useState("");
    const [valueStatus, setStatus] = useState("");
    const [carName, setCarName] = useState("");
    // const [listCars, setListCars] = useState([]);
    const { push } = useHistory();
    // console.log({ listCars });
    // const handlePilihMobil = (param) => {push(`/cari-mobil/${param}`)}

    
  // const handleOnClick = () => {
  //   fetch(
  //     apiCarURL +
  //       "?" +
  //       new URLSearchParams({
  //         name: carName,
  //         category: valueCategory,
  //         isRented: valueStatus,
  //         minPrice: valueHarga,
  //         page: 1,
  //         pageSize: 50,
  //       })
  //   )
  //     .then((res) => res.json())
  //     .then((resp) => {
  //       const dataCar = resp.cars;
  //       setListCars(dataCar);
  //     });
  // };

  return (
    <div className="container d-flex justify-content-center">
      <div className="cari-mobil d-flex gap-2">
        <Textfield carName={carName} setCarName={setCarName} />
        <Select
          labelValue={"Kategori"}
          items={catOptions}
          onChange={setCategory}
          value={valueCategory}
        />
        <Select
          labelValue={"Harga"}
          items={hargaOptions}
          onChange={setHarga}
          value={valueHarga}
        />
        <Select
          labelValue={"Status"}
          items={statusOptions}
          onChange={setStatus}
          value={valueStatus}
        />
        <button
          onClick={() => {
            // handleOnClick();
            push('/pencarian');
          }}
          type="button"
          className="btn btn-success mt-"
        >
          Cari Mobil
        </button>
        
      </div>
    </div>
  );
};

export default Form;
