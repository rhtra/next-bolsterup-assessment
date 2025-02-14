import type { GetServerSideProps } from "next";
import { useState } from "react";

import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Home from "@/components/home";
import Content from "@/components/products/product-single/content";
import Description from "@/components/products/product-single/description";
import Gallery from "@/components/products/product-single/gallery";
import Reviews from "@/components/products/product-single/reviews";
// types
import type { ProductType } from "@/types";

import Layout from "../../layouts/Main";
import { server } from "../../utils/server";

type ProductPageType = {
  product: ProductType;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { pid } = query;
  const res = await fetch(`${server}/api/product/${pid}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

const Product = ({ product }: ProductPageType) => {
  const [showBlock, setShowBlock] = useState("description");

  return (
    <Layout>
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={product.images} />
            <Content product={product} />
          </div>

          <div className="product-single__info">
            <div className="product-single__info-btns">
              <button
                type="button"
                onClick={() => setShowBlock("description")}
                className={`btn btn--rounded ${showBlock === "description" ? "btn--active" : ""}`}
              >
                Description
              </button>
              <button
                type="button"
                onClick={() => setShowBlock("reviews")}
                className={`btn btn--rounded ${showBlock === "reviews" ? "btn--active" : ""}`}
              >
                Reviews (2)
              </button>
            </div>

            <Description show={showBlock === "description"} />
            <Reviews product={product} show={showBlock === "reviews"} />
          </div>
        </div>
      </section>

      <div className="product-single-page">
        <Home />
      </div>
      <Footer />
    </Layout>
  );
};

export default Product;
