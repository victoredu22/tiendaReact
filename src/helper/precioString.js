export const precioString = (precio) => {
	const precioFinal = precio.trim();
	return precioFinal;
};
export const totalProducto = (precio, cantidad) => {
	return precio * cantidad;
};
export const formatDecimal = (numero) => {
	const num = numero
		.toString()
		.split("")
		.reverse()
		.join("")
		.replace(/(?=\d*\.?)(\d{3})/g, "$1.");
	return num.split("").reverse().join("").replace(/^[.]/, "");
};
