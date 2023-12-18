import { Pokemon } from "../../@types/pokemon";
import { Container } from "./style";

type Props = { pokemon: Pokemon };

export function PokemonCardDetails({ pokemon }: Props) {
  console.log(pokemon);

  return (
    <Container>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <strong>
        #{pokemon.id} {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
      </strong>

      <div>Height: {pokemon.height}0cm</div>
      <div>Weight: {pokemon.weight}kg</div>

      {pokemon.stats?.map((status) => {
        return (
          <div key={status.stat.name}>
            <span>{status.stat.name}</span>
            <progress max={300} value={status.base_stat} />
            <span>{status.base_stat}</span>
          </div>
        );
      })}

      {pokemon.types.map((type) => {
        return <div key={type.type.name}>{type.type.name}</div>;
      })}
    </Container>
  );
}
