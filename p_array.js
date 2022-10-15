
const compras=["arrozz", "leche", "carne","fideos","pan"]
compras.push("Aceite de Girasol");
let h =compras.filter((n) => n !==  "Aceite de Girasol");
console.log(compras);
console.log(h);

const peliculas=[
    {
    titulo:"The Avengers",
     director: "Anthony y Joe Russo",
     fecha: new Date(2012,05,04)},
    {
    titulo:"Avengers: Infinity War",
     director: "Anthony y Joe Russo",
     fecha: new Date(2018,04,27)},
    {
    titulo:"Avengers: Endgame",
     director: "Anthony y Joe Russo",
     fecha: new Date(2019,04,26)}
]
const peliculasNuevas = peliculas.filter(n => n.fecha > new Date(2016,1,1));
const peliculas_directores=peliculas.map(n => n.director+" ");
const peliculas_titulos=peliculas.map(n => n.titulo + " ");
const unir = peliculas_directores.concat(peliculas_titulos);
const  unir2 = [ ...peliculas_directores, ...peliculas_titulos]
console.log(unir2);