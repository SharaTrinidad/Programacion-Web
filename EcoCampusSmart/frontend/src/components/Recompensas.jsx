function Recompensas({recompensas,canjear,estudiantes,estudiante,setEstudiante}){

return(

<section id="recompensas">

<h2>🎁 Recompensas</h2>

<label>Estudiante</label>

<select
value={estudiante}
onChange={e=>setEstudiante(e.target.value)}
>

{
estudiantes.map(e=>

<option key={e.id} value={e.id}>
{e.nombres} {e.apellidos}
</option>

)

}

</select>

{
recompensas.map(r=>(

<div className="card" key={r.id}>

<h3>{r.nombre}</h3>

<p>⭐ {r.puntosNecesarios} puntos</p>

<p>{r.descripcion}</p>

<button onClick={()=>canjear(r.id)}>
Canjear
</button>

</div>

))
}

</section>

)

}

export default Recompensas;