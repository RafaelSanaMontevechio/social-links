import React, { useEffect } from 'react';
import Prismic from 'prismic-javascript';
import { useRouter } from 'next/router';
import Head from 'next/head';

const RedirectTo = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);
  return (
    <div className="w-1/2 mx-auto text-center mt-8">
      <Head>
        <title>Page not found!</title>
      </Head>
      <h1 className="text-4xl">URL Não encontrada!</h1>
      <p>Você será redirecionado</p>
    </div>
  );
};

export async function getServerSideProps({ params, res }) {
  const client = Prismic.client('https://rsmontevechio.cdn.prismic.io/api/v2');
  const link = await client.getByUID('shortlink', params.slug);

  if (link) {
    res.statusCode = 301; //conteudo movido permanentemente
    res.setHeader('location', link.data.destino.url); //redireciona
    res.end();
    return;
  }
  return {
    props: {},
  };
}

export default RedirectTo;
