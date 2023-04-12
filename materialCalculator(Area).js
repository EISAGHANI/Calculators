const form = document.getElementById("sod-form");
const totalSqftOutput = document.getElementById("total-sqft");
// const rollsNeededOutput = document.getElementById("rolls-needed");
const resultsContainer = document.getElementById("results");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Get input values
	const area = parseFloat(document.getElementById("area").value);
	const depth = parseFloat(document.getElementById("depth").value);
	const lengthMeasurement = document.getElementById("length-type").value;
	// Convert width to meters
	let lengthInMetres = area;
	switch (lengthMeasurement) {
		case "meters":
			lengthInMetres *= 10.76;;
			break;
		case "feet":
			lengthInMetres;
			break;

	}
	const widthMeasurement = document.getElementById("width-type").value;
	// Convert width to meters
	let widthInMetres = depth;
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

	// Calculate total square footage
	const result = (lengthInMetres * widthInMetres) * 0.037;
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























// 	// Calculate total square footage and rolls needed
// 	const totalSqft = area * depth;

// 	// Output results
// 	totalSqftOutput.textContent = totalSqft;

// 	resultsContainer.style.display = "block";
// });
