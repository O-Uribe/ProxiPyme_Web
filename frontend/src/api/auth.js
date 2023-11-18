import axios from "axios";

const API = "http://localhost:4000/api";

export const registrerRecuest = (user) => axios.post(`${API}/register`, user);

export const registrerRecuestPyme = (user) =>
    axios.post(`${API}/registerPyme`, user);

export const loginRequest = (user) => axios.post(`${API}/login`, user);

export const loginRequestPyme = (user) => axios.post(`${API}/loginPyme`, user);

export const getTasks = (user) => axios.get(`${API}/tasks`, user);

export const getTask = (id) => axios.get(`${API}/tasks/${id}`);

export const profilReq = (user) => axios.get(`${API}/profile`, user);
