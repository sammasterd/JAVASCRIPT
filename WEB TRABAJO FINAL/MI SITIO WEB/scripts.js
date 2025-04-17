document.addEventListener("DOMContentLoaded", function() {
    fetch('noticias.json')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            data.noticias.forEach(noticia => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.contenido}</p>
                `;
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => console.error('Error al cargar las noticias:', error));
});
