const generateGraph = require("./generateGraph");
const calculateRouteDistance = require("./calculateRouteDistance");
const { sumOfTrips, EXACT, MAX } = require("./sumOfTrips");
const getShortestDist = require("./getShortestDist");

function handler(data = "") {
	const result = [];

	const graph = generateGraph(data);

	// 1 - 5
	result.push(calculateRouteDistance(graph, "ABC"));
	result.push(calculateRouteDistance(graph, "AD"));
	result.push(calculateRouteDistance(graph, "ADC"));
	result.push(calculateRouteDistance(graph, "AEBCD"));
	result.push(calculateRouteDistance(graph, "AED"));

	// 6 - 7
	result.push(sumOfTrips(graph, "C", "C", 3, MAX));
	result.push(sumOfTrips(graph, "A", "C", 4, EXACT));

	// 8 - 9
	result.push(getShortestDist(graph, "A", "C"));
	result.push(getShortestDist(graph, "B", "B"));

	return result;
}

module.exports = handler;
