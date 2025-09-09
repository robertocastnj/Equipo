
import { leerPedido } from "./Nefi.js";


export function gestionarMultiplesPedidos(clientes) {
  console.log("Llegan varios clientes al mismo tiempo...");
  clientes.forEach((cliente) => {
    console.log(`- ${cliente.nombre} pide ${cliente.pedido}`);
  });
  console.log("-----------------------------------------");

  
  const promesasPedidos = leerPedido(clientes);


  // Promise.race se resuelve en cuanto la primera promesa del array se resuelve.
  Promise.race(promesasPedidos)
    .then((primerPedidoListo) => {
      
      console.log(`\n*****************************************`);
      console.log(
        `¡ATENCIÓN MESEROS! El primer pedido listo es: ${primerPedidoListo}`
      );
      console.log(`*****************************************`);
    })
    .catch((error) => {
      
      console.error("Hubo un error con el primer pedido que terminó:", error);
    });

 
  Promise.all(promesasPedidos)
    .then((resultados) => {
      console.log("\n--- Todos los pedidos están listos ---");
      resultados.forEach((resultado) => {
        console.log(`- ${resultado}`);
      });
      console.log("Todos los clientes pueden ser atendidos.");
    })
    .catch((error) => {
     
      console.error(
        "\nOcurrió un error en la cocina con uno de los pedidos:",
        error
      );
      console.error("No se pueden entregar todos los pedidos.");
    });
}
