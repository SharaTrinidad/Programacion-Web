import {useState} from "react";
import api from "../api";


function Reciclaje({estudiantes,residuos,actualizar}){


const [estudiante,setEstudiante]=useState(3);
const [residuo,setResiduo]=useState(1);
const [kg,setKg]=useState("");



const registrar=()=>{


const r = residuos.find(
x=>x.id == residuo
);


let puntos = 0;


if(r){

puntos = r.puntosPorKg * Number(kg);

}



api.post("/reciclajes",{


estudiante:{
 id: estudiante
},


residuo:{
 id: residuo
},


cantidadKg:Number(kg),


puntosGanados:puntos,


fechaRegistro:new Date()


})
.then(()=>{


alert("Reciclaje registrado ♻️");


setKg("");


actualizar();


});


}



return (

<section id="reciclaje">


<h2>♻️ Registrar reciclaje</h2>


<div className="card">


<label>Estudiante</label>

<select
onChange={e=>setEstudiante(e.target.value)}
>


{
estudiantes.map(e=>(

<option key={e.id} value={e.id}>

{e.nombres}

</option>

))

}


</select>



<label>Residuo</label>


<select
onChange={e=>setResiduo(e.target.value)}
>


{
residuos.map(r=>(

<option key={r.id} value={r.id}>

{r.nombre}

</option>

))

}


</select>



<input

type="number"

placeholder="Kg"

value={kg}

onChange={e=>setKg(e.target.value)}

/>



<button onClick={registrar}>

Registrar

</button>



</div>


</section>


)


}


export default Reciclaje;