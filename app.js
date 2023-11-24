const productos = [{
        nombre: 'Desodorante de piso',
        precio: 549
    },
    {
        nombre: 'Jabón líquido para ropa 3L',
        precio: 2730
    },
    {
        nombre: 'Detergente',
        precio: 225
    },
    {
        nombre: 'Lavandina 3L',
        precio: 870
    }
];

let carrito = [];

let dineroDisponible = 6500;

function mostrarProductos() {
    const listaProductos = document.getElementById('listaProductos');
    listaProductos.innerHTML = '';

    productos.forEach(producto => {
        const itemProducto = document.createElement('div');
        itemProducto.innerHTML = `${producto.nombre} - $${producto.precio} <button onclick="agregarAlCarrito(${producto.precio})">Agregar</button>`;
        listaProductos.appendChild(itemProducto);
    });
}

function agregarAlCarrito(precio) {
    if (dineroDisponible >= precio) {
        carrito.push(precio);
        dineroDisponible -= precio;
        actualizarCarrito();
    } else {
        alert('No tienes suficiente dinero para comprar este producto.');
    }
}

function actualizarCarrito() {
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '';

    let total = 0;
    carrito.forEach(precio => {
        total += precio;
        const itemCarrito = document.createElement('li');
        itemCarrito.textContent = `$${precio}`;
        carritoElement.appendChild(itemCarrito);
    });

    document.getElementById('total').textContent = total.toFixed(2);
}

function comprar() {
    alert(`Compra realizada por un total de $${document.getElementById('total').textContent}`);
    carrito = [];
    dineroDisponible = 20;
    actualizarCarrito();
}

mostrarProductos();