import { useEffect, useState } from "react";
import { PokemonCard } from "../../components/PokemonCard";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";
import { Container } from "./style";

export function Home() {
  const [page, setPage] = useState(1);
  const [limit] = useState(30);
  const [totalPages, setTotalPages] = useState(1);

  const searchParams = useSearchParams();
  const pageQuery = searchParams[0].get("page");

  const { data, isLoading, error } = useQueryPokemonPage({ page, limit });

  const navigate = useNavigate();

  function nextPage() {
    setPage((prevPage) => prevPage + 1);
    navigate(`?page=${page + 1}`);
  }

  function prevPage() {
    setPage((prevPage) => prevPage - 1);
    navigate(`?page=${page - 1}`);
  }

  useEffect(() => {
    if (Number(pageQuery) >= totalPages) return setPage(totalPages);
    if (Number(pageQuery) <= 1) return setPage(1);
    setPage(Number(pageQuery));
  }, [pageQuery, totalPages]);

  useEffect(() => {
    if (data) {
      const newTotalPages = Math.ceil(data.totalPokemon / limit);
      if (newTotalPages !== totalPages) setTotalPages(newTotalPages);
    }
  }, [data, limit, totalPages]);

  if (error) console.error(error);

  return (
    <Container>
      <h1>{"Bem-vindo(a) à Pokédex do Reprograma Jucás"}</h1>
      {isLoading && <span className="feedbackLoading">Loading...</span>}
      {!isLoading && error && <span className="feedbackLoading">Error...</span>}

      <div className="gridCards">
        {data?.pokemonDataList?.map((pokemon) => {
          return (
            <Link to={`/details/${pokemon.name}`} key={pokemon.name}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          );
        })}
      </div>

      <div className="paginationComponent">
        <button onClick={prevPage} disabled={page <= 1}>
          &lt; Anterior
        </button>

        <span className="numberPage">
          {String(page).padStart(2, "0")} / {String(totalPages || "...").padStart(2, "0")}
        </span>

        <button onClick={nextPage} disabled={page >= totalPages}>
          Próxima &gt;
        </button>
      </div>
    </Container>
  );
}
