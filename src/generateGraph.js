function generateGraph(data) {
	const paths = data.split(", ");
	const graph = {};

	for (const path of paths) {
		const a = path[0];
		const b = path[1];
		const distance = Number.parseInt(path.slice(2));
		if (!graph[a]) {
			graph[a] = {};
		}
		graph[a][b] = distance;
	}

	return graph;
}

module.exports = generateGraph;
