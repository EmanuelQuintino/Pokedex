import { useQuery } from "@tanstack/react-query";
import { API } from "../services/api";
import { PokemonBasicData } from "../contexts/PokemonContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

type PokemonPage = {
  pokemonDataList: PokemonBasicData[];
  totalPokemon: number;
  totalPages: number;
};

async function getPokemonPage({ page = 1, limit = 30 }) {
  const offset = (page - 1) * limit;
  const { data } = await API.get(`/pokemon?limit=${limit}&offset=${offset}`);

  const totalPokemon = data.count;
  const totalPages = Math.ceil(totalPokemon / limit);
  const pokemonDataList = data.results;

  return {
    pokemonDataList,
    totalPokemon,
    totalPages,
  } as PokemonPage;
}

export function useQueryPokemonPage() {
  const searchParams = useSearchParams();
  const pageQuery = searchParams[0].get("page");

  const [page, setPage] = useState(Number(pageQuery) || 1);
  const [limit, setLimite] = useState(30);

  const navigate = useNavigate();

  function nextPage() {
    setPage((prevPage) => prevPage + 1);
    navigate(`?page=${page + 1}`);
  }

  function prevPage() {
    setPage((prevPage) => prevPage - 1);
    navigate(`?page=${page - 1}`);
  }

  function goHomePage1() {
    navigate("?page=1");
    setPage(1);
    console.log("goHome");
  }

  console.log(page);

  const query = useQuery({
    queryKey: ["getPokemon", page, limit],
    queryFn: () => getPokemonPage({ page, limit }),
  });

  return {
    ...query,
    page,
    goHomePage1,
    nextPage,
    prevPage,
    setLimite,
  };
}
