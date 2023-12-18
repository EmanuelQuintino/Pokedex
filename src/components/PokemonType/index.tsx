import { AppTheme } from "../../@types/styles";
import { Container } from "./style";

export type PokemonType = {
  type: keyof AppTheme["colors"]["types"];
};

export function PokemonType({ type }: PokemonType) {
  return <Container type={type}>{type}</Container>;
}
