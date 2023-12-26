import { useQuery } from "@tanstack/react-query";
import { API } from "../services/api";
import { PokemonBasicData } from "../contexts/PokemonContext";

type PokemonAPI = {
  pokemonDataList: PokemonBasicData[];
  totalPokemon: number;
};

async function getPokemonPage({ page = 1, limit = 30 }) {
  const offset = (page - 1) * limit;
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

export function useQueryPokemonPage({ page, limit } = { page: 1, limit: 30 }) {
  const query = useQuery({
    queryKey: ["getPokemon", page, limit],
    queryFn: () => getPokemonPage({ page, limit }),
    // keepPreviousData : true
  });

  return query;
}
