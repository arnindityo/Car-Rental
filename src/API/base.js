import axios, {Axios} from "axios";

const Base = axios.create ({
    baseURL:`${process.env.REACT_APP_BASE_BINAR_URL}`,
    timeout:1500
} )

export default Base;