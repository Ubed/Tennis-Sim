// Funcion auxiliar para convertir puntos numericos a texto (15, 30, 40, etc.)
function getPointText(point) {
  switch(point) {
    case 0: return "0";
    case 1: return "15";
    case 2: return "30";
    case 3: return "40";
    case 4: return "AD";
    default: return point.toString();
  }
}

// Variable para almacenar el reporte
let reportLog = "";

// Funcion para agregar lineas al reporte
function addToReport(message) {
  const reportTextarea = document.getElementById("reportMessage");
  
  // Agregar la nueva linea con timestamp
  const now = new Date();
  const timeString = now.toLocaleTimeString('es-ES', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit' 
  });
  
  //reportLog += `[${timeString}] ${message}\n`;
  reportLog += `${message}\n`;
  // Actualizar el textarea
  if (reportTextarea) {
    reportTextarea.value = reportLog;
    // Hacer scroll automatico al final
    reportTextarea.scrollTop = reportTextarea.scrollHeight;
  }
}

// Funcion para limpiar el reporte
function clearReport() {
  reportLog = "";
  const reportTextarea = document.getElementById("reportMessage");
  if (reportTextarea) {
    reportTextarea.value = "";
  }
}

let sup = 0;
let difi = 0;

function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

  function calcular(jug,tipo,num)
  {
	  if(jug==1)
	  {
		  difi = Math.round(Math.random()*15)+ser1; 
		  switch(tipo)
		  {
			  case 1:
				  if(difi > 15){
					  sup=sup+15;
					  if(surface=="clay")sup=sup+ser1;
					  else if(surface="grass")sup=sup+ser1*2.5;
					  else if(surface=="hardcourt")sup=sup+ser1*2;
					  else if(surface=="carpet")sup=sup+ser1*3;
					  else sup=sup+ser1*1.5;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second1,2);
					  else sup=0;
				  }
				  break;
				  
		 	  case 2:
				  if(difi > 12){
					  sup=sup+10;
					  if(surface=="clay")sup=sup+ser1;
					  else if(surface="grass")sup=sup+ser1*2.5;
					  else if(surface=="hardcourt")sup=sup+ser1*2;
					  else if(surface=="carpet")sup=sup+ser1*3;
					  else sup=sup+ser1*1.5;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second1,2);
					  else sup=0;
				  }
				  break;
			
			  case 3:
				  if(difi > 10){
					  sup=sup+5;
					  if(surface=="clay")sup=sup+ser1;
					  else if(surface="grass")sup=sup+ser1*2.5;
					  else if(surface=="hardcourt")sup=sup+ser1*2;
					  else if(surface=="carpet")sup=sup+ser1*3;
					  else sup=sup+ser1*1.5;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second1,2);
					  else sup=0;
				  }
				  break;
		  }	
	  }
	  
	  if(jug==2)
	  {
		  difi = Math.round(Math.random()*15)+ser2;
		  switch(tipo)
		  {
			  case 1:
				  if(difi > 15){
					  sup=sup+15;
					  if(surface=="clay")sup=sup+ser2;
					  else if(surface="grass")sup=sup+ser2*2.5;
					  else if(surface=="hardcourt")sup=sup+ser2*2;
					  else if(surface=="carpet")sup=sup+ser2*3;
					  else sup=sup+ser2*1.5;
				  } 
				  else
				  {
					  if(num==1)calcular(jug,second2,2);
					  else sup=0;  
				  }
		 	  	  break;
				
		      case 2:
				  if(difi > 12){
					  sup=sup+10;
					  if(surface=="clay")sup=sup+ser2;
					  else if(surface="grass")sup=sup+ser2*2.5;
					  else if(surface=="hardcourt")sup=sup+ser2*2;
					  else if(surface=="carpet")sup=sup+ser2*3;
					  else sup=sup+ser2*1.5;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second2,2);
					  else sup=0;
				  }
				  break;
		 
			  case 3:
				  if(difi > 10){
					  sup=sup+5;
					  if(surface=="clay")sup=sup+ser2;
					  else if(surface="grass")sup=sup+ser2*2.5;
					  else if(surface=="hardcourt")sup=sup+ser2*2;
					  else if(surface=="carpet")sup=sup+ser2*3;
					  else sup=sup+ser2*1.5;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second2,2);
					  else sup=0;
				  }
				  break;
		  }
	  } 
  }
  
  function modificarVelocidad(vel)
  {
	  if((vel==1) && (velocidad > 100))velocidad=velocidad-225;
	  if((vel==0) && (velocidad < 1900))velocidad=velocidad+225;  
  }
  
  function superficie()
  {
	  for (i = 0; i < MatchSurface.surface.length; i++)
	  {
		  if(MatchSurface.surface[i].checked)return MatchSurface.surface[i].value;
	  }
  }
  
  function numeroSets()
  {
	  for (i = 0; i < setsNumber.setsNum.length; i++)
	  {
		  if(setsNumber.setsNum[i].checked)return setsNumber.setsNum[i].value;
	  }
  }
  
  function cambio()
  {
	  if(saq==1)
	  {
		  document.getElementById("s2").innerHTML="<center><img  src='./Imagenes/tenis.png'></center>";
		  document.getElementById("s1").innerHTML="<center>&nbsp;</center>";
		  saq=2;
	  }
	  else
	  {
		  document.getElementById("s1").innerHTML="<center><img  src='./Imagenes/tenis.png'></center>";
		  document.getElementById("s2").innerHTML="<center>&nbsp;</center>";
		  saq=1;
	  }
	  const sacador = saq === 1 ? nomb1.split(',')[0] : nomb2.split(',')[0];
	  addToReport(`Ahora saca: ${sacador}`);
  }
  
function finalizarPartido(ganador, perdedor, resultado) {
  addToReport("=== PARTIDO FINALIZADO ===");
  addToReport(`?? GANADOR: ${ganador}`);
  addToReport(`Resultado final: ${resultado}`);
  addToReport(`Duracion: ${document.getElementById("timet").textContent}`);
}

  function arrancar()
  {
	  // Limpiar reporte anterior
	  clearReport();
	  
	  // Agregar primera linea al reporte
	  addToReport("=== PARTIDO INICIADO ===");
	  surf1=document.getElementById("surface1").options[document.getElementById("surface1").selectedIndex].value;
	  surf2=document.getElementById("surface2").options[document.getElementById("surface2").selectedIndex].value;
	  nomb1=document.getElementById("jugador1").options[document.getElementById("jugador1").selectedIndex].text;
	  nomb2=document.getElementById("jugador2").options[document.getElementById("jugador2").selectedIndex].text;
	  fore1=parseInt(document.getElementById("forehand1").options[document.getElementById("forehand1").selectedIndex].value);
	  fore2=parseInt(document.getElementById("forehand2").options[document.getElementById("forehand2").selectedIndex].value);
	  back1=parseInt(document.getElementById("backhand1").options[document.getElementById("backhand1").selectedIndex].value);
	  back2=parseInt(document.getElementById("backhand2").options[document.getElementById("backhand2").selectedIndex].value);
	  vol1=parseInt(document.getElementById("volley1").options[document.getElementById("volley1").selectedIndex].value);
	  vol2=parseInt(document.getElementById("volley2").options[document.getElementById("volley2").selectedIndex].value);
	  drop1=parseInt(document.getElementById("dropshot1").options[document.getElementById("dropshot1").selectedIndex].value);
	  drop2=parseInt(document.getElementById("dropshot2").options[document.getElementById("dropshot2").selectedIndex].value);
	  spe1=parseInt(document.getElementById("speed1").options[document.getElementById("speed1").selectedIndex].value);
	  spe2=parseInt(document.getElementById("speed2").options[document.getElementById("speed2").selectedIndex].value);
	  sta1=parseInt(document.getElementById("stamina1").options[document.getElementById("stamina1").selectedIndex].value);
	  sta2=parseInt(document.getElementById("stamina2").options[document.getElementById("stamina2").selectedIndex].value);
	  ser1=parseInt(document.getElementById("service1").options[document.getElementById("service1").selectedIndex].value);
	  ser2=parseInt(document.getElementById("service2").options[document.getElementById("service2").selectedIndex].value);
	  pow1=parseInt(document.getElementById("power1").options[document.getElementById("power1").selectedIndex].value);
	  pow2=parseInt(document.getElementById("power2").options[document.getElementById("power2").selectedIndex].value);
	  rest1=parseInt(document.getElementById("resto1").options[document.getElementById("resto1").selectedIndex].value);
	  rest2=parseInt(document.getElementById("resto2").options[document.getElementById("resto2").selectedIndex].value);
	  consi1=parseInt(document.getElementById("consistencia1").options[document.getElementById("consistencia1").selectedIndex].value);
	  consi2=parseInt(document.getElementById("consistencia2").options[document.getElementById("consistencia2").selectedIndex].value);
	  form1=parseInt(document.getElementById("form1").options[document.getElementById("form1").selectedIndex].value);
	  form2=parseInt(document.getElementById("form2").options[document.getElementById("form2").selectedIndex].value);
	  
	  technique1=parseInt(document.getElementById("technique1").options[document.getElementById("technique1").selectedIndex].value);
	  technique2=parseInt(document.getElementById("technique2").options[document.getElementById("technique2").selectedIndex].value);
	  position1=parseInt(document.getElementById("position1").options[document.getElementById("position1").selectedIndex].value);
	  position2=parseInt(document.getElementById("position2").options[document.getElementById("position2").selectedIndex].value);
	  strategy1=parseInt(document.getElementById("strategy1").options[document.getElementById("strategy1").selectedIndex].value);
	  strategy2=parseInt(document.getElementById("strategy2").options[document.getElementById("strategy2").selectedIndex].value);
	  first1=parseInt(document.getElementById("first1").options[document.getElementById("first1").selectedIndex].value);
	  first2=parseInt(document.getElementById("first2").options[document.getElementById("first2").selectedIndex].value);
	  second1=parseInt(document.getElementById("second1").options[document.getElementById("second1").selectedIndex].value);
	  second2=parseInt(document.getElementById("second2").options[document.getElementById("second2").selectedIndex].value);

	  tipo_p = parseInt(document.getElementById("mType").options[document.getElementById("mType").selectedIndex].value);
	  
	  fore1=fore1+technique1*1.5;
	  back1=back1+technique1*1.5;
	  fore2=fore2+technique2*1.5;
	  back2=back2+technique2*1.5;
	  if(position1==1)
	  {
		  drop1++;
		  vol1++;
	  }
	  if(position1==2)pow1++;
	  if(position2==1)
	  {
		  drop2++;
		  vol2++;
	  }
	  if(position2==2)pow2++;
	  
	  switch(tipo_p)
	  {
		case 0:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/Amistoso.png'></img>";
			break;
		case 1:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/Future.png'></img>";
			break;
		case 2:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/Challenger90.png'></img>";
			break;
		case 3:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/ATP250.png'></img>";
			break;
		case 4:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/ATP500.png'></img>";
			break;
		case 5:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/ATP1000.png'></img>";
			break;
		case 6:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/AustralianOpen.png'></img>";
			break;
		case 7:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/RG.png'></img>";
			break;
		case 8:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/WB.png'></img>";
			break;
		case 9:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/USOpen.png'></img>";
			break;
		case 10:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/ATPFinals.png'></img>";
			break;
		case 11:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/CopaDavis.png'></img>";
			break;
		case 12:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/WTA.png'></img>";
			break;
		case 13:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/WTA.png'></img>";
			break;
		case 14:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/WTA.png'></img>";
			break;
		case 15:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/WTATour.png'></img>";
			break;
		case 16:
			document.getElementById("im_torneo").innerHTML="<img src='./Imagenes/FedCup.png'></img>";
			break;
	  }

	  document.getElementById("im_jug1").innerHTML="<img src='./Imagenes/Jugadores/"+nomb1+".jpg'></img>";
	  document.getElementById("im_jug2").innerHTML="<img src='./Imagenes/Jugadores/"+nomb2+".jpg'></img>";
	  setHTML("set11", "<center>-</center>");
	  setHTML("set12", "<center>-</center>");
	  setHTML("set13", "<center>-</center>");
	  setHTML("set14", "<center>-</center>");
	  setHTML("set15", "<center>-</center>");
	  setHTML("set21", "<center>-</center>");
	  setHTML("set22", "<center>-</center>");
	  setHTML("set23", "<center>-</center>");
	  setHTML("set24", "<center>-</center>");
	  setHTML("set25", "<center>-</center>");
	  document.getElementById("res1").innerHTML="<center><b><font color='#BDBDBD' face = 'helvetica'>"+ nomb1 +"</b></center></font>";
	  document.getElementById("res2").innerHTML="<center><b><font color='#BDBDBD' face = 'helvetica'>"+ nomb2 +"</b></center></font>";
		
	  saq= Math.round(Math.random()*10)+1;
	  cambio();
	 
	  punto1=0;
	  punto2=0;
	  game1=0;
	  game2=0;
	  set=1;
	  set1=0;
	  set2=0;
	  auxpunto=0;
	  auxgame=0;
	  tie=0;
	  control=0;
	  auxtie=0;
	  chequeo=0;
	  velocidad=1000;
	  cont=0;
	  ya_lesion=0;
	  lluvia=0;

	  tiempo = 0;
	  
	  surface=superficie();
	  addToReport(`Superficie: ${surface}`);
	  if(surface==surf1)
	  {
	  	switch(surface)
	  	{
			case "clay":
				consi1 = consi1 * 2.5;
				break;
			case "hardcourt":
				consi1 = consi1 * 2;
				break;
			case "carpet":
				consi1 = consi1 * 1.5;
				break;
			case "grass":
				break;
		}
	  }

	  if(surface==surf2)
	  {
	  	switch(surface)
	  	{
			case "clay":
				consi2 = consi2 * 2.5;
				break;
			case "hardcourt":
				consi2 = consi2 * 2;
				break;
			case "carpet":
				consi2 = consi2 * 1.5;
				break;
			case "grass":
				break;
		}
	  }
	  
	  numberOfSets=numeroSets();
	  addToReport(`Formato: ${numberOfSets === "5" ? "Mejor de 5 sets" : "Mejor de 3 sets"}`);
	  addToReport(`${nomb1} vs ${nomb2}`);
	  
	  calcularTiempo();
	  
	  puntosJugados=0;
	  mensajeExpuesto=false;
	  
	  do{
		  lesion1=lesionar(form1,sta1);
		  lesion2=lesionar(form2,sta2);
	  }while(lesion1==lesion2 && (lesion1<=40 || lesion2<=40));
	  
	  if(lesion1<=40 || lesion2<=40) saltarLesion();
	  
	  partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control,consi1,consi2);
  
  }
  
  function resultado(vpunto1,vpunto2,vgame1,vgame2)
  {
	  if((punto1==punto2) && (punto1==3))auxpunto=1;  
	  if(punto1 > 3 +auxpunto)
	  {
		  game1++;
		  cambio();
		  control=0;
		  auxpunto=0;
		  punto1=0;
		  punto2=0;
	  }
	  if(punto2 > 3 +auxpunto)
	  {
		  game2++;
		  cambio();
		  control=0;
		  auxpunto=0;
		  punto1=0;
		  punto2=0;
	  }
	  
	  switch(punto1)
	  {
		  case 0:
			  document.getElementById("game1").innerHTML="<font face='helvetica' color='black'><center>0</center></font>";
			  break;
		  case 1:
			  document.getElementById("game1").innerHTML="<font face='helvetica' color='black'><center>15</center></font>";
			  break;
		  case 2:
			  document.getElementById("game1").innerHTML="<font face='helvetica' color='black'><center>30</center></font>";
			  break;
		  case 3:
			  document.getElementById("game1").innerHTML="<font face='helvetica' color='black'><center>40</center></font>";
			  break;
		  case 4:
			  document.getElementById("game1").innerHTML="<font face='helvetica' color='black'><center>A</center></font>";
			  break;
	  }
	  switch(punto2)
	  {
		  case 0:
			  document.getElementById("game2").innerHTML="<font face='helvetica' color='black'><center>0</center></font>";
			  break;
		  case 1:
			  document.getElementById("game2").innerHTML="<font face='helvetica' color='black'><center>15</center></font>";
			  break;
		  case 2:
			  document.getElementById("game2").innerHTML="<font face='helvetica' color='black'><center>30</center></font>";
			  break;
		  case 3:
			  document.getElementById("game2").innerHTML="<font face='helvetica' color='black'><center>40</center></font>";
			  break;
		  case 4:
			  document.getElementById("game2").innerHTML="<font face='helvetica' color='black'><center>A</center></font>";
			  break;
	  }
	  
	  switch(set)
	  {
		  case 1:
			  setHTML("set11", "<font color='#BDBDBD' face = 'helvetica'><center>"+ game1 +"</center></font>");
			  setHTML("set21", "<font color='#BDBDBD' face = 'helvetica'><center>"+ game2 +"</center></font>");
			  break;
		  case 2:
			  setHTML("set12", "<font color='#BDBDBD' face = 'helvetica'><center>"+ game1 +"</center></font>");
			  setHTML("set22", "<font color='#BDBDBD' face = 'helvetica'><center>"+ game2 +"</center></font>");
			  break;
		  case 3:
			  setHTML("set13", "<font color='#BDBDBD' face = 'helvetica'><center>"+ game1 +"</center></font>");
			  setHTML("set23", "<font color='#BDBDBD' face = 'helvetica'><center>"+ game2 +"</center></font>");
			  break;
		  case 4:
			  setHTML("set14", "<font color='#BDBDBD' face = 'helvetica'><center>"+ game1 +"</center></font>");
			  setHTML("set24", "<font color='#BDBDBD' face = 'helvetica'><center>"+ game2 +"</center></font>");
			  break;
		  case 5:
			  setHTML("set15", "<font color='#BDBDBD' face = 'helvetica'><center>"+ game1 +"</center></font>");
			  setHTML("set25", "<font color='#BDBDBD' face = 'helvetica'><center>"+ game2 +"</center></font>");
			  break;
	  }
  }//end resultado
  
  function cero()
  {
	  punto1=0;
	  punto2=0;
	  game1=0;
	  game2=0;
	  chequeo=1;
	  document.getElementById("tie").innerHTML="<font color='black'><b><center>Juego</center></b></font>";
  }
  
  function tiebreak(fore1,back1,vol1,drop1,spe1,vsta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,vsta2,ser2,pow2,rest2,form2,vpunto1,vpunto2,vgame1,vgame2,vset1,vset2,consi1,consi2)
  {
	  if(lesion1<=40 && lesion1<lesion2 && puntosJugados==puntoLesion && ya_lesion==0){
		  calcularLesion(nomb1,nomb2);
		  return;
	  }
	  else if(lesion2<=40 && lesion2<lesion1 && puntosJugados==puntoLesion && ya_lesion==0){
		  calcularLesion(nomb2,nomb1);
		  return;
	  }
	  
	  if(lluvia==1)
	  {
		if(puntosalto_lluvia==puntosJugados)
	  	{
			if(surface=="clay")
		  	{
				consi1 = consi1 - 0.5;
				consi2 = consi2 - 0.5;
				alert("Empieza a llover ligeramente...");
				if(surface==surf1) spe1=spe1 - 0.5;
				else if(surface!=surf1) spe1=spe1 - 1;
			
				if(surface==surf2) spe2=spe2 - 0.5;
				else if(surface!=surf2) spe2=spe2 - 1;
		  	}
			if(surface=="grass")
		  	{
				consi1 = consi1 - 2;
				consi2 = consi2 - 2;
				alert("Empieza a llover ligeramente...");
				if(surface==surf1) spe1 = spe1 - 1;
				else if(surface!=surf1) spe1 = spe1 - 1.5;
			
				if(surface==surf2) spe2 = spe2 + 1;
				else if(surface!=surf2) spe2 = spe2 - 1.5;
		  	}
			if(surface=="hardcourt")
		  	{
				consi1 = consi1 - 1.5;
				consi2 = consi2 - 1.5;
				alert("Empieza a llover ligeramente...");
				if(surface==surf1) spe1=spe1 - 0.75;
				else if(surface!=surf1) spe1=spe1 - 1.25;
			
				if(surface==surf2) spe2=spe2 - 0.75;
				else if(surface!=surf2) spe2=spe2 - 1.25;
		  	}
			if(surface=="carpet")
		  	{
		  	}
		}
		addToReport("Comienza a llover en la pista");
	  }

	  cont++;
	  if((cont==1)||(cont%2==0))setTimeout("cambio(),50");  
	  
	  if((punto1==punto2)&&(punto1==6 + auxtie))auxtie++;   
	  
	  pts1=punto(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,1,saq,consi1);
	  pts2=punto(fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,2,saq,consi2);
	  
	  puntosJugados++;
		  
	  if(pts1==pts2)
	  {
		  pts1=Math.random(1000);
		  pts2=Math.random(1000);
	  }
	  
	  if(pts1<=pts2)punto2++;
	  else punto1++;
	  
	  document.getElementById("tie").innerHTML="<font  color='black'><b><center>Tie Break</center></b></font>";
	  document.getElementById("game1").innerHTML="<font face='helvetica' color='black'><center>"+ punto1 +"</center></font>";
	  document.getElementById("game2").innerHTML="<font face='helvetica' color='black'><center>"+ punto2 +"</center></font>";

	  tiempo = tiempo + Math.floor(Math.random()*81);
	  if(tiempo < 60)
	  {
	  	document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ "0h:00" +"m</center></font>";
	  }
	  else
	  {
		tiempo_m_condecimal = tiempo / 60;
		tiempo_m_sindecimal = parseInt(tiempo_m_condecimal);
		tiempo_s = tiempo % 60
		if(tiempo_m_sindecimal < 60)
		{
			if(tiempo_m_sindecimal < 10){
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ "0h:0" + tiempo_m_sindecimal + "m</center></font>"; 
			}
			else
			{
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ "0h:" + tiempo_m_sindecimal + "m</center></font>"; 
			}
		}
		else
		{
			tiempo_h_condecimal = tiempo_m_sindecimal / 60;
			tiempo_h_sindecimal = parseInt(tiempo_h_condecimal);
			tiempo_m = tiempo_m_sindecimal % 60;
			if(tiempo_m < 10)
			{
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ tiempo_h_sindecimal + "h:0" + tiempo_m + "m</center></font>"; 
			}
			else
			{
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ tiempo_h_sindecimal + "h:" + tiempo_m + "m</center></font>"; 
			}	
		}
	  }
	  
	  if((punto1 < 7 + auxtie)&&(punto2 < 7 + auxtie))setTimeout("tiebreak(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,consi1,consi2)",velocidad);
	  
	  if(punto1 > 6 + auxtie)
	  {
		  switch(set)
		  {
			  case 1:
				  setHTML("set11", "<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto1 + "</sup></center></font>");
				  setHTML("set21", "<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto2 + "</sup></center></font>");
				  break;
		  	  case 2:
				  setHTML("set12", "<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto1 + "</sup></center></font>");
				  setHTML("set22", "<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto2 + "</sup></center></font>");
				  break;
		  	  case 3:
				  setHTML("set13", "<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto1 + "</sup></center></font>");
				  setHTML("set23", "<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto2 + "</sup></center></font>");
				  break;
		  	  case 4:
				  setHTML("set14", "<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto1 + "</sup></center></font>");
				  setHTML("set24", "<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto2 + "</sup></center></font>");
				  break;
		  	  case 5:
				  setHTML("set15", "<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto1 + "</sup></center></font>");
				  setHTML("set25", "<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto2 + "</sup></center></font>");
				  break;
		  } 
		  cambio();
		  cont=0;
		  auxtie=0;
		  set1++;
		  set++;
		  sta1=sta1-technique1;
		  sta2=sta2-technique2;
		  auxgame=0;
		  tie=0;
		  cero();
		  if(numberOfSets==5)
		  {
			  if((set1<3)&&(set2<3))setTimeout("partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control,consi1,consi2)",velocidad); 
		  }
		  else//3 sets
		  {
			  if((set1<2)&&(set2<2))setTimeout("partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control,consi1,consi2)",velocidad); 
		  }
	  }
	  
	  if(punto2 > 6 + auxtie)
	  {
		  switch(set)
		  {
			  case 1:
				  setHTML("set11", "<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto1 + "</sup></center></font>");
				  setHTML("set21", "<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto2 + "</sup></center></font>");
				  break;
		  	  case 2:
				  setHTML("set12", "<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto1 + "</sup></center></font>");
				  setHTML("set22", "<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto2 + "</sup></center></font>");
				  break; 
		  	  case 3:
				  setHTML("set13", "<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto1 + "</sup></center></font>");
				  setHTML("set23", "<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto2 + "</sup></center></font>");
				  break;
		  	  case 4:
				  setHTML("set14", "<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto1 + "</sup></center></font>");
				  setHTML("set24", "<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto2 + "</sup></center></font>");
				  break;
		  	  case 5:
				  setHTML("set15", "<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto1 + "</sup></center></font>");
				  setHTML("set25", "<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto2 + "</sup></center></font>");
				  break;
		  } 
		  cambio();
		  cont=0;
		  auxtie=0;
		  set2++;
		  set++;
		  sta1=sta1-technique1;
		  sta2=sta2-technique2;
		  auxgame=0;
		  tie=0; 
		  cero();
		  if(numberOfSets==5){ 
			  if((set1<3)&&(set2<3))setTimeout("partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control,consi1,consi2)",velocidad); 
		  }
		  else//3 sets
		  {
			  if((set1<2)&&(set2<2))setTimeout("partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control,consi1,consi2)",velocidad); 
		  }
	  }
  }
  
  function partido(fore1,back1,vol1,drop1,spe1,vsta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,vsta2,ser2,pow2,rest2,form2,vpunto1,vpunto2,vgame1,vgame2,vset1,vset2,vcontrol,consi1,consi2) 
  {
	  if(lesion1<=40 && lesion1<lesion2 && puntosJugados==puntoLesion && ya_lesion==0){
		  calcularLesion(nomb1,nomb2);
		  return;
	  }
	  else if(lesion2<=40 && lesion2<lesion1 && puntosJugados==puntoLesion && ya_lesion==0){
		  calcularLesion(nomb2,nomb1);
		  return;
	  }

	  if(lluvia==1)
	  {
		if(puntosalto_lluvia==puntosJugados)
	  	{
			if(surface=="clay")
		  	{
				consi1 = consi1 - 0.5;
				consi2 = consi2 - 0.5;
				alert("Empieza a llover ligeramente...");
				if(surface==surf1) spe1=spe1 - 0.5;
				else if(surface!=surf1) spe1=spe1 - 1;
			
				if(surface==surf2) spe2=spe2 - 0.5;
				else if(surface!=surf2) spe2=spe2 - 1;
		  	}
			if(surface=="grass")
		  	{
				consi1 = consi1 - 2;
				consi2 = consi2 - 2;
				alert("Empieza a llover ligeramente...");
				if(surface==surf1) spe1 = spe1 - 1;
				else if(surface!=surf1) spe1 = spe1 - 1.5;
			
				if(surface==surf2) spe2 = spe2 + 1;
				else if(surface!=surf2) spe2 = spe2 - 1.5;
		  	}
			if(surface=="hardcourt")
		  	{
				consi1 = consi1 - 1.5;
				consi2 = consi2 - 1.5;
				alert("Empieza a llover ligeramente...");
				if(surface==surf1) spe1=spe1 - 0.75;
				else if(surface!=surf1) spe1=spe1 - 1.25;
			
				if(surface==surf2) spe2=spe2 - 0.75;
				else if(surface!=surf2) spe2=spe2 - 1.25;
		  	}
			if(surface=="carpet")
		  	{
		  	}
		}
		addToReport("Comienza a llover en la pista");
	  }
	  
	  if((game1==game2) && (game1==6) && (set!=5))
	  {
		  tie=1;
		  punto1=0;
		  punto2=0;
		  game1=0;
		  game2=0;
			 
		  setTimeout("tiebreak(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,consi1,consi2)",velocidad);
	  }
	  
	  if((game1==game2) && (game1 > 15) && (set!=5))
	  {
		  fore1=Math.round(Math.random()*10); 
		  fore2=Math.round(Math.random()*10); 
	  }
	  
	  if(tie==0)
	  {
		  if((game1==game2) && (game1 >= 5))
		  {
			  if(control==0)auxgame++;
			  control=1;
		  }
		  
		  pts1=punto(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,1,saq,consi1);
		  pts2=punto(fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,2,saq,consi2);
		  
		  puntosJugados++;
		  
		  if(pts1==pts2)
		  {
			  pts1=Math.random(1000);
			  pts2=Math.random(1000);
		  }
		  if(pts1<=pts2)punto2++;
		  else punto1++;
		  
		  if((pts1<=pts2) && (punto1==4))
		  {
			  punto1--;
			  punto2--;
		  }
		  if((pts2<pts1) && (punto2==4))
		  {
			  punto1--;
			  punto2--;
		  }
		   
		  resultado(punto1,punto2,game1,game2); 
		  
		  if(game1 > (5 + auxgame))
		  {
			  set++;
			  set1++;
			  sta1=sta1-technique1;
			  sta2=sta2-technique2;
			  game1=0;
			  game2=0;
			  auxgame=0; 
			  control=0;
		  }
		  if(game2 > (5 + auxgame))
		  {
			  set++;
			  set2++;
			  sta1=sta1-technique1;
			  sta2=sta2-technique2;
			  game1=0;
			  game2=0;  
			  auxgame=0;
			  control=0; 
		  }
		  
		  tiempo = tiempo + Math.floor(Math.random()*81);
		  
		  if(numberOfSets==5)
		  {
			  if((set1<3) && (set2<3))
			  {
			  setTimeout("partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control,consi1,consi2)",velocidad); 
			  }
		  }
		  else//3 sets
		  {
			  if((set1<2) && (set2<2))
			  {
			  setTimeout("partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control,consi1,consi2)",velocidad); 
			  }
		  }
	  }
	  
	  if(tiempo < 60)
	  {
	  	document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+"0h:00"+"m</center></font>";
	  }
	  else
	  {
		tiempo_m_condecimal = tiempo / 60;
		tiempo_m_sindecimal = parseInt(tiempo_m_condecimal);
		tiempo_s = tiempo % 60
		if(tiempo_m_sindecimal < 60)
		{
			if(tiempo_m_sindecimal < 10){
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ "0h:0" + tiempo_m_sindecimal + "m</center></font>"; 
			}
			else
			{
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ "0h:" + tiempo_m_sindecimal + "m</center></font>"; 
			}
		}
		else
		{
			tiempo_h_condecimal = tiempo_m_sindecimal / 60;
			tiempo_h_sindecimal = parseInt(tiempo_h_condecimal);
			tiempo_m = tiempo_m_sindecimal % 60;
			if(tiempo_m < 10)
			{
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ tiempo_h_sindecimal + "h:0" + tiempo_m + "m</center></font>"; 
			}
			else
			{
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ tiempo_h_sindecimal + "h:" + tiempo_m + "m</center></font>"; 
			}
		}
	  }
  }// end partido  
  
  function punto(fo,ba,vo,dr,sp,st,se,po,rest,form,jug,saq,co) 
  {	
	  sup=0;
	  
	  if(jug==1)
	  {
		  if(surf1==surface)sup=sup+5;
		  if(strategy1==1)sup=sup-fore2;
		  if(strategy1==2)sup=sup-back2;
		  if(saq==1)calcular(1,first1,1); 
	  }
	  
	  if(jug==2)
	  {
		  if(surf2==surface)sup=sup+5;
		  if(strategy2==1)sup=sup-fore1;
		  if(strategy2==2)sup=sup-back1;
		  if(saq==2)calcular(2,first2,1);
	  }
	  if(surface=="clay") rand=fo*1.5+ba*1.5+vo*0.65+dr*1.5+sp*1.9+st*1.7+po*1.3+rest*0.25+sup+co;
	  else if(surface=="grass") rand=fo*1.7+ba*1.7+vo*1.7+dr*0.5+sp+st*0.75+po*2+rest*0.75+sup+co;
	  else if(surface=="hardcourt") rand=fo*1.7+ba*1.7+vo*1.2+dr+sp*1.5+st*1.5+po*1.7+rest*0.5+sup+co;
	  else if(surface=="carpet") rand=fo*1.9+ba*1.9+vo*1.5+dr*0.75+sp+st+po*2.1+rest+sup+co;
	  else rand=fo*1.5+ba*1.5+vo*1.3+dr+sp*1.5+st*1.5+po*1.7+rest*0.66+sup+co;
	  aleatorio = Math.floor(Math.random()*(rand))+form*2 ;  
	  return aleatorio;
  }
  
  function lesionar(form,st){
	  aleatorio2 = Math.floor(Math.random()* 99)+form*3+st;  
	  return aleatorio2;
  }
  
  function saltarLesion(){
	  if(numberOfSets==3)puntoLesion=Math.floor(Math.random()* 299);
	  else if(numberOfSets==5)puntoLesion=Math.floor(Math.random()* 499);
  }

  function calcularTiempo()
  {
	<!--Previsiones: Soleado(0-80), Parcialmente nublado(81-90), Nublado(91-96), Posibles Chubascos(97-99), Chubascos(100)-->
	rn = Math.round(Math.random()*100);
	if(rn<81) document.getElementById("prev_tiempo").innerHTML="<img src='./Imagenes/Tiempo/soleado.png'></img>";
	if(rn>80 && rn<91) document.getElementById("prev_tiempo").innerHTML="<img src='./Imagenes/Tiempo/parcnublado.png'></img>";
	if(rn>90 && rn<97) document.getElementById("prev_tiempo").innerHTML="<img src='./Imagenes/Tiempo/nublado.png'></img>";
	if(rn>96 && rn<100)
	{
		document.getElementById("prev_tiempo").innerHTML="<img src='./Imagenes/Tiempo/poschubascos.png'></img>";
		punto_lluvia = Math.round(Math.random()*100);
		if(punto_lluvia < 81)
		{
			if(numberOfSets==3)puntosalto_lluvia=Math.floor(Math.random()* 299);
	  		else if(numberOfSets==5)puntosalto_lluvia=Math.floor(Math.random()* 499);
			lluvia=1;
		}
	}
	if(rn>99)
	{
		document.getElementById("prev_tiempo").innerHTML="<img src='./Imagenes/Tiempo/chubascos.png'></img>";
		if(numberOfSets==3)puntosalto_lluvia=Math.floor(Math.random()* 299);
  		else if(numberOfSets==5)puntosalto_lluvia=Math.floor(Math.random()* 499);
		lluvia=1;
	}
  }
  
  function calcularLesion(nomb_p,nomb_g){
	  t_lesion = Math.round(Math.random()*100);
	
	  if(t_lesion < 61)
	  {
		opc = Math.round(Math.random()*3);
	  }
	  if((t_lesion > 60) && (t_lesion < 81))
	  {
		opc = Math.floor(Math.random()*(11-3))+4;
          }
	  if((t_lesion > 80) && (t_lesion < 96))
	  {
		opc = Math.floor(Math.random()*(16-11))+12;
	  }
	  if((t_lesion > 95) && (t_lesion < 99))
	  {
		opc = Math.floor(Math.random()*(19-16))+17;
	  }
	  if(t_lesion > 98)
	  {
		opc = 20;
	  }
	  ya_lesion=1;
	  switch(opc)
	  {
		
	  	case 0:
			cont = Math.round(Math.random()*100);
			if(cont > 95)
			{
				fm = Math.round(Math.random());
				cad = "un golpe en el codo(-" + fm + " de forma) ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
	  			alert(mensaje);
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			set1=6;
	  			mensajeExpuesto=true;
	  			return;
			}
			else
			{
				afecta = Math.round(Math.random()*100);
				if(afecta > 70)
				{
					spe_nueva = Math.round(Math.random()*2)+1;
					sta_nueva = Math.round(Math.random()*2)+1;
					cad = "un golpe en el codo";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion ha afectado a su velocidad(-" + spe_nueva + ") y a su resistencia(-" + sta_nueva +").";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb1)
					{
						spe1 = spe1 - spe_nueva;
						sta1 = sta1 - sta_nueva;
					}
					else
					{
						spe2 = spe2 - spe_nueva;
						sta2 = sta2 - sta_nueva;
					}
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
				else
				{
					cad = "un golpe en el codo";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion no ha afectado  jugador.";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
			}	
			break;
		case 1:
			cont = Math.round(Math.random()*100);
			if(cont > 95)
			{
				fm = Math.round(Math.random());
				cad = "una contusion en la rodilla(-" + fm + " de forma) ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{
				cad = "una leve contusion en la rodilla";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  			mensaje=mensaje + "Esta lesion no ha afectado al jugador.";
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				lesion1=50;
				lesion2=50;
				partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
			}
			break;
		case 2:
			cont = Math.round(Math.random()*100);
			if(cont > 95)
			{
				cad = "un hematoma(-1 de forma) al haber impactado la pelota en el brazo ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar, debido a que el fisioterapeuta ha creido que podria complicarse.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{	
				afecta = Math.round(Math.random()*100);
				if(afecta > 80)
				{
					cad = "un hematoma en el brazo ";
					spe_nueva = Math.round(Math.random());
					sta_nueva = Math.round(Math.random());
					pow_nueva = Math.round(Math.random());
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion ha afectado a su velocidad(-" + spe_nueva + ") y a su resistencia(-" + sta_nueva +").";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb1)
					{
						spe1 = spe1 - spe_nueva;
						sta1 = sta1 - sta_nueva;
					}
					else
					{
						spe2 = spe2 - spe_nueva;
						sta2 = sta2 - sta_nueva;
					}
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
				else
				{
					cad = "un hematoma en la pierna";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion no ha afectado al jugador.";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
			}
			break;
		case 3:
			cont = Math.round(Math.random()*100);
			if(cont > 80)
			{
				cad = "una contusion al caer al suelo(-1 de forma) ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{
				afecta = Math.round(Math.random()*100);
				if(afecta > 65)
				{
					opc2 = Math.round(Math.random()*2)+1;
					if(opc2==1)
					{
						cad = "una contusion en el brazo al caer al suelo";
						pow_nueva = Math.round(Math.random()*2)+1;
						fore_nueva = Math.round(Math.random()*2)+1;
						back_nueva = Math.round(Math.random()*2)+1;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  					mensaje=mensaje + "Esta lesion ha afectado a su potencia(-" + pow_nueva + "), a su drive(-" + fore_nueva +") y a su reves(-" + back_nueva + ").";
						addToReport(`LESION: ${cad}`);
						if (mensaje) {
						  addToReport(`${mensaje.split('\n')[0]}`);
						}
	  					alert(mensaje);
						lesion1=50;
						lesion2=50;
						if(nomb_p == nomb1)
						{
							pow1 = pow1 - pow_nueva;
							fore1 = fore1 - fore_nueva;
							back1 = back1 - back_nueva;
						}
						else
						{
							pow2 = pow2 - pow_nueva;
							fore2 = fore2 - fore_nueva;
							back2 = back2 - back_nueva;
						}
						partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
					}
					else
					{
						cad = "una contusion en la pierna al caer al suelo";
						sta_nueva = Math.round(Math.random()*2)+1;
						spe_nueva = Math.round(Math.random()*2)+1;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  					mensaje=mensaje + "Esta lesion ha afectado a su velocidad(-" + spe_nueva + ") y a su resistencia(-" + sta_nueva +").";
						addToReport(`LESION: ${cad}`);
						if (mensaje) {
						  addToReport(`${mensaje.split('\n')[0]}`);
						}
	  					alert(mensaje);
						lesion1=50;
						lesion2=50;
						if(nomb_p == nomb1)
						{
							spe1 = spe1 - spe_nueva;
							sta1 = sta1 - sta_nueva
						}
						else
						{
							spe2 = spe2 - spe_nueva;
							sta2 = sta2 - sta_nueva
						}
						partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
					}
				}
				else
				{
					cad = "una contusion al caer al suelo";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion no ha afectado  jugador.";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
			}
			break;
		case 4:
			cont = Math.round(Math.random()*100);
			if(cont > 80)
			{
				cad = "una sobrecarga en el biceps(-2 de forma) ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{
				afecta = Math.round(Math.random()*100);
				if(afecta > 40)
				{
					cad = "una sobrecarga en el biceps";
					pow_nueva = Math.round(Math.random()*2)+1;
					fore_nueva = Math.round(Math.random()*2)+1;
					back_nueva = Math.round(Math.random()*2)+1;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion ha afectado a su potencia(-" + pow_nueva + "), a su drive(-" + fore_nueva +") y a su reves(-" + back_nueva + ").";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb1)
					{
						pow1 = pow1 - pow_nueva;
						fore1 = fore1 - fore_nueva;
						back1 = back1 - back_nueva;
					}
					else
					{
						pow2 = pow2 - pow_nueva;
						fore2 = fore2 - fore_nueva;
						back2 = back2 - back_nueva;
					}
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
				else
				{
					cad = "una sobrecarga leve en el biceps";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion no ha afectado  jugador.";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
			}
			break;
		case 5:
			cont = Math.round(Math.random()*100);
			if(cont > 80)
			{
				cad = "una sobrecarga en el gemelo(-2 de forma) ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{
				afecta = Math.round(Math.random()*100);
				if(afecta > 40)
				{
					cad = "una sobrecarga en el gemelo";
					spe_nueva = Math.round(Math.random()*2)+1;
					sta_nueva = Math.round(Math.random()*2)+1;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion ha afectado a su velocidad(-" + spe_nueva + ") y a su resistencia(-" + sta_nueva +").";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb1)
					{
						spe1 = spe1 - spe_nueva;
						sta1 = sta1 - sta_nueva;
					}
					else
					{
						spe2 = spe2 - spe_nueva;
						sta2 = sta2 - sta_nueva
					}
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
				else
				{
					cad = "una sobrecarga leve en el biceps";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion no ha afectado  jugador.";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
			}
			break;
		case 6:
			cont = Math.round(Math.random()*100);
			if(cont > 80)
			{
				cad = "una contractura en el triceps(-2 de forma) ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{
				afecta = Math.round(Math.random()*100);
				if(afecta > 30)
				{
					cad = "una contractura en el triceps";
					spe_nueva = Math.round(Math.random()*2)+1;
					sta_nueva = Math.round(Math.random()*2)+1;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion ha afectado a su velocidad(-" + spe_nueva + ") y a su resistencia(-" + sta_nueva +").";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb1)
					{
						spe1 = spe1 - spe_nueva;
						sta1 = sta1 - sta_nueva;
					}
					else
					{
						spe2 = spe2 - spe_nueva;
						sta2 = sta2 - sta_nueva
					}
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
				else
				{
					cad = "una contractura en el triceps";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion no ha afectado  jugador.";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
			}
			break;
		case 7:
			cont = Math.round(Math.random()*100);
			if(cont > 95)
			{
				cad = "un esguince grave de tobillo(-4 de forma) ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{
				afecta = Math.round(Math.random()*100);
				if(afecta > 30)
				{
					opc2 = Math.round(Math.random()*100);
					if(opc2 < 81)
					{
						cad = "un esguince leve de tobillo";
						spe_nueva = Math.round(Math.random()*2)+1;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  					mensaje=mensaje + "Esta lesion ha afectado a su velocidad(-" + spe_nueva + ").";
						addToReport(`LESION: ${cad}`);
						if (mensaje) {
						  addToReport(`${mensaje.split('\n')[0]}`);
						}
	  					alert(mensaje);
					}
					if(opc2 > 81 && opc2 < 96)
					{
						cad = "un esguince moderado de tobillo";
						spe_nueva = Math.round(Math.random()*3)+1;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  					mensaje=mensaje + "Esta lesion ha afectado a su velocidad(-" + spe_nueva + ").";
						addToReport(`LESION: ${cad}`);
						if (mensaje) {
						  addToReport(`${mensaje.split('\n')[0]}`);
						}
	  					alert(mensaje);
					}
					if(opc2 > 95)
					{
						cad = "un esguince bastante fuerte de tobillo";
						spe_nueva = Math.round(Math.random()*4)+2;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + " y, aunque bastante mermado, puede continuar.\n";
	  					mensaje=mensaje + "Esta lesion ha afectado a su velocidad(-" + spe_nueva + ").";
						addToReport(`LESION: ${cad}`);
						if (mensaje) {
						  addToReport(`${mensaje.split('\n')[0]}`);
						}
	  					alert(mensaje);
					}
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb1)
					{
						spe1 = spe1 - spe_nueva;
					}
					else
					{
						spe2 = spe2 - spe_nueva;
					}
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
				else
				{
					cad = "un esguince leve de tobillo";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion no ha afectado  jugador.";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
			}
			break;
		case 8:
			cont = Math.round(Math.random()*100);
			if(cont > 95)
			{
				cad = "un esguince grave de muneca(-4 de forma) ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{
				afecta = Math.round(Math.random()*100);
				if(afecta > 30)
				{
					opc2 = Math.round(Math.random()*100);
					if(opc2 < 81)
					{
						cad = "un esguince leve de muneca";
						fore_nueva = Math.round(Math.random()*2)+1;
						back_nueva = Math.round(Math.random()*2)+1;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  					mensaje=mensaje + "Esta lesion ha afectado a su drive(-" + fore_nueva + ") y a su reves(-" + back_nueva + ").";
						addToReport(`LESION: ${cad}`);
						if (mensaje) {
						  addToReport(`${mensaje.split('\n')[0]}`);
						}
	  					alert(mensaje);
						if(nomb_p == nomb1)
						{
							fore1 = fore1 - fore_nueva;
							back1 = back1 - back_nueva;
						}
						else
						{
							fore2 = fore2 - fore_nueva;
							back2 = back2 - back_nueva;
						}
					}
					if(opc2 > 81 && opc2 < 96)
					{
						cad = "un esguince moderado de muneca";
						fore_nueva = Math.round(Math.random()*3)+1;
						back_nueva = Math.round(Math.random()*3)+1;
						ser_nueva = Math.round(Math.random()*2)+1;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  					mensaje=mensaje + "Esta lesion ha afectado a su drive(-" + fore_nueva + "), a su reves(-" + back_nueva + ") y a su servicio(-" + ser_nueva + ").";
						addToReport(`LESION: ${cad}`);
						if (mensaje) {
						  addToReport(`${mensaje.split('\n')[0]}`);
						}
	  					alert(mensaje);
						if(nomb_p == nomb1)
						{
							fore1 = fore1 - fore_nueva;
							back1 = back1 - back_nueva;
							ser1 = ser1 - ser_nueva;
						}
						else
						{
							fore2 = fore2 - fore_nueva;
							back2 = back2 - back_nueva;
							ser2 = ser2 - ser_nueva;
						}
					}
					if(opc2 > 95)
					{
						cad = "un esguince bastante fuerte de muneca";
						fore_nueva = Math.round(Math.random()*4)+2;
						back_nueva = Math.round(Math.random()*4)+2;
						vol_nueva = Math.round(Math.random()*2)+1;
						drop_nueva = Math.round(Math.random()*2)+1;
						ser_nueva = Math.round(Math.random()*3)+1;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + " y, aunque bastante mermado, puede continuar.\n";
	  					mensaje=mensaje + "Esta lesion ha afectado a su drive(-" + fore_nueva + "), a su reves(-" + back_nueva + "), a su servicio(-" + ser_nueva + "), a su volea(-" + vol_nueva + ") y a su dejada(-" + drop_nueva + ").";
						addToReport(`LESION: ${cad}`);
						if (mensaje) {
						  addToReport(`${mensaje.split('\n')[0]}`);
						}
	  					alert(mensaje);
						if(nomb_p == nomb1)
						{
							fore1 = fore1 - fore_nueva;
							back1 = back1 - back_nueva;
							ser1 = ser1 - ser_nueva;
							vol1 = vol1 - vol_nueva;
							drop1 = drop1 - drop_nueva;
						}
						else
						{
							fore2 = fore2 - fore_nueva;
							back2 = back2 - back_nueva;
							ser2 = ser2 - ser_nueva;
							vol2 = vol2 - vol_nueva;
							drop2 = drop2 - drop_nueva;
						}
					}
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
				else
				{
					cad = "un esguince leve de muneca";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion no ha afectado  jugador.";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
			}
			break;
		case 9:
			cont = Math.round(Math.random()*100);
			if(cont > 95)
			{
				cad = "un esguince grave del ligamento lateral interno(-4 de forma) ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{
				afecta = Math.round(Math.random()*100);
				if(afecta > 20)
				{
					opc2 = Math.round(Math.random()*100);
					if(opc2 < 81)
					{
						cad = "un esguince leve del ligamento lateral interno";
						spe_nueva = Math.round(Math.random()*2)+1;
						rest_nueva = Math.round(Math.random()*2)+1;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  					mensaje=mensaje + "Esta lesion ha afectado a su velocidad(-" + spe_nueva + ") y a su resto(-" + rest_nueva + ").";
						addToReport(`LESION: ${cad}`);
						if (mensaje) {
						  addToReport(`${mensaje.split('\n')[0]}`);
						}
	  					alert(mensaje);
						if(nomb_p == nomb1)
						{
							spe1 = spe1 - spe_nueva;
							rest1 = rest1 - rest_nueva;
						}
						else
						{
							spe2 = spe2 - spe_nueva;
							rest2 = rest2 - rest_nueva;
						}
					}
					if(opc2 > 81 && opc2 < 96)
					{
						cad = "un esguince moderado del ligamento lateral interno";
						spe_nueva = Math.round(Math.random()*3)+1;
						rest_nueva = Math.round(Math.random()*3)+1;
						sta_nueva = Math.round(Math.random()*2)+1;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  					mensaje=mensaje + "Esta lesion ha afectado a su velocidad(-" + spe_nueva + "), a su resto(-" + rest_nueva + ") y a su resistencia(-" + sta_nueva + ").";
						addToReport(`LESION: ${cad}`);
						if (mensaje) {
						  addToReport(`${mensaje.split('\n')[0]}`);
						}
	  					alert(mensaje);
						if(nomb_p == nomb1)
						{
							spe1 = spe1 - spe_nueva;
							rest1 = rest1 - rest_nueva;
							sta1 = sta1 - sta_nueva;
						}
						else
						{
							spe2 = spe2 - spe_nueva;
							rest2 = rest2 - rest_nueva;
							sta2 = sta2 - sta_nueva;
						}
					}
					if(opc2 > 95)
					{
						cad = "un esguince bastante fuerte del ligamento lateral interno";
						spe_nueva = Math.round(Math.random()*4)+2;
						rest_nueva = Math.round(Math.random()*3)+1;
						sta_nueva = Math.round(Math.random()*4)+2;
						pow_nueva = Math.round(Math.random()*2)+1;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + " y, aunque bastante mermado, puede continuar.\n";
	  					mensaje=mensaje + "Esta lesion ha afectado a su velocidad(-" + spe_nueva + "), a su resto(-" + rest_nueva + "), a su resistencia(-" + sta_nueva + ") y a su potencia(-" + pow_nueva + ").";
						addToReport(`LESION: ${cad}`);
						if (mensaje) {
						  addToReport(`${mensaje.split('\n')[0]}`);
						}
	  					alert(mensaje);
						if(nomb_p == nomb1)
						{
							spe1 = spe1 - spe_nueva;
							rest1 = rest1 - rest_nueva;
							sta1 = sta1 - sta_nueva;
							pow1 = pow1 - pow_nueva;
						}
						else
						{
							spe2 = spe2 - spe_nueva;
							rest2 = rest2 - rest_nueva;
							sta2 = sta2 - sta_nueva;
							pow2 = pow2 - pow_nueva;
						}
					}
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
				else
				{
					cad = "un esguince leve del ligamento lateral interno";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion no ha afectado  jugador.";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
			}
			break;
		case 10:
			cont = Math.round(Math.random()*100);
			if(cont > 90)
			{
				cad = "un tiron en el biceps(-2 de forma) ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{
				afecta = Math.round(Math.random()*100);
				if(afecta > 40)
				{
					cad = "un tiron en el biceps";
					ser_nueva = Math.round(Math.random()*2)+1;
					rest_nueva = Math.round(Math.random()*2)+1;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion ha afectado a su servicio(-" + ser_nueva + ") y a su resto(-" + rest_nueva +").";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb1)
					{
						ser1 = ser1 - ser_nueva;
						rest1 = rest1 - rest_nueva;
					}
					else
					{
						ser2 = ser2 - ser_nueva;
						rest2 = rest2 - rest_nueva;
					}
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
				else
				{
					cad = "un tiron leve en el biceps";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion no ha afectado  jugador.";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
			}
			break;
		case 11:
			cont = Math.round(Math.random()*100);
			if(cont > 90)
			{
				cad = "una subluxacion de muneca(-2 de forma) ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{
				afecta = Math.round(Math.random()*100);
				if(afecta > 50)
				{
					cad = "una subluxacion de muneca";
					ser_nueva = Math.round(Math.random()*2)+1;
					drop_nueva = Math.round(Math.random()*2)+1;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion ha afectado a su servicio(-" + ser_nueva + ") y a su dejada(-" + drop_nueva +").";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb1)
					{
						ser1 = ser1 - ser_nueva;
						drop1 = drop1 - drop_nueva;
					}
					else
					{
						ser2 = ser2 - ser_nueva;
						drop2 = drop2 - drop_nueva;
					}
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
				else
				{
					cad = "una subluxacion leve de muneca";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion no ha afectado  jugador.";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
			}
			break;
		case 12:
			cont = Math.round(Math.random()*100);
			if(cont > 70)
			{
				cad = "una lumbalgia(-3 de forma) ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{
				afecta = Math.round(Math.random()*100);
				if(afecta > 30)
				{
					cad = "una lumbalgia";
					sta_nueva = Math.round(Math.random()*2)+1;
					fore_nueva = Math.round(Math.random()*2)+1;
					back_nueva = Math.round(Math.random()*2)+1;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion ha afectado a su resistencia(-" + sta_nueva + "), a su drive(-" + fore_nueva +") y a su reves(-" + back_nueva + ").";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb1)
					{
						sta1 = sta1 - sta_nueva;
						fore1 = fore1 - fore_nueva;
						back1 = back1 - back_nueva;
					}
					else
					{
						sta2 = sta2 - sta_nueva;
						fore2 = fore2 - fore_nueva;
						back2 = back2 - back_nueva;
					}
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
				else
				{
					cad = "una ligera lumbalgia";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion no ha afectado  jugador.";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
			}
			break;
		case 13:
			cont = Math.round(Math.random()*100);
			if(cont > 70)
			{
				cad = "una luxacion grave de la rotula(-3 de forma) ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{
				afecta = Math.round(Math.random()*100);
				if(afecta > 10)
				{
					cad = "una luxacion leve de la rotula";
					spe_nueva = Math.round(Math.random()*3)+1;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion ha afectado a su velocidad(-" + spe_nueva + ").";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb1)
					{
						spe1 = spe1 - spe_nueva;
					}
					else
					{
						spe2 = spe2 - spe_nueva;
					}
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
				else
				{
					cad = "una luxacion muy leve de la rotula";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion no ha afectado  jugador.";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
			}
			break;
		case 14:
			cont = Math.round(Math.random()*100);
			if(cont > 70)
			{
				cad = "una luxacion grave de hombro(-3 de forma) ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{
				afecta = Math.round(Math.random()*100);
				if(afecta > 10)
				{
					cad = "una luxacion leve de hombro";
					fore_nueva = Math.round(Math.random()*3)+1;
					back_nueva = Math.round(Math.random()*3)+1;
					vol_nueva = Math.round(Math.random()*3)+1;
					drop_nueva = Math.round(Math.random()*3)+1;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion ha afectado a su drive(-" + fore_nueva + "), a su reves(-" + back_nueva + "), a su volea(-" + vol_nueva + ") y a su dejada(-" + drop_nueva + ").";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb1)
					{
						fore1 = fore1 - fore_nueva;
						back1 = back1 - back_nueva;
						vol1 = vol1 - vol_nueva;
						drop1 = drop1 - drop_nueva;
					}
					else
					{
						fore2 = fore2 - fore_nueva;
						back2 = back2 - back_nueva;
						vol2 = vol2 - vol_nueva;
						drop2 = drop2 - drop_nueva;
					}
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
				else
				{
					cad = "una luxacion muy leve de hombro";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion no ha afectado  jugador.";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
			}
			break;
		case 15:
			cont = Math.round(Math.random()*100);
			if(cont > 70)
			{
				cad = "un latigazo cervical(-3 de forma) ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{
				afecta = Math.round(Math.random()*100);
				if(afecta > 10)
				{
					cad = "un latigazo cervical leve";
					fore_nueva = Math.round(Math.random()*3)+1;
					back_nueva = Math.round(Math.random()*3)+1;
					rest_nueva = Math.round(Math.random()*2)+1;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion ha afectado a su drive(-" + fore_nueva + "), a su reves(-" + back_nueva + ") y a su resto(-" + rest_nueva + ").";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb1)
					{
						fore1 = fore1 - fore_nueva;
						back1 = back1 - back_nueva;
						rest1 = rest1 - rest_nueva;
					}
					else
					{
						fore2 = fore2 - fore_nueva;
						back2 = back2 - back_nueva;
						rest2 = rest2 - rest_nueva;
					}
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
				else
				{
					cad = "un latigazo cervical muy leve";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion no ha afectado  jugador.";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
			}
			break;
		case 16:
			cont = Math.round(Math.random()*100);
			if(cont > 80)
			{
				cad = "una distension del recto anterior(-3 de forma) ";
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  			mensaje=mensaje + "Se declara como ganador a " + nomb_g;
				addToReport(`LESION: ${cad}`);
			    if (mensaje) {
				  addToReport(`${mensaje.split('\n')[0]}`);
			    }
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{
				afecta = Math.round(Math.random()*100);
				if(afecta > 10)
				{
					cad = "una leve distension del recto anterior";
					fore_nueva = Math.round(Math.random()*3)+1;
					back_nueva = Math.round(Math.random()*3)+1;
					rest_nueva = Math.round(Math.random()*2)+1;
					vol_nueva = Math.round(Math.random()*2)+1;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion ha afectado a su drive(-" + fore_nueva + "), a su reves(-" + back_nueva + "), a su resto(-" + rest_nueva + ") y a su volea(-" + vol_nueva + ").";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb1)
					{
						fore1 = fore1 - fore_nueva;
						back1 = back1 - back_nueva;
						rest1 = rest1 - rest_nueva;
						vol1 = vol1 - vol_nueva;
					}
					else
					{
						fore2 = fore2 - fore_nueva;
						back2 = back2 - back_nueva;
						rest2 = rest2 - rest_nueva;
						vol2 = vol2 - vol_nueva;
					}
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
				else
				{
					cad = "una distension muy leve del recto anterior";
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesion no ha afectado  jugador.";
					addToReport(`LESION: ${cad}`);
					if (mensaje) {
					  addToReport(`${mensaje.split('\n')[0]}`);
					}
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore1,back1,vol1,drop1,spe1,sta1,ser1,pow1,rest1,form1,fore2,back2,vol2,drop2,spe2,sta2,ser2,pow2,rest2,form2,punto1,punto2,game1,game2,set1,set2,control);
				}
			}
			break;
		case 17:
			cad = "una tendinitis(-4 de forma) ";
			mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  		mensaje=mensaje + "Se declara como ganador a " + nomb_g;
			addToReport(`LESION: ${cad}`);
			if (mensaje) {
			  addToReport(`${mensaje.split('\n')[0]}`);
			}
	  		alert(mensaje);
			set1=6;
			mensajeExpuesto=true;
			return;
			break;
		case 18:
			cad = "una rotura fibrilar de grado 1 en el trapecio(-4 de forma) ";
			mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  		mensaje=mensaje + "Se declara como ganador a " + nomb_g;
			addToReport(`LESION: ${cad}`);
			if (mensaje) {
			  addToReport(`${mensaje.split('\n')[0]}`);
			}
	  		alert(mensaje);
			set1=6;
			mensajeExpuesto=true;
			return;
			break;
		case 19:
			cad = "una microrrotura en el cuadriceps(-4 de forma) ";
			mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  		mensaje=mensaje + "Se declara como ganador a " + nomb_g;
			addToReport(`LESION: ${cad}`);
			if (mensaje) {
			  addToReport(`${mensaje.split('\n')[0]}`);
			}
	  		alert(mensaje);
			set1=6;
			mensajeExpuesto=true;
			return;
			break;
		case 20:
			cad = "una pubalgia(-5 de forma) ";
			mensaje="El jugador " + nomb_p + " ha sufrido " + cad + "y no puede continuar.\n";
	  		mensaje=mensaje + "Se declara como ganador a " + nomb_g;
			addToReport(`LESION: ${cad}`);
			if (mensaje) {
			  addToReport(`${mensaje.split('\n')[0]}`);
			}
	  		alert(mensaje);
			set1=6;
			mensajeExpuesto=true;
			return;
			break;
	  }
  }