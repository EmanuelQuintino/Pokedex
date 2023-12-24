import { useEffect, useState } from "react";
import { Pokemon } from "../../@types/pokemon";
import { CardType } from "../CardType";
import { Container } from "./style";
import { useQueryPokemonID } from "../../hooks/useQueryPokemonID";

type Props = { data: Pokemon };

export function PokemonCard({ pokemon }) {
  const [pokemonData, setPokemonData] = useState<Pokemon>({} as Pokemon);
  const pokemonID = pokemon.url.split("/")[6];
  const { data } = useQueryPokemonID(pokemonID);
  console.log(data);

  return (
    <Container>
      {data ? (
        <>
          <img
            src={data.sprites.other["official-artwork"].front_default}
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
        </>
      ) : (
        <p className="feedbackLoading">Loading...</p>
      )}
    </Container>
  );
}
