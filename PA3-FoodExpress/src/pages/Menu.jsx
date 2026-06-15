import { useEffect, useState } from "react";

import ProductService from "../services/ProductService";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

function Menu({ addToCart }) {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  ProductService.getProducts()
    .then(data => setProducts(data))
    .finally(() => setLoading(false));
  }, []); 

  if (loading) {
  return (
    <div className="container py-5">
      <h3>Cargando productos...</h3>
    </div>
  );  
}


 const filteredProducts = products.filter(product => {

  const matchesSearch =
    product.title
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchesCategory =
    category === "all" ||
    product.category === category;

  return matchesSearch && matchesCategory;
});

  return (

    <div className="container py-5">

      <h1 className="mb-4">Menú 🍽️</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      <div className="row">

        {filteredProducts.length === 0 ? (
          <div className="alert alert-warning">
            No se encontraron productos.
          </div>
        ) : (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={addToCart}
            />
          ))
        )}

      </div>

    </div>

  );
}

export default Menu;