const form = document.getElementById("sod-form");
const totalSqftOutput = document.getElementById("total-sqft");
const resultsContainer = document.getElementById("results");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Get input values
	const length = parseFloat(document.getElementById("length").value);
	// Unit converter for Length
	const lengthMeasurement = document.getElementById("length-type").value;
	// Convert width to meters
	let lengthInMetres = length;
	switch (lengthMeasurement) {
		case "meters":
			lengthInMetres *= 3.28084;;
			break;
		case "centimeter":
			lengthInMetres *= 0.0328084;
			break;
		case "inches":
			lengthInMetres *= 0.0833333;
			break;
		case "feet":
			lengthInMetres;
			break;
		case "yards":
			lengthInMetres *= 3;
			break;
	}


	const width = parseFloat(document.getElementById("width").value);
	//Unit converter for width
	const widthMeasurement = document.getElementById("width-type").value;
	// Convert width to meters
	let widthInMetres = width;
	switch (widthMeasurement) {
		case "meters":
			widthInMetres *= 3.28084;
			break;
		case "centimeter":
			widthInMetres *= 0.0328084;
			break;
		case "inches":
			widthInMetres *= 0.0833333;
			break;
		case "feet":
			widthInMetres;
			break;
		case "yards":
			widthInMetres *= 3;
			break;
	}


    const depth = parseFloat(document.getElementById("depth").value);
	// Unit Converter for depth
	const depthMeasurement = document.getElementById("depth-type").value;
	// Convert width to meters
	let depthInMetres = depth;
	switch (depthMeasurement) {
		case "meters":
			depthInMetres *= 3.28084;
			break;
		case "centimeter":
			depthInMetres *= 0.0328084;
			break;
		case "inches":
			depthInMetres *= 0.0833333;
			break;
		case "feet":
			depthInMetres;
			break;
		case "yards":
			depthInMetres *= 3;
			break;
	}



	// Calculate total square footage and rolls needed
	const result = (lengthInMetres * widthInMetres * depthInMetres) * 0.037; 
	const totalSqft = result.toFixed(2);


	// Output results
	totalSqftOutput.textContent = totalSqft;

	resultsContainer.style.display = "block";
});

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", clear);

function clear() {
	document.location.reload();
}
