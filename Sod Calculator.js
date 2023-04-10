const form = document.getElementById("sod-form");
const totalSqftOutput = document.getElementById("total-sqft");
const resultsContainer = document.getElementById("results");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Get input values
	const length = parseFloat(document.getElementById("length").value);
	const width = parseFloat(document.getElementById("width").value);
	var widthMeasurement = document.getElementById("width-type")
  // checks to see which measurement is selected and converts it into metres 
  	if (widthMeasurement = "Centimeters") {
    	var widthInMetres = width / 100
 	 } else if (widthMeasurement = "inches") {
    	var widthInMetres = width * 39.37
 	 } else if (widthMeasurement = "feet") {
   	 	var widthInMetres = width * 3.28084
  	} else if (widthMeasurement = "yards") {
    	var widthInMetres = width * 1.09361
  	} else if (widthMeasurement = "metres") {
    	var widthInMetres = width
  	}


	// Calculate total square footage and rolls needed
	const totalSqft = length * widthInMetres;


	// Output results
	totalSqftOutput.textContent = totalSqft;
	resultsContainer.style.display = "block";
});
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clear);

  