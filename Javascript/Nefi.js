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
          // Si el plato no existe, rechazamos la promesa.
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


export { leerPedido };
