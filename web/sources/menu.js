fetch("web/sources/menu.html")
    .then(r => {
        if (!r.ok) throw new Error('No se pudo cargar el menú');
        return r.text();
    })
    .then(html => {
        document.getElementById("menu").innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
