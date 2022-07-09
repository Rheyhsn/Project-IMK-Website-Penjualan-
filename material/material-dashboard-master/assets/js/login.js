const inputs = document.querySelectorAll('.input');

function focusFunch(){
	let parent = this.parentNode.parentNode;
	parent.classList.add('focus');
}

function blurFunch(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove('focus');
	}
}
inputs.forEach(input =>{
	input.addEventListener('focus', focusFunch);
	input.addEventListener('blur', focusFunch);
});