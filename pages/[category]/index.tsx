import { GetStaticPaths } from "next";

import { Heading } from "@chakra-ui/react";

import Layout from "../../components/Layout";
import Filters from "../../components/Filters";
import ProductGrid from "../../components/product/ProductGrid";

const Category = () => {
  return (
    <Layout urlPaths={["Home", "Categories"]}>
      <Heading as="h1" fontSize={{ base: "4xl" }} mb={{ base: "5" }}>
        Products
      </Heading>
      <Filters />
      <ProductGrid name="Christmas Gift" />
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
