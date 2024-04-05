/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  let randomNumberWho = Math.floor(Math.random() * who.length);
  let randomNumberAction = Math.floor(Math.random() * action.length);
  let randomNumberWhat = Math.floor(Math.random() * what.length);
  let randomNumberWhen = Math.floor(Math.random() * when.length);

  let str = `${who[randomNumberWho]} ${action[randomNumberAction]} ${what[randomNumberWhat]} ${when[randomNumberWhen]}`;

  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML = str;
};
