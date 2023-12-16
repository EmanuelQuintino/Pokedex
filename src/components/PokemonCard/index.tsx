type Props = {
  id: number;
  name: string;
  image: string;
};

export function PokemonCard({ id, name, image }: Props) {
  return (
    <div>
      <img src={image} />
      <h3>
        #{id} {name[0].toUpperCase() + name.substring(1)}
      </h3>
    </div>
  );
}
