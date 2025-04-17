document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("news-container");

  fetch("noticias.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el archivo de noticias.");
      }
      return response.json();
    })
    .then(data => {
      data.noticias.forEach(noticia => {
        const titulo = document.createElement("h3");
        titulo.textContent = noticia.titulo;

        const contenido = document.createElement("p");
        contenido.textContent = noticia.contenido;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
      });
    })
    .catch(error => {
      console.error("Error al cargar las noticias:", error);
      contenedor.textContent = "No se pudieron cargar las noticias en este momento.";
    });
});