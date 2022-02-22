function copyCode() {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($("#decyrptedCode").html()).select();
	document.execCommand("copy");
	$temp.remove();
}

function copyText(time) {

	$(".copyText").show();

	const clearCopy = setInterval(() => {
		$(".copyText").hide();
		clearInterval(clearCopy);
	}, time);

	copyCode();

}

function decryptStart() {

	const alphabet = "abcdefghijklmnopqrstuvwxyz";

	let word = $("#codeText").val();
	let firstnumber = Number($("#firstnumber").val());
	let secondnumber = Number($("#secondnumber").val());
	let shift = parseInt(secondnumber, firstnumber);
	let decyrptedCode = "";

	let lengthA = alphabet.length;
	let lengthW = word.length;

	for (var i = 0; i < lengthW; i++) {
		for (var x = 0; x < lengthA; x++) {
			if (word.charAt(i) === alphabet.charAt(x)) {
				let newAlphabet = x + shift;
				if (newAlphabet >= lengthA) {
					while (newAlphabet >= lengthA) {
						newAlphabet = newAlphabet - lengthA;
					}
				}
				decyrptedCode += alphabet.charAt(newAlphabet);
			}
		}
	}


	if (lengthW > 0) {
		
		$(".codeDecrypte").show();
		$("#decyrptedCode").html(decyrptedCode);
		copyText(500);

	} else $(".codeDecrypte").hide();

}

$(document).ready(function () {

	$('#decryptStart').click(function () {
		decryptStart();
	});

	$('.codeDecrypte').click(function () {
		copyText(1500);
	});

});