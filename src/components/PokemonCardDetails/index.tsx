import { Pokemon } from "../../@types/pokemon";
import { CardType } from "../CardType";
import { Container } from "./style";

type Props = { pokemon: Pokemon };

export function PokemonCardDetails({ pokemon }: Props) {
  console.log(pokemon);

  return (
    <Container>
      <div className="pokemonImage">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
      </div>

      <div className="box">
        <strong>
          #{pokemon.id} {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
        </strong>

        <div className="boxStatus">
          <span>Height: {pokemon.height}0cm</span>
          <span>Weight: {pokemon.weight}kg</span>
        </div>

        <div className="boxStatusBase">
          {pokemon.stats?.map((status) => {
            return (
              <div key={status.stat.name} className="statusBase">
                <span className="statusName">{status.stat.name}</span>
                <progress max={300} value={status.base_stat} />
                <span className="statusValue">{status.base_stat}</span>
              </div>
            );
          })}
        </div>

        <div className="boxTypes">
          {pokemon.types.map((type) => {
            return <CardType key={type.type.name} type={type.type.name} size={18} />;
          })}
        </div>
      </div>
    </Container>
  );
}
