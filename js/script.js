document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "¡Gracias por tu mensaje! Nos pondremos en contacto pronto.";
});
