import React from "react";
import Prismic from "prismic-javascript";

const Index = ({ data }) => {
  return (
    <div>
      <h1>Social Links (Central de links)</h1>

      <div>
        <img src={data.body[0].primary.avatar.url} alt="AVATAR" />
      </div>

      <ul>
        {data.body.map((item) => {
          if (item.slice_type === "section") {
            return <h2>{item.primary.name}</h2>;
          }
          if (item.slice_type === "links") {
            return (
              <a href={item.primary.destino.url}>
                <li>{item.primary.buttontext}</li>
              </a>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const client = Prismic.client("https://rsmontevechio.cdn.prismic.io/api/v2");
  const centralLinks = await client.getSingle("rsm");

  return {
    props: centralLinks,
  };
}

export default Index;
