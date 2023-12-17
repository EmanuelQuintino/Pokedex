import { useParams } from "react-router-dom";
import { PokemonCardDetails } from "../../components/PokemonCardDetails";
import { useQueryPokemonID } from "../../hooks/useQueryPokemonID";

type Params = {
  id: string;
};

export function Details() {
  const { id } = useParams<Params>();
  const { data } = useQueryPokemonID(id!);

  return (
    <div>
      {data && (
        <>
          <h1>Page Details {data.id}</h1>
          <PokemonCardDetails pokemon={data} />
        </>
      )}
    </div>
  );
}
