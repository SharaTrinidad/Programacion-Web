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
        className={`btn me-2 ${category === "pizza" ? "btn-danger" : "btn-outline-danger"}`}
        onClick={() => setCategory("pizza")}
      >
        Pizzas
      </button>

      <button
        className={`btn me-2 ${category === "burger" ? "btn-warning" : "btn-outline-warning"}`}
        onClick={() => setCategory("burger")}
      >
        Hamburguesas
      </button>

      <button
        className={`btn me-2 ${category === "drink" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => setCategory("drink")}
      >
        Bebidas
      </button>

    </div>

  );

}

export default CategoryFilter;