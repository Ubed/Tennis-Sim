// ===============================
// ADMIN · TENNIS SIM
// ===============================

let jugadores = [];

// -------------------------------
// Cargar jugadores desde JSON
// -------------------------------
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
  }
}

// -------------------------------
// Añadir jugador
// -------------------------------
function añadirJugador(jugador) {
  jugadores.push(jugador);
  console.log("Jugador añadido:", jugador);
}

// -------------------------------
// Descargar JSON actualizado
// -------------------------------
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

// -------------------------------
// DOM READY
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {
  cargarJugadores();

  const form = document.getElementById("addPlayerForm");
  const downloadBtn = document.getElementById("downloadJson");
  const debug = document.getElementById("debug");

  // Añadir jugador desde formulario
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const jugador = {
        nombre: document.getElementById("nombre").value.trim(),
        pais: document.getElementById("pais").value.trim(),
        skill: Number(document.getElementById("skill").value),
        saque: Number(document.getElementById("saque").value),
        resto: Number(document.getElementById("resto").value),
      };

      if (!jugador.nombre || !jugador.pais) {
        alert("Nombre y país son obligatorios");
        return;
      }

      añadirJugador(jugador);
      form.reset();

      if (debug) {
        debug.textContent = JSON.stringify(jugadores, null, 2);
      }
    });
  }

  // Descargar JSON
  if (downloadBtn) {
    downloadBtn.addEventListener("click", descargarJSON);
  }
});
