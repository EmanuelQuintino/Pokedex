import { useEffect, useState } from "react";
import { PokemonCard } from "../../components/PokemonCard";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { API } from "../../services/api";

type Inputs = {
  inputSearch: string;
};

export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};

export function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    navigate("/details/150");
    reset();
  };

  function addLimit() {
    setLimit((prevLimit) => prevLimit + 10);
  }

  function nextPage() {
    setOffset((prevOffset) => prevOffset + limit);
  }

  function prevPage() {
    setOffset((prevOffset) => Math.max(prevOffset - limit, 0));
  }

  useEffect(() => {
    async function getPokemon() {
      try {
        const { data } = await API.get(`/pokemon?offset=${offset}&limit=${limit}`);

        const promisesPokemon = data.results.map(async (pokemon: { url: string }) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          return data;
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

      <button onClick={prevPage}>Página anterior</button>
      <button onClick={nextPage}>Próxima página</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="inputSearch" className="srOnly">
          Pesquisar Pokémon
        </label>
        <input
          type="text"
          id="inputSearch"
          placeholder="Pesquisar Pokémon"
          {...register("inputSearch")}
        />
      </form>

      {pokemonList.map((pokemon) => {
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
