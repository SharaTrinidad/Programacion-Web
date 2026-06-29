function Canjes({ canjes }) {

    return (

        <section id="canjes">

            <h2>🎁 Historial de Canjes</h2>

            <div className="grid">

                {
                    canjes.map(c => (

                        <div className="card canje-card" key={c.id}>

                            <div className="card-header">

                                <div className="avatar">
                                    👤
                                </div>

                                <div>

                                    <h3>
                                        {c.estudiante.nombres} {c.estudiante.apellidos}
                                    </h3>

                                    <span className="badge">
                                        Canje realizado
                                    </span>

                                </div>

                            </div>

                            <hr />

                            <p>
                                🎁 <strong>Recompensa:</strong> {c.recompensa.nombre}
                            </p>

                            <p>
                                ⭐ <strong>Puntos usados:</strong> {c.recompensa.puntosNecesarios}
                            </p>

                            <p>
                                📅 <strong>Fecha:</strong> {new Date(c.fecha).toLocaleString()}
                            </p>

                        </div>

                    ))
                }

            </div>

        </section>

    )

}

export default Canjes;