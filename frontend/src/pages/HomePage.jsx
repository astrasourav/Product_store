import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchProducts();
      setIsLoading(false);
    };
    fetchData();
  }, [fetchProducts]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5" style={{ color: '#00B5D6' }}>
        Current Products
      </h2>

      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {products.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {products.map((product) => (
                <div className="col" key={product._id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="lead">No products found 😢</p>
              <p>
                <Link to="/create" className="btn btn-primary">
                  Create a product
                </Link>
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
