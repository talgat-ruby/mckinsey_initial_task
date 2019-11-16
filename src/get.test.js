const get = require("./get");

describe("test get", () => {
	sampleData = {
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
			C: null,
			E: 6
		},
		E: {
			B: 3
		}
	};
	test("data1", () => {
		expect(get(sampleData, "A", "B")).toBe(5);
	});

	test("data2", () => {
		expect(get(sampleData, "A", "B", "C")).toBe(undefined);
	});

	test("data3", () => {
		expect(get(sampleData, "Z", "D")).toBe(undefined);
	});

	test("data4", () => {
		expect(get(sampleData, "D", "C")).toBe(null);
	});

	test("data4", () => {
		expect(get(sampleData, "D", "C", "A")).toBe(undefined);
	});
});
