const handler = require("./handler");

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Please type the input data\n", data => {
	const resultArr = handler(data.trim());
	rl.write(resultArr.join("\n"));
	rl.close();
});
