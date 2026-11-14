# CIAN Robotics - Sitio web

Sitio estático (HTML, CSS y JavaScript, sin compilación). Para verlo, abre `index.html` en el navegador.

## Páginas

| Pestaña | Archivo |
| --- | --- |
| Principal | `index.html` |
| Cursos y kits (tienda) | `cursos.html` |
| Nosotros | `nosotros.html` |

## Cómo editar

- **Productos y precios:** `js/productos.js`, en la lista `PRODUCTOS`. Cada producto tiene nombre, precio, imagen, lo que incluye y sus características en español (`es`) e inglés (`en`). Las compras se hacen por WhatsApp (`WHATSAPP_NUMERO`).
- **Textos del sitio (español / inglés):** `js/i18n.js`. En el HTML cada texto traducible lleva `data-i18n="clave"`.
- **Fotos de Makers y del equipo:** copia la imagen a `img/nosotros/` y reemplaza un bloque "Foto próximamente" en `nosotros.html` (hay instrucciones en un comentario ahí).
- **Colores:** variables al inicio de `css/style.css`.
