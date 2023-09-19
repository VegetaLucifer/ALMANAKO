//Οταν τρεχει το script εκτελειται η εντολη
alert("Συμβουλευτειτε τα συμβολα καταλληλοτητας για καθε videogame");

//αντιγραφη του JS Path για το <a> σε μια μεταβλητη με ονομα li2
var li2 = document.querySelector(
  "body > div:nth-child(2) > ol > li:nth-child(2) > a"
);
li2.style.color = "violet";

//επιλεγουμε ολα τα elements που εχουν κλαση sitesList και τα βαζουμε σε ενα array
var lista;
lista = document.getElementsByClassName("sitesList");
lista[3].style.color = "white"; //το 4ο στοιχειο του array

//επιλεγουμε το μοναδικο element οπου το id του ειναι titlos
var h1a;
h1a = document.getElementById("titlos");
h1a.style.color = "red"; //το 4ο στοιχειο του array
//το ιδιο με αλλο τροπο
var h1b;
h1b = document.querySelector("#titlos");
h1b.style.color = "pink";
h1b.style.fontSize = "3rem";

//επιλεγουμε ολα τα elements τυπου h1 και τα βαζουμε σε ενα array
var h1c;
h1c = document.querySelectorAll("h1");
h1c[1].style.color = "blue";
h1c[1].style.fontSize = "1.5rem";

//προσθετουμε την κλαση aorato στο συγκεκριμενο element
//document.querySelector("body > div:nth-child(2) > h1:nth-child(2)").classList.add("aorato");
//αφαιρουμε την κλαση aorato
document
  .querySelector("body > div:nth-child(2) > h1:nth-child(2)")
  .classList.remove("aorato");
//on/off την κλαση aorato
//document.querySelector("body > div:nth-child(2) > h1:nth-child(2)").classList.toggle("aorato");

//με την εντολη innerHTML μπορουμε να βαλουμε ολοκληρο κωδικα HTML μεσα σε ενα element
/*
document.querySelector("body > div:nth-child(2) > h1:nth-child(2)").innerHTML =
  "<strong>Συνδεσμοι<strong/>"; //strong για bold
  */

//με την εντολη setAttibute μπορουμε να αλλαξουμε ενα attibute σε ενα element, πχ τον συνδεσμο(href)
/*
document
  .querySelector("body > div:nth-child(2) > ol > li:nth-child(3) > a")
  .setAttribute("href", "https://www.enternity.gr/");
  */

//προσθετω ενα EventListener σε ολα τα elements πουν εχουν κλαση marioKoumpi, οταν γινει click καλειται η συναρτηση diaxeirisiClick
var buttonLista = document.querySelectorAll(".marioKoumpi"); //κλαση marioKoumpi
for (i = 0; i < buttonLista.length; i++) {
  buttonLista[i].addEventListener("click", diaxeirisiClick);
}
function diaxeirisiClick() {
  alert("Καποιος μαλακας πατησε το κουμπι " + this.innerHTML + "."); //this το element που πατηθηκε και το HTML που περιεχει
  this.style.color = "white"; //αλλαζει το χρωμα κειμενου στο κουμπι που πατηθηκε
  if (this.innerHTML === "Stage Clear") {
    var ixos = new Audio("./Sounds/marioStageClear.wav"); //φορτωνει ενα ηχο σε μια μεταβλητη audio
    ixos.play(); // παιζει τον ηχο οταν καλειται η συναρτηση
  } else if (this.innerHTML === "Game Over") {
    var ixos = new Audio("./Sounds/marioGameOver.wav");
    ixos.play();
  }
  koumpiAnimation(this.innerHTML); //καλει την συναρτηση koumpiAnimation με παραμετρο this.innerHTML
}

//προσθετω ενα EventListener που οταν πατηθoυν συγκεκριμενα πληκτρα καλει ηχους
document.addEventListener("keydown", (event) => {
  alert("Καποιος μαλακας πατησε το κουμπι " + event.key + ".");
  if (
    event.key === "s" ||
    event.key === "S" ||
    event.key === "σ" ||
    event.key === "Σ"
  ) {
    var ixos = new Audio("./Sounds/marioStageClear.wav");
    ixos.play();
  } else if (
    event.key === "g" ||
    event.key === "G" ||
    event.key === "γ" ||
    event.key === "Γ"
  ) {
    var ixos = new Audio("./Sounds/marioGameOver.wav");
    ixos.play();
  }
  koumpiAnimation(event.key); //καλει την συναρτηση koumpiAnimation με παραμετρο event.key
});

function koumpiAnimation(parametros) {
  //παιρνει παραμετρο s,g απο τα Πληκτρα ή Stage Clear, Game Over απο τα Κουμπια
  if (parametros === "Stage Clear") {
    parametros = "s";
  } else if (parametros === "Game Over") {
    parametros = "g";
  }
  var energoButton = document.querySelector("." + parametros); //παιρνει τιμες .s ή .g και ψαχνει αντιστοιχες κλασεις
  energoButton.classList.add("patimenoKoumpi"); //αλλαζει κλαση στο κουμπι που πατηθηκε
  setTimeout(function () {
    //Συναρτηση Timeout (δινει ψευδαισθηση animation)
    energoButton.classList.remove("patimenoKoumpi"); //1o ορισμα μια αλλη συναρτηση εκτελειται
  }, 4000); //2o ορισμα o χρονος σε ms πριν εκτελεστει (1sec=1000ms)
}
