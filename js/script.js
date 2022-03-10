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

	const word = $("#codeText").val();
	const lengthA = alphabet.length;
	const lengthW = word.length;
	
	const shift = parseInt(Number($("#secondnumber").val()), Number($("#firstnumber").val()));
	let decyrptedCode = "";

	for (let i = 0; i < lengthW; i++) {
		for (let x = 0; x < lengthA; x++) {
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
		copyText(750);

	} else $(".codeDecrypte").hide();

}

$(document).ready(function () {

	$('.closeWindow').click(function () {
		$level = $(this).attr("parent");
		$obj = $(this);
		for ($i = 0; $i < $level; $i++)
			$obj = $obj.parent();

		$obj.animate({
			"opacity": 0.0
		}, 150, function () {
			$obj.css({
				"display": "none"
			});
		});

	});

	$('.author').click(function () {

		$('#author').css({
			"display": "block"
		})
		$('#author').animate({
			"opacity": "1.0"
		}, 200)

	});

	$('#decryptStart').click(function () {
		decryptStart();
	});

	$('.codeDecrypte').click(function () {
		copyText(1500);
	});

});