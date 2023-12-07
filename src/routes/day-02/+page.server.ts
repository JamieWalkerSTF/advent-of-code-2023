import fs from 'fs';

const data = fs.readFileSync('src/routes/day-01/data.txt', 'utf8').trim().split('\r\n');

//Calculate Part 1 Solution
function getValue1(data: string[]) {
	const gameData = data.map((item) => {
		console.log(item);
	});
}

//Calculate Part 2 Solution
// function getValue2(data: string[]) {

// 	data.map((item) => {
// 		//find the first number in the string
//     let text = "Hello world, welcome to the universe.";
//     let result = text.includes("world");

//   });
// };

//Send function to frontend
export function load() {
	return {
		part1: 'Not yet implemented'
		// part2: getValue2(data)
	};
}
