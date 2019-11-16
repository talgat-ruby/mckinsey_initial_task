function get(graph, ...keys) {
	return keys.reduce(
		(acc, key) =>
			acc !== null && typeof acc === "object" ? acc[key] : undefined,
		graph
	);
}

module.exports = get;
