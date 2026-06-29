function Estudiantes({ estudiantes }) {

    return (

        <section id="inicio">

            <h2>👨‍🎓 Estudiantes</h2>

            <div className="grid">

                {
                    estudiantes.map(e => (

                        <div className="card estudiante-card" key={e.id}>

                            <div className="perfil">

                                

                                <div>

                                    <h3>
                                        {e.nombres} {e.apellidos}
                                    </h3>

                                    <p className="codigo">
                                        Código: {e.codigo}
                                    </p>

                                </div>

                            </div>

                            <div className="info">

                                <p>
                                    🎓 {e.carrera}
                                </p>

                                <p>
                                    📧 {e.correo}
                                </p>

                                <p>
                                    Estado:
                                    <span className="estado">
                                        {e.estado ? " Activo" : " Inactivo"}
                                    </span>
                                </p>

                            </div>

                            <div className="points">

                                ⭐ {e.puntos} puntos

                            </div>

                        </div>

                    ))
                }

            </div>

        </section>

    )

}

export default Estudiantes;