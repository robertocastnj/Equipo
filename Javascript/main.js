const pedidos = [];

const form = document.getElementById("formPedido");
const pedidosUl = document.getElementById("pedidosUl");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const pedido = document.getElementById("pedido").value;

  if (!nombre || !pedido) {
    alert("Por favor completa todos los campos");
    return;
  }

  /* Crear nuevo pedido */
  const nuevoPedido = { nombre, pedido };

  /* Guardar el array */
  pedidos.push(nuevoPedido);

  /* Mostrar la lista */
  const li = document.createElement("li");
  li.textContent = `${nombre} pidió: ${pedido}`;
  pedidosUl.appendChild(li);

  /* Reestablecer valores */
  form.reset();

  console.log("Pedidos actuales:", pedidos);
});
