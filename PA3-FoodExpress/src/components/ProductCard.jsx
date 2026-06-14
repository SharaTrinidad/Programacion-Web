function ProductCard({ product, onAdd }) {

    return (

        <div className="col-md-4 mb-4">

            <div className="card h-100 shadow">

                <img
                    src={product.image}
                    className="card-img-top"
                    style={{
                        height: "250px",
                        objectFit: "contain",
                        padding: "10px"
                    }}
                />

                <div className="card-body">

                    <h5>{product.title}</h5>

                    <p>
                        S/ {product.price}
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