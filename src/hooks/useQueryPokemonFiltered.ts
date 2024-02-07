import { useQuery } from "@tanstack/react-query";
import { API } from "../configs/api";
import { Pokemon } from "../@types/pokemon";

async function getFilteredPokemon(name: string) {
  const { data } = await API.get(`/pokemon?limit=100000&offset=0`);
  const allPokemon = [...data.results];

  const filteredPokemon = allPokemon?.filter((pokemon) => {
    if (name) return pokemon.name.includes(name.toLowerCase());
  });

  const pokemonPromiseList = filteredPokemon.map(async (pokemon: { url: string }) => {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    return data;
  });

  const pokemonList = await Promise.all(pokemonPromiseList);
  return pokemonList as Pokemon[];
}

export function useQueryPokemonFiltered(name: string) {
  const query = useQuery({
    queryKey: [`getFilteredPokemon`, name],
    queryFn: () => getFilteredPokemon(name),
  });

  return query;
}
