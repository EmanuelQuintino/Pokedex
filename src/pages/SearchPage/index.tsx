import { useEffect, useState } from "react";
import { PokemonCard } from "../../components/PokemonCard";
import { Link, useSearchParams } from "react-router-dom";
import { useQueryPokemon } from "../../hooks/useQueryPokemon";
import { Container } from "./style";

export function SearchPage() {
  const [offset] = useState(0);
  const [limit] = useState(30);
  const [totalPages, setTotalPages] = useState(0);
  const { data, isLoading, error } = useQueryPokemon({ limit, offset });
  const searchParams = useSearchParams();
  const query = searchParams[0].get("q");

  useEffect(() => {
    if (data) {
      const newTotalPages = Math.ceil(data.totalPokemon / limit);
      if (newTotalPages !== totalPages) setTotalPages(newTotalPages);
    }
  }, [data, limit, totalPages]);

  console.log(data);
  if (error) console.error(error);

  return (
    <Container>
      <h1>{`Resultado(s) para: ${query}`}</h1>

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
    </Container>
  );
}
