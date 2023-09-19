//προσθετω ενα EventListener στο elements με κλαση subscribeButton, οταν γινει click καλειται η συναρτηση diaxeirisiClick
var btnEggrafi = document.querySelector(".subscribeButton"); //κλαση subscribeButton
btnEggrafi.addEventListener("click", diaxeirisiClick);

function diaxeirisiClick() {
  var onoma = prompt("Δωστε Ονομα");
  var ilikia = prompt("Δωστε Hλικια");
  var endiaferonta = prompt("Δωστε Ενδιαφεροντα");
  var xristis = new User(onoma, ilikia, endiaferonta);
  xristis.tiposeMinima();
}

//Δημιουργια Objects με πολλα στοιχεια
/*
var user1 = {
  name: "Angela",
  age: 19,
  interests: ["nba", "soccer", "videogames", "comics"],
  tiposeMinima: function () {
    alert("Ο χρηστης " + this.name + " δημιουργηθηκε.");
  },
};
*/
//Aλλος τροπος με Constructive Function, ξεκινουν παντα με Κεφαλαιο
function User(name, age, interests) {
  this.name = name;
  this.age = age;
  this.interests = interests;
  this.tiposeMinima = function () {
    alert(
      "Ο χρηστης " +
        this.name +
        " δημιουργηθηκε. \nΣτοιχεια : \nΗλικια : " +
        this.age +
        "\nΕνδιαφεροντα : " +
        this.interests
    );
  };
}
//var user1 = new User("Aris", 18, ["nba", "soccer", "videogames"]);
//var user2 = new User("Aggelos", 21, ["nba", "soccer"]);
