import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { pusblicRequest } from "../requestMethods";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterdProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await pusblicRequest.get(
          category ? `/products?category=${category}` : "/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(`Error to read products: ${err}`);
      }
    })();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filterdProducts.map((product) => (
            <Product product={product} key={product.id} />
          ))
        : products
            .slice(0, 8)
            .map((product) => <Product product={product} key={product.id} />)}
    </Container>
  );
};

export default Products;
