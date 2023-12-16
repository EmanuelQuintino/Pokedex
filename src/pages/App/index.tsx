import { useEffect, useState } from "react";
import { PokemonCard } from "../../components/PokemonCard";
import { Link } from "react-router-dom";

export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
};

export function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);

  function addLimit() {
    setLimit((prevLimit) => prevLimit + 5);
  }

  function nextPage() {
    setOffset((prevOffset) => prevOffset + limit);
  }

  function prevPage() {
    setOffset((prevOffset) => Math.max(prevOffset - limit, 0));
  }

  useEffect(() => {
    async function getPokemon() {
      const API = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

      try {
        const response = await fetch(API);
        const data = await response.json();

        const promisesPokemon = data.results.map(async (pokemon: { url: string }) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          return data as Pokemon;
        });

        const pokemonDataList = await Promise.all(promisesPokemon);
        setPokemonList(pokemonDataList);
      } catch (error) {
        console.error(error);
      }
    }
    getPokemon();
  }, [offset, limit]);

  console.log(pokemonList);

  return (
    <div>
      <h1>App</h1>

      <button onClick={addLimit}>Incrementar limite</button>
      <button onClick={prevPage}>Página anterior</button>
      <button onClick={nextPage}>Próxima página</button>

      {pokemonList.map((pokemon) => {
        return (
          <Link to={`/details/${pokemon.id}`} key={pokemon.id}>
            <PokemonCard
              name={pokemon.name}
              image={pokemon.sprites.other.home.front_default}
            />
          </Link>
        );
      })}
    </div>
  );
}
