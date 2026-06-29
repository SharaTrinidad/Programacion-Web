function Navbar(){

const irA = (id)=>{
document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
}

return(
<nav>
<h2>🌱 EcoCampus Smart</h2>

<div className="menu">
<span onClick={()=>irA("inicio")}>Inicio</span>
<span onClick={()=>irA("reciclaje")}>Reciclaje</span>
<span onClick={()=>irA("recompensas")}>Recompensas</span>
<span onClick={()=>irA("historial")}>Historial</span>
<span onClick={()=>irA("canjes")}>Canjes</span>
</div>

</nav>
)
}

export default Navbar;