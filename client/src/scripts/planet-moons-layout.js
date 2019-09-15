/**
 * File: planet-moon-layout.js
 * Desc: do prototype ogma layout for expand-collapse nodes
 */

// 0- require the Ogma Lib and assign to the window object for dev console access
const Ogma = require("./vendor/ogma.min.js");
window.Ogma = Ogma;

// 00- set some vars
const $satelliteBtn = document.querySelector("#toggle-satellites");
let satsCollapsed = false;
let satelliteFilter = null;

// 1- create a new Ogma instance
const ogma = new Ogma({
  container: "graph-root",
  renderer: "webgl" // webgl || canvas || svg
});

// 2- set some Node style rules
ogma.styles.addRule({
  nodeAttributes: {
    color: ogma.rules.map({
      field: "type",
      values: {
        sun: "rgb(255, 219, 0)",
        planet: "rgb(20, 100, 244)",
        satellite: "rgb(192, 192, 192)"
      }
    }),
    text: {
      content: node => {
        const type = node.getData("type");
        if (type === "planet") {
          node.setAttribute("text.color", "rgb(20, 100, 244)");
          return node.getData("name");
        }
      }
    }
  }
});

// try switch highlight color to green (this didn't work)
ogma.styles.setSelectedNodeAttributes({ outerStroke: { color: "rgb(20, 100, 244)" } });

// 3- import some JSON data -- .then load into an ogma graph and apply force layout
ogma.parse
  // .jsonFromUrl("./../mock-data/solar-system.json")
  .jsonFromUrl("./../mock-data/solar-system-full.json")
  .then(graph => ogma.setGraph(graph))
  .then(() => ogma.layouts.forceLink({ locate: true }));

// 3- add event listener for toggleSatellites
$satelliteBtn.addEventListener("click", evt => {
  if (!satsCollapsed) {
    satelliteFilter = ogma.addNodeFilter(
      node => node.getData("type") !== "satellite"
    );
    $satelliteBtn.innerText = "Expand Satellites";
    satsCollapsed = true;
  } else {
    satelliteFilter.destroy();
    $satelliteBtn.innerText = "Collapse Satellites";
    satsCollapsed = false;
  }
});
