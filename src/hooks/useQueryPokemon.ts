import { useQuery } from "@tanstack/react-query";
import { API } from "../services/api";

async function getPokemon({ limit = 30, offset = 0 }) {
  const { data } = await API.get(`/pokemon?limit=${limit}&offset=${offset}`);

  const pokemonPromiseList = data.results.map(async (pokemon: { url: string }) => {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    return data;
  });
  const pokemonDataList = await Promise.all(pokemonPromiseList);
  return pokemonDataList;
}

export function useQueryPokemon({ limit, offset } = { limit: 30, offset: 0 }) {
  const query = useQuery({
    queryKey: ["getAllPokemon", limit, offset],
    queryFn: () => getPokemon({ limit, offset }),
  });

  return query;
}
