import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const apiCarURL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car";
const [listCars, setListCars] = useState([]);
const handlePilihMobil = (param) => {push(`/cari-mobil/${param}`)}

function CardMobil() {
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

  {
    listCars.map(({ id, image, name, price }) => {
      return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{price}</Card.Text>
            <Button onClick={() => handlePilihMobil} variant="primary">Pilih Mobil</Button>
          </Card.Body>
        </Card>
      );
    });
  }
}

export default CardMobil;
