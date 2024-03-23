import { TypeCard } from "../TypeCard";
import { Container } from "./style";
import pokeball from "../../assets/pokeball.png";
import { Pokemon } from "../../@types/pokemon";

type Props = {
  pokemon: Pokemon;
};

export function PokemonCard({ pokemon }: Props) {
  return (
    <Container>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default || pokeball}
        alt={pokemon.name}
      />

      <strong>
        #{pokemon.id} {pokemon.name}
      </strong>

      <div className="boxTypes">
        {pokemon.types.map((type) => {
          return <TypeCard key={type.type.name} type={type.type.name} />;
        })}
      </div>
    </Container>
  );
}
