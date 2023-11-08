import axios from "axios";
// const REACT_APP_API_TOKEN = "17177b1647a5b04f8b9bdb8a0e1ba5006a7a18505a6d2bcede4bdcbb1210fd6fbd321249f098d70586f8be8f6196e59066bbef31247f2b81d196afac5e17d0478f34bfb04046a419006427949fb8e73d28d6c31d632c01d702ebc8f4a2edd18cf75171ae0b378b1624c99f0c65735a7b2148c6872b631ff9981881ff972d8240";
// const REACT_APP_API_URL = "http://localhost:1337/api"

export const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_APP_API_TOKEN,
  },
});