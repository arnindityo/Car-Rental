const Select = ({ labelValue, items, onChange, value }) => {
  const handleOnChange = (e) => {
    const val = e.target.value;
    onChange(val);
  };
  return (
    <div className="">
      <label for="exampleFormControlInput1" className="form-label">
        {labelValue}
      </label>
      <select onChange={handleOnChange} value={value} className="form-select" aria-label="Default select example">
        {items.map(({ id, text, value}) => {
            return (
                <option key={id} value={value}>{text}</option>
                
            );
        })}
      </select>
    </div>
  );
};
 export default Select;