import React from "react";

import { GetStaticPaths } from "next";

const Sweets = () => {
  return <div>Sweets</div>;
};

export default Sweets;

export async function getStaticProps() {
  return {
    props: {},
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { category: "sawer", sweet: "candy" } }],
    fallback: false,
  };
};
