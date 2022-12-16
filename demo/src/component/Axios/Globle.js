import axios from "axios";

let data = localStorage.getItem("alluser");
let x = JSON.parse(data);
axios.defaults.headers.common["Accept"] = "";
axios.defaults.headers.common["Authorization"] = "Bearer " + x?.jwtToken;
