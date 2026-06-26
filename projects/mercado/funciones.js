function mercado(){
	const dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
	const celdasPerecederos = ["demo", "demo2", "demo4", "demo6", "demo8", "demo10", "demo12"];
	const celdasNoPerecederos = ["demo1", "demo3", "demo5", "demo7", "demo9", "demo11", "demo13"];
	const gastosPerecederos = [];
	const gastosNoPerecederos = [];

	function pedirNumero(mensaje) {
		while (true) {
			const entrada = prompt(mensaje);
			if (entrada === null || entrada.trim() === "") {
				return 0;
			}

			const valor = Number(entrada.replace(",", "."));
			if (!Number.isNaN(valor)) {
				return valor;
			}

			alert("Introduce un número válido. Ejemplos: 10, 10.5 o 10,5");
		}
	}

	for (let i = 0; i < dias.length; i++) {
		const perecederos = pedirNumero(`¿Qué gasto tendrás el ${dias[i]} en productos perecederos?`);
		const noPerecederos = pedirNumero(`¿Y en productos no perecederos el ${dias[i]}?`);

		gastosPerecederos.push(perecederos);
		gastosNoPerecederos.push(noPerecederos);

		document.getElementById(celdasPerecederos[i]).innerHTML = `${perecederos} €`;
		document.getElementById(celdasNoPerecederos[i]).innerHTML = `${noPerecederos} €`;
	}

	const perecederosTotal = gastosPerecederos.reduce((acum, valor) => acum + valor, 0);
	const noPerecederosTotal = gastosNoPerecederos.reduce((acum, valor) => acum + valor, 0);
	const total = perecederosTotal + noPerecederosTotal;

	document.getElementById("demo14").innerHTML = `<h1>${perecederosTotal} €</h1>`;
	document.getElementById("demo15").innerHTML = `<h1>${noPerecederosTotal} €</h1>`;
	document.getElementById("demo16").innerHTML = `<h1>${total} €</h1>`;
}