import { useNavigate, useParams } from "react-router-dom";
import { PokemonCardDetails } from "../../components/PokemonCardDetails";
import { useQueryPokemonID } from "../../hooks/useQueryPokemonID";
import { Container } from "./style";

type Params = {
  id: string;
};

export function Details() {
  const { id } = useParams<Params>();
  const { data, isLoading, error } = useQueryPokemonID(id!);
  const navigate = useNavigate();

  if (error) console.error(error);

  return (
    <Container>
      <button onClick={() => navigate(-1)} className="buttonBackPage">
        &lt; voltar
      </button>

      {isLoading && <span className="feedbackLoading">Loading...</span>}
      {!isLoading && error && <span className="feedbackLoading">Error...</span>}

      {data && (
        <>
          <PokemonCardDetails pokemon={data} />
        </>
      )}
    </Container>
  );
}
