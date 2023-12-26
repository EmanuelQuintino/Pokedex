import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { API } from "../services/api";

export type PokemonBasicData = {
  name: string;
  url: string;
};

type Context = {
  allPokemon: PokemonBasicData[];
};

export const PokemonContext = createContext({} as Context);

export function PokemonProvider({ children }: PropsWithChildren) {
  const [allPokemon, setAllPokemon] = useState<PokemonBasicData[]>([]);

  async function getAllPokemon() {
    try {
      const { data } = await API.get(`/pokemon?limit=100000&offset=0`);

      // const pokemonPromiseList = data.results.map(async (pokemon: { url: string }) => {
      //   const response = await fetch(pokemon.url);
      //   const data = await response.json();
      //   return data;
      // });

      // const allPokemonDataList = await Promise.all(pokemonPromiseList);

      setAllPokemon([...data.results]);
    } catch (error) {
      console.error();
    }
  }

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <PokemonContext.Provider value={{ allPokemon }}>{children}</PokemonContext.Provider>
  );
}
