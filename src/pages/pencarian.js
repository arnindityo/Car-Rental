import { catOptions, hargaOptions, statusOptions } from "../constants";
import React from "react";
import Navbar from "../components/navbar";
import Section7 from "../components/section7";
// import CardMobil from "../components/cardmobil";
import Textfield from "../components/form/Textfield";
import Select from "../components/form/Select";
import { useState } from "react";

const apiCarURL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car";

const Pencarian = () => {
  const [valueCategory, setCategory] = useState("");
  const [valueHarga, setHarga] = useState("");
  const [valueStatus, setStatus] = useState("");
  const [carName, setCarName] = useState("");
  const [listCars, setListCars] = useState([]);

  const handleOnClick = () => {
    fetch(
      apiCarURL +
        "?" +
        new URLSearchParams({
          name: carName,
          category: valueCategory,
          isRented: valueStatus,
          minPrice: valueHarga,
          page: 1,
          pageSize: 10,
        })
    )
      .then((res) => res.json())
      .then((resp) => {
        const dataCar = resp.cars;
        setListCars(dataCar);
      });
  };
  return (
    <div className="container">
      <Navbar />
      <div className="container d-flex justify-content-center" style={{marginTop: "200px"}}>
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
              handleOnClick();
            }}
            type="button"
            className="btn btn-secondary mt-"
          >
            Edit
          </button>
        </div>
      </div>
      {/* <CardMobil /> */}
      <Section7 />
    </div>
  );
};

export default Pencarian;
