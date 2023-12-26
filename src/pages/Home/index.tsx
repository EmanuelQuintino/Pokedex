import { PokemonCard } from "../../components/PokemonCard";
import { Link } from "react-router-dom";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";
import { Container } from "./style";
import { useEffect, useState } from "react";

export function Home() {
  const { data, isLoading, error, prevPage, nextPage, page } = useQueryPokemonPage();
  const [totalPages, setTotalPages] = useState(1);

  if (error) console.error(error);

  useEffect(() => {
    if (data && data.totalPages != totalPages) setTotalPages(data.totalPages);
  }, [data, totalPages]);

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
