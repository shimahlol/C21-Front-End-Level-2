let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  omdat er woordern worden gebruikt, niet cijfers.vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype integer waarom? omdat er cijfers worden gebruikt. niet woorden vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? om de variable te creeeren  vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen 17 vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Parameter vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde naam de waarde noemen we een Attribute vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een alert op het scherm met de tekst vul je naam in hier, echt doen! deze tekst staan op regel 17 van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? ja zolang je het ook in je html verandert vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? het switcht tussen de functie tussen hide en show. dus plaatje 1 en 2 en waar wordt deze in je HTML aangeroepen? 23 en 25 vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML op regel 25 voor de () vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? het zoekt naar de id en dan heb je daar effect op vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? het switcht van id hide naar id show en daardoor lijkt het of de foto verandert vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen 32 en wanneer wordt deze aangeroepen wanneer je op de bereken knop drukt? of bedoel je regel 32 vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan van regel 2 en waar komt de waarde van getal vandaan? ook van regel 2. je zou de variabel kunnen veranderen of een input kunnen toevoegen vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? het zoekt naar alles met de class som  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? het telt de myInt op met het getal vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? als je een van die dingen verandert krijg je een ander antwoord vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen 44 vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan in de html file staat er this en waar komt de waarde van kleur vandaan? in de html file word de kleur aangegeven vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? het is size en die waarde wordt gegeven in de html file vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? het verandert de kleur en size van het element dat je aangeeft vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven je geeft getName de waarde van myStr plus je laat een alert afgaan die die waarde laat zien en wanneer gebeurt dat wanneer je op de knop drukt klik op button (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? ik zie die waarde in de alert als ik op de knop druk vul je antwoord in op de lijn.