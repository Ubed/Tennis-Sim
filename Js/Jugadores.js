function jugadorJSONaLegacy(j) {
  return [
    j.nombre,
    j.forehand,
    j.backhand,
    j.volley,
    j.dropshot,
    j.speed,
    j.stamina,
    j.service,
    j.power,
    j.resto,
    j.form,
    j.surface
  ];
}

let jugadoresH = [];
let jugadoresM = [];

function cargarJugadores(callback) {
  fetch("./jugadores.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo cargar jugadores.json");
      }
      return response.json();
    })
    .then(data => {
      jugadoresH = data.hombres.map(jugadorJSONaLegacy);
      jugadoresM = data.mujeres.map(jugadorJSONaLegacy);

      console.log("Jugadores cargados:", jugadoresH.length, jugadoresM.length);

      if (callback) callback();
    })
    .catch(error => {
      console.error("Error cargando jugadores:", error);
    });
}

let jugadores = [];

function inicializarCombos() {
  const comboJugador1 = document.getElementById("jugador1");
  const comboJugador2 = document.getElementById("jugador2");

  // Unimos hombres + mujeres ya cargados
  jugadores = jugadoresH.concat(jugadoresM);

  jugadores.sort(compara);

  comboJugador1.options.length = 0;
  comboJugador2.options.length = 0;

  for (let i = 0; i < jugadores.length; i++) {
    const nombre = jugadores[i][0];
    comboJugador1.options[i] = new Option(nombre, i);
    comboJugador2.options[i] = new Option(nombre, i);
  }

  console.log("Combos inicializados:", jugadores.length);
}

 window.onload=function(){
	cargarJugadores(inicializarCombos);
  } 

function inicializarJugadoresLegacy() {
  // Unimos hombres + mujeres como antes
  jugadores = jugadoresH.concat(jugadoresM);

  jugadores.sort(compara);

  const comboJugador1 = document.getElementById("jugador1");
  const comboJugador2 = document.getElementById("jugador2");

  comboJugador1.innerHTML = "";
  comboJugador2.innerHTML = "";

  jugadores.forEach((j, i) => {
    const op1 = new Option(j[0], i);
    const op2 = new Option(j[0], i);
    comboJugador1.add(op1);
    comboJugador2.add(op2);
  });
}

  function cargarCaracteristicas(num){
	  if (!jugadores.length) {
		console.warn("Jugadores aún no cargados");
		return;
	  }
	  var combo=document.getElementById("jugador" + num);
	  var comboForehand=document.getElementById("forehand" + num);
	  var comboBackhand=document.getElementById("backhand" + num);
	  var comboVolley=document.getElementById("volley" + num);
	  var comboDropshot=document.getElementById("dropshot" + num);
	  var comboSpeed=document.getElementById("speed" + num);
	  var comboStamina=document.getElementById("stamina" + num);
	  var comboService=document.getElementById("service" + num);
	  var comboPower=document.getElementById("power" + num);
	  var comboResto=document.getElementById("resto" + num);
	  var comboConsi=document.getElementById("consistencia" + num);
	  var comboForm=document.getElementById("form" + num);
	  var comboSurface=document.getElementById("surface" + num);
	  
	  comboForehand.value=jugadores[combo.value][1];
	  comboBackhand.value=jugadores[combo.value][2];
	  comboVolley.value=jugadores[combo.value][3];
	  comboDropshot.value=jugadores[combo.value][4];
	  comboSpeed.value=jugadores[combo.value][5];
	  comboStamina.value=jugadores[combo.value][6];
	  comboService.value=jugadores[combo.value][7];
	  comboPower.value=jugadores[combo.value][8];
	  comboResto.value=jugadores[combo.value][9];
	  comboConsi.value=jugadores[combo.value][10];
	  comboForm.value=jugadores[combo.value][11];
	  comboSurface.value=jugadores[combo.value][12];
  }
  
  function compara(a, b) {
    return (a[0]<b[0]?"-1":"1");
  }



/*ESTRUCTURA DE ARRAY DE JUGADORES:
["Nombre jugador",derecha,reves,volea,dejada,velocidad,resistencia,servicio,fuerza,resto,forma,"superficie"]
El valor de la superficie DEBE ser una de las siguientes posibilidades:
	 "carpet" para indoor
         "grass" para hierba
         "clay" para tierra
         "hardcourt" para dura
         "hardcourt/carpet" para dura/indoor
         "clay/carpet" para tierra/indoor
         "hardcourt/grass" para dura/hierba
         "allcourt" para neutral
*/
