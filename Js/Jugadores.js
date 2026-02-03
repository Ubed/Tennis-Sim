window.onload=function(){
	  var comboJugador1=document.getElementById("jugador1");
	  var comboJugador2=document.getElementById("jugador2");
	  
	  hombres.sort(compara);
	  mujeres.sort(compara);
	  <!--leyendas.sort(compara);-->
	  
	  jugadores=new Array();
	  jugadores=hombres.concat(mujeres);
	  
	  for(i in jugadores){
		  var opcion1=new Option(jugadores[i][0],i);
		  var opcion2=new Option(jugadores[i][0],i);
		  comboJugador1.options[i]=opcion1;
		  comboJugador2.options[i]=opcion2;
	  }
  }

  function cargarCaracteristicas(num){
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

//Jugadores masculinos con sus características
hombre0=["-------------HOMBRES----------------",0,0,0,0,0,0,0,0,0,0,0,"carpet"];
hombre1=["Acasuso, Jose(ARG)",7,6,7,6,4,6,7,8,7,5,10,"hardcourt"];
hombre2=["Aguilar, Jorge(CHI)",6,4,6,5,7,5,6,8,6,6,10,"clay"];
hombre3=["Almagro, Nicolas(ESP)",8,8,8,8,8,9,8,8,8,8,10,"clay"];
hombre4=["Alves, Thiago(BRA)",6,6,5,4,6,7,7,6,6,7,10,"clay"];
hombre5=["Anderson, Kevin(SUD)",9,7,7,6,5,6,9,9,6,6,10,"hardcourt"];
hombre6=["Andreev, Igor(RUS)",7,8,6,7,7,6,6,8,7,7,10,"clay"];
hombre7=["Andujar, Pablo(ESP)",8,8,6,5,7,8,6,7,8,8,10,"clay"];
hombre8=["Baghdatis, Marcos(CYP)",8,7,8,8,8,7,7,7,7,7,10,"hardcourt"];
hombre142 =["Ball, Carsten(AUS)",7,6,6,6,7,6,8,7,6,6,10,"hardcourt"];
hombre9=["Beck, Andreas(GER)",8,6,7,7,6,5,9,8,6,6,10,"clay"];
hombre10=["Becker, Benjamin(GER)",7,8,7,7,6,6,7,6,7,7,10,"grass"];
hombre11=["Bellucci, Thomaz(BRA)",9,7,6,7,7,7,8,9,7,7,9,"clay"];
hombre12=["Bemelmans, Ruben(BEL)",7,7,6,6,7,7,7,8,7,7,10,"hardcourt"];
hombre13=["Benneteau, Julien(FRA)",7,6,8,7,7,7,7,7,7,7,10,"carpet"];
hombre14=["Berankis, Richard(LTU)",7,7,6,6,7,7,7,6,7,7,10,"hardcourt"];
hombre15=["Berdych, Tomas(CZE)",8,8,7,8,7,8,9,8,8,8,10,"grass"];
hombre16=["Berlocq, Carlos(ARG)",7,6,5,6,7,7,6,6,7,8,10,"clay"];
hombre17=["Berrer, Michael(GER)",6,7,8,7,5,7,7,7,6,6,10,"hardcourt"];
hombre18=["Blake, James(USA)",8,7,7,8,7,7,8,8,7,7,10,"hardcourt"];
hombre154 =["Bogomolov, Alex(USA)",7,5,5,7,8,7,7,8,6,6,10,"hardcourt"];
hombre19=["Bohli, Stephane(SUI)",6,5,8,7,6,7,6,6,6,6,10,"hardcourt"];
hombre20=["Bolelli, Simone(ITA)",9,7,5,6,8,7,7,7,7,7,10,"clay"];
hombre21=["Bozoljac, Ilija(SRB)",6,5,8,5,5,6,8,8,5,4,10,"hardcourt"];
hombre22=["Brands, Daniel(GER)",7,6,7,5,6,7,9,8,6,6,10,"clay"];
hombre23=["Capdevile, Paul(CHI)",7,6,6,6,5,5,7,7,5,6,10,"clay"];
hombre24=["Chardy, Jeremy(FRA)",9,7,7,7,6,7,9,8,7,7,10,"hardcourt"];
hombre25=["Chela, Juan Ignacio(ARG)",8,7,7,7,7,8,6,8,7,8,10,"clay"];
hombre26=["Chiudinelli, Marco(SUI)",7,7,7,6,7,8,6,6,7,7,10,"hardcourt"];
hombre27=["Cilic, Marin(CRO)",10,9,8,7,7,8,8,9,8,7,9,"hardcourt"];
hombre28=["Ciric, Nikola(SRB)",5,7,6,4,5,7,8,7,6,6,10,"clay"];
hombre29=["Clement, Arnaud(FRA)",7,7,8,7,6,5,7,7,7,7,10,"hardcourt"];
hombre30=["Copil, Marius(RUM)",5,5,6,4,6,7,8,7,5,6,10,"clay"];
hombre31=["Crivoi, Victor(RUM)",6,7,8,7,6,7,5,6,7,7,10,"clay"];
hombre32=["Cuevas, Pablo(URU)",9,10,8,7,6,7,6,10,7,8,10,"clay"];
hombre147 =["Dancevic, Frank(CAN)",7,8,8,7,6,6,7,7,7,7,10,"hardcourt"];
hombre33=["Daniel, Marcos(BRA)",6,6,5,7,5,6,5,6,6,6,10,"clay"];
hombre34=["Darcis, Steve(BEL)",7,5,8,5,7,6,7,7,6,8,10,"hardcourt"];
hombre35=["Davydenko, Nikolay(RUS)",10,8,6,7,8,7,8,7,9,8,10,"hardcourt"];
hombre36=["De Bakker, Thiemmo(HOL)",9,7,5,6,6,7,9,8,6,7,10,"hardcourt"];
hombre37=["Del Bonis, Federico(ARG)",6,7,6,6,6,7,7,8,6,6,10,"clay"];
hombre38=["Del Potro, Juan Martin(ARG)",10,9,8,9,8,8,10,9,8,7,8,"hardcourt"];
hombre39=["Devvarman, Somdev(IND)",7,7,5,7,7,7,7,6,8,8,10,"hardcourt"];
hombre40=["Dimitrov, Grigor(BUL)",7,8,7,7,6,6,7,7,7,7,10,"hardcourt"];
hombre41=["Djokovic, Novak(SRB)",9,10,8,9,8,8,9,8,8,9,10,"hardcourt"];
hombre42=["Dodig, Ivan(CRO)",7,7,5,6,7,8,7,6,7,7,10,"clay"];
hombre43=["Dolgopolov, Aleksandr(UCR)",8,8,8,8,8,7,9,8,7,7,10,"clay"];
hombre44=["Falla, Alejandro(COL)",7,8,6,6,7,8,6,7,7,8,10,"clay"];
hombre149 =["Farah, Robert(COL)",7,6,7,6,6,7,6,6,7,7,10,"hardcourt"];
hombre45=["Federer, Roger(SUI)",9,9,8,9,7,8,8,9,10,8,10,"allcourt"];
hombre164 =["Felder, Marcel(URU)",6,8,5,7,6,6,5,6,7,7,10,"clay"];
hombre46=["Ferrer, David(ESP)",8,8,7,8,9,10,8,8,7,9,10,"clay"];
hombre47=["Ferrero, Juan Carlos(ESP)",8,8,8,8,6,7,7,8,8,8,7,"clay"];
hombre48=["Fish, Mardy(USA)",9,8,8,8,8,9,8,8,8,8,10,"hardcourt"];
hombre49=["Fognini, Fabio(ITA)",9,7,6,8,7,6,7,7,7,6,10,"clay"];
hombre50=["Gabashvili, Temuiraz(RUS)",7,6,7,8,6,7,7,7,7,7,10,"clay"];
hombre51=["Garcia-Lopez, Guillermo(ESP)",8,7,7,6,7,8,8,7,6,8,10,"clay"];
hombre52=["Gasquet, Richard(FRA)",8,10,9,8,8,9,8,8,10,8,8,"allcourt"];
<!--hombre53=["Gaudio, Gaston(ARG)",6,8,7,7,7,7,5,8,7,10,"clay"];-->
hombre54=["Gil, Frederico(POR)",7,7,6,6,8,8,6,6,8,8,10,"clay"];
hombre55=["Gimeno-Traver, Daniel(ESP)",8,7,6,6,7,8,6,8,8,8,10,"clay"];
hombre56=["Ginepri, Robby(USA)",7,6,7,7,5,6,7,8,7,7,10,"hardcourt"];
hombre57=["Giraldo, Santiago(COL)",7,7,5,7,8,8,7,7,8,8,10,"clay"];
hombre139 =["Golubev, Andrey(KAZ)",8,8,6,7,7,7,7,7,7,7,10,"carpet"];
hombre58=["Gonzalez, Fernando(CHI)",9,7,7,7,7,7,8,9,7,8,10,"clay"];
hombre59=["Gonzalez, Maximo(ARG)",7,6,5,6,7,7,6,7,6,7,10,"clay"];
hombre60=["Granollers, Marcel(ESP)",7,7,8,7,6,7,7,8,7,7,10,"clay"];
hombre61=["Gulbis, Ernests(LET)",9,7,6,8,7,7,9,9,8,7,9,"hardcourt"];
hombre62=["Haas, Tommy(GER)",7,9,8,7,6,7,8,7,7,7,10,"grass"];
hombre63=["Haase, Robin(HOL)",8,7,6,6,7,7,7,7,8,8,10,"clay"];
hombre64=["Haider Maurer, Andreas(AUT)",7,8,7,6,8,7,7,6,7,7,10,"hardcourt"];
hombre65=["Hajek, Jan(CZE)",7,6,6,6,7,7,7,7,7,7,10,"hardcourt"];
hombre66=["Hanescu, Victor(RUM)",7,8,8,7,6,7,7,8,8,7,9,"clay"];
hombre155 =["Harrison, Ryan(USA)",8,6,7,6,6,7,8,8,6,6,10,"hardcourt"];
hombre67=["Hewitt, Lleyton(AUS)",7,8,9,7,7,7,7,7,8,8,10,"grass"];
hombre157 =["Huta-Galung, Jesse(HOL)",6,7,7,7,6,6,5,6,7,7,10,"clay"];
hombre162 =["Ilhan, Marsel(TUR)",8,7,6,6,5,6,8,8,6,7,10,"hardcourt"];
hombre68=["Isner, John(USA)",8,6,7,7,5,7,9,9,7,6,10,"hardcourt"];
hombre69=["Istomin, Denis(UZB)",9,7,9,8,6,6,8,7,8,7,8,"grass"];
hombre70=["Kamke, Tobias(GER)",7,7,8,6,6,7,8,8,6,7,10,"hardcourt"];
hombre71=["Karlovic, Ivo(CRO)",8,6,8,6,4,6,10,10,6,5,10,"grass"];
hombre72=["Kavcic, Blaz(SLO)",8,7,6,6,8,7,6,6,7,8,10,"hardcourt"];
hombre73=["Kendrick, Robert(USA)",8,6,8,5,6,6,8,8,6,5,10,"hardcourt"];
<!--hombre74=["Kiefer, Nicolas(GER)",6,6,9,9,5,6,7,7,6,10,"grass"];-->
<!--hombre75=["Koeller, Daniel(AUT)",7,5,7,6,7,4,7,8,10,"hardcourt"];-->
hombre76=["Kohlschreiber, Philipp(GER)",7,8,8,7,7,8,7,7,7,7,10,"clay"];
hombre160 =["Korolev, Evgeny(KAZ)",8,7,5,6,6,6,6,7,7,7,10,"hardcourt"];
hombre77=["Koubek, Stefan(AUT)",8,6,4,5,7,7,7,8,7,7,10,"clay"];
hombre138 =["Kubot, Lukasz(POL)",8,6,8,7,5,6,8,8,6,6,10,"clay"];
hombre159 =["Kukushkin, Mikhail(KAZ)",8,8,6,7,8,8,7,6,7,8,10,"hardcourt"];
hombre78=["Kunitsyn, Igor(RUS)",7,6,7,6,8,7,7,7,7,7,10,"clay"];
hombre150 =["Lacko, Lukas(SVK)",6,8,6,6,8,7,6,7,7,7,10,"hardcourt"];
hombre79=["Lammer, Michael(SUI)",5,6,6,6,6,7,5,7,5,5,10,"clay"];
hombre80=["Lindhal, Nick(SWE)",5,7,5,5,6,5,6,7,6,5,10,"hardcourt"];
hombre81=["Ljubicic, Ivan(CRO)",8,8,7,7,6,7,9,9,7,7,10,"hardcourt"];
hombre82=["Llodra, Michael(FRA)",7,8,9,8,6,7,9,7,7,7,10,"carpet"];
hombre83=["Lopez, Feliciano(ESP)",7,7,8,8,6,7,9,9,7,6,10,"hardcourt"];
hombre84=["Lorenzi, Paolo(ITA)",7,7,6,6,7,7,7,6,7,7,10,"clay"];
hombre143 =["Luczak, Peter(AUS)",7,6,5,6,7,7,6,6,6,7,10,"clay"];
hombre85=["Machado, Rui(POR)",8,6,7,6,7,8,7,7,8,7,10,"clay"];
hombre86=["Mahut, Nicolas(FRA)",6,6,8,6,5,6,9,8,5,6,10,"grass"];
hombre87=["Malisse, Xavier(BEL)",7,7,8,6,7,7,7,8,6,8,10,"hardcourt"];
hombre88=["Mannarino, Adrian(FRA)",8,8,6,7,6,7,7,7,7,7,10,"clay"];
hombre163 =["Marchenko, Illya(UCR)",7,8,6,6,8,6,6,7,7,7,10,"hardcourt"];
<!--hombre89=["Massu, Nicolas(CHI)",7,5,6,7,8,7,6,8,6,10,"clay"];-->
hombre90=["Mathieu, Paul Henri(FRA)",8,7,6,7,8,7,7,7,7,8,10,"hardcourt"];
hombre91=["Mayer, Florian(GER)",8,7,8,8,7,7,9,8,7,7,10,"grass"];
hombre92=["Mayer, Leonardo(ARG)",7,6,6,6,7,7,8,9,7,6,9,"hardcourt"];
hombre93=["Mello, Ricardo(BRA)",7,6,5,7,7,8,7,6,7,8,10,"clay"];
hombre94=["Melzer, Jurgen(AUT)",8,8,8,9,8,9,8,8,9,8,10,"allcourt"];
hombre95=["Monaco, Juan(ARG)",8,7,6,6,7,8,7,7,8,8,10,"clay"];
hombre96=["Monfils, Gaël(FRA)",8,8,8,8,9,9,8,8,8,9,10,"carpet"];
hombre97=["Montañés, Albert(ESP)",8,7,6,7,8,8,7,8,8,8,9,"clay"];
hombre98=["Murray, Andy(GBR)",9,8,8,8,9,9,8,9,8,9,10,"hardcourt"];
hombre99=["Nadal, Rafael(ESP)",9,8,8,7,10,10,8,8,7,9,10,"clay"];
hombre100=["Nalbandian, David(ARG)",8,9,7,6,7,8,7,9,9,8,10,"hardcourt"];
hombre101=["Nieminen, Jarkko(FIN)",8,7,7,7,8,8,7,7,8,7,10,"clay"];
hombre102=["Nishikori, Kei(JPN)",7,8,6,7,7,7,7,6,7,8,10,"hardcourt"];
hombre103=["Petzschner, Philipp(GER)",7,6,7,7,6,7,8,7,7,7,10,"carpet"];
hombre104=["Pospisil, Jaroslav(CZE)",7,7,6,5,7,7,6,7,8,7,10,"clay"];
hombre105=["Prpic, Filip(SWE)",7,5,6,5,8,5,6,6,6,6,10,"hardcourt"];
hombre106=["Querrey, Sam(USA)",8,6,8,6,6,7,9,8,7,7,10,"hardcourt"];
hombre151 =["Ramírez-Hidalgo, Rubén(ESP)",7,7,5,5,7,8,6,7,7,8,10,"clay"];
hombre152 =["Ramos-Viñolas, Albert(ESP)",8,7,6,6,7,7,6,7,7,7,10,"clay"];
hombre107=["Raonic, Milos(CAN)",8,6,9,6,6,7,10,9,7,6,9,"hardcourt"];
hombre141 =["Reister, Julian(GER)",9,7,5,7,7,6,6,7,7,7,10,"clay"];
hombre108=["Riba, Pere(ESP)",7,7,6,6,7,8,8,7,6,7,10,"clay"];
hombre109=["Robert, Stephane(FRA)",7,7,7,6,7,7,7,7,6,7,10,"hardcourt"];
hombre110=["Robredo, Tommy(ESP)",8,8,6,7,7,7,7,7,8,8,10,"clay"];
hombre111=["Rochus, Olivier(BEL)",7,6,6,7,8,7,6,6,8,8,10,"clay"];
hombre112=["Roddick, Andy(USA)",9,7,7,7,8,8,10,8,8,8,10,"hardcourt"];
hombre161 =["Rosol, Lukas(CZE)",6,7,5,6,5,7,7,7,6,7,10,"hardcourt"];
hombre113=["Russell, Michael(USA)",6,6,5,6,7,8,7,7,7,8,10,"hardcourt"];
hombre114=["Ryderstedt, Michael(SWE)",5,7,6,5,7,6,5,7,7,6,10,"hardcourt"];
hombre148 =["Salamanca, Carlos(COL)",6,5,8,7,6,7,7,6,5,6,10,"clay"];
hombre165 =["Sansonetti, Federico(URU)",5,7,6,5,8,5,6,6,6,6,10,"clay"];
hombre156 =["Schoorel, Thomas(HOL)",9,6,7,5,5,6,9,8,7,6,10,"clay"];
hombre115=["Schuettler, Rainer(GER)",6,8,8,7,6,6,7,7,7,7,10,"hardcourt"];
hombre116=["Schwank, Eduardo(ARG)",7,6,5,7,8,7,7,8,7,8,10,"clay"];
hombre117=["Sela, Dudi(ISR)",7,6,6,6,7,7,7,5,6,6,10,"grass"];
hombre118=["Seppi, Andreas(ITA)",7,8,7,7,7,8,7,7,7,8,10,"clay"];
hombre160 =["Sergeyev, Ivan(UCR)",6,7,5,6,7,8,6,5,6,6,10,"hardcourt"];
hombre119=["Serra, Florent(FRA)",8,7,6,6,6,7,6,7,7,7,10,"clay"];
hombre146 =["Silva, Julio(BRA)",7,7,4,5,8,8,5,6,7,7,10,"clay"];
hombre120=["Simon, Gilles(FRA)",8,8,7,7,8,9,7,7,8,9,10,"hardcourt"];
hombre121=["Soderling, Robin(SWE)",9,8,7,7,8,8,9,10,8,7,10,"hardcourt/carpet"];
hombre122=["Soeda, Go(JPN)",6,6,7,5,9,8,6,7,7,7,10,"hardcourt"];
hombre145 =["Souza, Joao(BRA)",7,6,6,5,6,7,8,7,6,6,10,"clay"];
hombre140 =["Stakhovsky, Sergiy(UCR)",8,7,8,7,6,6,8,7,7,7,10,"clay"];
hombre123=["Starace, Potito(ITA)",8,7,6,6,7,7,7,8,7,8,10,"clay"];
hombre124=["Stepanek, Radek(CZE)",7,8,8,9,6,6,8,7,7,8,10,"hardcourt"];
hombre125=["Sweeting, Ryan(USA)",7,6,7,6,7,7,8,8,6,6,10,"hardcourt"];
hombre126=["Tipsarevic, Janko(SRB)",8,7,7,6,7,7,8,8,7,7,10,"hardcourt"];
hombre144 =["Tomic, Bernard(AUS)",8,8,5,6,6,7,7,8,7,7,10,"hardcourt"];
hombre127=["Troicki, Viktor(SRB)",8,8,8,8,8,8,8,8,8,9,10,"hardcourt"];
hombre128=["Tsonga, Jo-Wilfried(FRA)",9,8,7,6,7,7,9,10,8,7,10,"hardcourt"];
hombre129=["Tursunov, Dimitry(RUS)",7,8,7,7,5,6,7,7,6,6,10,"grass"];
hombre130=["Ungur, Adrian(RUM)",7,6,5,5,7,7,5,6,6,7,10,"clay"];
<!--hombre131=["Vasallo, Martin(ARG)",7,7,5,5,7,7,5,6,6,10,"clay"];-->
hombre132=["Verdasco, Fernando(ESP)",9,8,7,8,8,8,8,8,8,8,10,"hardcourt"];
hombre158 =["Volandri, Filippo(ITA)",6,8,8,8,7,6,6,7,6,7,10,"clay"];
hombre133=["Wawrinka, Stanislas(SUI)",8,9,8,8,8,9,8,8,10,8,8,"hardcourt"];
hombre153 =["Young, Donald(USA)",7,6,6,5,7,5,7,7,6,7,10,"hardcourt"];
hombre134=["Yen-Hsun, Lu(TAP)",7,6,7,7,6,6,8,8,6,6,10,"hardcourt"];
hombre135=["Youzhny, Mikhail(RUS)",8,9,8,7,8,8,8,9,9,7,10,"allcourt"];
hombre136=["Zeballos, Horacio(ARG)",7,6,7,7,6,7,8,7,7,6,10,"hardcourt"];
hombre137=["Zverev, Mischa(GER)",7,6,8,6,6,7,8,7,7,7,10,"carpet"];
<!--Último: 165-->
<!--hombre =["",,,,,,,,,,,""];-->

hombres=new Array();
hombres[0]=hombre0;
hombres[1]=hombre1;
hombres[2]=hombre2;
hombres[3]=hombre3;
hombres[4]=hombre4;
hombres[5]=hombre5;
hombres[6]=hombre6;
hombres[7]=hombre7;
hombres[8]=hombre8;
hombres[9]=hombre9;
hombres[10]=hombre10;
hombres[11]=hombre11;
hombres[12]=hombre12;
hombres[13]=hombre13;
hombres[14]=hombre14;
hombres[15]=hombre15;
hombres[16]=hombre16;
hombres[17]=hombre17;
hombres[18]=hombre18;
hombres[19]=hombre19;
hombres[20]=hombre20;
hombres[21]=hombre21;
hombres[22]=hombre22;
hombres[23]=hombre23;
hombres[24]=hombre24;
hombres[25]=hombre25;
hombres[26]=hombre26;
hombres[27]=hombre27;
hombres[28]=hombre28;
hombres[29]=hombre29;
hombres[30]=hombre30;
hombres[31]=hombre31;
hombres[32]=hombre32;
hombres[33]=hombre33;
hombres[34]=hombre34;
hombres[35]=hombre35;
hombres[36]=hombre36;
hombres[37]=hombre37;
hombres[38]=hombre38;
hombres[39]=hombre39;
hombres[40]=hombre40;
hombres[41]=hombre41;
hombres[42]=hombre42;
hombres[43]=hombre43;
hombres[44]=hombre44;
hombres[45]=hombre45;
hombres[46]=hombre46;
hombres[47]=hombre47;
hombres[48]=hombre48;
hombres[49]=hombre49;
hombres[50]=hombre50;
hombres[51]=hombre51;
hombres[52]=hombre52;
<!--hombres[53]=hombre53;-->
hombres[54]=hombre54;
hombres[55]=hombre55;
hombres[56]=hombre56;
hombres[57]=hombre57;
hombres[58]=hombre58;
hombres[59]=hombre59;
hombres[60]=hombre60;
hombres[61]=hombre61;
hombres[62]=hombre62;
hombres[63]=hombre63;
hombres[64]=hombre64;
hombres[65]=hombre65;
hombres[66]=hombre66;
hombres[67]=hombre67;
hombres[68]=hombre68;
hombres[69]=hombre69;
hombres[70]=hombre70;
hombres[71]=hombre71;
hombres[72]=hombre72;
hombres[73]=hombre73;
<!--hombres[74]=hombre74;-->
<!--hombres[75]=hombre75;-->
hombres[76]=hombre76;
hombres[77]=hombre77;
hombres[78]=hombre78;
hombres[79]=hombre79;
hombres[80]=hombre80;
hombres[81]=hombre81;
hombres[82]=hombre82;
hombres[83]=hombre83;
hombres[84]=hombre84;
hombres[85]=hombre85;
hombres[86]=hombre86;
hombres[87]=hombre87;
hombres[88]=hombre88;
<!--hombres[89]=hombre89;-->
hombres[90]=hombre90;
hombres[91]=hombre91;
hombres[92]=hombre92;
hombres[93]=hombre93;
hombres[94]=hombre94;
hombres[95]=hombre95;
hombres[96]=hombre96;
hombres[97]=hombre97;
hombres[98]=hombre98;
hombres[99]=hombre99;
hombres[100]=hombre100;
hombres[101]=hombre101;
hombres[102]=hombre102;
hombres[103]=hombre103;
hombres[104]=hombre104;
hombres[105]=hombre105;
hombres[106]=hombre106;
hombres[107]=hombre107;
hombres[108]=hombre108;
hombres[109]=hombre109;
hombres[110]=hombre110;
hombres[111]=hombre111;
hombres[112]=hombre112;
hombres[113]=hombre113;
hombres[114]=hombre114;
hombres[115]=hombre115;
hombres[116]=hombre116;
hombres[117]=hombre117;
hombres[118]=hombre118;
hombres[119]=hombre119;
hombres[120]=hombre120;
hombres[121]=hombre121;
hombres[122]=hombre122;
hombres[123]=hombre123;
hombres[124]=hombre124;
hombres[125]=hombre125;
hombres[126]=hombre126;
hombres[127]=hombre127;
hombres[128]=hombre128;
hombres[129]=hombre129;
hombres[130]=hombre130;
<!--hombres[131]=hombre131;-->
hombres[132]=hombre132;
hombres[133]=hombre133;
hombres[134]=hombre134;
hombres[135]=hombre135;
hombres[136]=hombre136;
hombres[137]=hombre137;
hombres[138]=hombre138;
hombres[139]=hombre139;
hombres[140]=hombre140;
hombres[141]=hombre141;
hombres[142]=hombre142;
hombres[143]=hombre143;
hombres[144]=hombre144;
hombres[145]=hombre145;
hombres[146]=hombre146;
hombres[147]=hombre147;
hombres[148]=hombre148;
hombres[149]=hombre149;
hombres[150]=hombre150;
hombres[151]=hombre151;
hombres[152]=hombre152;
hombres[153]=hombre153;
hombres[154]=hombre154;
hombres[155]=hombre155;
hombres[156]=hombre156;
hombres[157]=hombre157;
hombres[158]=hombre158;
hombres[159]=hombre159;
hombres[160]=hombre160;
hombres[161]=hombre161;
hombres[162]=hombre162;
hombres[163]=hombre163;
hombres[164]=hombre164;
hombres[165]=hombre165;
<!--hombres[]=hombre;-->

//Jugadoras femeninas
mujer0=["--------------MUJERES----------------",0,0,0,0,0,0,0,0,0,0,0,"carpet"];
mujer1=["Azarenka, Victoria(BIE)",9,9,4,6,6,6,8,8,7,7,10,"hardcourt"];
mujer2=["Bartoli, Marion(FRA)",8,7,7,6,7,6,7,9,7,8,10,"grass"];
mujer3=["Chakvetadze, Anna(RUS)",8,8,6,7,8,9,7,7,7,6,9,"hardcourt"];
mujer4=["Cibulkova, Dominica(SLQ)",7,5,7,6,6,8,6,7,6,7,10,"hardcourt"];
mujer5=["Cirstea, Sorana(RUM)",7,8,5,6,8,6,7,7,7,7,10,"clay"];
mujer6=["Clijsters, Kim(BEL)",8,9,9,7,8,9,7,9,9,8,10,"hardcourt"];
mujer7=["Cornet, Alize(FRA)",5,7,6,6,7,6,6,6,7,7,10,"clay"];
<!--mujer8=["Dementieva, Elena(RUS)",8,8,8,8,8,9,7,8,7,7,"hardcourt"];-->
mujer9=["Dulgheru, Alexandra(RUM)",7,8,6,6,7,8,8,5,6,7,10,"clay"];
mujer10=["Dulko, Gisela(ARG)",7,7,8,7,6,7,6,7,7,8,10,"clay"];
mujer11=["Errani, Sara(ITA)",8,6,6,5,6,6,7,7,6,7,10,"clay"];
mujer12=["Ferguson, Sophie(AUS)",6,5,6,4,5,7,6,6,6,6,10,"grass"];
mujer13=["Flipkens, Kirsten(BEL)",7,6,6,6,5,6,7,6,7,6,10,"clay"];
mujer14=["Groth, Jarmila(AUS)",6,7,5,7,7,8,6,7,7,6,10,"hardcourt"];
mujer15=["Halep, Simona(RUM)",7,6,6,7,6,8,6,7,7,7,10,"clay"];
mujer16=["Hantuchova, Daniela(SLQ)",7,8,7,7,7,9,7,8,7,8,10,"hardcourt"];
<!--mujer17=["Henin, Justine(BEL)",8,10,7,8,9,8,6,7,10,"clay"];-->
mujer18=["Ivanovic, Ana(SRB)",9,8,7,7,8,8,8,8,7,8,8,"clay"];
mujer19=["Jankovic, Jelena(SRB)",8,8,8,7,9,9,8,8,9,9,9,"hardcourt"];
mujer20=["Johansson, Mathilde(FRA)",5,8,6,6,7,7,7,6,6,6,10,"clay"];
mujer21=["Jovanovski, Bojana(SRB)",7,6,5,5,7,8,6,6,7,6,10,"hardcourt"];
mujer22=["Kanepi, Kaia(EST)",7,8,6,6,8,6,7,9,6,7,10,"hardcourt"];
mujer23=["Kirilenko, Maria(RUS)",8,7,8,5,8,7,7,6,7,7,10,"clay"];
mujer24=["Krunic, Aleksandra(SRB)",6,5,5,6,7,6,6,5,6,7,10,"hardcourt"];
mujer25=["Kucova, Zuzana(SLQ)",6,6,5,7,6,8,7,6,8,7,10,"grass"];
mujer26=["Kuznetsova, Svetlana(RUS)",9,8,7,7,7,8,8,9,7,9,10,"clay"];
mujer27=["Li, Na(CHN)",8,8,7,6,7,8,8,8,8,9,9,"hardcourt"];
mujer28=["Martinez, Maria Jose(ESP)",6,8,9,10,7,7,9,7,7,7,10,"clay"];
mujer29=["Mattek-Sands, Bethanie(USA)",8,6,6,8,7,5,7,6,7,6,10,"hardcourt"];
mujer30=["Medina, Anabel(ESP)",7,7,8,6,7,8,6,7,7,8,10,"clay"];
mujer31=["Oudin, Melanie(USA)",7,6,5,6,6,7,6,6,7,7,10,"hardcourt"];
mujer32=["Pavlyuchenkova, Anastasia(RUS)",9,7,7,8,8,8,7,7,6,7,10,"hardcourt"];
mujer33=["Peer, Shahar(ISR)",10,10,8,7,7,8,7,10,7,8,10,"hardcourt"];
mujer34=["Penetta, Flavia(ITA)",8,9,8,7,7,7,7,8,7,8,10,"hardcourt"];
mujer35=["Petrova, Nadia(RUS)",8,8,8,7,7,9,8,9,7,7,9,"hardcourt"];
mujer36=["Radwanska, Agnieszka(POL)",8,8,9,9,9,8,7,5,7,7,9,"grass"];
mujer37=["Rezai, Aravane(FRA)",7,10,7,7,9,8,7,8,6,8,8,"hardcourt"];
mujer38=["Rodionova, Anastasia(AUS)",7,5,6,6,7,6,6,6,6,6,10,"grass"];
mujer39=["Rybarikova, Magdalena(SLQ)",7,5,6,5,7,7,7,6,7,7,10,"hardcourt"];
mujer40=["Safina, Dinara(RUS)",8,9,8,7,8,8,5,8,8,8,10,"clay"];
mujer41=["Schiavone, Francesca(ITA)",8,9,7,7,8,8,6,6,6,10,10,"clay"];
mujer42=["Sharapova, Maria(RUS)",8,8,9,7,8,7,9,9,9,8,10,"hardcourt"];
mujer43=["Stosur, Samantha(AUS)",9,8,10,7,8,7,9,8,7,8,10,"hardcourt"];
mujer44=["Suarez, Carla(ESP)",8,9,5,7,6,7,6,7,7,8,10,"clay"];
mujer45=["Vinci, Roberta(ITA)",6,5,7,5,6,8,7,6,5,7,10,"clay"];
mujer46=["Wickmayer, Yanina(BEL)",8,10,8,6,8,7,7,8,7,8,10,"hardcourt"];
mujer47=["Williams, Serena(USA)",9,9,9,7,9,8,10,10,9,7,10,"hardcourt"];
mujer48=["Williams, Venus(USA)",9,8,10,7,8,7,10,10,8,7,10,"grass"];
mujer49=["Wozniacki, Caroline(DIN)",8,8,6,6,10,9,8,7,8,9,9,"hardcourt"];
mujer50=["Zheng, Jie(CHN)",7,7,7,5,8,8,6,9,7,7,10,"hardcourt"];
mujer51=["Zvonareva, Vera(RUS)",8,8,8,7,8,8,8,8,8,8,10,"hardcourt"];

mujeres=new Array();
mujeres[0]=mujer0;
mujeres[1]=mujer1;
mujeres[2]=mujer2;
mujeres[3]=mujer3;
mujeres[4]=mujer4;
mujeres[5]=mujer5;
mujeres[6]=mujer6;
mujeres[7]=mujer7;
<!--mujeres[8]=mujer8;-->
mujeres[9]=mujer9;
mujeres[10]=mujer10;
mujeres[11]=mujer11;
mujeres[12]=mujer12;
mujeres[13]=mujer13;
mujeres[14]=mujer14;
mujeres[15]=mujer15;
mujeres[16]=mujer16;
<!--mujeres[17]=mujer17;-->
mujeres[18]=mujer18;
mujeres[19]=mujer19;
mujeres[20]=mujer20;
mujeres[21]=mujer21;
mujeres[22]=mujer22;
mujeres[23]=mujer23;
mujeres[24]=mujer24;
mujeres[25]=mujer25;
mujeres[26]=mujer26;
mujeres[27]=mujer27;
mujeres[28]=mujer28;
mujeres[29]=mujer29;
mujeres[30]=mujer30;
mujeres[31]=mujer31;
mujeres[32]=mujer32;
mujeres[33]=mujer33;
mujeres[34]=mujer34;
mujeres[35]=mujer35;
mujeres[36]=mujer36;
mujeres[37]=mujer37;
mujeres[38]=mujer38;
mujeres[39]=mujer39;
mujeres[40]=mujer40;
mujeres[41]=mujer41;
mujeres[42]=mujer42;
mujeres[43]=mujer43;
mujeres[44]=mujer44;
mujeres[45]=mujer45;
mujeres[46]=mujer46;
mujeres[47]=mujer47;
mujeres[48]=mujer48;
mujeres[49]=mujer49;
mujeres[50]=mujer50;
mujeres[51]=mujer51;