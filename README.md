# Guía DF

Guía estilo Michelin para puntuar los lugares donde vamos. Es una página estática (HTML + CSS + JS, sin dependencias ni build), pensada **para verse en el celular**.

- **Link:** https://diodice-it.github.io/guia-df/
- **Repo:** https://github.com/diodice-it/guia-df

## Cómo funciona
- Cada lugar se puntúa de 1 a 5 estrellas (solo enteros) en 4 ejes: **ambiente, servicio, comida, precio**.
- **Puntaje general** = promedio simple de los 4 ejes, con 1 decimal (ej: 4,3).
- El ranking se ordena por general. Desempate: comida, y después alfabético.
- Pestañas: **Todos**, **🍽️ Comer** (almuerzo y cena) y **☕ Cafecitos** (desayuno y merienda). Cada pestaña tiene su propio ranking: el puesto se calcula dentro de la categoría.
- Se puede reordenar por cualquier eje (chips). No hay buscador (se quitó a propósito: con pocos lugares no hace falta).
- Cada lugar tiene un botón a Google Maps, armado automáticamente con nombre + barrio. No hace falta cargar links.
- **Precio/valor:** 5 estrellas = conviene mucho (precio justo para lo que ofrece). La clave interna sigue siendo `precio`.
- **Empates:** comparten puesto y se marcan con "=" (ej: `2=`). El siguiente puesto salta (2=, 2=, 2=, 5).
- **Distinciones:** el puesto 1 de cada lista se destaca con una tarjeta especial (si hay más de un lugar). Sellos automáticos: 💎 **Joya** (general ≥ 4,5) y 🏅 **Buena relación** (comida ≥ 4 y precio/valor ≥ 4). Los umbrales están al inicio del script en `index.html` (`JOYA_DESDE`, `buenaRelacion`).
- **Links compartibles:** la pestaña queda en la URL (`#todos`, `#comer`, `#cafecitos`). Si se abre sin hash, recuerda la última pestaña y el último orden usados en ese dispositivo.
- **App instalable:** se puede agregar a la pantalla de inicio (manifest + íconos) y abre sin señal gracias a un service worker "primero red, si no hay red usa lo guardado".
- **Validación:** si un lugar en `datos.js` tiene un dato inválido (puntaje que no es entero de 1 a 5, `momento` mal escrito, sin nombre o barrio), no se muestra, se loguea el error en la consola y aparece un aviso amarillo en la página.
- **Accesibilidad:** las estrellas tienen texto alternativo ("4 de 5"), foco visible con teclado y gris con contraste suficiente.
- La guía no aclara quién puntúa.

## Estructura
| Archivo | Para qué |
|---|---|
| `index.html` | Diseño (CSS), estructura y lógica (JS). No tiene datos. |
| `datos.js` | **Los lugares.** Es el único archivo que se toca para agregar o corregir lugares. |
| `manifest.webmanifest` | Datos de la app instalable (nombre, colores, íconos). |
| `sw.js` | Service worker (offline). Si cambia la lista de archivos a cachear, subir `VERSION`. |
| `icons/` | Íconos de la app (`icon.svg`, PNGs 192/512/maskable, `apple-touch-icon.png`) e imagen para compartir (`og.png`, 1200×630). |
| `README.md` | Esta documentación. |
| `CLAUDE.md` | Contexto y reglas del proyecto para retomar el trabajo con Claude. |

`datos.js` está separado del HTML a propósito: se puede abrir `index.html` con doble clic desde la compu (un `.json` sería bloqueado por el navegador en ese caso) y editar un lugar no pone en riesgo el diseño.

## Cargar un lugar
Agregar un objeto al array `LUGARES` en `datos.js`:

```js
{ nombre: "Evelia", icono: "🍝", cocina: "Italo-argentina", barrio: "Núñez",
  ambiente: 5, servicio: 5, comida: 5, precio: 2, momento: "comer" }
```

Campos:
- `icono`: un emoji que represente al lugar. Si falta, usa ☕ para cafés y 🍽️ para el resto.
- `momento`: `"comer"` (almuerzo/cena) o `"cafe"` (desayuno/merienda).
- Los 4 puntajes son enteros de 1 a 5.
- El barrio importa: se usa para armar el link de Google Maps, así que conviene ponerlo bien (sobre todo en lugares con varias sucursales).

## Publicación (GitHub Pages)
- Repo público `diodice-it/guia-df`, rama `main`, carpeta raíz.
- Para actualizar: editar archivos, `git add`, `git commit`, `git push`. GitHub Pages republica solo en 1 o 2 minutos.
- Antes de cambios visuales, ver el preview local (abrir `index.html`) y mostrarlo; no se hace push sin aprobación.

## Decisiones de diseño
- Estilo Michelin clásico: rojo, blanco/crema y tipografía serif. Sin año ni subtítulo en el header.
- Mobile first: botones de al menos 40–46 px, buscador y pestañas fijas, tarjetas compactas.
- Se evaluaron fotos de Google (requieren API con clave) y Instagram. Se descartaron: hoy se usa un ícono por lugar y solo Google Maps.
- Si más adelante hay fotos propias, la miniatura (`.icono`) está lista para reemplazar el emoji.

## Historial
- v0.1: primera versión con datos de ejemplo.
- v0.2: optimizada para celular, 5 lugares reales.
- v0.3: pestañas Comer / Cafecitos, filtros con chips, ícono por lugar, header nuevo, se quitó Instagram.
- v0.4: layout compacto para celular (puesto sobre el ícono, ejes 2×2). Publicada en GitHub Pages.
- v0.5: se quitó el buscador.
- v0.6: ícono definitivo (opción A: marco blanco con ★★★ y "DF" sobre rojo, igual al header), Precio/valor, empates con "=", favicon + vista previa al compartir, accesibilidad, app instalable + offline, pestaña en la URL y orden recordado, destacado del puesto 1 y sellos, tipografía Playfair Display, validación de datos.

## Ideas pendientes
- (Sin pendientes grandes por ahora.)

## Descartado
- Gráfico de radar (ECharts) por lugar: se probó un preview y no interesó.
- Buscador, Instagram, fotos de Google (ver decisiones de diseño).
- Fotos propias por lugar.
- Fecha de visita y comentario corto (se descartaron en la v1).
- Confirmar clasificación de Vereda Adentro (hoy en "Comer"; es una vinoteca).
