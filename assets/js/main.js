const myForm = document.querySelector("form");
const inputText = document.querySelector("#text");
const inputTrennung = document.querySelector("#trennung");
const outputBeforeDisplay = document.querySelector("#outputBefore");
const outputAfterDisplay = document.querySelector("#outputAfter");

myForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const whoChecked = document.querySelector('input[name="cutOption"]:checked');

	let text = inputText.value;
	let trennung = inputTrennung.value;
	let position = text.indexOf(trennung);
	let firstString, secondString;

	if (position !== -1) {
		if (whoChecked.value === "before") {
			firstString = text.slice(0, position);
			secondString = text.slice(position);
		} else if (whoChecked.value === "after") {
			firstString = text.slice(0, position + trennung.length);
			secondString = text.slice(position + trennung.length);
		} else {
			alert("Something went wrong");
			return;
		}
	} else {
		firstString = "Das Zeichen konnte leider nicht gefunden werden.";
		secondString = text;
	}
	outputBeforeDisplay.innerHTML = firstString;
	outputAfterDisplay.innerHTML = secondString;
});
