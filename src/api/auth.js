import axios from "axios";

// const API = "http://localhost:4000/api";
const API = "https://proxipyme-web.onrender.com/api";

// REGISTER
export const registrerRecuest = (user) => axios.post(`${API}/register`, user);
export const registrerRecuestPyme = (user) =>
    axios.post(`${API}/registerPyme`, user);

// LOGIN
export const loginRequest = (user) => axios.post(`${API}/login`, user);
export const loginRequestPyme = (user) => axios.post(`${API}/loginPyme`, user);

export const getTasks = (user) => axios.get(`${API}/tasks`, user);
export const getTask = (id) => axios.get(`${API}/tasks/${id}`);

export const profilReq = (id) => axios.get(`${API}/profile/${id}`);
export const profilReqPyme = (id) => axios.get(`${API}/profilePyme/${id}`);

export const pymesReq = (user) => axios.get(`${API}/pymes`, user);
export const pymeProfile = (id) => axios.get(`${API}/pyme/${id}`);

export const updateCord = (id, dat) =>
    axios.put(`${API}/pymesCords/${id}`, dat);
