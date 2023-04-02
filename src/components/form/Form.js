import Textfield from "./Textfield"
import { useState } from "react";

const Form = () => {
    const [carName, setCarName] = useState("")
    console.log(carName)
    return (
        <Textfield carName={carName} setCarName={setCarName}/>
    )
}

export default Form;