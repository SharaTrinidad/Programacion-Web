function Navbar() {

  const scrollTo = (id) => {
    document.getElementById(id)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">

      <span className="navbar-brand">
        🍽️ FoodExpress
      </span>

      <div>

        <button
          className="btn btn-link text-white"
          onClick={() => scrollTo("inicio")}
        >
          Inicio
        </button>

        <button
          className="btn btn-link text-white"
          onClick={() => scrollTo("menu")}
        >
          Menú
        </button>

        <button
          className="btn btn-link text-white"
          onClick={() => scrollTo("carrito")}
        >
          Carrito
        </button>

      </div>

    </nav>
  );
}

export default Navbar;