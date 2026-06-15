function CategoryFilter({ category, setCategory }) {
  return (
    <div className="mb-4">

      <button
        className={`btn me-2 ${category === "all" ? "btn-dark" : "btn-outline-dark"}`}
        onClick={() => setCategory("all")}
      >
        Todos
      </button>

      <button
        className={`btn me-2 ${category === "Chicken" ? "btn-warning" : "btn-outline-warning"}`}
        onClick={() => setCategory("Chicken")}
      >
        Pollo
      </button>

      <button
        className={`btn me-2 ${category === "Beef" ? "btn-danger" : "btn-outline-danger"}`}
        onClick={() => setCategory("Beef")}
      >
        Carne
      </button>

      <button
        className={`btn me-2 ${category === "Seafood" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => setCategory("Seafood")}
      >
        Mariscos
      </button>

      <button
        className={`btn me-2 ${category === "Dessert" ? "btn-success" : "btn-outline-success"}`}
        onClick={() => setCategory("Dessert")}
      >
        Postres
      </button>

    </div>
  );
}

export default CategoryFilter;