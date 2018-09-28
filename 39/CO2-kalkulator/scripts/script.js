window.onload = startUp;

var co2 = 150; // Gram utslipp per kilometer fra en bil
var divHeight = 280; // Største høyde av søyle
// Assosiativ liste med co2 per person per km
var emission = [];
var running = false; // Boolean for å forhindre overlapping
emission['bus-city'] = 103;
emission['train'] = 32;
emission['bus-open-road'] = 52;
emission['plane-scandinavia'] = 340;

function startUp() {
  // Lytter til knappen
  submit.onclick = run;
}

function run() {
  /**
   * Funksjon som beregner antall gram co2 per person per kilometer basert på input
   */

  // Sjekker om funksjonen allerede kjører
  if (running == false) {
      running = true;
      // Henter input
      var length = document.getElementById('length').value;
      var passengers = document.getElementById('passengers').value;

      // Validerer input
      if (isNaN(length) || isNaN(passengers)) {
        console.log("Sjekk input");
        running = false;
      } else {
        // Beregner co2 / pers for bilen
        var emissionFromCar = co2 / Number(passengers);
        // Legger til i listen utslipp til kjøretøy
        emission['car'] = emissionFromCar;

        // Finner det høyeste utslippet / pers (pga. søylehøyde)
        var highest = 0;
        for(let key in emission) {
          if (emission[key] > highest) {
            highest = emission[key];
          }
        }
        // Looper gjennom alle kjøretøy sine utslipp og tegner søyler
        for (let key in emission) {
          let totalEmission = emission[key] * length;
          let targetHeight = Math.round((emission[key] / highest) * divHeight);
          let currentHeight = 0;
          let interval = setInterval(increase, 10);
          function increase() {
            if (currentHeight < targetHeight) {
              running = true;
              currentHeight++;
              let rate = currentHeight / divHeight;
              document.getElementById(key).style.backgroundColor = "rgb(" + Math.round(255*rate) + "," + Math.round(255*(1-rate)) + ",0)";
              document.getElementById(key).style.height = currentHeight + "px";
              document.getElementById(key).previousElementSibling.innerHTML = (rate*totalEmission).toFixed(2) + "<br>gram CO2/pers";
            } else {
              clearInterval(interval);
              running = false;
            }
          }
        }
      }
  } else {
    console.log("Funksjonen er ikke ferdig enda!");
  }
}
