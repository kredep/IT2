window.onload = startUp;

function startUp() {
    /**
     * Start-funksjon.
     */
    var myString = "En tekst"; // Variabeltypen 'string', tekst
    var myInt = 10; // Variabeltypen 'integer', heltall
    var myNum = 3.14; // Variabeltypen 'number' (float), desimaltall
    console.log("Uten parenteser:");
    console.log("Setter sammen to strenger: " + myString + myString);
    console.log("Setter sammen to heltall: " + myInt + myInt);
    console.log("Setter sammen to desimaltall: " + myNum + myNum);
    console.log("Setter sammen en streng og et heltall: " + myString + myInt);
    console.log("Setter sammen en streng og et desimaltall: " + myString + myNum);
    console.log("Setter sammen et heltall og et desimaltall: " + myInt + myNum);
    console.log("");
    console.log("Med parenteser:");
    console.log("Setter sammen to strenger: " + (myString + myString));
    console.log("Setter sammen to heltall: " + (myInt + myInt));
    console.log("Setter sammen to desimaltall: " + (myNum + myNum));
    console.log("Setter sammen en streng og et heltall: " + (myString + myInt));
    console.log("Setter sammen en streng og et desimaltall: " + (myString + myNum));
    console.log("Setter sammen et heltall og et desimaltall: " + (myInt + myNum));
}
