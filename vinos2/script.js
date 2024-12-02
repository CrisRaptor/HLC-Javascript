let vino = [];
const carrito = [];

window.onload = function () {
    loadProducts();
    showProducts();
}

function buyProduct(k) {
    const txtCuadro = document.getElementById("txt" + k);
    let cantidad = parseInt(txtCuadro.value);
    if (cantidad > 0) {
        let index = carrito.findIndex(item => item.nombre === vino[k].nombre);
        if (index === -1) {
            const compra = { unidades: cantidad, ...vino[k], total: (cantidad * vino[k].precio).toFixed(2) };
            carrito.push(compra);
        } else {
            carrito[index].unidades += cantidad;
            carrito[index].total = (carrito[index].unidades * vino[k].precio).toFixed(2);
        }
        showCarrito();
    }
}

function showCarrito() {
    let listaCesta = '<table class="table table-striped"><thead><tr><th>Cantidad</th><th>Nombre</th><th>Precio</th><th>Total</th><th>Acción</th></tr></thead><tbody>';
    let totalCompra = 0;
    for (let k in carrito) {
        listaCesta += `<tr>
            <td>${carrito[k].unidades}</td>
            <td>${carrito[k].nombre}</td>
            <td>${carrito[k].precio.toFixed(2)} €</td>
            <td>${carrito[k].total} €</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${k})">Eliminar</button></td>
        </tr>`;
        totalCompra += parseFloat(carrito[k].total);
    }
    listaCesta += '</tbody></table>';
    document.querySelector(".divCarrito").innerHTML = listaCesta;
    document.getElementById("totalCompra").innerText = totalCompra.toFixed(2);
}

function removeFromCart(index) {
    carrito.splice(index, 1);
    showCarrito();
}

function loadProducts() {
    vino = [
        { nombre: "Habla de la tierra", precio: 20.99, stock: 10, imagen: "vinos/assets/img/vinos/vino1.jpg" },
        { nombre: "Finca de la Estacada", precio: 15.00, stock: 13, imagen: "vinos/assets/img/vinos/vino2.jpg" },
        { nombre: "Peñascal", precio: 10.00, stock: 30, imagen: "vinos/assets/img/vinos/vino3.jpg" },
        { nombre: "Cabernet Franc", precio: 18.50, stock: 3, imagen: "vinos/assets/img/vinos/vino4.jpg" },
        { nombre: "Juan Gil", precio: 5.00, stock: 10, imagen: "vinos/assets/img/vinos/vino5.jpg" }
    ];
}

function showProducts() {
    let listProductos = '';
    for (let k in vino) {
        listProductos += `<div class="col-md-6 mb-4">
            <div class="card border-dark">
                <img src="${vino[k].imagen}" class="card-img-fluid" alt="${vino[k].nombre}" height="150">
                <div class="card-body">
                    <h5 class="card-title">${vino[k].nombre}</h5>
                    <p class="card-text">Precio: ${vino[k].precio.toFixed(2)} €</p>
                    <input type="number" id="txt${k}" class="form-control mb-2" value="1" min="1" max="${vino[k].stock}">
                    <button type="button" class="btn btn-primary" onclick="buyProduct('${k}')">Comprar</button>
                </div>
            </div>
        </div>`;
    }
    document.getElementById("productos").innerHTML = listProductos;
}