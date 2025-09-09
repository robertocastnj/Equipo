const pedidos = [];

const form = document.getElementById("formPedido");
const pedidosUl = document.getElementById("pedidosUl");
const nombreCliente = document.getElementById("nombre");
const pedidoCliente = document.getElementById("pedido");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = nombreCliente.value;
  const pedido = pedidoCliente.value;

  if (!nombre || !pedido) {
    alert("Por favor completa todos los campos");
    return;
  }

  /* Crear el array del pedido */
  const nuevoPedido = { nombre, pedido };

  /* Guardar al último del array */
  pedidos.push(nuevoPedido);

  /* Mostrar en la lista */
  const li = document.createElement("li");
  li.textContent = `${nombre} pidió: ${pedido}`;
  pedidosUl.appendChild(li);

  /* Quitar los valores del formulario */
  form.reset();

  console.log("Pedidos actuales:", pedidos);
});
