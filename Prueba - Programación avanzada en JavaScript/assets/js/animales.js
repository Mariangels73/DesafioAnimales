//IIFE
let animales = (() => {
	//variable que guarda url para obtener datos
	const url = "http://localhost:5500/animales.json";
	//variable como funcion asincrona
	const getData = async () => {
		//variable que esta a la espera de recibir la respuesta de la peticion mediante funcion fetch
		const res = await fetch(url);
		//Transformamos en objeto el json guardado en "res" y se desestructura abriendo la propiedad ???
		const { animales } = await res.json();
		//retornamos el valor obtenido
		return animales;
	};
	return { getData };
})();

export default animales;
