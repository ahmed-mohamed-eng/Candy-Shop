import type { NextPage } from "next";

import Layout from "../components/Layout";
import TitleBar from "../components/Utils/TitleBar";
import SliderImage from "../components/Home/SliderImage";
import ProductGrid from "../components/product/ProductGrid";
import AdvantgesGrid from "../components/Home/AdvantgesGrid";
import CategoryGrid from "../components/Category/CategoryGrid";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="EgyCandy &#127841;">
      <SliderImage />
      <AdvantgesGrid />
      <TitleBar name="Category" buttonTitle="more" />
      <CategoryGrid />
      <ProductGrid name="Christmas Gift" />
      <ProductGrid name="Popular Sale Item" buttonTitle="more" />
    </Layout>
  );
};

export default Home;
