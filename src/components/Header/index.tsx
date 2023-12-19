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
    console.log(data);
    navigate("/details/150");
    reset();
  };
  return (
    <Container>
      <Link to={"/"}>
        <img src={pokemonLogo} alt="pokemon logo" />
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="inputSearch" className="srOnly">
            Pesquisar Pokémon
          </label>
          <input
            type="text"
            id="inputSearch"
            placeholder="Pesquisar Pokémon"
            {...register("inputSearch", {
              required: "Preencha id, nome ou tipo do pokémon",
            })}
          />
          <span>{errors.inputSearch?.message}</span>
        </section>
        <button type="submit">Pesquisar</button>
      </form>
    </Container>
  );
}
