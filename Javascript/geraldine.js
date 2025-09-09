async function servirYpagar(pedido) {
  try {
    const comidaLista = await cocinar(pedido);
    console.log(`Sirviendo ${comidaLista} al cliente...`);

    await new Promise((res) => setTimeout(res, 2000));
    console.log("Cliente está comiendo...");

    console.log("Cuenta pagada ");
  } catch (error) {
    console.error("Error en el servicio:");
  }
}
