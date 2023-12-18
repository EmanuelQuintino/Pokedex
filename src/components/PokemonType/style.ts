import styled from "styled-components";
import { PokemonTypePorps } from "../../@types/pokemon";

export const Container = styled.span<PokemonTypePorps>`
  background: ${({ theme, type }) => theme.colors.types[type]};
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.2rem;
  padding: 0.4rem 1.2rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 2px 0px #0002;
  text-shadow: 0px 0px 1px #000b;
`;
