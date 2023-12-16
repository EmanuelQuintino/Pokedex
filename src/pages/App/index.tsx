import axios from "axios";
import { useEffect } from "react";

export function App() {
  const API = "https://pokeapi.co/api/v2/pokemon";

  async function getPokemon() {
    try {
      const response = await axios.get(API);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <div>
      <h1>App</h1>
    </div>
  );
}
