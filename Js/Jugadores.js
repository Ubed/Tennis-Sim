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
	  
	  // Mostrar información de depuración
	  console.log("=== DEPURACIÓN cargarCaracteristicas(" + num + ") ===");
	  console.log("Valor seleccionado en combo:", combo.value);
	  console.log("Total de jugadores en array:", jugadores.length);
	  
	  // Verificar si el índice existe
	  if (!jugadores[combo.value]) {
		console.error("ERROR: No existe jugadores[" + combo.value + "]");
		console.log("Índices disponibles: 0 a " + (jugadores.length - 1));
		return;
	  }
	  
	  var jugadorData = jugadores[combo.value];
	  console.log("Datos del jugador seleccionado:", jugadorData);
	  console.log("Longitud del array del jugador:", jugadorData.length);
	  
	  // Mostrar cada posición individualmente
	  for (var i = 0; i < jugadorData.length; i++) {
		console.log("jugadores[" + combo.value + "][" + i + "] =", jugadorData[i], "(tipo:", typeof jugadorData[i] + ")");
	  }
	  
	  // También mostrar qué valor tendría cada campo (incluso si no existen)
	  console.log("\nValores que se intentarán asignar:");
	  console.log("Posición 1 (forehand):", jugadorData[1]);
	  console.log("Posición 2 (backhand):", jugadorData[2]);
	  console.log("Posición 3 (volley):", jugadorData[3]);
	  console.log("Posición 4 (dropshot):", jugadorData[4]);
	  console.log("Posición 5 (speed):", jugadorData[5]);
	  console.log("Posición 6 (stamina):", jugadorData[6]);
	  console.log("Posición 7 (service):", jugadorData[7]);
	  console.log("Posición 8 (power):", jugadorData[8]);
	  console.log("Posición 9 (resto):", jugadorData[9]);
	  console.log("Posición 10 (consistencia):", jugadorData[10]);
	  console.log("Posición 11 (form):", jugadorData[11]);
	  console.log("Posición 12 (surface):", jugadorData[12]);
	  console.log("=== FIN DEPURACIÓN ===\n");
  
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
	  // También mostrar qué se asignó realmente a cada campo
	  console.log("Valores asignados a los campos:");
	  console.log("forehand" + num + ":", comboForehand.value);
	  console.log("backhand" + num + ":", comboBackhand.value);
	  console.log("volley" + num + ":", comboVolley.value);
	  console.log("dropshot" + num + ":", comboDropshot.value);
	  console.log("speed" + num + ":", comboSpeed.value);
	  console.log("stamina" + num + ":", comboStamina.value);
	  console.log("service" + num + ":", comboService.value);
	  console.log("power" + num + ":", comboPower.value);
	  console.log("resto" + num + ":", comboResto.value);
	  console.log("consistencia" + num + ":", comboConsi.value);
	  console.log("form" + num + ":", comboForm.value);
	  console.log("surface" + num + ":", comboSurface.value);
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
