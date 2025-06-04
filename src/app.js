import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomvalues(array){
  return array[Math.floor(Math.random()*array.length)]
}

   
class Palo{
  constructor(simbolo, color){
    this.simbolo=simbolo
    this.color=color
  }
}
const corazones=new Palo("♥","danger");
const diamantes=new Palo("♦","danger");
const picas=new Palo("♠","dark");
const treboles=new Palo("♣", "dark");

const palos=[corazones, diamantes, picas, treboles];

class Card{
  constructor(palo,valor){
    this.palo=palo;
    this.valor=valor
  }
}


const valores=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];




window.onload = function() {


  const rcard=new Card(randomvalues(palos), randomvalues(valores))
  console.log(rcard)
};


