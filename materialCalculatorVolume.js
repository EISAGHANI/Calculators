const form = document.getElementById("sod-form");
const totalSqftOutput = document.getElementById("total-sqft");
// const rollsNeededOutput = document.getElementById("rolls-needed");
const resultsContainer = document.getElementById("results");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Get input values
	const length = parseFloat(document.getElementById("length").value);
	const width = parseFloat(document.getElementById("width").value);
    const depth = parseFloat(document.getElementById("depth").value);
	// const sqftPerRoll = parseFloat(document.getElementById("sqft-per-roll").value);

	// Calculate total square footage and rolls needed
	const totalSqft = length * width * depth;
	// const rollsNeeded = Math.ceil(totalSqft / sqftPerRoll);

	// Output results
	totalSqftOutput.textContent = totalSqft;
	// rollsNeededOutput.textContent = rollsNeeded;
	resultsContainer.style.display = "block";
});
