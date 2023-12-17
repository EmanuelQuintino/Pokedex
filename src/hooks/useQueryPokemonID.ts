import { useQuery } from "@tanstack/react-query";
import { API } from "../services/api";

async function getPokemonID(id: string) {
  const { data } = await API.get(`/pokemon/${id}`);
  console.log(data);
  return data;
}

export function useQueryPokemonID(id: string) {
  const query = useQuery({
    queryKey: ["getAllPokemon", id],
    queryFn: () => getPokemonID(id),
  });

  return query;
}
