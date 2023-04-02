const Textfield = ({carName, setCarName}) => {
  const handleOnChange = (e) => {
    setCarName(e.target.value);
  };
  return (
    <div className="form-nama-mobil">
      <label for="exampleFormControlInput1" className="form-label">
        Nama
      </label>
      <input
        onChange={handleOnChange}
        value={carName}
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Ketik nama/tipe mobil"
      />
    </div>
  );
};

export default Textfield;
