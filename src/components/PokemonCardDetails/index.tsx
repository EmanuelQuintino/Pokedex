type Props = {
  name: string;
  image: string;
};

export function PokemonCardDetails({ name, image }: Props) {
  return (
    <div>
      <img src={image} />
      <h3>{name}</h3>
    </div>
  );
}
