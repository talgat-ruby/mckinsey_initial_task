function calculateRouteDistance(graph, route) {
	let sum = 0;
	const points = route.split("");

	for (let i = 1; i < points.length; i++) {
		const a = points[i - 1];
		const b = points[i];

		if (!graph[a]) {
			return "NO SUCH ROUTE";
		}

		const dist = graph[a][b];
		if (Number.isFinite(dist)) {
			sum += dist;
		} else {
			return "NO SUCH ROUTE";
		}
	}

	return sum;
}

module.exports = calculateRouteDistance;
