// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");
const ejs = require("ejs");
// const request = require("request");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));  //static use to run local css and other file of that given site which we are openingusing express
app.set('view engine', 'ejs');

var shortestAlgo;
var shortpath;
var shortDistance;
var Source = "";
var Destination = "";
var email = "";

var pricing = [];
var availability = [];
var name = [];
var arrivalTime = [];
var number = [];


app.get("/", function(req, res){
  res.render('list', {source : Source, destination: Destination, shortpath: shortpath, totaldist: shortDistance, Name: name, Number: number, Pricing: pricing, Arrival: arrivalTime, Available: availability});
});

const travelTimes = {
  "A": { "B": 5, "C": 7 },
  "B": { "A": 5, "D": 15, "E": 20 },
  "C": { "A": 7, "D": 5, "E": 35},
  "D": { "B": 15, "C": 5, "F": 20 },
  "E": { "B": 20, "C": 35, "F": 10 },
  "F": { "D": 20, "E": 10 }
};

const printTable = (table) => {
  return Object.keys(table)
    .map((vertex) => {
      var { vertex: from, cost } = table[vertex];
      return `${vertex}: ${cost} via ${from}`;
    })
    .join("\n");
};

const tracePath = (table, start, end) => {
  var path = [];
  var next = end;
  while (true) {
    path.unshift(next);
    if (next === start) {
      break;
    }
    next = table[next].vertex;
  }

  return path;
};

const formatGraph = (g) => {
  const tmp = {};
  Object.keys(g).forEach((k) => {
    const obj = g[k];
    const arr = [];
    Object.keys(obj).forEach((v) => arr.push({ vertex: v, cost: obj[v] }));
    tmp[k] = arr;
  });
  return tmp;
};

const dijkstra = (graph, start, end) => {
  var map = formatGraph(graph);

  var visited = [];
  var unvisited = [start];
  var shortestDistances = { [start]: { vertex: start, cost: 0 } };

  var vertex;
  while ((vertex = unvisited.shift())) {
    // Explore unvisited neighbors
    var neighbors = map[vertex].filter((n) => !visited.includes(n.vertex));

    // Add neighbors to the unvisited list
    unvisited.push(...neighbors.map((n) => n.vertex));

    var costToVertex = shortestDistances[vertex].cost;

    for (let { vertex: to, cost } of neighbors) {
      var currCostToNeighbor =
        shortestDistances[to] && shortestDistances[to].cost;
      var newCostToNeighbor = costToVertex + cost;
      if (
        currCostToNeighbor == undefined ||
        newCostToNeighbor < currCostToNeighbor
      ) {
        // Update the table
        shortestDistances[to] = { vertex, cost: newCostToNeighbor };
      }
    }

    visited.push(vertex);
  }
  const path = tracePath(shortestDistances, start, end);
  return {path:path, distance:shortestDistances[end].cost};
};

app.post("/", function(req, res) {

  Source = req.body.source;
  Destination = req.body.Destination;
  email = req.body.email;

  shortestAlgo =  dijkstra(travelTimes, Source, Destination);
  if (!shortestAlgo) {
    res.render('index', {
      message: 'No route found for the given source and destination.',
    });
    return;
  }
  pricing = [1.2, 2.3, 0.5, 4, 1];
  availability = [true, true, true, false, false];
  name = ['Swift', 'Wagonr', 'Nano', 'Alto', 'Volvo'];
  arrivalTime = ['4 min', '1 min', '20 min', '20 seconds', '2 mins'];
  number = [2010, 1020, 4747, 4440, 4050];
  shortpath = shortestAlgo.path;
  shortDistance = shortestAlgo.distance;
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Running!!");
});
