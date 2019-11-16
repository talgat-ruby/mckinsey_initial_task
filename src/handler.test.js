const handler = require("./handler");

describe("test handler", () => {
	const result = handler("AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7");
	test("Length must be 10", () => {
		expect(result).toHaveLength(10);
	});
	test("The distance of the route A-B-C", () => {
		expect(result[0]).toBe(9);
	});
	test("The distance of the route A-D", () => {
		expect(result[1]).toBe(5);
	});
	test("The distance of the route A-D-C", () => {
		expect(result[2]).toBe(13);
	});
	test("The distance of the route A-E-B-C-D", () => {
		expect(result[3]).toBe(22);
	});
	test("The distance of the route A-E-D", () => {
		expect(result[4]).toBe("NO SUCH ROUTE");
	});
	test("The number of trips starting at C and ending at C with a maximum of 3 stops", () => {
		expect(result[5]).toBe(2);
	});
	test("The number of trips starting at A and ending at C with exactly 4 stops", () => {
		expect(result[6]).toBe(3);
	});
	test("The length of the shortest route (in terms of distance to travel) from A to C", () => {
		expect(result[7]).toBe(9);
	});
	test("The length of the shortest route (in terms of distance to travel) from B to B", () => {
		expect(result[8]).toBe(9);
	});
	test("The number of different routes from C to C with a distance of less than 30", () => {
		expect(result[9]).toBe(7);
	});
});
