import { useQuery } from "@tanstack/react-query";
import { API } from "../configs/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pokemon } from "../@types/pokemon";

export function useQueryPokemonPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimite] = useState(30);
  const [totalPages, setTotalPages] = useState(1);

  const searchParams = useSearchParams();
  const navigate = useNavigate();

  async function getPokemonPage({ page = 1, limit = 30 }) {
    const offset = (page - 1) * limit;
    const { data } = await API.get(`/pokemon?limit=${limit}&offset=${offset}`);

    const pokemonPromise = data.results.map(async (pokemon: { url: string }) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    });

    const pokemonData = await Promise.all(pokemonPromise);

    const totalPokemon = data.count;
    const totalPagesAPI = Math.ceil(totalPokemon / limit);

    if (totalPages != totalPagesAPI) setTotalPages(totalPagesAPI);

    return pokemonData as Pokemon[];
  }

  function nextPage() {
    setPage((prevPage) => prevPage + 1);
    navigate(`?page=${page + 1}`);
  }

  function prevPage() {
    setPage((prevPage) => prevPage - 1);
    navigate(`?page=${page - 1}`);
  }

  useEffect(() => {
    const pageQuery = Number(searchParams[0].get("page"));
    // if (pageQuery > totalPages) return setPage(totalPages);
    if (pageQuery < 1) return setPage(1);
    setPage(pageQuery || 1);
  }, [searchParams, totalPages]);

  const query = useQuery({
    queryKey: ["getPokemonPage", page, limit],
    queryFn: () => getPokemonPage({ page, limit }),
  });

  return {
    ...query,
    page,
    totalPages,
    nextPage,
    prevPage,
    setLimite,
  };
}
