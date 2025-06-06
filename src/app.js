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
const corazones=new Palo("♥","red");
const diamantes=new Palo("♦","red");
const picas=new Palo("♠","black");
const treboles=new Palo("♣", "black");

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
  //document.getElementById("topP").innerHTML = rcard.valor;
  let topvalue=document.getElementById("top");
  topvalue.querySelector("p").innerHTML=rcard.palo.simbolo;
  topvalue.querySelector("p").style.color=rcard.palo.color;
  topvalue.querySelector("p").style.fontSize="xx-large";
  let palo=document.getElementById("center");
  palo.querySelector("p").innerHTML=rcard.valor;
  palo.querySelector("p").style.fontSize="xx-large";
  let bottomvalue=document.getElementById("bottom");
  bottomvalue.querySelector("p").innerHTML=rcard.palo.simbolo;
  bottomvalue.querySelector("p").style.color=rcard.palo.color;
  bottomvalue.querySelector("p").style.fontSize="xx-large";
  bottomvalue.querySelector("p").style.rotate="180deg";
};


