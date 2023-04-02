import { catOptions, hargaOptions, statusOptions } from "../../constants";
import Textfield from "./Textfield";
import Select from "./Select";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { Button } from "react-bootstrap";

const apiCarURL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car";

const Form = () => {
    const [valueCategory, setCategory] = useState("");
    const [valueHarga, setHarga] = useState("");
    const [valueStatus, setStatus] = useState("");
    const [carName, setCarName] = useState("");
    const [listCars, setListCars] = useState([]);
    const { push } = useHistory();
    console.log({ listCars });
    // const handlePilihMobil = (param) => {push(`/cari-mobil/${param}`)}
    
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
            handleOnClick(); push("/pencarian");
          }}
          type="button"
          className="btn btn-success mt-"
        >
          Cari Mobil
        </button>
        
        {/* <div>
          <h3>Result</h3>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {listCars.map(({ id, image, name, price }) => {
              return (
                <div class="card">
                  <div style={{ width: "270px", height: "auto" }}>
                    <img
                      class="card-img-top"
                      width="100%"
                      height="auto"
                      src={image}
                      alt=""
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">{name}</h4>
                    <p class="card-text">{price}</p>
                  </div>

                  <Button
                    onClick={() => handlePilihMobil(id)}
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
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Form;
