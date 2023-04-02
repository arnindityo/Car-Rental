import React from "react";
import './crmobil.css';
import Navbar from "./navbar";
import Section1 from "./section1";
import Section7 from "./section7";
import { useHistory } from "react-router-dom";
import Form from "./form/Form";

const apiCarURL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car";

const CrMobil = () => {
    const { push } = useHistory()
    return(
        <div>
            <Navbar />
            <Section1 />
            <div className="container d-flex justify-content-center">
                <div className="cari-mobil d-flex gap-2">

            <Form />

                    <div className="form-kategori-mobil">
                        <label for="exampleFormControlInput1" className="form-label">Kategori</label>
                        <select className="form-select" aria-label="Default select example">
                        <option selected>2-4 orang</option>
                        <option value="1">4-6 orang</option>
                        <option value="2">6-8 orang</option>
                        </select>
                    </div>

                    <div className="form-harga-mobil">
                        <label for="exampleFormControlInput1" className="form-label">Harga</label>
                        <select className="form-select" aria-label="Default select example">
                        <option selected>Dibawah Rp. 400.000</option>
                        <option value="1">Rp. 400.000 - Rp. 600.000</option>
                        <option value="2">Diatas Rp. 600.000</option>
                        </select>
                    </div>

                    <div className="form-status-mobil">
                        <label for="exampleFormControlInput1" className="form-label">Status</label>
                        <select className="form-select" aria-label="Default select example">
                        <option selected>Disewa</option>
                        <option value="1">Kosong</option>
                        </select>
                    </div>

                    <button onClick={() => push('/pencarian')} type="button" className="btn btn-success mt-">
                        Cari Mobil
                    </button>
                </div>
            </div>
                
            <Section7 />
        </div>
    )
}

export default CrMobil;