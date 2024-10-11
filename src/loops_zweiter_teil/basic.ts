console.log("neco");
let counter: number = 0; 
// initialisiere eine neue variable mit dem wert 0
while (counter < 10){
    console.log(`Hallo World ${counter}`);
    // `der temnpleate string ermöglicht es den Wert von counter direkt in den string einzufügen
    counter ++;
    // der inkrement operator ++ wird verwendet um counter um 1 zu erhöhen
}
// diese schleife läuft genau 10x und erzeugt Ausgabe bis Hallo World 9 
// for-Schleife: enthält die Inittialisierung, Bedigung und Aktualisierung in einer Zeile
// while-Schleife: hat nur eine Bedigung im Schleifenkopf 
let i: number = 1; 
// wie immer wird zunächst eine variable deklariert, i ist unser Zähle und Sie beginnt bei 1, und nicht 0
let output: string = '';
// jetzt muss auch der output initialisiert werden und da wir den do while loop noch nicht begonnen haben ist es ein leerer string. noch ist er unser Plathalter für die späteren outputs
do{
    // do ist der beginn der schleife
    output += `<p>The number is ${i}</p>`;
    // bei jeder iteration wird ein neuer HTML-Paragraph an `output` angehängt
    i++;
// der Zähler wird um 1 erhöht
} while (i <= 5);
// die Schleife wird forgesetzt bis der counter i gleich 5 ist