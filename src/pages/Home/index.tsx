import { PokemonCard } from "../../components/PokemonCard";
import { Link } from "react-router-dom";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";
import { Container } from "./style";

export function Home() {
  const { data, isLoading, error, prevPage, nextPage, page, totalPages } =
    useQueryPokemonPage();

  if (error) console.error(error);

  function handleNextPage() {
    // window.scrollTo({ top: 0 });
    nextPage();
  }

  function handlePrevPage() {
    // window.scrollTo({ top: 0 });
    prevPage();
  }

  return (
    <Container>
      <h1>{"Bem-vindo(a) à Pokédex do Reprograma Jucás"}</h1>

      {isLoading && <span className="loading">Loading...</span>}
      {!isLoading && error && <span className="loading">Error...</span>}

      <div className="gridCards">
        {data?.map((pokemon) => {
          return (
            <Link to={`/details/${pokemon.name}`} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          );
        })}
      </div>

      <div className="paginationComponent">
        <button onClick={handlePrevPage} disabled={page <= 1}>
          &lt; Anterior
        </button>

        <span className="numberPage">
          {String(page).padStart(2, "0")} / {String(totalPages || "...").padStart(2, "0")}
        </span>

        <button onClick={handleNextPage} disabled={page >= totalPages}>
          Próxima &gt;
        </button>
      </div>
    </Container>
  );
}
