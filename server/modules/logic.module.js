// let numKnights = 15;
const knightArray = [];
let arrayWithZeros = [];
let newArray = [];
let bool = false;

const createArray = (numKnights) => {
	for (let i = 1; i <= numKnights; i++) {
		knightArray.push(i);
		// console.log(knightArray);
	}
	console.log(`knightArray`, knightArray, bool);
	return iterateOverArray(knightArray);
}

const iterateOverArray = (array) => {
	arrayWithZeros = array;
	if (arrayWithZeros.length > 1) {
		for (let i in arrayWithZeros) {
			// console.log(i);
			if (bool) {
				arrayWithZeros.splice(i, 1, 0)
			}
			bool = !bool
			console.log(arrayWithZeros[i], bool);
		}
	}	
	// bool = !bool
	console.log('iterateOverArray', arrayWithZeros, bool);
	return removeZeros(arrayWithZeros);
}

const removeZeros = (array) => {
	newArray = array
	for (let i in newArray) {
		if (newArray[i] === 0) {
			newArray.splice(i, 1)
		}
	}
	console.log(`newArray`, newArray, bool);
	return newArray.length > 1 ? iterateOverArray(newArray) : newArray;
}

console.log('createArray', createArray(90));
// console.log('iterateOverArray', iterateOverArray(knightArray), bool);
// console.log('removeZeros', removeZeros(arrayWithZeros), bool);
