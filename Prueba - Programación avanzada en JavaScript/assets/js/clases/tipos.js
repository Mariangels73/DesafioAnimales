import Animal from "./animal.js";

const audioPlayer = document.getElementById("player");

class Leon extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	rugir() {
		console.log(this.getSonido());
		audioPlayer.src = `assets/sounds/${this.getSonido()}`;
		audioPlayer.play();
	}
}
class Lobo extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}

	aullar() {
		console.log(this.getSonido());
		audioPlayer.src = `assets/sounds/${this.getSonido()}`;
		audioPlayer.play();
	}
}

class Oso extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}

	grunir() {
		console.log(this.getSonido());
		audioPlayer.src = `assets/sounds/${this.getSonido()}`;
		audioPlayer.play();
	}
}

class Serpiente extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}

	sisear() {
		console.log(this.getSonido());
		audioPlayer.src = `assets/sounds/${this.getSonido()}`;
		audioPlayer.play();
	}
}

class Aguila extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}

	chillar() {
		console.log(this.getSonido());
		audioPlayer.src = `assets/sounds/${this.getSonido()}`;
		audioPlayer.play();
	}
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
