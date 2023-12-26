import { useQuery } from "@tanstack/react-query";
import { API } from "../services/api";
import { PokemonBasicData } from "../contexts/PokemonContext";

type PokemonAPI = {
  pokemonDataList: PokemonBasicData[];
  totalPokemon: number;
};

async function getPokemonPage({ limit = 30, offset = 0 }) {
  const { data } = await API.get(`/pokemon?limit=${limit}&offset=${offset}`);
  const totalPokemon = data.count;

  // const pokemonPromiseList = data.results.map(async (pokemon: { url: string }) => {
  //   const response = await fetch(pokemon.url);
  //   const data = await response.json();
  //   return data;
  // });
  // const pokemonDataList = await Promise.all(pokemonPromiseList);
  const pokemonDataList = data.results;
  return { pokemonDataList, totalPokemon } as PokemonAPI;
}

export function useQueryPokemonPage({ limit, offset } = { limit: 30, offset: 0 }) {
  const query = useQuery({
    queryKey: ["getPokemon", limit, offset],
    queryFn: () => getPokemonPage({ limit, offset }),
    // keepPreviousData : true
  });

  return query;
}
