import React from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";

const Category = () => {
  return (
  <Layout>

  </Layout>
  );
};

export default Category;

export  const getStaticProps:GetStaticProps<{categories: "categories"}> = async (context) => {
  return {
    props: {
      categories: [context.params?.categories]
    },

  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { category: "categories" } }],
    fallback: false,
  };
};
