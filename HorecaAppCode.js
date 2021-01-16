//prijzen voor het drinken en de snacks
const PRIJSFRIS = 2;
const PRIJSBIER = 3;
const PRIJSWIJN = 4;
const PRIJSSNACKSCHALENACHT = 4;
const PRIJSSNACKSCHALENZESTIEN = 7.50;
//Het systeem onthoud hoeveel je hebt besteld
var aantalfris = 0;
var aantalbier = 0;
var aantalwijn = 0;
var aantalsnacks = 0;
var aantalsnackschalenacht = 0;
var aantalsnackschalenzestien = 0;
//Als je niks koopt is het antwoord automatisch 0
var prijsfrisuitkomst = 0;
var prijsbieruitkomst = 0;
var prijswijnuitkomst = 0;
var prijssnackschalenachtuitkomst = 0;
var prijssnackschalenzestienuitkomst = 0;


//De functie voor het drinken/snacks wordt automatisch gestart als je de browser opent.
function bestel(){
	var vraagdrinken = true;
	while(vraagdrinken){
		var product = prompt('wilt u fris, bier, wijn of een snack? Typ "stop" als je klaar bent').toLowerCase();
		//Als je "fris" kiest wordt de volgende vraag gestelt.
		if(product == 'fris'){
			aantalfris = aantalfris + Number(prompt('hoeveel fris wilt u?'));
		}
		//Als je "bier" kiest wordt de volgende vraag gestelt.
		else if(product == 'bier'){
			aantalbier = aantalbier + Number(prompt('hoeveel bier wilt u?'));
		}
		//Als je "wijn" kiest wordt de volgende vraag gestelt.
		else if(product == 'wijn'){
			aantalwijn = aantalwijn + Number(prompt('hoeveel wijn wilt u?'));
		}
		//Als je "snack" kiest wordt de volgende vraag gestelt.
		else if(product == 'snack'){{
			aantalsnacks = Number(prompt('Hoeveel bitterballen wilt u toevoegen? Je kan kiezen tussen 8 of 16'));
		}
		//Als je "8" invult voor hoeveel bitterballen je wilt wordt de volgende vraag gestelt.
		if(aantalsnacks == 8){
			aantalsnackschalenacht = aantalsnackschalenacht + Number(prompt('Hoeveel schalen van 8 snacks wilt u?'));
		}
		//Als je "16" invult voor hoeveel bitterballen je wilt wordt de volgende vraag gestelt.
		else if(aantalsnacks == 16){
			aantalsnackschalenzestien = aantalsnackschalenzestien + Number(prompt('Hoeveel schalen van 16 snacks wilt u?'));
		}
		//Als je niet 8 of 16 kiest wordt de volgende code weergeven en ga je terug naar de vraag wat je wilt bestellen.
		else{
			alert('U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.');
		}}
		//Als je "stop" kiest bij de vraag wat je wilt bestellen krijg je de bon te zien.
		else if(product == 'stop'){
			vraagdrinken = false;
			}
		//Als je niet "fris" "bier" "wijn" of "snack" hebt gekozen bij de vraag wat je wilt bestellen krijg wordt de volgende code weergeven.
		else{
			alert('U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.');
		}}
		//Gaat automatisch alles berekenen wat de klant heeft besteld, en laat de bon zien als je "stop" hebt gekozen.
		eindprijsbon();
	}
bestel();


//Berekent de prijzen wat de klant gekocht heeft
function eindprijsbon(){
	prijsfrisuitkomst = aantalfris * PRIJSFRIS;
	prijsbieruitkomst = aantalbier * PRIJSBIER;
	prijswijnuitkomst = aantalwijn * PRIJSWIJN;
	prijssnackschalenachtuitkomst = aantalsnackschalenacht * PRIJSSNACKSCHALENACHT;
	prijssnackschalenzestienuitkomst = aantalsnackschalenzestien * PRIJSSNACKSCHALENZESTIEN;
	//Zet bij de bon erbij wat bij wat hoort
	aantallen.innerHTML = aantallen.innerHTML + "AANTAL <br><br>";
	producten.innerHTML = producten.innerHTML + "PRODUCTEN <br><br>";
	prijzen.innerHTML = prijzen.innerHTML + "TOTAAL BEDRAG <br><br>";
}

//Laat op het scherm zien wat de klant zijn totale prijs is voor het aantal fris.
if(aantalfris >= 1){
	aantallen.innerHTML = aantallen.innerHTML + aantalfris + "<br>";
	producten.innerHTML = producten.innerHTML + "Fris <br>";
	prijzen.innerHTML = prijzen.innerHTML + prijsfrisuitkomst + "<br>";
}
//Laat op het scherm zien wat de klant zijn totale prijs is voor het aantal bier.
if(aantalbier >= 1){
	aantallen.innerHTML = aantallen.innerHTML + aantalbier + "<br>";
	producten.innerHTML = producten.innerHTML + "bier <br>";
	prijzen.innerHTML = prijzen.innerHTML + prijsbieruitkomst + "<br>";
}
//Laat op het scherm zien wat de klant zijn totale prijs is voor het aantal wijn.
if(aantalwijn >= 1){
	aantallen.innerHTML = aantallen.innerHTML + aantalwijn + "<br>";
	producten.innerHTML = producten.innerHTML + "Wijn <br>";
	prijzen.innerHTML = prijzen.innerHTML + prijswijnuitkomst + "<br>";
}
//Laat op het scherm zien wat de klant zijn totale prijs is voor het aantal snackschalen van acht stuks.
if(aantalsnackschalenacht >= 1){
	aantallen.innerHTML = aantallen.innerHTML + aantalsnackschalenacht + "<br>";
	producten.innerHTML = producten.innerHTML + "Snackschalen acht <br>";
	prijzen.innerHTML = prijzen.innerHTML + prijssnackschalenachtuitkomst + "<br>";
}
//Laat op het scherm zien wat de klant zijn totale prijs is voor het aantal snackschalen van zestien stuks.
if(aantalsnackschalenzestien >= 1){
	aantallen.innerHTML = aantallen.innerHTML + aantalsnackschalenzestien + "<br>";
	producten.innerHTML = producten.innerHTML + "Snackschalen zestien <br>";
	prijzen.innerHTML = prijzen.innerHTML + prijssnackschalenzestienuitkomst + "<br>";
}
//Rekent de uitkomst uit van al het drinken en snacks wat de persoon heeft gekocht.
eindbedrag = prijsfrisuitkomst + prijsbieruitkomst + prijswijnuitkomst + prijssnackschalenachtuitkomst + prijssnackschalenzestienuitkomst;

//Laat op het scherm zien wat het toaalbedrag is voor al het drinken en snacks wat de persoon heeft gekocht.
document.getElementById("eindbedrag").innerHTML = "Totaal bedrag: " + eindbedrag;