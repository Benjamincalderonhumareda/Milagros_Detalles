function openPDF(pdfPath) {
  window.open(pdfPath, "_blank");
}

function openWhatsApp(productName) {
  const phone = "51992269562"; // 🔹 Cambia por tu número de WhatsApp real
  const message = `Hola 👋, estoy interesado en el ${productName}. ¿Podrías darme más información?`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
