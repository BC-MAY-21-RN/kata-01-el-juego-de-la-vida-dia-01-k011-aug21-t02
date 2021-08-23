firstGeneration = [
	['.', '.', '.','.', '.','.','.','.'],
	['.', '.', '.','.', '*','.','.','.'],
	['.', '.', '.','*', '*','.','.','.'],
	['.', '.', '.','.', '.','.','.','.']
]

function printGrid(arrCells){
	arrCells.forEach(row => {
		console.log(row.join(' '));
	})
}

printGrid(firstGeneration);