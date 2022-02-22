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

function number_First_Second(a, b){
    let c;
    switch(a){
        case 8:{ 
            c = parseInt(b,8);
            break;
		}
        case 10:{
            c = b;
            break;
		}
        case 16:{
            c = parseInt(b,16);
            break;
		}
        default:{
            c = b;
            break;
		}
    }
    return c;
}

function decryptStart() {

	const alphabet = "abcdefghijklmnopqrstuvwxyz";

	let word = $("#codeText").val();
	let firstnumber = Number($("#firstnumber").val());
	let secondnumber = Number($("#secondnumber").val());
	let shift = number_First_Second(firstnumber, secondnumber);
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
		$('#emoteWindow').animate({
			"margin-top": 180
		}, 100);
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