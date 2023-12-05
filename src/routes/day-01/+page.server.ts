import fs from 'fs';

const data = fs.readFileSync('src/routes/day-01/data.txt', 'utf8').trim().split('\r\n');

function getValue(data: string[]) {
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

//Send function to frontend
export function load() {
	const value = getValue(data);
	console.log(value);
	return {
		value: value
	};
}
