import { CardType } from "../CardType";
import { Container } from "./style";
import { useQueryPokemonID } from "../../hooks/useQueryPokemonID";
import { PokemonBasicData } from "../../contexts/PokemonContext";
import pokeball from "../../assets/pokeball.png";

type PropsAPI = {
  pokemon: PokemonBasicData;
};

export function PokemonCard({ pokemon }: PropsAPI) {
  const pokemonID = pokemon.url.split("/")[6];
  const { data } = useQueryPokemonID(pokemonID);

  return (
    <>
      {data && (
        <Container>
          <img
            src={data.sprites.other["official-artwork"].front_default || pokeball}
            alt={data.name}
          />

          <strong>
            #{data.id} {data.name}
          </strong>

          <div className="boxTypes">
            {data.types.map((type) => {
              return <CardType key={type.type.name} type={type.type.name} />;
            })}
          </div>
        </Container>
      )}
    </>
  );
}
