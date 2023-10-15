import axios from "axios";

const API = "http://localhost:4000/api";

export const registrerRecuest = (user) => axios.post(`${API}/user`, user);

export const loginRequest = (user) => axios.post(`${API}/user`, user);
