import { Pokemon } from "../../pages/App";

type Props = { pokemon: Pokemon };

export function PokemonCard({ pokemon }: Props) {
  // console.log(pokemon);

  return (
    <div>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <strong>
        #{pokemon.id} {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
      </strong>

      {pokemon.types.map((type) => {
        return <div key={type.type.name}>{type.type.name}</div>;
      })}
    </div>
  );
}
