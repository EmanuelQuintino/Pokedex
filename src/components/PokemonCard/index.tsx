import { Pokemon } from "../../pages/App";

type Props = { pokemon: Pokemon };

export function PokemonCard({ pokemon }: Props) {
  return (
    <div>
      <img src={pokemon.sprites.other["official-artwork"].front_default} />
      <strong>
        #{pokemon.id} {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
      </strong>
    </div>
  );
}
