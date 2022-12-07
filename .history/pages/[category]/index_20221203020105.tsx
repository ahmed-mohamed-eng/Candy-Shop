import React from "react";

import { GetStaticPaths } from "next";

const Category = () => {
  return <div>Category</div>;
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
