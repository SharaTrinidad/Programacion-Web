function Home() {

  return (

    <>

      {/* HERO */}

      <section className="bg-dark text-white p-5">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <h1 className="display-4 fw-bold">
                Bienvenido a FoodExpress
              </h1>

              <p className="lead">

                Ordena tus comidas favoritas
                desde cualquier lugar.

              </p>

              <button className="btn btn-warning btn-lg">

                Ordenar Ahora

              </button>

            </div>

            <div className="col-md-6 text-center">

              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                className="img-fluid rounded"
              />

            </div>

          </div>

        </div>

      </section>

      {/* PRODUCTOS DESTACADOS */}

      <section className="container py-5">

        <h2 className="text-center mb-4">
          Productos Destacados
        </h2>

        <div className="row">

          <div className="col-md-4">

            <div className="card shadow">

              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
                className="card-img-top"
              />

              <div className="card-body">

                <h5>Pizza Familiar</h5>

                <p>S/ 45.00</p>

              </div>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow">

              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                className="card-img-top"
              />

              <div className="card-body">

                <h5>Hamburguesa Clásica</h5>

                <p>S/ 20.00</p>

              </div>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow">

              <img
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e"
                className="card-img-top"
              />

              <div className="card-body">

                <h5>Pollo Broaster</h5>

                <p>S/ 25.00</p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>

  )

}

export default Home