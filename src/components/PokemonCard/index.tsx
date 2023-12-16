type Props = {
  name: string;
  image: string;
};

export function PokemonCard({ name, image }: Props) {
  return (
    <>
      <img src={image} />
      <h3>{name}</h3>
    </>
  );
}
