import { Container } from "./style";
import { PokemonTypePorps } from "../../@types/pokemon";

export function PokemonType({ type }: PokemonTypePorps) {
  return <Container type={type}>{type}</Container>;
}
