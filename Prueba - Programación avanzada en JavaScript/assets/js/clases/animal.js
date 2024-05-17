class Animal {
	//se usa la funcion flecha para que se reciba la info de la variable
	constructor(nombre, edad, img, comentarios, sonido) {
		let Nombre = nombre;
		this.getNombre = () => Nombre;
		let Edad = edad;
		this.getEdad = () => Edad;
		let Img = img;
		this.getImg = () => Img;
		let Comentarios = comentarios;
		this.getComentarios = () => Comentarios;
		let Sonido = sonido;
		this.getSonido = () => Sonido;
	}
	//si ya hay getters y setters en el padre y son los mismos que del hijo, NO hacer nuevos
	get Nombre() {
		return this.getNombre();
	}
	get Edad() {
		return this.getEdad();
	}
	get Img() {
		return this.getImg();
	}
	get Comentarios() {
		return this.getComentarios();
	}
	get Sonido() {
		return this.getSonido();
	}
}
export default Animal;
