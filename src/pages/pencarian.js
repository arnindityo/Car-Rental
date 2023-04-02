import React from "react";
import Navbar from "../components/navbar";
import Section7 from "../components/section7";
import CardMobil from "../components/cardmobil";

const Pencarian = () => {
    const apiCarURL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car";
  return (
    <div className="container">
      <Navbar />
      <div className="container d-flex justify-content-center">
        <div className="d-flex gap-2" style={{ marginTop: "200px" }}>
          <div className="form-nama-mobil">
            <label for="exampleFormControlInput1" className="form-label">
              Nama
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Ketik nama/tipe mobil"
            />
          </div>

          <div className="form-kategori-mobil">
            <label for="exampleFormControlInput1" className="form-label">
              Kategori
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>2-4 orang</option>
              <option value="1">4-6 orang</option>
              <option value="2">6-8 orang</option>
            </select>
          </div>

          <div className="form-harga-mobil">
            <label for="exampleFormControlInput1" className="form-label">
              Harga
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Dibawah Rp. 400.000</option>
              <option value="1">Rp. 400.000 - Rp. 600.000</option>
              <option value="2">Diatas Rp. 600.000</option>
            </select>
          </div>

          <div className="form-status-mobil">
            <label for="exampleFormControlInput1" className="form-label">
              Status
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Disewa</option>
              <option value="1">Kosong</option>
            </select>
          </div>

          <button type="button" className="btn btn-secondary mt-">
            Edit
          </button>
        </div>
      </div>

      <CardMobil />
      <Section7 />
    </div>
  );
};

export default Pencarian;
