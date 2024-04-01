import { useNavigate, useParams } from "react-router-dom";
import { useQueryPokemonDetails } from "../../hooks/useQueryPokemonDetails";
import { Container } from "./style";
import { TypeCard } from "../../components/TypeCard";
import pokeball from "../../assets/pokeball.png";
import { useEffect } from "react";

export function Details() {
  const { name } = useParams();
  const { data, isLoading, error } = useQueryPokemonDetails(name!);
  const navigate = useNavigate();

  if (error) console.error(error);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Container>
      {isLoading && <span className="loading">Loading...</span>}
      {!isLoading && error && <span className="loading">Error...</span>}

      {data && (
        <div className="boxDetails">
          <button onClick={() => navigate(-1)} className="backPageButton">
            &lt; voltar
          </button>

          <div className="pokemonImage">
            <img
              src={data.sprites.other["official-artwork"].front_default || pokeball}
              alt={data.name}
            />
          </div>

          <div className="boxStatus">
            <strong>
              #{data.id} {data.name[0].toUpperCase() + data.name.substring(1)}
            </strong>

            <div className="sizePokemon">
              <span>Height: {data.height}0cm</span>
              <span>Weight: {data.weight / 10}kg</span>
            </div>

            <div className="boxTypes">
              {data.types.map((type) => {
                return <TypeCard key={type.type.name} type={type.type.name} size={16} />;
              })}
            </div>
          </div>

          <div className="boxStats">
            {data.stats?.map((stat) => {
              return (
                <div key={stat.stat.name} className="stats">
                  <span className="statName">{stat.stat.name}</span>
                  <progress max={200} value={stat.base_stat} />
                  <span className="statValue">{stat.base_stat}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
}
