const get = require("./get");

const EXACT = "EXACT";
const MAX = "MAX";
exports.EXACT = EXACT;
exports.MAX = MAX;

function sumOfTrips(graph, start, end, numOfStops, state = EXACT) {
	let sum = 0;

	switch (state) {
		case EXACT:
			if (numOfStops === 1 && get(graph, start, end)) {
				return 1;
			} else if (numOfStops !== 1) {
				const nextStarts = Object.keys(graph[start]);
				for (const next of nextStarts) {
					sum += sumOfTrips(graph, next, end, numOfStops - 1, state);
				}
			}
			break;
		case MAX:
			if (numOfStops >= 1 && get(graph, start, end)) {
				sum += 1;
			} else if (numOfStops !== 1) {
				const nextStarts = Object.keys(graph[start]).filter(
					dest => dest !== end
				);
				for (const next of nextStarts) {
					sum += sumOfTrips(graph, next, end, numOfStops - 1, state);
				}
			}
			break;
	}

	return sum;
}
exports.sumOfTrips = sumOfTrips;
