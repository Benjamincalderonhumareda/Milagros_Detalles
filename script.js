// Abrir PDF en nueva pestaña
function openPDF(url) {
  window.open(url, '_blank');
}

// Enviar mensaje por WhatsApp
function openWhatsApp(catalogo) {
  const numero = "51995982496"; // cambia tu número si es necesario
  const mensaje = `Hola 🌸, estoy interesad@ en ${catalogo}. ¿Podrías darme más información?`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

console.log("Página Detalles Milagros cargada correctamente 🌸");
