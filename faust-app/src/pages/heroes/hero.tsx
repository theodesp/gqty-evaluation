import { Hero as HeroType } from 'client';
import Award from "./award";

interface HeroProps {
  hero: HeroType;
}

export default function Hero({ hero }: HeroProps) {
  const awards = hero.awards()?.nodes;
  return (
    <div>
      <h2>{hero.name}</h2>
      <div
        className="awards"
      >
        {awards?.map(award => (
          <Award key={award.id} award={award} />
        ))}
      </div>
    </div>
  );
}