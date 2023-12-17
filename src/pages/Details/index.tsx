import { useNavigate, useParams } from "react-router-dom";
import { PokemonCardDetails } from "../../components/PokemonCardDetails";
import { useQueryPokemonID } from "../../hooks/useQueryPokemonID";

type Params = {
  id: string;
};

export function Details() {
  const { id } = useParams<Params>();
  const { data, isLoading, error } = useQueryPokemonID(id!);

  const navigate = useNavigate();

  if (error) console.error(error);

  return (
    <div>
      <button onClick={() => navigate("/")}>&lt; voltar</button>

      {isLoading && <span>Loading...</span>}
      {error && <span>Error...</span>}

      {data && (
        <>
          <h1>Page Details {data.id}</h1>
          <PokemonCardDetails pokemon={data} />
        </>
      )}
    </div>
  );
}
