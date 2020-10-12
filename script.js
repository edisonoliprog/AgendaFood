
function calcular() {
    var p = document.getElementById("peso").value;
    var a = document.getElementById("altura").value;
    const r = p / (a * a);
  
    // Comparar el resultado para dar un diagnostico
  
    var diagnostico =
      r < 17
        ? "Desnutrido"
        : 18 <= r && r <= 20
        ? "Magrinho"
        : 21 <= r && r <= 25.9
        ? "Normal"
        : 26 <= r && r <= 30.9
        ? "Meio gordinho"
        : 31 <= r && r <= 35.9
        ? "Obeso"
        : 36 <= r && r <= 40
        ? "Cuidado!!"
        : "Obesidade morbida!!";
  
    document.getElementById("prompt").innerHTML = diagnostico;
  }
  
  var agenda = [];
  class Dia {
    constructor(f, d, a, m, c) {
      this.data = f;
      this.cafe = d;
      this.almoço = a;
      this.lanche = m;
      this.jantar = c;
    }
  }
  
  function agendar() {
    agenda.push(
      new Dia(
        document.getElementById("data").value,
        document.getElementById("cafe").value,
        document.getElementById("almoço").value,
        document.getElementById("lanche").value,
        document.getElementById("jantar").value
      )
    );
  
    for (var dia of agenda) {
      document.getElementById("f").innerHTML = "Data: " + dia.data;
      document.getElementById("d").innerHTML = "Café: " + dia.cafe;
      document.getElementById("a").innerHTML = "Almoço: " + dia.almoço;
      document.getElementById("m").innerHTML = "Lanche: " + dia.lanche;
      document.getElementById("c").innerHTML = "jantar: " + dia.jantar;
    }
  }
  
  function verA() {
    for (var total in agenda) {
      document.getElementById("f").innerHTML = "Fecha: " + agenda.dia.data;
      document.getElementById("d").innerHTML = "Desayuno: " + agenda.dia.cafe;
      document.getElementById("a").innerHTML = "Almuerzo: " + agenda.dia.almoço;
      document.getElementById("m").innerHTML = "Merienda: " + agenda.dia.lanche;
      document.getElementById("c").innerHTML = "Cena: " + agenda.dia.jantar;
    }
  }
  