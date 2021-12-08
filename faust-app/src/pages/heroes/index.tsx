import Head from 'next/head';
import { Header, Footer } from '../../components';
import Hero from './hero';
import { client } from '../../client';

export default function Heroes() {
  const { useQuery } = client;
  const { generalSettings } = client.useQuery();
  const heroes = useQuery().heroes()?.nodes;

  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <Head>
        <title>Heroes - {generalSettings.title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">
          <h2>Heroes</h2>
          {heroes.map((hero) => (
            <Hero key={hero.id} hero={hero} />
          ))}
        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}