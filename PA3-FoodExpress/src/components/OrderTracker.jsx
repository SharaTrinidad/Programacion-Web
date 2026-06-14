function OrderTracker({ status }) {

    const steps = [

        "Recibido",
        "Preparando",
        "En Camino",
        "Entregado"

    ];

    const currentStep =
        steps.indexOf(status);

    const progress =
        ((currentStep + 1) / steps.length)
        * 100;

    return (

        <div className="card shadow">

            <div className="card-body">

                <h3>
                    Seguimiento del Pedido
                </h3>

                <div
                    className="progress mb-4"
                    style={{ height: "25px" }}
                >

                    <div
                        className="progress-bar bg-success"
                        style={{
                            width: `${progress}%`
                        }}
                    >

                        {progress}%

                    </div>

                </div>

                {
                    steps.map((step, index) => (

                        <div
                            key={index}
                            className="mb-2"
                        >

                            {
                                index <= currentStep
                                ?
                                "✅ "
                                :
                                "⬜ "
                            }

                            {step}

                        </div>

                    ))
                }

            </div>

        </div>

    );

}

export default OrderTracker;