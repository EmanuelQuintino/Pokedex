import { useState } from "react";
import { PokemonCard } from "../../components/PokemonCard";
import { Link } from "react-router-dom";
import { useQueryPokemon } from "../../hooks/useQueryPokemon";
import { Container } from "./style";

export function Home() {
  // const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(30);
  const { data, isLoading, error } = useQueryPokemon({ limit, offset });

  const currentPage = Math.ceil((offset + 1) / limit);
  const totalPages = Math.ceil(data?.totalPokemon / limit);

  function nextPage() {
    setOffset((prevOffset) => prevOffset + limit);
  }

  function prevPage() {
    setOffset((prevOffset) => prevOffset - limit);
  }

  console.log(data);
  if (error) console.error(error);
  console.log(totalPages);

  return (
    <Container>
      {isLoading && <span className="feedbackList">Loading...</span>}
      {!isLoading && error && <span className="feedbackList">Error...</span>}

      <div className="gridCards">
        {data?.pokemonDataList?.map((pokemon) => {
          return (
            <Link to={`/details/${pokemon.id}`} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          );
        })}
      </div>

      <div className="paginationComponent">
        <button onClick={prevPage} disabled={currentPage <= 1}>
          &lt; Anterior
        </button>

        <span className="numberPage">
          {String(currentPage).padStart(2, "0")} /{" "}
          {String(totalPages || "...").padStart(2, "0")}
        </span>

        <button onClick={nextPage} disabled={currentPage >= totalPages}>
          Próxima &gt;
        </button>
      </div>
    </Container>
  );
}
