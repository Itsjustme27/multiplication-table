const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");


const range = 10;

function ek() {
	// Check if content is already present
	const existingContent = one.textContent.trim();
	
	// If content is present, clear it
	if (existingContent) {
	  one.textContent = '';
	  return;
	}
  
	// If content is not present, generate and append the table
	for (let i = 1; i <= range; i++) {
	  const result = 1 * i;
	  // Create a new paragraph element to display the table
	  const paragraph = document.createElement("p");
	  paragraph.textContent = '1 x ' + i + " = " + result;
  
	  // Append the paragraph to the Id "one"
	  one.appendChild(paragraph);
	}
  }
  

function dui() {
	// Check if content is already present
	const existingContent = one.textContent.trim();
	
	// If content is present, clear it
	if (existingContent) {
	  one.textContent = '';
	  return;
	}
  
	// If content is not present, generate and append the table
	for (let i = 1; i <= range; i++) {
	  const result = 2 * i;
	  // Create a new paragraph element to display the table
	  const paragraph = document.createElement("p");
	  paragraph.textContent = '2 x ' + i + " = " + result;
  
	  // Append the paragraph to the Id "one"
	  one.appendChild(paragraph);
	}
}

function tin() {
	// Check if content is already present
	const existingContent = one.textContent.trim();
	
	// If content is present, clear it
	if (existingContent) {
	  one.textContent = '';
	  return;
	}
  
	// If content is not present, generate and append the table
	for (let i = 1; i <= range; i++) {
	  const result = 3 * i;
	  // Create a new paragraph element to display the table
	  const paragraph = document.createElement("p");
	  paragraph.textContent = '3 x ' + i + " = " + result;
  
	  // Append the paragraph to the Id "one"
	  one.appendChild(paragraph);
	}
}

function char() {
	// Check if content is already present
	const existingContent = one.textContent.trim();
	
	// If content is present, clear it
	if (existingContent) {
	  one.textContent = '';
	  return;
	}
  
	// If content is not present, generate and append the table
	for (let i = 1; i <= range; i++) {
	  const result = 4 * i;
	  // Create a new paragraph element to display the table
	  const paragraph = document.createElement("p");
	  paragraph.textContent = '4 x ' + i + " = " + result;
  
	  // Append the paragraph to the Id "one"
	  one.appendChild(paragraph);
	}
}

function pach() {
	// Check if content is already present
	const existingContent = one.textContent.trim();
	
	// If content is present, clear it
	if (existingContent) {
	  one.textContent = '';
	  return;
	}
  
	// If content is not present, generate and append the table
	for (let i = 1; i <= range; i++) {
	  const result = 5 * i;
	  // Create a new paragraph element to display the table
	  const paragraph = document.createElement("p");
	  paragraph.textContent = '5 x ' + i + " = " + result;
  
	  // Append the paragraph to the Id "one"
	  one.appendChild(paragraph);
	}
}
