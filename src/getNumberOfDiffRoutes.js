function calcNumberOfRoutes(graph, start, end, currDist, max) {
	let counter = 0;

	const nextStarts = Object.entries(graph[start]);
	for (const [path, dist] of nextStarts) {
		const fullDist = currDist + dist;
		if (fullDist >= max) {
			continue;
		} else if (path === end) {
			counter++;
		}
		counter += calcNumberOfRoutes(graph, path, end, fullDist, max);
	}

	return counter;
}

function getNumberOfDiffRoutes(graph, start, end, max) {
	let counter = 0;
	const nextStarts = Object.entries(graph[start]);
	for (const [path, dist] of nextStarts) {
		if (dist < max) {
			counter += calcNumberOfRoutes(graph, path, end, dist, max);
		}
	}
	return counter;
}

module.exports = getNumberOfDiffRoutes;
