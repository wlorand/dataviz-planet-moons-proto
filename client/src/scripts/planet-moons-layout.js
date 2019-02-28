/**
 * File: planet-moon-layout.js
 * Desc: do prototype ogma layout for expand-collapse nodes
 */

// 0- require the Ogma Lib and assign to the window object for dev console access
const Ogma = require("./vendor/ogma.min.js");
window.Ogma = Ogma;

// 1- create a new Ogma instance
const ogma = new Ogma({
  container: "graph-root",
  renderer: "webgl"  // webgl || canvas || svg
});

// 2- import some JSON data -- .then load into an ogma graph and apply force layout
ogma.parse
  //   .jsonFromUrl("./../mock-data/iphone_parts.json")
  .jsonFromUrl("./../mock-data/solar-system.json")
  .then(graph => ogma.setGraph(graph))
  .then(() => ogma.layouts.forceLink({ locate: true }));


// 3- add event listeners  (and run some js fxns based on them)
document.querySelector('#toggle-moons').addEventListener('click', (evt) => { 
    alert(`you got clicked at x,y: ${evt.x}, ${evt.y}`);
});
