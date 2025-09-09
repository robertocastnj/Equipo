function clienteLlega(cliente, callback) {
  console.log(`Llego el cliente ${cliente.nombre} y pidió: ${cliente.pedido}`);
  callback(cliente);
}

// Definimos el callback que recibe el pedido
function recibirPedido(cliente) {
  console.log(`Pedido recibido de ${cliente.nombre}: ${cliente.pedido}`);
}

// Objeto de prueba
const clientePrueba = {
  nombre: "Juan",
  pedido: "Pizza",
};

clienteLlega(clientePrueba, recibirPedido);
