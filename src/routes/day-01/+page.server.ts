import fs from 'fs';

const data = fs.readFileSync('src/routes/day-02/data.txt', 'utf8').trim().split('\r\n');

const maxValues = {
	red: 12,
	blue: 13,
	green: 14
};

//Calculate Part 1 Solution
function getValue1(data: string[]) {}

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
		part1: getValue1(data)
		// part2: getValue2(data)
	};
}
