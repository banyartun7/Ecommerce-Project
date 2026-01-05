import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import Header from "../../components/Header";
import ProductsGrid from "./ProductsGrid";
import { useSearchParams } from "react-router";

const HomePage = ({ cart, loadCart }) => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const getHomeData = async () => {
      if (search) {
        const response = await axios.get(`/api/products?search=${search}`);
        setProducts(response.data);
      } else {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      }
    };

    getHomeData();
  }, [search]);

  return (
    <>
      <link rel="icon" href="/public/images/home-favicon.png" />
      <title>Ecommerce Project</title>

      <Header cart={cart} search={search} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
};
export default HomePage;
