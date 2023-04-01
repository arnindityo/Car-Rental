import React from "react";
import './crmobil.css';
import Navbar from "./navbar";
import Section1 from "./section1";
import Section7 from "./section7";

const CrMobil = () => {
    return(
        <div>
            <Navbar />
            <Section1 />
            <div className="container d-flex justify-content-center">
                <div className="cari-mobil d-flex gap-2">

                    <div className="form-nama-mobil">
                        <label for="exampleFormControlInput1" className="form-label">Nama</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Ketik nama/tipe mobil"/>
                    </div>

                    <div className="form-kategori-mobil">
                        <label for="exampleFormControlInput1" className="form-label">Kategori</label>
                        <select className="form-select" aria-label="Default select example">
                        <option selected>Masukan Kapasitas Mobil</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="form-harga-mobil">
                        <label for="exampleFormControlInput1" className="form-label">Harga</label>
                        <select className="form-select" aria-label="Default select example">
                        <option selected>Masukan Harga Sewa per Hari</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="form-status-mobil">
                        <label for="exampleFormControlInput1" className="form-label">Status</label>
                        <select className="form-select" aria-label="Default select example">
                        <option selected>Disewa</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>

                    <button type="button" className="btn btn-success mt-">
                        Cari Mobil
                    </button>
                </div>
            </div>
                
            <Section7 />
        </div>
    )
}

export default CrMobil;