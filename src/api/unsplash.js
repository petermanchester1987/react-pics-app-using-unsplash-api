import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID XYfuZhjFmp7vqNYJdSE6RxB6bxSg6dxZzrf59myw5RI",
  },
});
