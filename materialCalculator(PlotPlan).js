const form = document.getElementById("sod-form");
const totalSqftOutput = document.getElementById("total-sqft");
const totalSqftOutput2 = document.getElementById("total-sqft2");

const resultsContainer = document.getElementById("results");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Get input values
	const area = parseFloat(document.getElementById("area").value);
	//Units Conversion for area
	const lotAreaMeasurement = document.getElementById("lot-area-type").value;
	// Convert lot area to feet
	let areaInMetres = area;
	switch (lotAreaMeasurement) {
		case "meters":
			areaInMetres *= 3.28084;;
			break;
		case "centimeter":
			areaInMetres *= 0.0328084;
			break;
		case "inches":
			areaInMetres *= 0.0833333;
			break;
		case "feet":
			areaInMetres;
			break;
		case "yards":
			areaInMetres *= 3;
			break;
	}


	const housearea = parseFloat(document.getElementById("housearea").value);
		//Units Conversion for house area
		const houseAreaMeasurement = document.getElementById("house-area-type").value;
		// Convert lot area to feet
		let houseAreaInMetres = housearea;
		switch (houseAreaMeasurement) {
			case "meters":
				houseAreaInMetres *= 3.28084;;
				break;
			case "centimeter":
				houseAreaInMetres *= 0.0328084;
				break;
			case "inches":
				houseAreaInMetres *= 0.0833333;
				break;
			case "feet":
				houseAreaInMetres;
				break;
			case "yards":
				houseAreaInMetres *= 3;
				break;
		}
    const driveawayarea = parseFloat(document.getElementById("driveawayarea").value);
		//Units Conversion for drive away area
		const driveAwayAreaMeasurement = document.getElementById("drive-away-area-type").value;
		// Convert lot area to feet
		let driveawayareaInMetres = driveawayarea;
		switch (driveAwayAreaMeasurement) {
			case "meters":
				driveawayareaInMetres *= 3.28084;;
				break;
			case "centimeter":
				driveawayareaInMetres *= 0.0328084;
				break;
			case "inches":
				driveawayareaInMetres *= 0.0833333;
				break;
			case "feet":
				driveawayareaInMetres;
				break;
			case "yards":
				driveawayareaInMetres *= 3;
				break;
		}
    const deckarea = parseFloat(document.getElementById("deckarea").value);
		//Units Conversion for deck area
		const deckAreaMeasurement = document.getElementById("deck-area-type").value;
		// Convert lot area to feet
		let deckareaInMetres = deckarea;
		switch (deckAreaMeasurement) {
			case "meters":
				deckareaInMetres *= 3.28084;
				break;
			case "centimeter":
				deckareaInMetres *= 0.0328084;
				break;
			case "inches":
				deckareaInMetres *= 0.0833333;
				break;
			case "feet":
				deckareaInMetres;
				break;
			case "yards":
				deckareaInMetres *= 3;
				break;
		}



	// Calculate total square footage
	let result = areaInMetres - houseAreaInMetres - driveawayareaInMetres - deckareaInMetres;
	let totalSqft = result.toFixed(2);
	let totalSqft2 = result /= 3.28084;

// Output results
totalSqftOutput.textContent = totalSqft;
totalSqftOutput2.textContent = totalSqft2.toFixed(2);
resultsContainer.style.display = "block";
});

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", clear);

function clear() {
document.location.reload();
}
