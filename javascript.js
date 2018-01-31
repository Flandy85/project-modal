let modal = document.querySelector('#modal');
//Open modal function
function launchModal() {
	 modal.classList.remove('modal');
	 modal.classList.add('open-modal');
	 console.log(modal);
}

//Close modal function
function closeModal() {
	modal.classList.remove('open-modal');
	modal.classList.add('modal');
}