import axios from "axios";

export const API = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
