// Importamos la función de la cocina que maneja las promesas
import { leerPedido } from "./Nefi.js";

/*
 4. Desafío Extra: Manejar varios clientes en paralelo.
    Esta función encapsula la lógica para ser reutilizada desde otros archivos.
*/
export function gestionarMultiplesPedidos(clientes) {
  console.log("Llegan varios clientes al mismo tiempo...");
  clientes.forEach((cliente) => {
    console.log(`- ${cliente.nombre} pide ${cliente.pedido}`);
  });
  console.log("-----------------------------------------");

  // 1. Pasamos todos los pedidos a la cocina.
  // leerPedido nos devuelve un array de promesas, una por cada pedido.
  const promesasPedidos = leerPedido(clientes);

  // 2. Usamos Promise.race para saber cuál pedido estuvo listo primero.
  // Promise.race se resuelve en cuanto la primera promesa del array se resuelve.
  Promise.race(promesasPedidos)
    .then((primerPedidoListo) => {
      // La ensalada debería estar lista primero (1 segundo)
      console.log(`\n*****************************************`);
      console.log(
        `¡ATENCIÓN MESEROS! El primer pedido listo es: ${primerPedidoListo}`
      );
      console.log(`*****************************************`);
    })
    .catch((error) => {
      // Esto se ejecutaría si la primera promesa en terminar es un rechazo.
      console.error("Hubo un error con el primer pedido que terminó:", error);
    });

  // 3. Usamos Promise.all para esperar a que TODOS los pedidos estén listos.
  // Promise.all espera a que todas las promesas en el array se resuelvan.
  Promise.all(promesasPedidos)
    .then((resultados) => {
      console.log("\n--- Todos los pedidos están listos ---");
      resultados.forEach((resultado) => {
        console.log(`- ${resultado}`);
      });
      console.log("Todos los clientes pueden ser atendidos.");
    })
    .catch((error) => {
      // Si CUALQUIER promesa es rechazada, Promise.all se rechaza inmediatamente.
      console.error(
        "\nOcurrió un error en la cocina con uno de los pedidos:",
        error
      );
      console.error("No se pueden entregar todos los pedidos.");
    });
}
