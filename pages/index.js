import React from 'react';
import Prismic from 'prismic-javascript';
import Head from 'next/head';

const Index = ({ data }) => {
  return (
    <div className="w-1/2 mx-auto">
      <Head>
        <title>Links</title>
      </Head>
      <div className="p-6">
        <img
          className="mx-auto h-40 w-40 rounded-full shadow-md"
          src={data.body[0].primary.avatar.url}
          alt="AVATAR"
        />
      </div>

      {data.body.map((item) => {
        if (item.slice_type === 'section') {
          return (
            <h2 className="text-center uppercase font-bold mt-4">
              {item.primary.name}
            </h2>
          );
        }
        if (item.slice_type === 'links') {
          return (
            <div className="mt-6 text-center">
              <a href={item.primary.destino.url}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-1/2 rounded-full">
                  {item.primary.buttontext}
                </button>
              </a>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export async function getServerSideProps() {
  const client = Prismic.client('https://rsmontevechio.cdn.prismic.io/api/v2');
  const centralLinks = await client.getSingle('rsm');

  return {
    props: centralLinks,
  };
}

export default Index;
