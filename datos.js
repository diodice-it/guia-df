/* ===== DATOS DE LA GUÍA DF =====
   Para agregar un lugar, sumar un objeto a la lista.
   Puntajes: enteros de 1 a 5.
   icono: un emoji que represente al lugar (🍝 🍣 ☕ 🍷 🍕 🍔 🥩 🍦...).
   momento: "comer" (almuerzo/cena) o "cafe" (desayuno/merienda).
   maps: (opcional) link exacto de Google Maps. Si falta, se busca por nombre + barrio. */
const LUGARES = [
  { nombre: "Evelia", icono: "🍝", cocina: "Italo-argentina", barrio: "Núñez", ambiente: 5, servicio: 5, comida: 5, precio: 2, momento: "comer" },
  { nombre: "Norimoto", icono: "🍣", cocina: "Nikkei", barrio: "Recoleta", ambiente: 5, servicio: 4, comida: 4, precio: 2, momento: "comer" },
  { nombre: "The Shelter Coffee", icono: "☕", cocina: "Café de especialidad", barrio: "Belgrano", ambiente: 5, servicio: 3, comida: 4, precio: 3, momento: "cafe" },
  { nombre: "Gorrión", icono: "🐦", cocina: "Cafetería", barrio: "Belgrano", ambiente: 3, servicio: 2, comida: 2, precio: 3, momento: "cafe" },
  { nombre: "Azul Café", icono: "🥐", cocina: "Cafetería", barrio: "Belgrano", ambiente: 2, servicio: 2, comida: 3, precio: 3, momento: "cafe", maps: "https://www.google.com/maps/place/Azul+Caf%C3%A9/@-34.5611316,-58.443715,20z/data=!4m6!3m5!1s0x95bcb54c1b56aa39:0x1d7f123412841225!8m2!3d-34.5611644!4d-58.4434382!16s%2Fg%2F11sjwk_4_1" },
  { nombre: "Vereda Adentro", icono: "🍷", cocina: "Vinos naturales", barrio: "Saavedra", ambiente: 5, servicio: 4, comida: 3, precio: 3, momento: "comer" },
  { nombre: "Eléctrica Pizza", icono: "🍕", cocina: "Pizza", barrio: "Palermo", ambiente: 3, servicio: 2, comida: 3, precio: 3, momento: "comer" }
];
