  
  function calcular(jug,tipo,num)
  {
	  if(jug==1)
	  {
		  difi = Math.round(Math.random()*15)+ser11; 
		  switch(tipo)
		  {
			  case 1:
				  if(difi > 15){
					  sup=sup+19;
					  if(surface=="clay")sup=sup+ser11*1.5;
					  else if(surface="grass")sup=sup+ser11*3;
					  else if(surface=="hardcourt")sup=sup+ser11*2.5;
					  else if(surface=="carpet")sup=sup+ser11*3.5;
					  else sup=sup+ser11*2;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second11,2);
					  else sup=0;
				  }
				  break;
				  
		 	  case 2:
				  if(difi > 12){
					  sup=sup+12; 
					  if(surface=="clay")sup=sup+ser11*1.5;
					  else if(surface="grass")sup=sup+ser11*3;
					  else if(surface=="hardcourt")sup=sup+ser11*2.5;
					  else if(surface=="carpet")sup=sup+ser11*3.5;
					  else sup=sup+ser11*2;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second11,2);
					  else sup=0;
				  }
				  break;
			
			  case 3:
				  if(difi > 10){
					  sup=sup+5; 
					  if(surface=="clay")sup=sup+ser11*1.5;
					  else if(surface="grass")sup=sup+ser11*3;
					  else if(surface=="hardcourt")sup=sup+ser11*2.5;
					  else if(surface=="carpet")sup=sup+ser11*3.5;
					  else sup=sup+ser11*2;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second11,2);
					  else sup=0;
				  }
				  break;
		  }	
	  }
	  
	  if(jug==2)
	  {
		  difi = Math.round(Math.random()*15)+ser12;
		  switch(tipo)
		  {
			  case 1:
				  if(difi > 15){
					  sup=sup+19; 
					  if(surface=="clay")sup=sup+ser12*1.5;
					  else if(surface="grass")sup=sup+ser12*3;
					  else if(surface=="hardcourt")sup=sup+ser12*2.5;
					  else if(surface=="carpet")sup=sup+ser12*3.5;
					  else sup=sup+ser12*2;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second12,2);
					  else sup=0;  
				  }
		 	  	  break;
				
		      case 2:
				  if(difi > 12){
					  sup=sup+12;
					  if(surface=="clay")sup=sup+ser12*1.5;
					  else if(surface="grass")sup=sup+ser12*3;
					  else if(surface=="hardcourt")sup=sup+ser12*2.5;
					  else if(surface=="carpet")sup=sup+ser12*3.5;
					  else sup=sup+ser12*2;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second12,2);
					  else sup=0;
				  }
				  break;
		 
			  case 3:
				  if(difi > 10){
					  sup=sup+5; 
					  if(surface=="clay")sup=sup+ser12*1.5;
					  else if(surface="grass")sup=sup+ser12*3;
					  else if(surface=="hardcourt")sup=sup+ser12*2.5;
					  else if(surface=="carpet")sup=sup+ser12*3.5;
					  else sup=sup+ser12*2;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second12,2);
					  else sup=0;
				  }
				  break;
		  }
	  } 
	  
	  if(jug==3)
	  {
		  difi = Math.round(Math.random()*15)+ser21;
		  switch(tipo)
		  {
			  case 1:
				  if(difi > 15){
					  sup=sup+19; 
					  if(surface=="clay")sup=sup+ser21*1.5;
					  else if(surface="grass")sup=sup+ser21*3;
					  else if(surface=="hardcourt")sup=sup+ser21*2.5;
					  else if(surface=="carpet")sup=sup+ser21*3.5;
					  else sup=sup+ser21*2;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second21,2);
					  else sup=0;  
				  }
		 	  	  break;
				
		      case 2:
				  if(difi > 12){
					  sup=sup+12;
					  if(surface=="clay")sup=sup+ser21*1.5;
					  else if(surface="grass")sup=sup+ser21*3;
					  else if(surface=="hardcourt")sup=sup+ser21*2.5;
					  else if(surface=="carpet")sup=sup+ser21*3.5;
					  else sup=sup+ser21*2;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second21,2);
					  else sup=0;
				  }
				  break;
		 
			  case 3:
				  if(difi > 10){
					  sup=sup+5; 
					  if(surface=="clay")sup=sup+ser21*1.5;
					  else if(surface="grass")sup=sup+ser21*3;
					  else if(surface=="hardcourt")sup=sup+ser21*2.5;
					  else if(surface=="carpet")sup=sup+ser21*3.5;
					  else sup=sup+ser21*2;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second21,2);
					  else sup=0;
				  }
				  break;
		  }
	  } 
	  
	  if(jug==4)
	  {
		  difi = Math.round(Math.random()*15)+ser22;
		  switch(tipo)
		  {
			  case 1:
				  if(difi > 15){
					  sup=sup+19; 
					  if(surface=="clay")sup=sup+ser22*1.5;
					  else if(surface="grass")sup=sup+ser22*3;
					  else if(surface=="hardcourt")sup=sup+ser22*2.5;
					  else if(surface=="carpet")sup=sup+ser22*3.5;
					  else sup=sup+ser22*2;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second22,2);
					  else sup=0;  
				  }
		 	  	  break;
				
		      case 2:
				  if(difi > 12){
					  sup=sup+12;
					  if(surface=="clay")sup=sup+ser22*1.5;
					  else if(surface="grass")sup=sup+ser22*3;
					  else if(surface=="hardcourt")sup=sup+ser22*2.5;
					  else if(surface=="carpet")sup=sup+ser22*3.5;
					  else sup=sup+ser22*2;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second22,2);
					  else sup=0;
				  }
				  break;
		 
			  case 3:
				  if(difi > 10){
					  sup=sup+5; 
					  if(surface=="clay")sup=sup+ser22*1.5;
					  else if(surface="grass")sup=sup+ser22*3;
					  else if(surface=="hardcourt")sup=sup+ser22*2.5;
					  else if(surface=="carpet")sup=sup+ser22*3.5;
					  else sup=sup+ser22*2;
				  }
				  else
				  {
					  if(num==1)calcular(jug,second22,2);
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
	  if(saq==1 | saq==2)
	  {
		  document.getElementById("s2").innerHTML="<center><img  src='./Imagenes/tenis.png'></center>";
		  document.getElementById("s1").innerHTML="<center>&nbsp;</center>";
		  if(saq==1)saq=3;
		  else saq=4;
	  }
	  else{
		  document.getElementById("s1").innerHTML="<center><img  src='./Imagenes/tenis.png'></center>";
		  document.getElementById("s2").innerHTML="<center>&nbsp;</center>";
		  if(saq==3)saq=2;
		  else saq=1;
	  }
  }
  
  function arrancar()
  {
	  surf11=document.getElementById("surface11").options[document.getElementById("surface11").selectedIndex].value;
	  surf12=document.getElementById("surface12").options[document.getElementById("surface12").selectedIndex].value;
	  surf21=document.getElementById("surface21").options[document.getElementById("surface21").selectedIndex].value;
	  surf22=document.getElementById("surface22").options[document.getElementById("surface22").selectedIndex].value;
	  nomb11=document.getElementById("jugador11").options[document.getElementById("jugador11").selectedIndex].text;
	  nomb12=document.getElementById("jugador12").options[document.getElementById("jugador12").selectedIndex].text;
	  nomb21=document.getElementById("jugador21").options[document.getElementById("jugador21").selectedIndex].text;
	  nomb22=document.getElementById("jugador22").options[document.getElementById("jugador22").selectedIndex].text;
	  fore11=parseInt(document.getElementById("forehand11").options[document.getElementById("forehand11").selectedIndex].value);
	  fore12=parseInt(document.getElementById("forehand12").options[document.getElementById("forehand12").selectedIndex].value);
	  fore21=parseInt(document.getElementById("forehand21").options[document.getElementById("forehand21").selectedIndex].value);
	  fore22=parseInt(document.getElementById("forehand22").options[document.getElementById("forehand22").selectedIndex].value);
	  back11=parseInt(document.getElementById("backhand11").options[document.getElementById("backhand11").selectedIndex].value);
	  back12=parseInt(document.getElementById("backhand12").options[document.getElementById("backhand12").selectedIndex].value);
	  back21=parseInt(document.getElementById("backhand21").options[document.getElementById("backhand21").selectedIndex].value);
	  back22=parseInt(document.getElementById("backhand22").options[document.getElementById("backhand22").selectedIndex].value);
	  vol11=parseInt(document.getElementById("volley11").options[document.getElementById("volley11").selectedIndex].value);
	  vol12=parseInt(document.getElementById("volley12").options[document.getElementById("volley12").selectedIndex].value);
	  vol21=parseInt(document.getElementById("volley21").options[document.getElementById("volley21").selectedIndex].value);
	  vol22=parseInt(document.getElementById("volley22").options[document.getElementById("volley22").selectedIndex].value);
	  drop11=parseInt(document.getElementById("dropshot11").options[document.getElementById("dropshot11").selectedIndex].value);
	  drop12=parseInt(document.getElementById("dropshot12").options[document.getElementById("dropshot12").selectedIndex].value);
	  drop21=parseInt(document.getElementById("dropshot21").options[document.getElementById("dropshot21").selectedIndex].value);
	  drop22=parseInt(document.getElementById("dropshot22").options[document.getElementById("dropshot22").selectedIndex].value);
	  spe11=parseInt(document.getElementById("speed11").options[document.getElementById("speed11").selectedIndex].value);
	  spe12=parseInt(document.getElementById("speed12").options[document.getElementById("speed12").selectedIndex].value);
	  spe21=parseInt(document.getElementById("speed21").options[document.getElementById("speed21").selectedIndex].value);
	  spe22=parseInt(document.getElementById("speed22").options[document.getElementById("speed22").selectedIndex].value);
	  sta11=parseInt(document.getElementById("stamina11").options[document.getElementById("stamina11").selectedIndex].value);
	  sta12=parseInt(document.getElementById("stamina12").options[document.getElementById("stamina12").selectedIndex].value);
	  sta21=parseInt(document.getElementById("stamina21").options[document.getElementById("stamina21").selectedIndex].value);
	  sta22=parseInt(document.getElementById("stamina22").options[document.getElementById("stamina22").selectedIndex].value);
	  ser11=parseInt(document.getElementById("service11").options[document.getElementById("service11").selectedIndex].value);
	  ser12=parseInt(document.getElementById("service12").options[document.getElementById("service12").selectedIndex].value);
	  ser21=parseInt(document.getElementById("service21").options[document.getElementById("service21").selectedIndex].value);
	  ser22=parseInt(document.getElementById("service22").options[document.getElementById("service22").selectedIndex].value);
	  pow11=parseInt(document.getElementById("power11").options[document.getElementById("power11").selectedIndex].value);
	  pow12=parseInt(document.getElementById("power12").options[document.getElementById("power12").selectedIndex].value);
	  pow21=parseInt(document.getElementById("power21").options[document.getElementById("power21").selectedIndex].value);
	  pow22=parseInt(document.getElementById("power22").options[document.getElementById("power22").selectedIndex].value);
	  rest11=parseInt(document.getElementById("resto11").options[document.getElementById("resto11").selectedIndex].value);
	  rest12=parseInt(document.getElementById("resto12").options[document.getElementById("resto12").selectedIndex].value);
	  rest21=parseInt(document.getElementById("resto21").options[document.getElementById("resto21").selectedIndex].value);
	  rest22=parseInt(document.getElementById("resto22").options[document.getElementById("resto22").selectedIndex].value);
	  consi11=parseInt(document.getElementById("consistencia11").options[document.getElementById("consistencia11").selectedIndex].value);
	  consi12=parseInt(document.getElementById("consistencia12").options[document.getElementById("consistencia12").selectedIndex].value);
	  consi21=parseInt(document.getElementById("consistencia21").options[document.getElementById("consistencia21").selectedIndex].value);
	  consi22=parseInt(document.getElementById("consistencia22").options[document.getElementById("consistencia22").selectedIndex].value);
	  form11=parseInt(document.getElementById("form11").options[document.getElementById("form11").selectedIndex].value);
	  form12=parseInt(document.getElementById("form12").options[document.getElementById("form12").selectedIndex].value);
	  form21=parseInt(document.getElementById("form21").options[document.getElementById("form21").selectedIndex].value);
	  form22=parseInt(document.getElementById("form22").options[document.getElementById("form22").selectedIndex].value);
	  
	  technique11=parseInt(document.getElementById("technique11").options[document.getElementById("technique11").selectedIndex].value);
	  technique12=parseInt(document.getElementById("technique12").options[document.getElementById("technique12").selectedIndex].value);
	  technique21=parseInt(document.getElementById("technique21").options[document.getElementById("technique21").selectedIndex].value);
	  technique22=parseInt(document.getElementById("technique22").options[document.getElementById("technique22").selectedIndex].value);
	  position11=parseInt(document.getElementById("position11").options[document.getElementById("position11").selectedIndex].value);
	  position12=parseInt(document.getElementById("position12").options[document.getElementById("position12").selectedIndex].value);
	  position21=parseInt(document.getElementById("position21").options[document.getElementById("position21").selectedIndex].value);
	  position22=parseInt(document.getElementById("position22").options[document.getElementById("position22").selectedIndex].value);
	  strategy11=parseInt(document.getElementById("strategy11").options[document.getElementById("strategy11").selectedIndex].value);
	  strategy12=parseInt(document.getElementById("strategy12").options[document.getElementById("strategy12").selectedIndex].value);
	  strategy21=parseInt(document.getElementById("strategy21").options[document.getElementById("strategy21").selectedIndex].value);
	  strategy22=parseInt(document.getElementById("strategy22").options[document.getElementById("strategy22").selectedIndex].value);
	  first11=parseInt(document.getElementById("first11").options[document.getElementById("first11").selectedIndex].value);
	  first12=parseInt(document.getElementById("first12").options[document.getElementById("first12").selectedIndex].value);
	  first21=parseInt(document.getElementById("first21").options[document.getElementById("first21").selectedIndex].value);
	  first22=parseInt(document.getElementById("first22").options[document.getElementById("first22").selectedIndex].value);
	  second11=parseInt(document.getElementById("second11").options[document.getElementById("second11").selectedIndex].value);
	  second12=parseInt(document.getElementById("second12").options[document.getElementById("second12").selectedIndex].value);
	  second21=parseInt(document.getElementById("second21").options[document.getElementById("second21").selectedIndex].value);
	  second22=parseInt(document.getElementById("second22").options[document.getElementById("second22").selectedIndex].value);
	  
	  fore11=fore11+technique11*1.5;
	  back11=back11+technique11*1.5;
	  fore12=fore12+technique12*1.5;
	  back12=back12+technique12*1.5;
	  fore21=fore21+technique21*1.5;
	  back21=back21+technique21*1.5;
	  fore22=fore22+technique22*1.5;
	  back22=back22+technique22*1.5;

	  tipo_p = parseInt(document.getElementById("mType").options[document.getElementById("mType").selectedIndex].value);
	  
	  if(position11==1)
	  {
		  drop11++;
		  vol11++;
	  }
	  if(position11==2)pow11++;
	  
	  if(position12==1)
	  {
		  drop12++;
		  vol12++;
	  }
	  if(position12==2)pow12++;
	  
	  if(position21==1)
	  {
		  drop21++;
		  vol21++;
	  }
	  if(position21==2)pow21++;
	  
	  if(position22==1)
	  {
		  drop22++;
		  vol22++;
	  }
	  if(position22==2)pow22++;

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
	  
	  document.getElementById("im_jug11").innerHTML="<img src='./Imagenes/Jugadores/"+nomb11+".jpg'></img>";
	  document.getElementById("im_jug12").innerHTML="<img src='./Imagenes/Jugadores/"+nomb12+".jpg'></img>";
	  document.getElementById("im_jug21").innerHTML="<img src='./Imagenes/Jugadores/"+nomb21+".jpg'></img>";
	  document.getElementById("im_jug22").innerHTML="<img src='./Imagenes/Jugadores/"+nomb22+".jpg'></img>";

	  document.getElementById("set11").innerHTML="<center>-</center>";
	  document.getElementById("set12").innerHTML="<center>-</center>";
	  document.getElementById("set13").innerHTML="<center>-</center>";
	  document.getElementById("set14").innerHTML="<center>-</center>";
	  document.getElementById("set15").innerHTML="<center>-</center>";
	  document.getElementById("set21").innerHTML="<center>-</center>";
	  document.getElementById("set22").innerHTML="<center>-</center>";
	  document.getElementById("set23").innerHTML="<center>-</center>";
	  document.getElementById("set24").innerHTML="<center>-</center>";
	  document.getElementById("set25").innerHTML="<center>-</center>";
	  document.getElementById("res1").style.fontSize=12;
	  document.getElementById("res1").innerHTML="<font color='#BDBDBD' face = 'helvetica'><center><b>"+ nomb11 + "/" + nomb12 +"</b></center></font>";
	  document.getElementById("res2").style.fontSize=12;
	  document.getElementById("res2").innerHTML="<font color='#BDBDBD' face = 'helvetica'><center><b>"+ nomb21 + "/" + nomb22 +"</b></center></font>";
		
	  saq= Math.round(Math.random()*3)+1;
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

	  if(surface==surf11)
	  {
	  	switch(surface)
	  	{
			case "clay":
				consi11 = consi11 * 2.5;
				break;
			case "hardcourt":
				consi11 = consi11 * 2;
				break;
			case "carpet":
				consi11 = consi11 * 1.5;
				break;
			case "grass":
				break;
		}
	  }

	  if(surface==surf12)
	  {
	  	switch(surface)
	  	{
			case "clay":
				consi12 = consi12 * 2.5;
				break;
			case "hardcourt":
				consi12 = consi12 * 2;
				break;
			case "carpet":
				consi12 = consi12 * 1.5;
				break;
			case "grass":
				break;
		}
	  }

	  if(surface==surf21)
	  {
	  	switch(surface)
	  	{
			case "clay":
				consi21 = consi21 * 2.5;
				break;
			case "hardcourt":
				consi21 = consi21 * 2;
				break;
			case "carpet":
				consi21 = consi21 * 1.5;
				break;
			case "grass":
				break;
		}
	  }

	  if(surface==surf22)
	  {
	  	switch(surface)
	  	{
			case "clay":
				consi22 = consi22 * 2.5;
				break;
			case "hardcourt":
				consi22 = consi22 * 2;
				break;
			case "carpet":
				consi22 = consi22 * 1.5;
				break;
			case "grass":
				break;
		}
	  }
	  
	  numberOfSets=numeroSets();

	  calcularTiempo();

	  puntosJugados=0;
	  mensajeExpuesto=false;
	  
	  do{
		  lesion11=lesionar(form11,sta11);
		  lesion12=lesionar(form12,sta12);
		  lesion21=lesionar(form21,sta21);
		  lesion22=lesionar(form22,sta22);
		  if(lesion11<=lesion12)lesion1=lesion11;
		  else lesion1=lesion12;
		  if(lesion21<=lesion22)lesion2=lesion21;
		  else lesion2=lesion22;
	  }while(lesion1==lesion2 && (lesion1<=30 || lesion2<=30));
	  
	  if(lesion1<=30 || lesion2<=30) saltarLesion();
	  
	  partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2,control,consi11,consi12,consi21,consi22);
  
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
			  document.getElementById("set11").innerHTML="<font color='#BDBDBD' face = 'helvetica'><center>"+ game1 +"</center></font>";
			  document.getElementById("set21").innerHTML="<font color='#BDBDBD' face = 'helvetica'><center>"+ game2 +"</center></font>";
			  break;
		  case 2:
			  document.getElementById("set12").innerHTML="<font color='#BDBDBD' face = 'helvetica'><center>"+ game1 +"</center></font>";
			  document.getElementById("set22").innerHTML="<font color='#BDBDBD' face = 'helvetica'><center>"+ game2 +"</center></font>";
			  break;
		  case 3:
			  document.getElementById("set13").innerHTML="<font color='#BDBDBD' face = 'helvetica'><center>"+ game1 +"</center></font>";
			  document.getElementById("set23").innerHTML="<font color='#BDBDBD' face = 'helvetica'><center>"+ game2 +"</center></font>";
			  break;
		  case 4:
			  document.getElementById("set14").innerHTML="<font color='#BDBDBD' face = 'helvetica'><center>"+ game1 +"</center></font>";
			  document.getElementById("set24").innerHTML="<font color='#BDBDBD' face = 'helvetica'><center>"+ game2 +"</center></font>";
			  break;
		  case 5:
			  document.getElementById("set15").innerHTML="<font color='#BDBDBD' face = 'helvetica'><center>"+ game1 +"</center></font>";
			  document.getElementById("set25").innerHTML="<font color='#BDBDBD' face = 'helvetica'><center>"+ game2 +"</center></font>";
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
	  document.getElementById("tie").innerHTML="<font  color='black'><b><center>Juego</center></b></font>";
  }
  
  function tiebreak(fore11,back11,vol11,drop11,spe11,vsta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,vsta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,vsta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,vsta22,ser22,pow22,rest22,form22,vpunto1,vpunto2,vgame1,vgame2,vset1,vset2,control,consi11,consi12,consi21,consi22)
  {
	  if(lesion1<=30 && lesion1<lesion2 && puntosJugados==puntoLesion && ya_lesion==0){
		  calcularLesion(nomb11,nomb12,nomb21,nomb22,lesion11,lesion12);
		  
		  return;
	  }
	  else if(lesion2<=30 && lesion2<lesion1 && puntosJugados==puntoLesion && ya_lesion==0){
		  calcularLesion(nomb21,nomb22,nomb11,nomb12,lesion21,lesion22);
		
		  return;
	  }

	  if(lluvia==1)
	  {
		if(puntosalto_lluvia==puntosJugados)
	  	{
			if(surface=="clay")
		  	{
				consi11 = consi11 - 0.5;
				consi12 = consi12 - 0.5;
				consi21 = consi21 - 0.5;
				consi22 = consi22 - 0.5;
				alert("Empieza a llover ligeramente...");
				if(surface==surf11) spe11=spe11 - 0.5;
				else if(surface!=surf11) spe11=spe11 - 1;
			
				if(surface==surf12) spe12=spe12 - 0.5;
				else if(surface!=surf12) spe12=spe12 - 1;
				
				if(surface==surf21) spe21=spe21 - 0.5;
				else if(surface!=surf21) spe21=spe21 - 1;
			
				if(surface==surf22) spe22=spe22 - 0.5;
				else if(surface!=surf22) spe22=spe22 - 1;
		  	}
			if(surface=="grass")
		  	{
				consi11 = consi11 - 2;
				consi12 = consi12 - 2;
				consi21 = consi21 - 2;
				consi22 = consi22 - 2;
				alert("Empieza a llover ligeramente...");
				if(surface==surf11) spe11=spe11 - 1;
				else if(surface!=surf11) spe11=spe11 - 1.5;
			
				if(surface==surf12) spe12=spe12 - 1;
				else if(surface!=surf12) spe12=spe12 - 1.5;
				
				if(surface==surf21) spe21=spe21 - 1;
				else if(surface!=surf21) spe21=spe21 - 1.5;
			
				if(surface==surf22) spe22=spe22 - 1;
				else if(surface!=surf22) spe22=spe22 - 1.5;
		  	}
			if(surface=="hardcourt")
		  	{
				consi11 = consi11 - 1.5;
				consi12 = consi12 - 1.5;
				consi21 = consi21 - 1.5;
				consi22 = consi22 - 1.5;
				alert("Empieza a llover ligeramente...");
				if(surface==surf11) spe11=spe11 - 0.75;
				else if(surface!=surf11) spe11=spe11 - 1.25;
			
				if(surface==surf12) spe12=spe12 - 0.75;
				else if(surface!=surf12) spe12=spe12 - 1.25;
				
				if(surface==surf21) spe21=spe21 - 0.75;
				else if(surface!=surf21) spe21=spe21 - 1.25;
			
				if(surface==surf22) spe22=spe22 - 0.75;
				else if(surface!=surf22) spe22=spe22 - 1.25;
		  	}
			if(surface=="carpet")
		  	{
		  	}
		}
	  }	
	  
	  cont++;
	  if((cont==1)||(cont%2==0))setTimeout("cambio(),50");  
	  
	  if((punto1==punto2)&&(punto1==6 + auxtie))auxtie++;   
	  
	  pts11=punto(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,1,saq,consi11);
	  pts12=punto(fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,2,saq,consi12);
	  pts21=punto(fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,3,saq,consi21);
	  pts22=punto(fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,4,saq,consi22);
	  
	  puntosJugados++;
	  
	  pts1=pts11+pts12;
	  pts2=pts21+pts22;
	  
	  if(pts1==pts2)
	  {
		  pts1=Math.random(1000);
		  pts2=Math.random(1000);
	  }
	  
	  if(pts1<=pts2)punto2++;
	  else punto1++;
	  
	  document.getElementById("tie").innerHTML="<font color='black'><b><center>Tie Break</center></b></font>";
	  document.getElementById("game1").innerHTML="<font face='helvetica' color='black'><center>"+ punto1 +"</center></font>";
	  document.getElementById("game2").innerHTML="<font face='helvetica' color='black'><center>"+ punto2 +"</center></font>";
	  
	  tiempo = tiempo + Math.floor(Math.random()*81);
	  if(tiempo < 60)
	  {
	  	document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ "0:00" +"</center></font>";
	  }
	  else
	  {
		tiempo_m_condecimal = tiempo / 60;
		tiempo_m_sindecimal = parseInt(tiempo_m_condecimal);
		tiempo_s = tiempo % 60
		if(tiempo_m_sindecimal < 60)
		{
			if(tiempo_m_sindecimal < 10){
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ "0:0" + tiempo_m_sindecimal + "</center></font>"; 
			}
			else
			{
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ "0:" + tiempo_m_sindecimal + "</center></font>"; 
			}
		}
		else
		{
			tiempo_h_condecimal = tiempo_m_sindecimal / 60;
			tiempo_h_sindecimal = parseInt(tiempo_h_condecimal);
			tiempo_m = tiempo_m_sindecimal % 60;
			if(tiempo_m < 10)
			{
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ tiempo_h_sindecimal + ":0" + tiempo_m + "</center></font>"; 
			}
			else
			{
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ tiempo_h_sindecimal + ":" + tiempo_m + "</center></font>"; 
			}	
		}
	  }
	  
	  if((punto1 < 7 + auxtie)&&(punto2 < 7 + auxtie))setTimeout("tiebreak(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2,control,consi11,consi12,consi21,consi22)",velocidad);
	  
	  if(punto1 > 6 + auxtie)
	  {
		  switch(set)
		  {
			  case 1:
				  document.getElementById("set11").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set21").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto2 + "</sup></center></font>";
				  break;
		  	  case 2:
				  document.getElementById("set12").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set22").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto2 + "</sup></center></font>";
				  break;
		  	  case 3:
				  document.getElementById("set13").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set23").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto2 + "</sup></center></font>";
				  break;
		  	  case 4:
				  document.getElementById("set14").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set24").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto2 + "</sup></center></font>";
				  break;
		  	  case 5:
				  document.getElementById("set15").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set25").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto2 + "</sup></center></font>";
				  break;
		  } 
		  cambio();
		  cont=0;
		  auxtie=0;
		  set1++;
		  set++;
		  sta11=sta11-technique11;
		  sta12=sta12-technique12;
		  sta21=sta21-technique21;
		  sta22=sta22-technique22;
		  auxgame=0;
		  tie=0;
		  cero();
		  if(numberOfSets==5)
		  {
			  if((set1<3)&&(set2<3))setTimeout("partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2,control,consi11,consi12,consi21,consi22)",velocidad); 
		  }
		  else//3 sets
		  {
			  if((set1<2)&&(set2<2))setTimeout("partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2,control,consi11,consi12,consi21,consi22)",velocidad);  
		  }
	  }
	  
	  if(punto2 > 6 + auxtie)
	  {
		  switch(set)
		  {
			  case 1:
				  document.getElementById("set11").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set21").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto2 + "</sup></center></font>";
				  break;
		  	  case 2:
				  document.getElementById("set12").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set22").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto2 + "</sup></center></font>";
				  break; 
		  	  case 3:
				  document.getElementById("set13").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set23").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto2 + "</sup></center></font>";
				  break;
		  	  case 4:
				  document.getElementById("set14").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set24").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto2 + "</sup></center></font>";
				  break;
		  	  case 5:
				  document.getElementById("set15").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>6<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set25").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>7<sup>" + punto2 + "</sup></center></font>";
				  break;
		  } 
		  cambio();
		  cont=0;
		  auxtie=0;
		  set2++;
		  set++;
		  sta11=sta11-technique11;
		  sta12=sta12-technique12;
		  sta21=sta21-technique21;
		  sta22=sta22-technique22;
		  auxgame=0;
		  tie=0; 
		  cero();
		  if(numberOfSets==5){ 
			  if((set1<3)&&(set2<3))setTimeout("partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2,control,consi11,consi12,consi21,consi22)",velocidad); 
		  }
		  else//3 sets
		  {
			  if((set1<2)&&(set2<2))setTimeout("partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2,control,consi11,consi12,consi21,consi22)",velocidad);  
		  }
	  }
  }
  
  function partido(fore11,back11,vol11,drop11,spe11,vsta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,vsta12,ser12,pow12,rest12,form21,fore21,back21,vol21,drop21,spe21,vsta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,vsta22,ser22,pow22,rest22,form22,vpunto1,vpunto2,vgame1,vgame2,vset1,vset2,vcontrol,consi11,consi12,consi21,consi22) 
  {
	  if(lesion1<=30 && lesion1<lesion2 && puntosJugados==puntoLesion && ya_lesion==0){
		  calcularLesion(nomb11,nomb12,nomb21,nomb22,lesion11,lesion12);
		  
		  return;
	  }
	  else if(lesion2<=30 && lesion2<lesion1 && puntosJugados==puntoLesion && ya_lesion==0){
		  calcularLesion(nomb21,nomb22,nomb11,nomb12,lesion21,lesion22);
		
		  return;
	  }

	  if(lluvia==1)
	  {
		if(puntosalto_lluvia==puntosJugados)
	  	{
			if(surface=="clay")
		  	{
				consi11 = consi11 - 0.5;
				consi12 = consi12 - 0.5;
				consi21 = consi21 - 0.5;
				consi22 = consi22 - 0.5;
				alert("Empieza a llover ligeramente...");
				if(surface==surf11) spe11=spe11 - 0.5;
				else if(surface!=surf11) spe11=spe11 - 1;
			
				if(surface==surf12) spe12=spe12 - 0.5;
				else if(surface!=surf12) spe12=spe12 - 1;
				
				if(surface==surf21) spe21=spe21 - 0.5;
				else if(surface!=surf21) spe21=spe21 - 1;
			
				if(surface==surf22) spe22=spe22 - 0.5;
				else if(surface!=surf22) spe22=spe22 - 1;
		  	}
			if(surface=="grass")
		  	{
				consi11 = consi11 - 2;
				consi12 = consi12 - 2;
				consi21 = consi21 - 2;
				consi22 = consi22 - 2;
				alert("Empieza a llover ligeramente...");
				if(surface==surf11) spe11=spe11 - 1;
				else if(surface!=surf11) spe11=spe11 - 1.5;
			
				if(surface==surf12) spe12=spe12 - 1;
				else if(surface!=surf12) spe12=spe12 - 1.5;
				
				if(surface==surf21) spe21=spe21 - 1;
				else if(surface!=surf21) spe21=spe21 - 1.5;
			
				if(surface==surf22) spe22=spe22 - 1;
				else if(surface!=surf22) spe22=spe22 - 1.5;
		  	}
			if(surface=="hardcourt")
		  	{
				consi11 = consi11 - 1.5;
				consi12 = consi12 - 1.5;
				consi21 = consi21 - 1.5;
				consi22 = consi22 - 1.5;
				alert("Empieza a llover ligeramente...");
				if(surface==surf11) spe11=spe11 - 0.75;
				else if(surface!=surf11) spe11=spe11 - 1.25;
			
				if(surface==surf12) spe12=spe12 - 0.75;
				else if(surface!=surf12) spe12=spe12 - 1.25;
				
				if(surface==surf21) spe21=spe21 - 0.75;
				else if(surface!=surf21) spe21=spe21 - 1.25;
			
				if(surface==surf22) spe22=spe22 - 0.75;
				else if(surface!=surf22) spe22=spe22 - 1.25;
		  	}
			if(surface=="carpet")
		  	{
		  	}
		}
	  }	  

	  if((set==3) && (set1==set2) && (numberOfSets==3) && (tipo_p != 6) && (tipo_p != 7) && (tipo_p != 8) && (tipo_p != 9))
	  { 
		setTimeout("supertiebreak(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2,consi11,consi12,consi21,consi22)",velocidad);
	  }
	  else
	  {
	  if((game1==game2) && (game1==6) && (set!=5))
	  {
		  tie=1;
		  punto1=0;
		  punto2=0;
		  game1=0;
		  game2=0;
			 
		  setTimeout("tiebreak(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2,control,consi11,consi12,consi21,consi22)",velocidad);
	  }
	  
	  if((game1==game2) && (game1 > 15) && (set!=5))
	  {
		  fore11=Math.round(Math.random()*10);
		  fore12=Math.round(Math.random()*10); 
		  fore21=Math.round(Math.random()*10); 
		  fore22=Math.round(Math.random()*10); 
	  }
	  
	  if(tie==0)
	  {
		  if((game1==game2) && (game1 >= 5))
		  {
			  if(control==0)auxgame++;
			  control=1;
		  }
		  
		  pts11=punto(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,1,saq,consi11);
		  pts12=punto(fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form11,2,saq,consi12);
		  pts21=punto(fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,3,saq,consi21);
		  pts22=punto(fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,4,saq,consi22);
		  
		  puntosJugados++;
		  
		  pts1=pts11+pts12;
		  pts2=pts21+pts22;
		  
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
			  sta11=sta11-technique11;
			  sta12=sta12-technique12;
			  sta21=sta21-technique21;
			  sta22=sta22-technique22;
			  game1=0;
			  game2=0;
			  auxgame=0; 
			  control=0;
		  }
		  if(game2 > (5 + auxgame))
		  {
			  set++;
			  set2++;
			  sta11=sta11-technique11;
			  sta12=sta12-technique12;
			  sta21=sta21-technique21;
			  sta22=sta22-technique22;
			  game1=0;
			  game2=0;  
			  auxgame=0;
			  control=0; 
		  }
		  
		  tiempo = tiempo + Math.floor(Math.random()*61);

		  if(numberOfSets==5)
		  {
			  if((set1<3) && (set2<3))
			  {
			  setTimeout("partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2,control,consi11,consi12,consi21,consi22)",velocidad); 
			  }
		  }
		  else//3 sets
		  {
			  if((set1<2) && (set2<2))
			  {
			  setTimeout("partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2,control,consi11,consi12,consi21,consi22)",velocidad); 
			  }
		  }
	  }
	  }
  	  if(tiempo < 60)
	  {
	  	document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+"0:00"+"</center></font>";
	  }
	  else
	  {
		tiempo_m_condecimal = tiempo / 60;
		tiempo_m_sindecimal = parseInt(tiempo_m_condecimal);
		tiempo_s = tiempo % 60
		if(tiempo_m_sindecimal < 60)
		{
			if(tiempo_m_sindecimal < 10){
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ "0:0" + tiempo_m_sindecimal + "</center></font>"; 
			}
			else
			{
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ "0:" + tiempo_m_sindecimal + "</center></font>"; 
			}
		}
		else
		{
			tiempo_h_condecimal = tiempo_m_sindecimal / 60;
			tiempo_h_sindecimal = parseInt(tiempo_h_condecimal);
			tiempo_m = tiempo_m_sindecimal % 60;
			if(tiempo_m < 10)
			{
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ tiempo_h_sindecimal + ":0" + tiempo_m + "</center></font>"; 
			}
			else
			{
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ tiempo_h_sindecimal + ":" + tiempo_m + "</center></font>"; 
			}
		}
	  }
  }// end partido  
  
  function supertiebreak(fore11,back11,vol11,drop11,spe11,vsta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,vsta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,vsta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,vsta22,ser22,pow22,rest22,form22,vpunto1,vpunto2,vgame1,vgame2,vset1,vset2,consi11,consi12,consi21,consi22)
  {
	  if(lesion1<=30 && lesion1<lesion2 && puntosJugados==puntoLesion && ya_lesion==0){
		  calcularLesion(nomb11,nomb12,nomb21,nomb22,lesion11,lesion12);
		  
		  return;
	  }
	  else if(lesion2<=30 && lesion2<lesion1 && puntosJugados==puntoLesion && ya_lesion==0){
		  calcularLesion(nomb21,nomb22,nomb11,nomb12,lesion21,lesion22);
		
		  return;
	  }
	 
	  if(lluvia==1)
	  {
		if(puntosalto_lluvia==puntosJugados)
	  	{
			if(surface=="clay")
		  	{
				consi11 = consi11 - 0.5;
				consi12 = consi12 - 0.5;
				consi21 = consi21 - 0.5;
				consi22 = consi22 - 0.5;
				alert("Empieza a llover ligeramente...");
				if(surface==surf11) spe11=spe11 - 0.5;
				else if(surface!=surf11) spe11=spe11 - 1;
			
				if(surface==surf12) spe12=spe12 - 0.5;
				else if(surface!=surf12) spe12=spe12 - 1;
				
				if(surface==surf21) spe21=spe21 - 0.5;
				else if(surface!=surf21) spe21=spe21 - 1;
			
				if(surface==surf22) spe22=spe22 - 0.5;
				else if(surface!=surf22) spe22=spe22 - 1;
		  	}
			if(surface=="grass")
		  	{
				consi11 = consi11 - 2;
				consi12 = consi12 - 2;
				consi21 = consi21 - 2;
				consi22 = consi22 - 2;
				alert("Empieza a llover ligeramente...");
				if(surface==surf11) spe11=spe11 - 1;
				else if(surface!=surf11) spe11=spe11 - 1.5;
			
				if(surface==surf12) spe12=spe12 - 1;
				else if(surface!=surf12) spe12=spe12 - 1.5;
				
				if(surface==surf21) spe21=spe21 - 1;
				else if(surface!=surf21) spe21=spe21 - 1.5;
			
				if(surface==surf22) spe22=spe22 - 1;
				else if(surface!=surf22) spe22=spe22 - 1.5;
		  	}
			if(surface=="hardcourt")
		  	{
				consi11 = consi11 - 1.5;
				consi12 = consi12 - 1.5;
				consi21 = consi21 - 1.5;
				consi22 = consi22 - 1.5;
				alert("Empieza a llover ligeramente...");
				if(surface==surf11) spe11=spe11 - 0.75;
				else if(surface!=surf11) spe11=spe11 - 1.25;
			
				if(surface==surf12) spe12=spe12 - 0.75;
				else if(surface!=surf12) spe12=spe12 - 1.25;
				
				if(surface==surf21) spe21=spe21 - 0.75;
				else if(surface!=surf21) spe21=spe21 - 1.25;
			
				if(surface==surf22) spe22=spe22 - 0.75;
				else if(surface!=surf22) spe22=spe22 - 1.25;
		  	}
			if(surface=="carpet")
		  	{
		  	}
		}
	  }	

	  cont++;
	  if((cont==1)||(cont%2==0))setTimeout("cambio(),50");  
	  
	  if((punto1==punto2)&&(punto1==9 + auxtie))auxtie++;   
	  
	  pts11=punto(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,1,saq,consi11);
	  pts12=punto(fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,2,saq,consi12);
	  pts21=punto(fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,3,saq,consi21);
	  pts22=punto(fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,4,saq,consi22);
	  
	  puntosJugados++;
	  
	  pts1=pts11+pts12;
	  pts2=pts21+pts22;
	  
	  if(pts1==pts2)
	  {
		  pts1=Math.random(1000);
		  pts2=Math.random(1000);
	  }
	  
	  if(pts1<=pts2)punto2++;
	  else punto1++;
	  
	  document.getElementById("tie").innerHTML="<font color='black'><b><center>Tie Break</center></b></font>";
	  document.getElementById("game1").innerHTML="<font face='helvetica' color='black'><center>"+ punto1 +"</center></font>";
	  document.getElementById("game2").innerHTML="<font face='helvetica' color='black'><center>"+ punto2 +"</center></font>";
	  
	  tiempo = tiempo + Math.floor(Math.random()*81);
	  if(tiempo < 60)
	  {
	  	document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ "0:00" +"</center></font>";
	  }
	  else
	  {
		tiempo_m_condecimal = tiempo / 60;
		tiempo_m_sindecimal = parseInt(tiempo_m_condecimal);
		tiempo_s = tiempo % 60
		if(tiempo_m_sindecimal < 60)
		{
			if(tiempo_m_sindecimal < 10){
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ "0:0" + tiempo_m_sindecimal + "</center></font>"; 
			}
			else
			{
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ "0:" + tiempo_m_sindecimal + "</center></font>"; 
			}
		}
		else
		{
			tiempo_h_condecimal = tiempo_m_sindecimal / 60;
			tiempo_h_sindecimal = parseInt(tiempo_h_condecimal);
			tiempo_m = tiempo_m_sindecimal % 60;
			if(tiempo_m < 10)
			{
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ tiempo_h_sindecimal + ":0" + tiempo_m + "</center></font>"; 
			}
			else
			{
				document.getElementById("timet").innerHTML="<font color='#FFFF00' face='OCR A Extended'><center>"+ tiempo_h_sindecimal + ":" + tiempo_m + "</center></font>"; 
			}	
		}
	  }
	  
	  if((punto1 < 10 + auxtie)&&(punto2 < 10 + auxtie))setTimeout("supertiebreak(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2,consi11,consi12,consi21,consi22)",velocidad);
	  
	  if(punto1 > 9 + auxtie)
	  {
		  switch(set)
		  {
			  case 1:
				  document.getElementById("set11").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>1<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set21").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>0<sup>" + punto2 + "</sup></center></font>";
				  break;
		  	  case 2:
				  document.getElementById("set12").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>1<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set22").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>0<sup>" + punto2 + "</sup></center></font>";
				  break;
		  	  case 3:
				  document.getElementById("set13").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>1<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set23").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>0<sup>" + punto2 + "</sup></center></font>";
				  break;
		  	  case 4:
				  document.getElementById("set14").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>1<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set24").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>0<sup>" + punto2 + "</sup></center></font>";
				  break;
		  	  case 5:
				  document.getElementById("set15").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>1<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set25").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>0<sup>" + punto2 + "</sup></center></font>";
				  break;
		  } 
		  cambio();
		  cont=0;
		  auxtie=0;
		  set1++;
		  set++;
		  sta11=sta11-technique11;
		  sta12=sta12-technique12;
		  sta21=sta21-technique21;
		  sta22=sta22-technique22;
		  auxgame=0;
		  tie=0;
		  cero();
		  if(numberOfSets==5)
		  {
			  if((set1<3)&&(set2<3))setTimeout("partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2,control,consi11,consi12,consi21,consi22)",velocidad); 
		  }
		  else//3 sets
		  {
			  if((set1<2)&&(set2<2))setTimeout("partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2,control,consi11,consi12,consi21,consi22)",velocidad);  
		  }
	  }
	  
	  if(punto2 > 9 + auxtie)
	  {
		  switch(set)
		  {
			  case 1:
				  document.getElementById("set11").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>0<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set21").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>1<sup>" + punto2 + "</sup></center></font>";
				  break;
		  	  case 2:
				  document.getElementById("set12").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>0<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set22").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>1<sup>" + punto2 + "</sup></center></font>";
				  break; 
		  	  case 3:
				  document.getElementById("set13").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>0<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set23").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>1<sup>" + punto2 + "</sup></center></font>";
				  break;
		  	  case 4:
				  document.getElementById("set14").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>0<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set24").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>1<sup>" + punto2 + "</sup></center></font>";
				  break;
		  	  case 5:
				  document.getElementById("set15").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>0<sup>" + punto1 + "</sup></center></font>";
				  document.getElementById("set25").innerHTML="<font color ='#BDBDBD' face='helvetica'><center>1<sup>" + punto2 + "</sup></center></font>";
				  break;
		  } 
		  cambio();
		  cont=0;
		  auxtie=0;
		  set2++;
		  set++;
		  sta11=sta11-technique11;
		  sta12=sta12-technique12;
		  sta21=sta21-technique21;
		  sta22=sta22-technique22;
		  auxgame=0;
		  tie=0; 
		  cero();
		  if(numberOfSets==5){ 
			  if((set1<3)&&(set2<3))setTimeout("partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2,control,consi11,consi12,consi21,consi22)",velocidad); 
		  }
		  else//3 sets
		  {
			  if((set1<2)&&(set2<2))setTimeout("partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2,control,consi11,consi12,consi21,consi22)",velocidad);  
		  }
	  }
  }

  function punto(fo,ba,vo,dr,sp,st,se,po,rest,form,jug,saq,co) 
  {	
	  sup=0;
	  
	  if(jug==1)
	  {
		  if(surf11==surface)sup=sup+5;
		  if(strategy11==1)sup=sup-fore21;
		  if(strategy11==2)sup=sup-back21;
		  if(strategy11==3)sup=sup-fore22;
		  if(strategy11==4)sup=sup-back22;
		  if(saq==1)calcular(1,first11,1); 
	  }
	  
	  if(jug==2)
	  {
		  if(surf12==surface)sup=sup+5;
		  if(strategy12==1)sup=sup-fore21;
		  if(strategy12==2)sup=sup-back21;
		  if(strategy12==3)sup=sup-fore22;
		  if(strategy12==4)sup=sup-back22;
		  if(saq==2)calcular(2,first12,1);
	  }
	 
	 if(jug==3)
	  {
		  if(surf21==surface)sup=sup+5;
		  if(strategy21==1)sup=sup-fore11;
		  if(strategy21==2)sup=sup-back11;
		  if(strategy21==3)sup=sup-fore12;
		  if(strategy21==4)sup=sup-back12;
		  if(saq==3)calcular(3,first21,1);
	  }
	  
	  if(jug==4)
	  {
		  if(surf22==surface)sup=sup+5;
		  if(strategy22==1)sup=sup-fore11;
		  if(strategy22==2)sup=sup-back11;
		  if(strategy22==3)sup=sup-fore12;
		  if(strategy22==4)sup=sup-back12;
		  if(saq==4)calcular(4,first22,1);
	  }
	  
	  if(surface=="clay") rand=fo+ba+vo*1.4+dr+sp*0.8+st*0.6+po*0.8+rest*0.75+sup+co;
	  else if(surface=="grass") rand=fo*1.3+ba*1.3+vo*1.8+dr*0.5+sp*0.5+st*0.5+po*1.4+rest*1.25+sup+co;
	  else if(surface=="hardcourt") rand=fo*1.2+ba*1.2+vo*1.6+dr*0.8+sp*0.6+st*0.5+po*1.1+rest+sup+co;
	  else if(surface=="carpet") rand=fo*1.4+ba*1.4+vo*1.6+dr*0.75+sp*0.5+st*0.5+po*1.6+rest*1.5+sup+co;
	  else rand=fo*1.3+ba*1.3+vo*1.7+dr*1.5+sp*1.2+st+po*1.2+rest*1.1+sup+co;
	  aleatorio = Math.floor(Math.random()*(rand))+form ;  
	  return aleatorio;
  }
  
  function lesionar(form,st){
	  aleatorio2 = Math.floor(Math.random()* 99)+form*2.5+st*0.5 ;  
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

  function calcularLesion(nomb_p1,nomb_p2,nomb_g1,nomb_g2,lesion1,lesion2)
  {
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
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
	  			alert(mensaje);
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
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión ha afectado a su velocidad(-" + spe_nueva + ") y a su resistencia(-" + sta_nueva +").";
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb11)
					{
						spe11 = spe11 - spe_nueva;
						sta11 = sta11 - sta_nueva;
					}
					if(nomb_p == nomb12)
					{
						spe12 = spe12 - spe_nueva;
						sta12 = sta12 - sta_nueva;
					}
					if(nomb_p == nomb21)
					{
						spe21 = spe21 - spe_nueva;
						sta21 = sta21 - sta_nueva;
					}
					if(nomb_p == nomb22)
					{
						spe22 = spe22 - spe_nueva;
						sta22 = sta22 - sta_nueva;
					}
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
				else
				{
					cad = "un golpe en el codo";
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión no ha afectado  jugador.";
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
			}	
			break;
		case 1:
			cont = Math.round(Math.random()*100);
			if(cont > 95)
			{
				fm = Math.round(Math.random());
				cad = "una contusión en la rodilla(-" + fm + " de forma) ";
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
	  			alert(mensaje);
				set1=6;
				mensajeExpuesto=true;
				return;
			}
			else
			{
				cad = "una leve contusión en la rodilla";
				if(lesion1<=lesion2) nomb_p = nomb_p1;
				else nomb_p = nomb_p2;
				mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  			mensaje=mensaje + "Esta lesión no ha afectado al jugador.";
	  			alert(mensaje);
				lesion1=50;
				lesion2=50;
				partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
			}
			break;
		case 2:
			cont = Math.round(Math.random()*100);
			if(cont > 95)
			{
				cad = "un hematoma(-1 de forma) al haber impactado la pelota en el brazo ";
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar, debido a que el fisioterapeuta ha creído que podría complicarse.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
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
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión ha afectado a su velocidad(-" + spe_nueva + ") y a su resistencia(-" + sta_nueva +").";
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb11)
					{
						spe11 = spe11 - spe_nueva;
						sta11 = sta11 - sta_nueva;
					}
					if(nomb_p == nomb12)
					{
						spe12 = spe12 - spe_nueva;
						sta12 = sta12 - sta_nueva;
					}
					if(nomb_p == nomb21)
					{
						spe21 = spe21 - spe_nueva;
						sta21 = sta21 - sta_nueva;
					}
					if(nomb_p == nomb22)
					{
						spe22 = spe22 - spe_nueva;
						sta22 = sta22 - sta_nueva;
					}
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
				else
				{
					cad = "un hematoma en la pierna";
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión no ha afectado al jugador.";
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
			}
			break;
		case 3:
			cont = Math.round(Math.random()*100);
			if(cont > 80)
			{
				cad = "una contusión al caer al suelo(-1 de forma) ";
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
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
						cad = "una contusión en el brazo al caer al suelo";
						pow_nueva = Math.round(Math.random()*2)+1;
						fore_nueva = Math.round(Math.random()*2)+1;
						back_nueva = Math.round(Math.random()*2)+1;
						if(lesion1<=lesion2) nomb_p = nomb_p1;
						else nomb_p = nomb_p2;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  					mensaje=mensaje + "Esta lesión ha afectado a su potencia(-" + pow_nueva + "), a su drive(-" + fore_nueva +") y a su revés(-" + back_nueva + ").";
	  					alert(mensaje);
						lesion1=50;
						lesion2=50;
						if(nomb_p == nomb11)
						{
							pow11 = pow11 - pow_nueva;
							fore11 = fore11 - fore_nueva;
							back11 = back11 - back_nueva;
						}
						if(nomb_p == nomb12)
						{
							pow12 = pow12 - pow_nueva;
							fore12 = fore12 - fore_nueva;
							back12 = back12 - back_nueva;
						}
						if(nomb_p == nomb21)
						{
							pow21 = pow21 - pow_nueva;
							fore21 = fore21 - fore_nueva;
							back21 = back21 - back_nueva;
						}
						if(nomb_p == nomb22)
						{
							pow22 = pow22 - pow_nueva;
							fore22 = fore22 - fore_nueva;
							back22 = back22 - back_nueva;
						}
						partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
					}
					else
					{
						cad = "una contusión en la pierna al caer al suelo";
						sta_nueva = Math.round(Math.random()*2)+1;
						spe_nueva = Math.round(Math.random()*2)+1;
						if(lesion1<=lesion2) nomb_p = nomb_p1;
						else nomb_p = nomb_p2;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  					mensaje=mensaje + "Esta lesión ha afectado a su velocidad(-" + spe_nueva + ") y a su resistencia(-" + sta_nueva +").";
	  					alert(mensaje);
						lesion1=50;
						lesion2=50;
						if(nomb_p == nomb11)
						{
							spe11 = spe11 - spe_nueva;
							sta11 = sta11 - sta_nueva;
						}
						if(nomb_p == nomb12)
						{
							spe12 = spe12 - spe_nueva;
							sta12 = sta12 - sta_nueva;
						}
						if(nomb_p == nomb21)
						{
							spe21 = spe21 - spe_nueva;
							sta21 = sta21 - sta_nueva;
						}
						if(nomb_p == nomb22)
						{
							spe22 = spe22 - spe_nueva;
							sta22 = sta22 - sta_nueva;
						}
						partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
					}
				}
				else
				{
					cad = "una contusión al caer al suelo";
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión no ha afectado  jugador.";
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
			}
			break;
		case 4:
			cont = Math.round(Math.random()*100);
			if(cont > 80)
			{
				cad = "una sobrecarga en el bíceps(-2 de forma) ";
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
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
					cad = "una sobrecarga en el bíceps";
					pow_nueva = Math.round(Math.random()*2)+1;
					fore_nueva = Math.round(Math.random()*2)+1;
					back_nueva = Math.round(Math.random()*2)+1;
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión ha afectado a su potencia(-" + pow_nueva + "), a su drive(-" + fore_nueva +") y a su revés(-" + back_nueva + ").";
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb11)
					{
						pow11 = pow11 - pow_nueva;
						fore11 = fore11 - fore_nueva;
						back11 = back11 - back_nueva;
					}
					if(nomb_p == nomb12)
					{
						pow12 = pow12 - pow_nueva;
						fore12 = fore12 - fore_nueva;
						back12 = back12 - back_nueva;
					}
					if(nomb_p == nomb21)
					{
						pow21 = pow21 - pow_nueva;
						fore21 = fore21 - fore_nueva;
						back21 = back21 - back_nueva;
					}
					if(nomb_p == nomb22)
					{
						pow22 = pow22 - pow_nueva;
						fore22 = fore22 - fore_nueva;
						back22 = back22 - back_nueva;
					}
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
				else
				{
					cad = "una sobrecarga leve en el bíceps";
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión no ha afectado  jugador.";
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
			}
			break;
		case 5:
			cont = Math.round(Math.random()*100);
			if(cont > 80)
			{
				cad = "una sobrecarga en el gemelo(-2 de forma) ";
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
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
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión ha afectado a su velocidad(-" + spe_nueva + ") y a su resistencia(-" + sta_nueva +").";
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb11)
					{
						spe11 = spe11 - spe_nueva;
						sta11 = sta11 - sta_nueva;
					}
					if(nomb_p == nomb12)
					{
						spe12 = spe12 - spe_nueva;
						sta12 = sta12 - sta_nueva;
					}
					if(nomb_p == nomb21)
					{
						spe21 = spe21 - spe_nueva;
						sta21 = sta21 - sta_nueva;
					}
					if(nomb_p == nomb22)
					{
						spe22 = spe22 - spe_nueva;
						sta22 = sta22 - sta_nueva;
					}
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
				else
				{
					cad = "una sobrecarga leve en el bíceps";
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión no ha afectado  jugador.";
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
			}
			break;
		case 6:
			cont = Math.round(Math.random()*100);
			if(cont > 80)
			{
				cad = "una contractura en el tríceps(-2 de forma) ";
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
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
					cad = "una contractura en el tríceps";
					spe_nueva = Math.round(Math.random()*2)+1;
					sta_nueva = Math.round(Math.random()*2)+1;
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión ha afectado a su velocidad(-" + spe_nueva + ") y a su resistencia(-" + sta_nueva +").";
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb11)
					{
						spe11 = spe11 - spe_nueva;
						sta11 = sta11 - sta_nueva;
					}
					if(nomb_p == nomb12)
					{
						spe12 = spe12 - spe_nueva;
						sta12 = sta12 - sta_nueva;
					}
					if(nomb_p == nomb21)
					{
						spe21 = spe21 - spe_nueva;
						sta21 = sta21 - sta_nueva;
					}
					if(nomb_p == nomb22)
					{
						spe22 = spe22 - spe_nueva;
						sta22 = sta22 - sta_nueva;
					}
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
				else
				{
					cad = "una contractura en el tríceps";
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión no ha afectado  jugador.";
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
			}
			break;
		case 7:
			cont = Math.round(Math.random()*100);
			if(cont > 95)
			{
				cad = "un esguince grave de tobillo(-4 de forma) ";
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
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
						if(lesion1<=lesion2) nomb_p = nomb_p1;
						else nomb_p = nomb_p2;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  					mensaje=mensaje + "Esta lesión ha afectado a su velocidad(-" + spe_nueva + ").";
	  					alert(mensaje);
					}
					if(opc2 > 81 && opc2 < 96)
					{
						cad = "un esguince moderado de tobillo";
						spe_nueva = Math.round(Math.random()*3)+1;
						if(lesion1<=lesion2) nomb_p = nomb_p1;
						else nomb_p = nomb_p2;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  					mensaje=mensaje + "Esta lesión ha afectado a su velocidad(-" + spe_nueva + ").";
	  					alert(mensaje);
					}
					if(opc2 > 95)
					{
						cad = "un esguince bastante fuerte de tobillo";
						spe_nueva = Math.round(Math.random()*4)+2;
						if(lesion1<=lesion2) nomb_p = nomb_p1;
						else nomb_p = nomb_p2;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + " y, aunque bastante mermado, puede continuar.\n";
	  					mensaje=mensaje + "Esta lesión ha afectado a su velocidad(-" + spe_nueva + ").";
	  					alert(mensaje);
					}
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb11)
					{
						spe11 = spe11 - spe_nueva;
					}
					if(nomb_p == nomb12)
					{
						spe12 = spe12 - spe_nueva;
					}
					if(nomb_p == nomb21)
					{
						spe21 = spe21 - spe_nueva;
					}
					if(nomb_p == nomb22)
					{
						spe22 = spe22 - spe_nueva;
					}
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
				else
				{
					cad = "un esguince leve de tobillo";
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión no ha afectado  jugador.";
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
			}
			break;
		case 8:
			cont = Math.round(Math.random()*100);
			if(cont > 95)
			{
				cad = "un esguince grave de muñeca(-4 de forma) ";
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
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
						cad = "un esguince leve de muñeca";
						fore_nueva = Math.round(Math.random()*2)+1;
						back_nueva = Math.round(Math.random()*2)+1;
						if(lesion1<=lesion2) nomb_p = nomb_p1;
						else nomb_p = nomb_p2;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  					mensaje=mensaje + "Esta lesión ha afectado a su drive(-" + fore_nueva + ") y a su revés(-" + back_nueva + ").";
	  					alert(mensaje);
						if(nomb_p == nomb11)
						{
							fore11 = fore11 - fore_nueva;
							back11 = back11 - back_nueva;
						}
						if(nomb_p == nomb12)
						{
							fore12 = fore12 - fore_nueva;
							back12 = back12 - back_nueva;
						}
						if(nomb_p == nomb21)
						{
							fore21 = fore21 - fore_nueva;
							back21 = back21 - back_nueva;
						}
						if(nomb_p == nomb22)
						{
							fore22 = fore22 - fore_nueva;
							back22 = back22 - back_nueva;
						}
					}
					if(opc2 > 81 && opc2 < 96)
					{
						cad = "un esguince moderado de muñeca";
						fore_nueva = Math.round(Math.random()*3)+1;
						back_nueva = Math.round(Math.random()*3)+1;
						ser_nueva = Math.round(Math.random()*2)+1;
						if(lesion1<=lesion2) nomb_p = nomb_p1;
						else nomb_p = nomb_p2;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  					mensaje=mensaje + "Esta lesión ha afectado a su drive(-" + fore_nueva + "), a su revés(-" + back_nueva + ") y a su servicio(-" + ser_nueva + ").";
	  					alert(mensaje);
						if(nomb_p == nomb11)
						{
							fore11 = fore11 - fore_nueva;
							back11 = back11 - back_nueva;
							ser11 = ser11 - ser_nueva;
						}
						if(nomb_p == nomb12)
						{
							fore12 = fore12 - fore_nueva;
							back12 = back12 - back_nueva;
							ser12 = ser12 - ser_nueva;
						}
						if(nomb_p == nomb21)
						{
							fore21 = fore21 - fore_nueva;
							back21 = back21 - back_nueva;
							ser21 = ser21 - ser_nueva;
						}
						if(nomb_p == nomb22)
						{
							fore22 = fore22 - fore_nueva;
							back22 = back22 - back_nueva;
							ser22 = ser22 - ser_nueva;
						}
					}
					if(opc2 > 95)
					{
						cad = "un esguince bastante fuerte de muñeca";
						fore_nueva = Math.round(Math.random()*4)+2;
						back_nueva = Math.round(Math.random()*4)+2;
						vol_nueva = Math.round(Math.random()*2)+1;
						drop_nueva = Math.round(Math.random()*2)+1;
						ser_nueva = Math.round(Math.random()*3)+1;
						if(lesion1<=lesion2) nomb_p = nomb_p1;
						else nomb_p = nomb_p2;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + " y, aunque bastante mermado, puede continuar.\n";
	  					mensaje=mensaje + "Esta lesión ha afectado a su drive(-" + fore_nueva + "), a su revés(-" + back_nueva + "), a su servicio(-" + ser_nueva + "), a su volea(-" + vol_nueva + ") y a su dejada(-" + drop_nueva + ").";
	  					alert(mensaje);
						if(nomb_p == nomb11)
						{
							fore11 = fore11 - fore_nueva;
							back11 = back11 - back_nueva;
							ser11 = ser11 - ser_nueva;
							vol11 = vol11 - vol_nueva;
							drop11 = drop11 - drop_nueva;
						}
						if(nomb_p == nomb12)
						{
							fore12 = fore12 - fore_nueva;
							back12 = back12 - back_nueva;
							ser12 = ser12 - ser_nueva;
							vol12 = vol12 - vol_nueva;
							drop12 = drop12 - drop_nueva;
						}
						if(nomb_p == nomb21)
						{
							fore21 = fore21 - fore_nueva;
							back21 = back21 - back_nueva;
							ser21 = ser21 - ser_nueva;
							vol21 = vol21 - vol_nueva;
							drop21 = drop21 - drop_nueva;
						}
						if(nomb_p == nomb22)
						{
							fore22 = fore22 - fore_nueva;
							back22 = back22 - back_nueva;
							ser22 = ser22 - ser_nueva;
							vol22 = vol22 - vol_nueva;
							drop22 = drop22 - drop_nueva;
						}
					}
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
				else
				{
					cad = "un esguince leve de muñeca";
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión no ha afectado  jugador.";
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
			}
			break;
		case 9:
			cont = Math.round(Math.random()*100);
			if(cont > 95)
			{
				cad = "un esguince grave del ligamento lateral interno(-4 de forma) ";
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
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
						if(lesion1<=lesion2) nomb_p = nomb_p1;
						else nomb_p = nomb_p2;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  					mensaje=mensaje + "Esta lesión ha afectado a su velocidad(-" + spe_nueva + ") y a su resto(-" + rest_nueva + ").";
	  					alert(mensaje);
						if(nomb_p == nomb11)
						{
							spe11 = spe11 - spe_nueva;
							rest11 = rest11 - rest_nueva;
						}
						if(nomb_p == nomb12)
						{
							spe12 = spe12 - spe_nueva;
							rest12 = rest12 - rest_nueva;
						}
						if(nomb_p == nomb21)
						{
							spe21 = spe21 - spe_nueva;
							rest21 = rest21 - rest_nueva;
						}
						if(nomb_p == nomb22)
						{
							spe22 = spe22 - spe_nueva;
							rest22 = rest22 - rest_nueva;
						}
					}
					if(opc2 > 81 && opc2 < 96)
					{
						cad = "un esguince moderado del ligamento lateral interno";
						spe_nueva = Math.round(Math.random()*3)+1;
						rest_nueva = Math.round(Math.random()*3)+1;
						sta_nueva = Math.round(Math.random()*2)+1;
						if(lesion1<=lesion2) nomb_p = nomb_p1;
						else nomb_p = nomb_p2;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  					mensaje=mensaje + "Esta lesión ha afectado a su velocidad(-" + spe_nueva + "), a su resto(-" + rest_nueva + ") y a su resistencia(-" + sta_nueva + ").";
	  					alert(mensaje);
						if(nomb_p == nomb11)
						{
							spe11 = spe11 - spe_nueva;
							rest11 = rest11 - rest_nueva;
							sta11 = sta11 - sta_nueva;
						}
						if(nomb_p == nomb12)
						{
							spe12 = spe12 - spe_nueva;
							rest12 = rest12 - rest_nueva;
							sta12 = sta12 - sta_nueva;
						}
						if(nomb_p == nomb21)
						{
							spe21 = spe21 - spe_nueva;
							rest21 = rest21 - rest_nueva;
							sta21 = sta21 - sta_nueva;
						}
						if(nomb_p == nomb22)
						{
							spe22 = spe22 - spe_nueva;
							rest22 = rest22 - rest_nueva;
							sta22 = sta22 - sta_nueva;
						}
					}
					if(opc2 > 95)
					{
						cad = "un esguince bastante fuerte del ligamento lateral interno";
						spe_nueva = Math.round(Math.random()*4)+2;
						rest_nueva = Math.round(Math.random()*3)+1;
						sta_nueva = Math.round(Math.random()*4)+2;
						pow_nueva = Math.round(Math.random()*2)+1;
						if(lesion1<=lesion2) nomb_p = nomb_p1;
						else nomb_p = nomb_p2;
						mensaje="El jugador " + nomb_p + " ha sufrido " + cad + " y, aunque bastante mermado, puede continuar.\n";
	  					mensaje=mensaje + "Esta lesión ha afectado a su velocidad(-" + spe_nueva + "), a su resto(-" + rest_nueva + "), a su resistencia(-" + sta_nueva + ") y a su potencia(-" + pow_nueva + ").";
	  					alert(mensaje);
						if(nomb_p == nomb11)
						{
							spe11 = spe11 - spe_nueva;
							rest11 = rest11 - rest_nueva;
							sta11 = sta11 - sta_nueva;
							pow11 = pow11 - pow_nueva;
						}
						if(nomb_p == nomb12)
						{
							spe12 = spe12 - spe_nueva;
							rest12 = rest12 - rest_nueva;
							sta12 = sta12 - sta_nueva;
							pow12 = pow12 - pow_nueva;
						}
						if(nomb_p == nomb21)
						{
							spe21 = spe21 - spe_nueva;
							rest21 = rest21 - rest_nueva;
							sta21 = sta21 - sta_nueva;
							pow21 = pow21 - pow_nueva;
						}
						if(nomb_p == nomb22)
						{
							spe22 = spe22 - spe_nueva;
							rest22 = rest22 - rest_nueva;
							sta22 = sta22 - sta_nueva;
							pow22 = pow22 - pow_nueva;
						}
					}
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
				else
				{
					cad = "un esguince leve del ligamento lateral interno";
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión no ha afectado  jugador.";
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
			}
			break;
		case 10:
			cont = Math.round(Math.random()*100);
			if(cont > 90)
			{
				cad = "un tirón en el bíceps(-2 de forma) ";
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
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
					cad = "un tirón en el bíceps";
					ser_nueva = Math.round(Math.random()*2)+1;
					rest_nueva = Math.round(Math.random()*2)+1;
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión ha afectado a su servicio(-" + ser_nueva + ") y a su resto(-" + rest_nueva +").";
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb11)
					{
						ser11 = ser11 - ser_nueva;
						rest11 = rest11 - rest_nueva;
					}
					if(nomb_p == nomb12)
					{
						ser12 = ser12 - ser_nueva;
						rest12 = rest12 - rest_nueva;

					}
					if(nomb_p == nomb21)
					{
						ser21 = ser21 - ser_nueva;
						rest21 = rest21 - rest_nueva;

					}
					if(nomb_p == nomb22)
					{
						ser22 = ser22 - ser_nueva;
						rest22 = rest22 - rest_nueva;

					}
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
				else
				{
					cad = "un tirón leve en el bíceps";
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión no ha afectado  jugador.";
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
			}
			break;
		case 11:
			cont = Math.round(Math.random()*100);
			if(cont > 90)
			{
				cad = "una subluxación de muñeca(-2 de forma) ";
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
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
					cad = "una subluxación de muñeca";
					ser_nueva = Math.round(Math.random()*2)+1;
					drop_nueva = Math.round(Math.random()*2)+1;
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión ha afectado a su servicio(-" + ser_nueva + ") y a su dejada(-" + drop_nueva +").";
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb11)
					{
						ser11 = ser11 - ser_nueva;
						drop11 = drop11 - drop_nueva;
					}
					if(nomb_p == nomb12)
					{
						ser12 = ser12 - ser_nueva;
						drop12 = drop12 - drop_nueva;

					}
					if(nomb_p == nomb21)
					{
						ser21 = ser21 - ser_nueva;
						drop21 = drop21 - drop_nueva;

					}
					if(nomb_p == nomb22)
					{
						ser22 = ser22 - ser_nueva;
						drop22 = drop22 - drop_nueva;

					}
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
				else
				{
					cad = "una subluxación leve de muñeca";
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión no ha afectado  jugador.";
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
			}
			break;
		case 12:
			cont = Math.round(Math.random()*100);
			if(cont > 70)
			{
				cad = "una lumbalgia(-3 de forma) ";
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
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
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión ha afectado a su resistencia(-" + sta_nueva + "), a su drive(-" + fore_nueva +") y a su revés(-" + back_nueva + ").";
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb11)
					{
						sta11 = sta11 - sta_nueva;
						fore11 = fore11 - fore_nueva;
						back11 = back11 - back_nueva;
					}
					if(nomb_p == nomb12)
					{
						sta12 = sta12 - sta_nueva;
						fore12 = fore12 - fore_nueva;
						back12 = back12 - back_nueva;

					}
					if(nomb_p == nomb21)
					{
						sta21 = sta21 - sta_nueva;
						fore21 = fore21 - fore_nueva;
						back21 = back21 - back_nueva;

					}
					if(nomb_p == nomb22)
					{
						sta22 = sta22 - sta_nueva;
						fore22 = fore22 - fore_nueva;
						back22 = back22 - back_nueva;

					}
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
				else
				{
					cad = "una pequeña lumbalgia";
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión no ha afectado  jugador.";
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
			}
			break;
		case 13:
			cont = Math.round(Math.random()*100);
			if(cont > 70)
			{
				cad = "una luxación grave de la rótula(-3 de forma) ";
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
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
					cad = "una luxación leve de la rótula";
					spe_nueva = Math.round(Math.random()*3)+1;
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión ha afectado a su velocidad(-" + spe_nueva + ").";
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb11)
					{
						spe11 = spe11 - spe_nueva;
					}
					if(nomb_p == nomb12)
					{
						spe12 = spe12 - spe_nueva;
					}
					if(nomb_p == nomb21)
					{
						spe21 = spe21 - spe_nueva;
					}
					if(nomb_p == nomb22)
					{
						spe22 = spe22 - spe_nueva;
					}
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
				else
				{
					cad = "una luxación muy leve de la rótula";
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión no ha afectado  jugador.";
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
			}
			break;
		case 14:
			cont = Math.round(Math.random()*100);
			if(cont > 70)
			{
				cad = "una luxación grave de hombro(-3 de forma) ";
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
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
					cad = "una luxación leve de hombro";
					fore_nueva = Math.round(Math.random()*3)+1;
					back_nueva = Math.round(Math.random()*3)+1;
					vol_nueva = Math.round(Math.random()*3)+1;
					drop_nueva = Math.round(Math.random()*3)+1;
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión ha afectado a su drive(-" + fore_nueva + "), a su revés(-" + back_nueva + "), a su volea(-" + vol_nueva + ") y a su dejada(-" + drop_nueva + ").";
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb11)
					{
						fore11 = fore11 - fore_nueva;
						back11 = back11 - back_nueva;
						vol11 = vol11 - vol_nueva;
						drop11 = drop11 - drop_nueva;
					}
					if(nomb_p == nomb12)
					{
						fore12 = fore12 - fore_nueva;
						back12 = back12 - back_nueva;
						vol12 = vol12 - vol_nueva;
						drop12 = drop12 - drop_nueva;
					}
					if(nomb_p == nomb21)
					{
						fore21 = fore21 - fore_nueva;
						back21 = back21 - back_nueva;
						vol21 = vol21 - vol_nueva;
						drop21 = drop21 - drop_nueva;
					}
					if(nomb_p == nomb22)
					{
						fore22 = fore22 - fore_nueva;
						back22 = back22 - back_nueva;
						vol22 = vol22 - vol_nueva;
						drop22 = drop22 - drop_nueva;
					}
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
				else
				{
					cad = "una luxación muy leve de hombro";
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión no ha afectado  jugador.";
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
			}
			break;
		case 15:
			cont = Math.round(Math.random()*100);
			if(cont > 70)
			{
				cad = "un latigazo cervical(-3 de forma) ";
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
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
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión ha afectado a su drive(-" + fore_nueva + "), a su revés(-" + back_nueva + ") y a su resto(-" + rest_nueva + ").";
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb11)
					{
						rest11 = rest11 - rest_nueva;
						fore11 = fore11 - fore_nueva;
						back11 = back11 - back_nueva;
					}
					if(nomb_p == nomb12)
					{
						rest12 = rest12 - rest_nueva;
						fore12 = fore12 - fore_nueva;
						back12 = back12 - back_nueva;

					}
					if(nomb_p == nomb21)
					{
						rest21 = rest21 - rest_nueva;
						fore21 = fore21 - fore_nueva;
						back21 = back21 - back_nueva;

					}
					if(nomb_p == nomb22)
					{
						rest22 = rest22 - rest_nueva;
						fore22 = fore22 - fore_nueva;
						back22 = back22 - back_nueva;

					}
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
				else
				{
					cad = "un latigazo cervical muy leve";
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión no ha afectado  jugador.";
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
			}
			break;
		case 16:
			cont = Math.round(Math.random()*100);
			if(cont > 80)
			{
				cad = "una distensión del recto anterior(-3 de forma) ";
				mensaje="El jugador ";
				if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
				else mensaje=mensaje + nomb_p2;
				mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
				mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
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
					cad = "una leve distensión del recto anterior";
					fore_nueva = Math.round(Math.random()*3)+1;
					back_nueva = Math.round(Math.random()*3)+1;
					rest_nueva = Math.round(Math.random()*2)+1;
					vol_nueva = Math.round(Math.random()*2)+1;
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión ha afectado a su drive(-" + fore_nueva + "), a su revés(-" + back_nueva + "), a su resto(-" + rest_nueva + ") y a su volea(-" + vol_nueva + ").";
	  				alert(mensaje);
					lesion1=50;
					lesion2=50;
					if(nomb_p == nomb11)
					{
						rest11 = rest11 - rest_nueva;
						fore11 = fore11 - fore_nueva;
						back11 = back11 - back_nueva;
						vol11 = vol11 - vol_nueva;
					}
					if(nomb_p == nomb12)
					{
						rest12 = rest12 - rest_nueva;
						fore12 = fore12 - fore_nueva;
						back12 = back12 - back_nueva;
						vol12 = vol12 - vol_nueva;

					}
					if(nomb_p == nomb21)
					{
						rest21 = rest21 - rest_nueva;
						fore21 = fore21 - fore_nueva;
						back21 = back21 - back_nueva;
						vol21 = vol21 - vol_nueva;

					}
					if(nomb_p == nomb22)
					{
						rest22 = rest22 - rest_nueva;
						fore22 = fore22 - fore_nueva;
						back22 = back22 - back_nueva;
						vol22 = vol22 - vol_nueva;

					}
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
				else
				{
					cad = "una distensión muy leve del recto anterior";
					if(lesion1<=lesion2) nomb_p = nomb_p1;
					else nomb_p = nomb_p2;
					mensaje="El jugador " + nomb_p + " ha sufrido " + cad + ", pero puede continuar.\n";
	  				mensaje=mensaje + "Esta lesión no ha afectado  jugador.";
					alert(mensaje);
					lesion1=50;
					lesion2=50;
					partido(fore11,back11,vol11,drop11,spe11,sta11,ser11,pow11,rest11,form11,fore12,back12,vol12,drop12,spe12,sta12,ser12,pow12,rest12,form12,fore21,back21,vol21,drop21,spe21,sta21,ser21,pow21,rest21,form21,fore22,back22,vol22,drop22,spe22,sta22,ser22,pow22,rest22,form22,punto1,punto2,game1,game2,set1,set2);
				}
			}
			break;
		case 17:
			cad = "una tendinitis(-4 de forma) ";
			mensaje="El jugador ";
			if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
			else mensaje=mensaje + nomb_p2;
			mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
			mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
	  		alert(mensaje);
			set1=6;
			mensajeExpuesto=true;
			return;
			break;
		case 18:
			cad = "una rotura fibrilar de grado 1 en el trapecio(-4 de forma) ";
			mensaje="El jugador ";
			if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
			else mensaje=mensaje + nomb_p2;
			mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
			mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
	  		alert(mensaje);
			set1=6;
			mensajeExpuesto=true;
			return;
			break;
		case 19:
			cad = "una microrrotura en el cuádriceps(-4 de forma) ";
			mensaje="El jugador ";
			if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
			else mensaje=mensaje + nomb_p2;
			mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
			mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
	  		alert(mensaje);
			set1=6;
			mensajeExpuesto=true;
			return;
			break;
		case 20:
			cad = "una pubalgia(-5 de forma) ";
			mensaje="El jugador ";
			if(lesion1<=lesion2) mensaje=mensaje + nomb_p1;
			else mensaje=mensaje + nomb_p2;
			mensaje=mensaje + " ha sufrido " + cad + "y no puede continuar.\n";
			mensaje=mensaje + "Se declara como ganador a la pareja " + nomb_g1 + "/" + nomb_g2;
	  		alert(mensaje);
			set1=6;
			mensajeExpuesto=true;
			return;
			break;
	  }
  }