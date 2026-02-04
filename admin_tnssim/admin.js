// =====================================
// ADMIN · TENNIS SIM
// =====================================

// Estructura real del JSON
let jugadores = {
  hombres: [],
  mujeres: []
};

// -------------------------------------
// Cargar jugadores desde jugadores.json
// -------------------------------------
async function cargarJugadores() {
  try {
    const response = await fetch("../jugadores.json");
    if (!response.ok) {
      throw new Error("No se pudo cargar jugadores.json");
    }
    jugadores = await response.json();
    console.log("Jugadores cargados:", jugadores);
  } catch (error) {
    console.error("Error cargando jugadores:", error);
    alert("Error cargando jugadores.json");
  }
}

// -------------------------------------
// Generar ID a partir del nombre
// -------------------------------------
function generarId(nombre) {
  return nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

// -------------------------------------
// Crear jugador desde el formulario
// -------------------------------------
function crearJugadorDesdeFormulario() {
  const nombre = document.getElementById("nombre").value.trim();

  return {
    id: generarId(nombre),
    nombre,
    forehand: Number(document.getElementById("forehand").value),
    backhand: Number(document.getElementById("backhand").value),
    volley: Number(document.getElementById("volley").value),
    dropshot: Number(document.getElementById("dropshot").value),
    speed: Number(document.getElementById("speed").value),
    stamina: Number(document.getElementById("stamina").value),
    service: Number(document.getElementById("service").value),
    power: Number(document.getElementById("power").value),
    resto: Number(document.getElementById("resto").value),
    form: Number(document.getElementById("form").value),
    surface: document.getElementById("surface").value
  };
}

// -------------------------------------
// Comprobar si el ID ya existe
// -------------------------------------
function idExiste(genero, id) {
  return jugadores[genero].some(j => j.id === id);
}

// -------------------------------------
// Descargar jugadores.json actualizado
// -------------------------------------
function descargarJSON() {
  const dataStr = JSON.stringify(jugadores, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "jugadores.json";
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// -------------------------------------
// DOM READY
// -------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  cargarJugadores();

  const form = document.getElementById("addPlayerForm");
  const downloadBtn = document.getElementById("downloadJson");
  const debug = document.getElementById("debug");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const genero = document.getElementById("genero").value;
      const jugador = crearJugadorDesdeFormulario();

      if (idExiste(genero, jugador.id)) {
        alert("⚠️ Ya existe un jugador con ese nombre/ID");
        return;
      }

      jugadores[genero].push(jugador);

      if (debug) {
        debug.textContent = JSON.stringify(jugadores, null, 2);
      }

      alert(`Jugador añadido a ${genero}`);
      form.reset();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener("click", descargarJSON);
  }
});
