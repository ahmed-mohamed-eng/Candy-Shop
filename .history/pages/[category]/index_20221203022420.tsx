import { GetStaticPaths } from "next";

import { Heading } from "@chakra-ui/react";

import Layout from "../../components/Layout";

const Category = () => {
  return (
    <Layout urlPaths={["Home", "Categories"]}>
      <Heading as="h1">Products</Heading>
    </Layout>
  );
};

export default Category;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { category: "categories" } }],
    fallback: false,
  };
};
