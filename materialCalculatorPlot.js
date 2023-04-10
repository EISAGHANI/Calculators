const form = document.getElementById("sod-form");
const totalSqftOutput = document.getElementById("total-sqft");
// const rollsNeededOutput = document.getElementById("rolls-needed");
const resultsContainer = document.getElementById("results");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Get input values
	const area = parseFloat(document.getElementById("area").value);
	const housearea = parseFloat(document.getElementById("housearea").value);
    const driveawayarea = parseFloat(document.getElementById("driveawayarea").value);
    const deckarea = parseFloat(document.getElementById("deckarea").value);
	// const sqftPerRoll = parseFloat(document.getElementById("sqft-per-roll").value);

	// Calculate total square footage and rolls needed
	const totalSqft = area + housearea;
	// const rollsNeeded = Math.ceil(totalSqft / sqftPerRoll);

	// Output results
	totalSqftOutput.textContent = totalSqft;
	// rollsNeededOutput.textContent = rollsNeeded;
	resultsContainer.style.display = "block";
});
