import useSwr from "swr";

import type { ProductTypeList } from "@/types";

import ProjectItem from "../../project-item";
import ProductsLoading from "./loading";

const ProductsContent = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr("/api/products", fetcher);

  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!data && <ProductsLoading />}

      {data && (
        <section className="products-list">
          {data.map((item: ProductTypeList) => (
            <ProjectItem
              id={item.id}
              name={item.name}
              category={item.category}
              price={item.price}
              color={item.color}
              currentPrice={item.currentPrice}
              key={item.id}
              images={item.images}
              company={item.company}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default ProductsContent;
