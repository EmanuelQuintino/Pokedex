import { Container } from "./style";
import { PokemonType } from "../../@types/pokemon";

export function CardType({ type }: PokemonType) {
  return <Container type={type}>{type}</Container>;
}
