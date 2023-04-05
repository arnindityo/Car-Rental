import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import Form from "./form/Form";
import Section7 from "./section7";

const apiDetailCar = `https://bootcamp-rent-cars.herokuapp.com/customer/car`;

const DetailCar = () => {
  const { carId } = useParams();
  const [dataDetailCar, setDataDetailCar] = useState({});

  console.log({ dataDetailCar });

  useEffect(() => {
    fetch(`${apiDetailCar}/${carId}`)
      .then((res) => res.json())
      .then((response) => {
        setDataDetailCar(response);
      });
  }, [carId]);

  return (
    <div>
        <div style={{marginBottom: "200px"}}><Navbar /></div>
        <Form />
      <div className="container">
        <div className="col-7 tulisan">
          <div>
            <h5>Tentang Paket</h5>
            <br></br>
            <h5>Include</h5>
            <ul>
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <br></br>
            <h5>Exclude</h5>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
            <br></br>
            <h5>Refund, Reschedule, Overtime</h5>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>
        </div>

        <div className="col-5 cardloc">
          <img class="card-img-top" src={dataDetailCar.image} alt="" />
          <div class="card-body">
            <h4 class="card-title">{dataDetailCar.name}</h4>
            <p class="card-text">{dataDetailCar.category}</p>
          </div>

          <div
            style={{
              margin: "1em",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <b>Total</b>
            </div>
            <div>
              <b>Rp.{dataDetailCar.price}</b>
            </div>
          </div>
        </div>
      </div>
      <Section7 />
    </div>
  );
};

export default DetailCar;
