import { useQuery } from "@tanstack/react-query";
import { API } from "../services/api";
import { Pokemon } from "../@types/pokemon";

async function getPokemon(id: string) {
  try {
    const { data } = await API.get(`/pokemon/${id}`);
    return data as Pokemon;
  } catch (error) {
    console.error(error);
  }
}

export function useQueryPokemonID(id: string) {
  const query = useQuery({
    queryKey: [`getPokemon${id}`, id],
    queryFn: () => getPokemon(id),
  });

  return query;
}
