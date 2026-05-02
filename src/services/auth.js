import axios from "axios";
import { log } from "../logging_middleware/logger";

const BASE_URL = "http://20.207.122.20/evaluation-service";

let token = "";


export const register = async () => {
  try {
    await log("frontend", "info", "api", "Registering user");

    const res = await axios.post(`${BASE_URL}/register`, {
      email: "ns1542@srmist.edu.in",
      name: "Nikia Saxena",
      rollNo: "RA2311008020011",
      accessCode: "QkbpxH"
    });

    localStorage.setItem("clientID", res.data.clientID);
    localStorage.setItem("clientSecret", res.data.clientSecret);

    await log("frontend", "info", "api", "Register success");

  } catch (err) {
    await log("frontend", "error", "api", "Register failed");

    
    localStorage.setItem("token", "mock-token");
  }
};


export const getAuthToken = async () => {
  try {
    await log("frontend", "info", "api", "Fetching auth token");

    const res = await axios.post(`${BASE_URL}/auth`, {
      clientID: localStorage.getItem("clientID"),
      clientSecret: localStorage.getItem("clientSecret")
    });

    token = res.data.access_token;
    localStorage.setItem("token", token);

    await log("frontend", "info", "api", "Token received");

  } catch (err) {
    await log("frontend", "error", "api", "Token fetch failed");

    localStorage.setItem("token", "mock-token");
  }
};


export const getToken = () => {
  return localStorage.getItem("token");
};