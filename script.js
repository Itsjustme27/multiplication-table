const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");


const range = 10;

function ek() {
	for(let i = 1; i <= range; i++){
		const result = 1 * i;
		//Create a new paragraph element to display the table
		const paragraph = document.createElement("p");
		paragraph.textContent = '1 x ' + i + " = " + result;

		//Append the paragraph to the Id "one"
		one.appendChild(paragraph);
	
	}
	
}

function dui() {
	for(let i = 1; i <= range; i++){
		const result = 2 * i;
		//Create a new paragraph element to display the table
		const paragraph = document.createElement("p");
		paragraph.textContent = '2 x ' + i + " = " + result;

		//Append the paragraph to the Id "one"
		two.appendChild(paragraph);

	}
}

function tin() {
	for(let i = 1; i <= range; i++){
		const result = 3 * i;
		//Create a new paragraph element to display the table
		const paragraph = document.createElement("p");
		paragraph.textContent = '3 x ' + i + " = " + result;

		//Append the paragraph to the Id "one"
		three.appendChild(paragraph);

	}
}

function char() {
	for(let i = 1; i <= range; i++){
		const result = 4 * i;
		//Create a new paragraph element to display the table
		const paragraph = document.createElement("p");
		paragraph.textContent = '4 x ' + i + " = " + result;

		//Append the paragraph to the Id "one"
		four.appendChild(paragraph);

	}
}

function pach() {
	for(let i = 1; i <= range; i++){
		const result = 5 * i;
		//Create a new paragraph element to display the table
		const paragraph = document.createElement("p");
		paragraph.textContent = '5 x ' + i + " = " + result;

		//Append the paragraph to the Id "one"
		five.appendChild(paragraph);

	}
}
