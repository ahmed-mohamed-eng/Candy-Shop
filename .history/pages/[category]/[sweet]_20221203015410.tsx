import React from "react";

const Sweets = () => {
  return <div>Sweets</div>;
};

export default Sweets;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { category: "sawer", sweet: "candy" } }],
    fallback: false,
  };
};
