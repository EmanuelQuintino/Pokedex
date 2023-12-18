import { useState } from "react";
import { PokemonCard } from "../../components/PokemonCard";
import { Link } from "react-router-dom";
import { useQueryPokemon } from "../../hooks/useQueryPokemon";

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: { name: string };
  }[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};

export function Home() {
  // const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
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
    <div>
      <h1>App</h1>

      <button onClick={prevPage}>&lt; Anterior</button>
      <button onClick={nextPage}>Próxima &gt;</button>
      <button onClick={() => refetch()}>Refect</button>

      {isLoading && <span>Loading...</span>}
      {error && <span>Error...</span>}

      {data?.map((pokemon) => {
        return (
          <Link to={`/details/${pokemon.id}`} key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        );
      })}

      <button onClick={addLimit}>Mais 10</button>
    </div>
  );
}
