const form = document.getElementById("sod-form");
const totalSqftOutput = document.getElementById("total-sqft");
// const rollsNeededOutput = document.getElementById("rolls-needed");
const resultsContainer = document.getElementById("results");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Get input values
	const area = parseFloat(document.getElementById("area").value);
	const depth = parseFloat(document.getElementById("depth").value);
	// const sqftPerRoll = parseFloat(document.getElementById("sqft-per-roll").value);

	// Calculate total square footage and rolls needed
	const totalSqft = area * depth;
	// const rollsNeeded = Math.ceil(totalSqft / sqftPerRoll);

	// Output results
	totalSqftOutput.textContent = totalSqft;
	// rollsNeededOutput.textContent = rollsNeeded;
	resultsContainer.style.display = "block";
});
