// Contador de visitas
let visitas = localStorage.getItem('visitas') || 0; // Obtener visitas del almacenamiento local o iniciar en 0
visitas++; // Incrementar el contador
localStorage.setItem('visitas', visitas); // Guardar el nuevo valor en el almacenamiento local
document.getElementById('contador-visitas').textContent = visitas; // Mostrar en el elemento HTML
