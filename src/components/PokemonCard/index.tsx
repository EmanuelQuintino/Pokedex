import { Pokemon } from "../../@types/pokemon";
import { PokemonType } from "../PokemonType";
import { Container } from "./style";

type Props = { pokemon: Pokemon };

export function PokemonCard({ pokemon }: Props) {
  // console.log(pokemon);

  return (
    <Container>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <strong>
        #{pokemon.id} {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
      </strong>

      <div className="boxTypes">
        {pokemon.types.map((type) => {
          return <PokemonType key={type.type.name} type={type.type.name} />;
        })}
      </div>
    </Container>
  );
}
