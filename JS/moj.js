// Pobieranie elementów - stare metody
const test = document.getElementById("testone");
console.log(`${test}`);

const testTwo = document.getElementsByTagName("li");
console.log(testTwo);

const testThree = document.getElementsByClassName("testthree");
console.log(testThree);

// Pobieranie elementów - nowe metody

const testFour = document.querySelector("li");
console.log(testFour);

const testFive = document.querySelectorAll("li");
console.log(testFive);

const testSix = document.querySelector("#testone");
console.log(testSix);

const testSeven = document.querySelector(".testthree");
console.log(testSeven);

// Zadanie

const taskOneH = document.querySelector("h2");
console.log(taskOneH);

const taskOneP = document.querySelectorAll("p");
console.log(taskOneP);

const taskOneClass = document.querySelector(`.test`);
console.log(taskOneClass);

const taskOneLast = document.querySelector(`#test`);
console.log(taskOneLast);

// Tworzenie elementów

const ulList = document.createElement("ul");
const liItem = document.createElement("li");

liItem.textContent = "Cześć";

document.body.appendChild(ulList);
ulList.appendChild(liItem);

// Zadanie 2 - Pobieranie DIV DO JS + STWORZENIE PARAGRAFU W JS + UMIESZCZENIE PARAGRAFU W DIVIE
const tasktwo = document.querySelector(".tasktwo");
const pItem = document.createElement("p");
pItem.textContent = "Jak się masz?";
tasktwo.appendChild(pItem);

// Zadanie 3

const taskThree = document.querySelector(".taskthree");
const hThree = document.createElement("h3");
hThree.textContent = "Dzisiaj byłem na rowerze!";
taskThree.appendChild(hThree);

// Metoda Append
const taskFour = document.querySelector(".food");
const taskFourp = document.createElement("p");
const taskFourh = document.createElement("h3");

taskFour.append(
	taskFourp,
	taskFourh,
	"Za pomocą append możemy dodawać kilka elementów!"
);

// Różnica między outerHTML a innerHTML
const button = document.querySelector(".btn");
console.log(button.outerHTML);
console.log(button.innerHTML);

button.innerHTML = "Zamiana nazwy na pierogi: 🥟";

// // TextContent i InnnerContent
const innerT = document.querySelectorAll(".innerText");
const textC = document.querySelectorAll(".text-content");
console.log(innerT.innerText);
console.log(textC.textContent);

// Usuwanie elementów
const deleteTest = document.querySelector(".delete");
const deleteTestP = document.querySelector(".deletenext");

deleteTest.removeChild(deleteTestP);
deleteTest.remove();
