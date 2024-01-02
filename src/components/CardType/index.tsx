import { Container } from "./style";
import { PokemonType } from "../../@types/pokemon";

export type TypeProps = {
  type: PokemonType;
  size?: number;
};

export function CardType({ type, size = 10 }: TypeProps) {
  return (
    <Container type={type} size={size}>
      {type}
    </Container>
  );
}
