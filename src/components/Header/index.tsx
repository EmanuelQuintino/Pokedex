import { Link, useNavigate } from "react-router-dom";
import { Container } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import pokemonLogo from "../../assets/pokemon-logo.png";

type Inputs = {
  inputSearch: string;
};

export function Header() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    navigate(`/search?q=${data.inputSearch}`);
    reset();
  };

  return (
    <Container>
      <Link to={"/?page=1"}>
        <img
          src={pokemonLogo}
          alt="logo amerela com borda azul escrita o texto pokémon"
        />
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="inputSearch" hidden>
            Pesquisar Pokémon
          </label>

          <input
            type="text"
            id="inputSearch"
            placeholder="Pesquisar Pokémon"
            {...register("inputSearch", {
              required: "Preencha o nome do pokémon",
            })}
          />

          <span className="inputError">{errors.inputSearch?.message}</span>
        </section>

        <button type="submit">Pesquisar</button>
      </form>
    </Container>
  );
}
