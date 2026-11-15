# Guía DF — contexto del proyecto

Página estática (HTML/CSS/JS sin build) que puntúa lugares donde fue Dario con Flor, estilo guía Michelin. Ver `README.md` para el detalle completo.

## Reglas
- Idioma: español argentino.
- La guía NO aclara quién puntúa.
- Se usa **sobre todo en el celular**: todo cambio visual se piensa mobile first.
- Antes de cambios visuales, mostrar preview (abrir `index.html` local). No hacer commit/push sin aprobación explícita de Dario.
- Mantener `README.md` actualizado en cada cambio (historial incluido).
- No asumir: ante dudas de diseño, preguntar.
- Gráficos (si se suman): Apache ECharts.

## Datos
- Los lugares viven solo en `datos.js` (array `LUGARES`). Puntajes enteros de 1 a 5; general = promedio simple con 1 decimal.
- Campos: `nombre, icono, cocina, barrio, ambiente, servicio, comida, precio, momento ("comer" | "cafe")`.
- Los puntajes los da Dario. Nunca inventarlos. Barrio/cocina se pueden buscar en la web, pero confirmar con Dario si hay sucursales o fuentes que no coinciden.
- El eje `precio` se muestra como "Precio/valor" (5 = conviene mucho).
- Si se cambian `index.html`, `datos.js` o los íconos, subir `VERSION` en `sw.js` solo si cambia la lista de archivos cacheados (el service worker ya es "primero red").
- Los íconos PNG se generan con Chrome headless a partir de un HTML con `--headless=new --screenshot` (no hay ImageMagick ni rsvg).
- El link de Google Maps se arma solo con nombre + barrio. No se usa Instagram (se quitó a propósito).

## Publicación
- GitHub Pages: https://diodice-it.github.io/guia-df/ (repo público `diodice-it/guia-df`, rama `main`).
- Autenticación de GitHub ya configurada globalmente con `gh`.
