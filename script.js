"use strict";

const time = new Date();
const timer = time.getHours();
const theme = document.getElementById("theme");

//Convert English numbers to Farsi
var replaceDigits = function () {
  var map = [
    "&#1776;",
    "&#1777;",
    "&#1778;",
    "&#1779;",
    "&#1780;",
    "&#1781;",
    "&#1782;",
    "&#1783;",
    "&#1784;",
    "&#1785;",
  ];
  document.body.innerHTML = document.body.innerHTML.replace(
    /\d(?=[^<>]*(<|$))/g,
    function ($0) {
      return map[$0];
    }
  );
};
window.onload = replaceDigits;

//Day and night theme
if (timer >= 5 && timer <= 17) {
  theme.classList.remove("body__theme--night");
  theme.classList.add("body__theme--day");
} else {
  theme.classList.remove("body__theme--day");
  theme.classList.add("body__theme--night");
}

//get api
async function weather() {
  let response = await fetch(
    "https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403"
  );
  let obj = await response.json();
  console.log(obj);

  response = await fetch(
    "https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403"
  );
  obj = await response.json();
  console.log(obj[0].max);
}

let resulte = weather();
resulte.catch((error) => console.log(error));
