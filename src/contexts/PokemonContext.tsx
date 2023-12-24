import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { API } from "../services/api";
import { Pokemon } from "../@types/pokemon";

type Context = {
  allPokemon: Pokemon[];
};

export const PokemonContext = createContext({} as Context);

export function PokemonProvider({ children }: PropsWithChildren) {
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);

  async function getAllPokemon() {
    const { data } = await API.get(`pokemon?limit=100000&offset=0`);

    const pokemonPromiseList = data.results.map(async (pokemon: { url: string }) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    });

    const allPokemonDataList = await Promise.all(pokemonPromiseList);

    setAllPokemon([...allPokemon, ...allPokemonDataList]);
  }

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <PokemonContext.Provider value={{ allPokemon }}>{children}</PokemonContext.Provider>
  );
}
