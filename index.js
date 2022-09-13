console.log("Este es mi aviso para mostrar");
var colors = require("colors")

function Sumar(x,y){
	let suma = x+y
	console.log("la suma es: ".green+suma)
}


Sumar(25,30)

alumnos = ["stef", "Alf", "Mike", "Marcos"]
for (let i=0; i<alumnos.length; i++){
	console.log(alumnos[i].red)
}

alumnos.forEach((elemento,indice,array)=>{
	console.log(elemento.green)
})


