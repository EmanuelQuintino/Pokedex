import { useState } from "react";
import { PokemonCard } from "../../components/PokemonCard";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryPokemon } from "../../hooks/useQueryPokemon";

type Inputs = {
  inputSearch: string;
};

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

export function App() {
  // const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const { data, isLoading, error, refetch } = useQueryPokemon({ limit, offset });

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

  console.log(data);
  console.error(error);

  return (
    <div>
      <h1>App</h1>
      <img src="logo-pokemon.png" alt="logo-pokemon" width={240} />

      <button onClick={prevPage}>Página anterior</button>
      <button onClick={nextPage}>Próxima página</button>
      <button onClick={() => refetch()}>Refect</button>

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
