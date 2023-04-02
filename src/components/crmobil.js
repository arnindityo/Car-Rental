import React from "react";
import './crmobil.css';
import Navbar from "./navbar";
import Section1 from "./section1";
import Section7 from "./section7";
import Form from "./form/Form";

const CrMobil = () => {
    return(
        <div>
            <Navbar />
            <Section1 />
            <Form />                
            <Section7 />
        </div>
    )
}

export default CrMobil;