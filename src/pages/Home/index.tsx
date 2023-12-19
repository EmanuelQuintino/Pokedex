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

  function nextPage() {
    setOffset((prevOffset) => prevOffset + limit);
  }

  function prevPage() {
    setOffset((prevOffset) => Math.max(prevOffset - limit, 0));
  }

  console.log(data);
  if (error) console.error(error);

  return (
    <Container>
      {isLoading && <span className="feedbackList">Loading...</span>}
      {!isLoading && error && <span className="feedbackList">Error...</span>}

      <div className="gridCards">
        {data?.map((pokemon) => {
          return (
            <Link to={`/details/${pokemon.id}`} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          );
        })}
      </div>

      <div className="paginationButtons">
        <button onClick={prevPage}>&lt; Anterior</button>
        <span className="numberPage">999/999</span>
        <button onClick={nextPage}>Próxima &gt;</button>
      </div>
    </Container>
  );
}
