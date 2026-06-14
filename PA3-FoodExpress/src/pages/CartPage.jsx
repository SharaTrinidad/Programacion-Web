import Cart from "../components/Cart";

function CartPage({

    cart,
    removeFromCart,
    subtotal,
    igv,
    total,
    confirmOrder

}) {

    return (

        <div className="container py-5">

            <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                subtotal={subtotal}
                igv={igv}
                total={total}
            />

            <div className="mt-3">

                <button
                    className="btn btn-success"
                    onClick={confirmOrder}
                >

                    Confirmar Pedido

                </button>

            </div>

        </div>

    );

}

export default CartPage;