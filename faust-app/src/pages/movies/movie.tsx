import { Movie as MovieType } from 'client';

interface MovieProps {
  movie: MovieType;
}

export default function Movie({ movie }: MovieProps) {
  return (
    <div>
      <h2>{movie?.title()}</h2>
      <div
        className="bio"
        dangerouslySetInnerHTML={{ __html: movie?.content() }}
      />
    </div>
  );
}