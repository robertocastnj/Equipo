// Objeto de prueba
const cliente = {
  nombre: "Juan",
  pedido: "Pizza",
};

function clienteLlega(cliente, callback) {
  console.log(`Llego el cliente ${cliente.nombre} y pidió: ${cliente.pedido}`);
  callback(cliente);
}

// Definimos el callback que recibe el pedido
function recibirPedido(cliente) {
  console.log(`Pedido recibido de ${cliente.nombre}: ${cliente.pedido}`);
}

clienteLlega(cliente, recibirPedido);

/*2. Promesas (Cocina):
   - Una vez recibido el pedido, pasa a cocina.
   - La cocina debe simular el tiempo de preparación de cada comida
     usando setTimeout y promesas.
   - Los tiempos de cocción son:
       Pizza: 3 segundos
       Hamburguesa: 2 segundos
       Ensalada: 1 segundo*/

function leerPedido(arrayPedido) {
  return arrayPedido.map((element) => {
    const plato = element.pedido.toLowerCase();

    return new Promise((resolve, reject) => {
      let tiempo;
      const siCocino = true; // Simula que siempre hay ingredientes

      console.log(`Cocinando ${element.pedido}...`);

      switch (plato) {
        case "pizza":
          tiempo = 3000;
          break;
        case "hamburguesa":
          tiempo = 2000;
          break;
        case "ensalada":
          tiempo = 1000;
          break;
        default:
          return reject(`Pedido desconocido: ${element.pedido}`);
      }

      setTimeout(() => {
        if (siCocino) {
          const mensaje = `${element.pedido} lista`;
          console.log(`${mensaje} en ${tiempo / 1000} segundos`);
          resolve(mensaje);
        } else {
          reject(`No tenemos ingredientes para ${element.pedido}`);
        }
      }, tiempo);
    });
  });
}
async function servirYCobrar(pedido) {
  try {
    const [promesa] = leerPedido([pedido]);
    const comidaLista = await promesa;

    console.log(`Sirviendo ${comidaLista} al cliente...`);

    await new Promise((res) => setTimeout(res, 2000));
    console.log("Cliente está comiendo... 🍴");

    console.log("Cuenta pagada");
  } catch (error) {
    console.error("Error en el servicio:", error);
  }
}

servirYCobrar(cliente);
