function Cart({

    cart,
    removeFromCart,
    subtotal,
    igv,
    total

}) {

    return (

        <div className="card shadow">

            <div className="card-body">

                <h3>
                    Carrito de Compras
                </h3>

                {
                    cart.length === 0
                    ?
                    <p>
                        No hay productos
                    </p>
                    :
                    cart.map(item => (

                        <div
                            key={item.id}
                            className="d-flex justify-content-between align-items-center mb-3"
                        >

                            <div>

                                <strong>
                                    {item.title}
                                </strong>

                                <br />

                                Cantidad:
                                {item.quantity}

                            </div>

                            <button
                                className="btn btn-danger"
                                onClick={() =>
                                    removeFromCart(item.id)
                                }
                            >

                                Eliminar

                            </button>

                        </div>

                    ))
                }

                {
                    cart.length > 0 && (
                        <>
                            <hr />

                            <h5>
                                Subtotal:
                                S/
                                {subtotal.toFixed(2)}
                            </h5>

                            <h5>
                                IGV:
                                S/
                                {igv.toFixed(2)}
                            </h5>

                            <h4>
                                Total:
                                S/
                                {total.toFixed(2)}
                            </h4>
                        </>
                    )
                }

            </div>

        </div>

    )

}

export default Cart;