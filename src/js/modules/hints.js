function hints() {
	// Clicking on the buttons with hints
	const infoBtns = document.querySelectorAll('.info-dot')
	const infoHints = document.querySelectorAll('.info-hint')

	for (let btn of infoBtns) {
		btn.addEventListener('click', showHint)
	}

	function showHint(e) {
		e.stopPropagation()
		for (let hint of infoHints) {
			hint.classList.add('none')
		}
		this.parentNode.querySelector('.info-hint').classList.toggle('none')
	}

	// Close the hints by clicking on the document
	document.addEventListener('click', closeHints)

	function closeHints() {
		for (let hint of infoHints) {
			hint.classList.add('none')
		}
	}

	// Stoping propogation of event when clicking on the hints
	for (let hint of infoHints) {
		hint.addEventListener('click', (e) => e.stopPropagation())
	}
}

export default hints