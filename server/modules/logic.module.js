let knightArray = [];
let arrayWithZeros = [];
let newArray = [];
let bool = false;

const iterateToMax = (max) => {
	for (let j = 1; j <= max; j++) {
		bool = false;
		knightArray = [];
		createArray(j);
	}
	return;
}

const createArray = (numKnights) => {
	// console.log('knights', numKnights);
	for (let i = 1; i <= numKnights; i++) {
		// console.log(`i`, i);
		knightArray.push(i);
	}
	// console.log(`knightArray`, knightArray, bool);
	let winner = iterateOverArray(knightArray);
	console.log(`knights:`, numKnights, `winner:`, winner);
	return winner;
}

const iterateOverArray = (array) => {
	arrayWithZeros = array;
	if (arrayWithZeros.length > 1) {
		for (let k in arrayWithZeros) {
			// console.log(`i`, i, `bool`, bool);
			if (bool) {
				arrayWithZeros.splice(k, 1, 0)
			}
			bool = !bool
			// console.log(arrayWithZeros[i], bool);
		}
	}	
	// bool = !bool
	// console.log('iterateOverArray', arrayWithZeros, bool);
	return removeZeros(arrayWithZeros);
}

const removeZeros = (array) => {
	newArray = array
	for (let idx in newArray) {
		if (newArray[idx] === 0) {
			newArray.splice(idx, 1)
		}
	}
	// console.log(`newArray`, newArray, bool);
	return newArray.length > 1 ? iterateOverArray(newArray) : newArray;
}

console.log(`iterateToMax`, iterateToMax(99));
// console.log('winner', createArray(2));
// console.log('iterateOverArray', iterateOverArray(knightArray), bool);
// console.log('removeZeros', removeZeros(arrayWithZeros), bool);
