const get = require("./get");

function calcDistance(graph, fullPath, end, currDist, min) {
	const start = fullPath.slice(-1);
	const nextStarts = Object.entries(graph[start]);
	let newMin = min;
	for (const [path, dist] of nextStarts) {
		const fullDist = currDist + dist;
		if (end === path && newMin > fullDist) {
			newMin = fullDist;
		} else if (fullPath.includes(path)) {
			continue;
		} else {
			newMin = calcDistance(graph, fullPath + path, end, fullDist, newMin);
		}
	}
	return newMin;
}

function getShortestDist(graph, start, end) {
	let min = Number.MAX_SAFE_INTEGER;
	const nextStarts = Object.entries(graph[start]);
	for (const [path, dist] of nextStarts) {
		min = calcDistance(graph, start + path, end, dist, min);
	}
	return min;
}

module.exports = getShortestDist;
