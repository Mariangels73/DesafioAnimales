import Animal from "./clases/animal.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/tipos.js";
import animalesData from "./animales.js";

let animales = [];

//variable que actualiza la tabla
const reloadTable = () => {
	//variable que contiene el valor del elemento capturado
	const animalesTemplate = document.getElementById("Animales");
	// c limpia la variable
	animalesTemplate.innerHTML = "";

	animales.forEach((p, i) => {
		animalesTemplate.innerHTML += `
	<div class="px-3 pb-2">
		<div class="bg-dark text-white">
				<img
				height = "200"
				src = "${p.getImg()}"
				data-toggle= "modal" data-target="#exampleModal" 
				onclick="modalDetails('${i}')" 
				/>
			<div>
				<button onclick="playSound('${p.getNombre()}')" class="btn btn-secondary w-100"><img height="30"
				src="assets/imgs/audio.svg"/></button> 
			</div>
		</div>
	</div>
		`;
	});
	document
		.querySelectorAll(".card-body button")
		.forEach((b) => b.addEventListener("click", activarHabilidad));
};

window.playSound = (nombre) => {
	const animal = animales.find((a) => a.getNombre() == nombre);
	console.log(animal);
	nombre == "Leon"
		? animal.rugir()
		: nombre == "Lobo"
		? animal.aullar()
		: nombre == "Oso"
		? animal.grunir()
		: nombre == "Serpiente"
		? animal.sisear()
		: nombre == "Aguila"
		? animal.chillar()
		: undefined;
};

window.modalDetails = (i) => {
	const modalBody = document.getElementsByClassName("modal-body")[0];
	const animal = animales[i];
	modalBody.innerHTML = `
	<div class="px-3 pb-2">
		<div class="card w-50 m-auto bg-dark text-white border-0">
		<img src="${animal.getImg()}"
		class= "d-block m-auto w-100"
		/>
			<div class = "card-body text-center">
			<h6 class= "card-text">${animal.getEdad()}</h6>
			<h6 class= "card-text m-0">Comentarios</h6>
			<hr/>
			<p>${animal.getComentarios()}</p>
			
			</div>

		</div>
	</div>
	`;
};

//bloque de codigo para algo que no recuerdo (corregir este comentario)
let imagenSrc;
let sonido;
document.getElementById("animal").addEventListener("change", async (e) => {
	const animalSelected = e.target.value;
	const animales = await animalesData.getData();
	const animalObject = animales.find((a) => a.name == animalSelected);
	imagenSrc = `/assets/imgs/${animalObject.imagen}`;
	sonido = animalObject.sonido;
	const preview = document.getElementById("preview");
	preview.parentElement.classList.remove("p-5");
	preview.style.backgroundImage = `url(${imagenSrc})`;
});

document.getElementById("btnRegistrar").addEventListener("click", async (e) => {
	// Obtener los valores del formulario
	let nombreElement = document.getElementById("animal");
	let edadElement = document.getElementById("edad");
	let comentariosElement = document.getElementById("comentarios");
	//generamos variables y les damos la propiedad value de los elementos ya capturados previamente
	let nombre = nombreElement.value;
	let edad = edadElement.value;
	let comentarios = comentariosElement.value;

	//evalua si existe, nombre edad y comentarios
	if (nombre && edad && comentarios) {
		//si se cumple, se genera una variable animal que guarda como instancia una clase

		let animal =
			nombre == "Leon"
				? new Leon(nombre, edad, imagenSrc, comentarios, sonido)
				: nombre == "Lobo"
				? new Lobo(nombre, edad, imagenSrc, comentarios, sonido)
				: nombre == "Oso"
				? new Oso(nombre, edad, imagenSrc, comentarios, sonido)
				: nombre == "Serpiente"
				? new Serpiente(nombre, edad, imagenSrc, comentarios, sonido)
				: nombre == "Aguila"
				? new Aguila(nombre, edad, imagenSrc, comentarios, sonido)
				: undefined;
		//resetea los valores del formulario luego de hacer click
		nombreElement.selectedIndex = 0;
		edadElement.selectedIndex = 0;
		comentariosElement.value = "";
		document.getElementById("preview").style.backgroundImage =
			"url(assets/imgs/lion.svg)";
		animales.push(animal);
		reloadTable();
	} else {
		alert("Debes llenar todos los datos del formulario");
	}
});
