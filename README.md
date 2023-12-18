# Pokédex

## API

- https://pokeapi.co/api/v2/pokemon?offset=20&limit=20
- https://pokeapi.co/api/v2/pokemon
- https://pokeapi.co/api/v2/pokemon-species
- https://pokeapi.co/api/v2/evolution-chain

## Theme

- Reset

```ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.dark};
    border: none;
    font-family: "Montserrat", "Roboto", sans-serif;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    background: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .srOnly {
    position: absolute;
    width: 0.1rem;
    height: 0.1rem;
    margin: -0.1rem;
    border-width: 0;
    overflow: hidden;
    color: transparent;
    clip: rect(0, 0, 0, 0);
  }

  .inputError {
    color: red;
    display: block;
    position: absolute;
    font-size: 1.0rem;
    margin-top: .4rem;
    right: 0;
  }

  .queryError {
    color: ${({ theme }) => theme.colors.danger};
    text-align: center;
    margin-top: 1.6rem;
  }
```

- Theme

```ts
export const appTheme = {
  colors: {
    light: "#f2f2f2",
    dark: "#0D0D0D",
    primary: "#0477BF",
    primary500: "#030A8C",
    primaryHover: "#048ABF",
    secondary: "#023E73",
    complementary: "#F2B705",
    complementary500: "#D98E04",
    danger: "#F20732",
    types: {
      fire: "#ff7402",
      grass: "#9bcc50",
      steel: "#9eb7b8",
      water: "#4592c4",
      psychic: "#f366b9",
      ground: "#ab9842",
      ice: "#51c4e7",
      flying: "#3dc7ef",
      ghost: "#4d5b64",
      normal: "#a4acaf",
      poison: "#7e0058",
      rock: "#a38c21",
      fighting: "#d56723",
      dark: "#707070",
      bug: "#729f3f",
      dragon: "#53a4cf",
      electric: "#bba909",
      fairy: "#fdb9e9",
      shadow: "#7b62a3",
      unknow: "#757575",
    },
    size: {
      vs: 0.8,
      sm: 1.2,
      md: 1.6,
      lg: 2.0,
      vl: 2.4,
      el: 3.2,
    },
  },
};
```

## Types

- Styles

```ts
import { appTheme } from "../styles/theme";

type AppTheme = typeof appTheme;

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
```

- Pokemon

```ts
import { AppTheme } from "./styles";

export type PokemonType = keyof AppTheme["colors"]["types"];

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: PokemonType;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};
```
