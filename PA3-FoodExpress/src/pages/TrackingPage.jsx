import { useEffect, useState } from "react";

import OrderTracker from "../components/OrderTracker";

function TrackingPage() {

    const [status, setStatus] =
        useState("Recibido");

    useEffect(() => {

        const states = [

            "Recibido",
            "Preparando",
            "En Camino",
            "Entregado"

        ];

        let current = 0;

        const interval =
            setInterval(() => {

                current++;

                if (
                    current <
                    states.length
                ) {

                    setStatus(
                        states[current]
                    );

                } else {

                    clearInterval(
                        interval
                    );

                }

            }, 5000);

        return () =>
            clearInterval(interval);

    }, []);

    return (

        <div className="container py-5">

            <OrderTracker
                status={status}
            />

        </div>

    );

}

export default TrackingPage;