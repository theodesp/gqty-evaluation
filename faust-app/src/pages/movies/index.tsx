import Head from 'next/head';
import { Header, Footer } from '../../components';
import Movie from './movie';
import { client } from '../../client';

export default function Movies() {
  const { useQuery } = client;
  const { generalSettings } = client.useQuery();
  const movies = useQuery().movies()?.nodes;

  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <Head>
        <title>Movies - {generalSettings.title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">
          <h2>Movies</h2>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}