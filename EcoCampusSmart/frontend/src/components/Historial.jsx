function Historial({reciclajes}){


return (

<section id="historial">

<h2>♻️ Historial</h2>


{
reciclajes.map(r=>(

<div className="card" key={r.id}>

<p>
{r.residuo.nombre}
</p>

<p>
Cantidad: {r.cantidadKg} Kg
</p>

<p>
+{r.puntosGanados} puntos
</p>


</div>

))
}


</section>

)

}


export default Historial;