import { Link, useNavigate } from "react-router-dom";
import { Container } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import pokemonLogo from "../../assets/pokemon-logo.png";

type Input = {
  pokemonName: string;
};

export function Header() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    navigate(`/search?q=${data.pokemonName}`);
    reset();
  };

  return (
    <Container>
      <Link to={"/?page=1"}>
        <img
          src={pokemonLogo}
          alt="logo com texto escrito pokémon, cor amarela e borda azul"
        />
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="pokemonName" hidden>
            Pesquisar Pokémon
          </label>

          <input
            type="text"
            id="pokemonName"
            placeholder="Pesquisar Pokémon"
            {...register("pokemonName", {
              required: "Informe o nome do pokémon!",
            })}
          />

          <span className="inputError">{errors.pokemonName?.message}</span>
        </section>

        <button type="submit">Pesquisar</button>
      </form>
    </Container>
  );
}
