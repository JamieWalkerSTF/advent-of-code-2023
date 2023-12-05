import fs from 'fs';

const data = fs.readFileSync('src/routes/day-01/example2.txt', 'utf8').trim().split('\r\n');

//Calculate Part 1 Solution
function getValue1(data: string[]) {
	let output: number = 0;
	data.map((item) => {
		//find the first number in the string
		const firstNumberObject = item.match(/\d+/);
		const lastNumberObject = item.match(/\d+(?=\D*$)/);

		//Validate the output incase there is a NULL/NAN
		if (firstNumberObject !== null && lastNumberObject !== null) {
			//console.log(firstNumberObject[0].charAt(0) + ',' + lastNumberObject[0].slice(-1));
			const number = firstNumberObject[0].charAt(0) + lastNumberObject[0].slice(-1);
			output += +number;
		}
	});
	return output;
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
		part1: getValue1(data),
		part2: getValue2(data)
	};
}
