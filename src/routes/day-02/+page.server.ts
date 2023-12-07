import fs from 'fs';
const startTime = performance.now();

const maxValues = { red: 12, blue: 14, green: 13 };

// Read the data file and split into an array of strings
const data = fs.readFileSync('src/routes/day-02/data.txt', 'utf8').trim().split('\r\n');
//Clean the data, remove "Game `: " from the string
const cleanData: string[] = data.map((game) => {
	const splitString = game.split(': ')[1].trim();
	return splitString;
});

//console.log(cleanData);
const gameResultArray: boolean[] = [];

//Calculate Part 1 Solution
const getValue1 = cleanData.map((game) => {
	const pairs = game.split(/,|;/).map((pair) => pair.trim()); // [ '3 blue', '4 red', '1 red', '2 green', '6 blue', '2 green' ]
	//console.log('GAME:');

	let gameResult = true;

	pairs.forEach((pair) => {
		const [number, color] = pair.split(' ').map((item) => item.trim()); // [ '3', 'blue' ]
		// Convert string to number
		const num = parseInt(number, 10);

		if (maxValues[color] !== undefined && num > maxValues[color]) {
			//.log('FALSE');
			gameResult = false;
			return; // Number exceeds the max value
		}
	});

	gameResultArray.push(gameResult);
	// console.table(splitString);
});

let totalPossible = 0;
gameResultArray.forEach((result, index) => {
	if (result) {
		totalPossible += index + 1;
	}
});

//Send function to frontend
export function load() {
	return {
		part1: totalPossible
		// part2: getValue2(data)
	};
}

const endTime = performance.now();
console.log(`${endTime - startTime} milliseconds`);
