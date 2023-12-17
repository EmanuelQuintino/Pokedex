import { useParams } from "react-router-dom";
import { PokemonCardDetails } from "../../components/PokemonCardDetails";

export function Details() {
  const params = useParams();
  return (
    <div>
      <h1>Details {params.id}</h1>
      <PokemonCardDetails />
    </div>
  );
}
