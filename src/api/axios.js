import axios from "axios";

const instance = axios.create({
  baseURL: "https://gex-dashboard-default.firebaseio.com"
});

export default instance;
