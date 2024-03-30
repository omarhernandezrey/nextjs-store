"use client"
export const MainProducts = () => {
  // Correcto uso de variables de entorno en Next.js para el lado del cliente.
  console.log("variable de entorno :", process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME);
  
  return (
    <section>
      <h1>Main Products</h1>
    </section>
  );
};
