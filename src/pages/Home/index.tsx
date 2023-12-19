import { useState } from "react";
import { PokemonCard } from "../../components/PokemonCard";
import { Link } from "react-router-dom";
import { useQueryPokemon } from "../../hooks/useQueryPokemon";
import { Container } from "./style";

export function Home() {
  // const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(40);
  const { data, isLoading, error, refetch } = useQueryPokemon({ limit, offset });

  function addLimit() {
    setLimit((prevLimit) => prevLimit + 10);
  }

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
      <h1>App</h1>

      <button onClick={prevPage}>&lt; Anterior</button>
      <button onClick={nextPage}>Próxima &gt;</button>
      <button onClick={() => refetch()}>Refect</button>

      {isLoading && <span>Loading...</span>}
      {error && <span>Error...</span>}

      <div className="gridCards">
        {data?.map((pokemon) => {
          return (
            <Link to={`/details/${pokemon.id}`} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          );
        })}
      </div>

      <button onClick={addLimit}>Mais 10</button>
    </Container>
  );
}
