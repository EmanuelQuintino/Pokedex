import { Link, useParams } from "react-router-dom";
import { PokemonCardDetails } from "../../components/PokemonCardDetails";
import { useQueryPokemonID } from "../../hooks/useQueryPokemonID";
import { Container } from "./style";

type Params = {
  id: string;
};

export function Details() {
  const { id } = useParams<Params>();
  const { data, isLoading, error } = useQueryPokemonID(id!);

  if (error) console.error(error);

  return (
    <Container>
      <Link to={"/"} className="buttonBackPage">
        <button>&lt; voltar</button>
      </Link>

      {isLoading && <span className="feedbackList">Loading...</span>}
      {!isLoading && error && <span className="feedbackList">Error...</span>}

      {data && (
        <>
          <PokemonCardDetails pokemon={data} />
        </>
      )}
    </Container>
  );
}
