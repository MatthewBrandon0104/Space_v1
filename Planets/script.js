function test() {
	document.getElementById('test').textContent = console.table(planets);
}

planets = [];

class Planet {
	constructor(array) {
  	this.name = array[0],
    this.size = array[1],
    this.type = array[2],
    this.economy = array[3],
    this.production = array[4],
    this.food = array[5],
    this.stability = array[6],
    this.mods = [];
  }
}

function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function createPlanet() {
	let array = [];
  
  //get Name
  let x = randInt(1,10);
  if ( x >= 1 && x <= 3 ) {
  	array[0] = "Leonis";
  } else if (x >= 4 && x <= 6) {
  	array[0] = "Caprica";
  } else if (x >= 7 && x <= 8) {
  	array[0] = "Geminon";
  } else { array[0] = "Sagitaron"; }
  
  //get Size
  x = randInt(1,5) //get Size
  if (x === 1) {
  	array[1] = "1 Tiny";
  } else if (x === 2) {
  	array[1] = "2 Small";
  } else if (x === 3) {
  	array[1] = "3 Average";
  } else if (x === 4) {
  	array[1] = "4 Large";
  } else { array[1] = "5 Huge"; }
  
  //get Type
  x = randInt(1,100)
  if (x >= 1 && x <= 5) {
  	array[2] = "Dead";
  } else if (x >= 6 && x <= 20) {
  	array[2] = "Arid";
  } else if (x >= 21 && x <= 35) {
  	array[2] = "Barren";
  } else if (x >= 36 && x <= 50 ) {
  	array[2] = "Desert";
  } else if (x >= 51 && x <= 65) {
  	array[2] = "Tropical";
  } else if (x >= 66 && x <= 80) {
  	array[2] = "Ocean";
  } else if (x >= 81 && x <= 95) {
  	array[2] = "Terran";
  } else { array[2] = "Gaia"; }

	//get Economy
  x = randInt(1,3);
	if (x === 1) {
  	array[3] = "Weak";
  } else if (x == 2) {
  	array[3] = "Average";
  } else { array[3] = "Strong" }
  
  //get Production
  x = randInt(1,3);
  if (x === 1) {
  	array[4] = "Weak";
  } else if (x === 2) {
  	array[4] = "Average";
  } else { array[4] = "Strong"; }
  
  //get Food
  if (array[2] === "Gaia" || array[2] === "Terran") {
  	array[5] = randInt(8,12);
  } else if (array[2] === "Tropical" || array[2] === "Ocean") {			array[5] = randInt(4, 8);
  } else if (array[2] === "Barren" || array[2] === "Arid" || array[2] === "Desert") {
  	array[5] = randInt(1, 4);
  } else { array[5] = 0 }


	//get Stability
  x = randInt(1,5);
  if (x === 1) {
  	array[6] = "Rebellion";
  } else if (x === 2) {
  	array[6] = "Unrest";
  } else if (x === 3) {
  	array[6] = "Stable";
  } else if (x === 4) {
  	array[6] = "Loyal";
  } else { array[6] = "Fanatical"; }

return array;
}

function createGalaxy(num) {
	for (i = 0; i < num; i++) {
  	planets[i] = new Planet(createPlanet());
  }
}

createGalaxy(50);
planets[0].mods.push("TEST");
test();