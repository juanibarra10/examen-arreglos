let productos = [];
let cantidades = [];

// act 2
let productosPermitidos = ["tomate", "lechuga", "zanahoria", "papa", "naranja", "mandarina", "pera", "limón"];

for (let i = 0; i < 6; i++) {
    let producto = prompt(`ingresa el nombre del producto ${i + 1} (permitidos: ${productosPermitidos.join(', ')}):`);
    
    while (productosPermitidos.indexOf(producto) === -1) {
        producto = prompt(`producto no disponible. Ingresa el nombre del producto ${i + 1} (permitidos: {productosPermitidos.join(', ')}):`);
    }
    
    let cantidad = parseFloat(prompt(`ingrese la cantidad en kg de {producto}:`));
    
    productos.push(producto);
    cantidades.push(cantidad);
}

// act 3
let tomateIndex = productos.indexOf("tomate");
if (tomateIndex !== -1) {
    alert(`hay ${cantidades[tomateIndex]} kg de tomate en stock.`);
} else {
    alert("no hay tomate en stock.");
}

// act 4
if (productos.length >= 2) {
    cantidades[0] += 20;
    cantidades[1] += 20;
}

// act 5
let mensajetotal = "total de productos en stock:\n";
for (let i = 0; i < productos.length; i++) {
    mensajeTotal += `${productos[i]}: ${cantidades[i]} kg\n`;
}
alert(mensajeTotal);

//act 6
let mensajeMayor20kg = "productos con más de 20 kg en stock:\n";
for (let i = 0; i < productos.length; i++) {
    if (cantidades[i] > 20) {
        mensajeMayor20kg += `${productos[i]}: ${cantidades[i]} kg\n`;
    }
}