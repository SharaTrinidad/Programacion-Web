function ProductCard({ product, onAdd }) {

    return (

        <div className="col-md-4 mb-4">

            <div className="card h-100 shadow">

                <img
                    src={product.image}
                    className="card-img-top"
                    style={{
                        height: "250px",
                        width: "100%",
                        objectFit: "cover"
                    }}
                />

                <div className="card-body">

                    <span className="badge bg-secondary mb-2">
                        {product.category}
                    </span>

                    <h5>{product.title}</h5>

                    <p className="fw-bold">
                        S/ {product.price.toFixed(2)}
                    </p>

                    <button
                        className="btn btn-danger w-100"
                        onClick={() => onAdd(product)}
                    >
                        Agregar al carrito
                    </button>

                </div>

            </div>

        </div>

    )

}

export default ProductCard;