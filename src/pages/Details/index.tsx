import { Link, useParams } from "react-router-dom";
import { PokemonCardDetails } from "../../components/PokemonCardDetails";
import { useQueryPokemonID } from "../../hooks/useQueryPokemonID";

type Params = {
  id: string;
};

export function Details() {
  const { id } = useParams<Params>();
  const { data, isLoading, error } = useQueryPokemonID(id!);

  if (error) console.error(error);

  return (
    <div>
      <Link to={"/"}>
        <button>&lt; voltar</button>
      </Link>

      {isLoading && <span>Loading...</span>}
      {error && <span>Error...</span>}

      {data && (
        <>
          <PokemonCardDetails pokemon={data} />
        </>
      )}
    </div>
  );
}
