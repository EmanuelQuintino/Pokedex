import { PokemonCard } from "../../components/PokemonCard";
import { Link, useSearchParams } from "react-router-dom";
import { Container } from "./style";
import { PokemonContext } from "../../contexts/PokemonContext";
import { useContext } from "react";

export function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams[0].get("q");
  const { allPokemon } = useContext(PokemonContext);

  const filteredPokemon = allPokemon?.filter((pokemon) => {
    if (query) return pokemon.name.includes(query);
  });

  return (
    <Container>
      <h1>{`Encontrado ${filteredPokemon.length} resultado(s) para "${query}"`}</h1>

      <div className="gridCards">
        {filteredPokemon?.map((pokemon) => {
          return (
            <Link to={`/details/${pokemon.name}`} key={pokemon.name}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
