const generateGraph = require("./generateGraph");
const calculateRouteDistance = require("./calculateRouteDistance");

function handler(data = "") {
	const result = [];

	const graph = generateGraph(data);

	// 1 - 5
	result.push(calculateRouteDistance(graph, "ABC"));
	result.push(calculateRouteDistance(graph, "AD"));
	result.push(calculateRouteDistance(graph, "ADC"));
	result.push(calculateRouteDistance(graph, "AEBCD"));
	result.push(calculateRouteDistance(graph, "AED"));

	return result;
}

module.exports = handler;
