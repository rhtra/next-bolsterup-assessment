import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import ProductsContent from "@/components/products/products-content";
import ProductsFilter from "@/components/products/products-filter";

import Layout from "../layouts/Main";

const Products = () => (
  <Layout>
    <Breadcrumb label="Products" />
    <section className="products-page">
      <div className="container">
        <ProductsFilter />
        <ProductsContent />
      </div>
    </section>
    <Footer />
  </Layout>
);

export default Products;
