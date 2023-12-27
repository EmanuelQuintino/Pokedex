import { useQuery } from "@tanstack/react-query";
import { API } from "../services/api";
import { PokemonBasicData } from "../contexts/PokemonContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

type PokemonPage = {
  pokemonDataList: PokemonBasicData[];
};

export function useQueryPokemonPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimite] = useState(30);
  const [totalPages, setTotalPages] = useState(1);

  const searchParams = useSearchParams();
  const navigate = useNavigate();

  async function getPokemonPage({ page = 1, limit = 30 }) {
    const offset = (page - 1) * limit;
    const { data } = await API.get(`/pokemon?limit=${limit}&offset=${offset}`);

    const totalPokemon = data.count;
    const pokemonDataList = data.results;
    setTotalPages(Math.ceil(totalPokemon / limit));

    return { pokemonDataList } as PokemonPage;
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
    setPage(pageQuery || 1);
  }, [searchParams]);

  const query = useQuery({
    queryKey: ["getPokemon", page, limit],
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
