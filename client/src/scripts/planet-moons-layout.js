/**
 * File: planet-moon-layout.js
 * Desc: do prototype ogma layout for expand-collapse nodes
 */

// 0- require the Ogma Lib and assign to the window object for dev console access
const Ogma = require('./vendor/ogma.min.js');
window.Ogma = Ogma;


// 1- create a new Ogma instance
const ogma = new Ogma({
    container: 'graph-root',
    renderer: 'webgl'
  });

 