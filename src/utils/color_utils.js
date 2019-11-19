import Colors from "nice-color-palettes";


export const getRandomColor = () => {
	 // returns a random integer from 0 to 100
	let chosenPalette = Math.floor(Math.random() * 101);
	 // returns a random integer from 0 to 100
	let chosenColor= Math.floor(Math.random() * 5);
	return Colors[chosenPalette][chosenColor]
}

export const getRandomPalette = () => {
	// returns a random integer from 0 to 100
 let chosenPalette = Math.floor(Math.random() * 101);
 return Colors[chosenPalette]
}