import axios from "axios";

const instance = axios.create({
  baseURL: "https://gex-dashboard.firebaseio.com"
});

export default instance;
