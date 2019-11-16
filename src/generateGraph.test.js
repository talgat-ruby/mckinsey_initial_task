const generateGraph = require("./generateGraph");

describe("test generateGraph", () => {
	test("data1", () => {
		const graph = generateGraph("AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7");
		const expected = {
			A: {
				B: 5,
				D: 5,
				E: 7
			},
			B: {
				C: 4
			},
			C: {
				D: 8,
				E: 2
			},
			D: {
				C: 8,
				E: 6
			},
			E: {
				B: 3
			}
		};
		expect(graph).toEqual(expected);
	});

	test("data2", () => {
		const graph = generateGraph(
			"AB10, BC112, CD007, DC8, DE23, AD4, CE7, EB90, AE120"
		);
		const expected = {
			A: {
				B: 10,
				D: 4,
				E: 120
			},
			B: {
				C: 112
			},
			C: {
				D: 7,
				E: 7
			},
			D: {
				C: 8,
				E: 23
			},
			E: {
				B: 90
			}
		};
		expect(graph).toEqual(expected);
	});
});
