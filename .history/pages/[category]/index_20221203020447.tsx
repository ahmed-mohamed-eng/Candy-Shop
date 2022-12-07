import React from "react";

import { GetStaticPaths } from "next";
import Layout from "../../components/Layout";

const Category = () => {
  return (
  <Layout>
    
  </Layout>
  );
};

export default Category;

export async function getStaticProps() {
  return {
    props: {},
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { category: "categories" } }],
    fallback: false,
  };
};
