const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const productos = [
  {
    id: 1,
    nombre: "Hamburguesa Clásica",
    categoria: "Hamburguesas",
    precio: 25,
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
  },
  {
    id: 2,
    nombre: "Pizza Familiar",
    categoria: "Pizzas",
    precio: 40,
    imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
  },
  {
    id: 3,
    nombre: "Pollo Broaster",
    categoria: "Pollos",
    precio: 30,
    imagen: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600"
  },
  {
    id: 4,
    nombre: "Salchipapa Especial",
    categoria: "Fast Food",
    precio: 18,
    imagen: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=600"
  },
  {
    id: 5,
    nombre: "Tacos Mexicanos",
    categoria: "Mexicana",
    precio: 22,
    imagen: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600"
  },
  {
    id: 6,
    nombre: "Ensalada César",
    categoria: "Saludable",
    precio: 20,
    imagen: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600"
  }
];

app.get("/", (req, res) => {
  res.send("Servidor FoodExpress funcionando");
});

app.get("/api/productos", (req, res) => {
  res.json(productos);
});

app.post("/api/contacto", (req, res) => {

  const datos = req.body;

  console.log(datos);

  res.json({
    mensaje: "Mensaje recibido correctamente"
  });

});

app.listen(3000, () => {
  console.log("Servidor iniciado en puerto 3000");
});