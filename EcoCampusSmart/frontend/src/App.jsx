import {useEffect,useState} from "react";
import api from "./api";

import Navbar from "./components/Navbar";
import Estudiantes from "./components/Estudiantes";
import Recompensas from "./components/Recompensas";
import Historial from "./components/Historial";
import Reciclaje from "./components/Reciclaje";
import Canjes from "./components/Canjes";

import "./App.css";


function App(){


const [estudiantes,setEstudiantes]=useState([]);
const [recompensas,setRecompensas]=useState([]);
const [reciclajes,setReciclajes]=useState([]);
const [residuos,setResiduos]=useState([]);
const [canjes,setCanjes]=useState([]);

const [estudiante,setEstudiante]=useState(3);
const cargar=()=>{


api.get("/estudiantes")
.then(r=>setEstudiantes(r.data));


api.get("/recompensas")
.then(r=>setRecompensas(r.data));


api.get("/reciclajes")
.then(r=>setReciclajes(r.data));

api.get("/residuos")
.then(r=>setResiduos(r.data));

api.get("/canjes")
.then(r=>setCanjes(r.data));

}



useEffect(()=>{

cargar();

},[]);



const canjear=(id)=>{


api.post("/canjes",{

estudiante:{
    id: Number(estudiante)

},

recompensa:{
id:id
}

})
.then(()=>{

alert("Canje realizado 🎁");

cargar();

});


}



return (

<>

<Navbar/>


<div className="container">


<Estudiantes 
estudiantes={estudiantes}
/>


<Recompensas

recompensas={recompensas}

canjear={canjear}

estudiantes={estudiantes}

estudiante={estudiante}

setEstudiante={setEstudiante}

/>

<Reciclaje

estudiantes={estudiantes}

residuos={residuos}

actualizar={cargar}

/>


<Historial

reciclajes={reciclajes}

/>

<Canjes

canjes={canjes}

/>


</div>


</>

)

}


export default App;