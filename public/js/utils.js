function numSuf(num) {
	var index = (num.toString().length - 1);
	var n = num.toString().substring(index);
	switch (n) {
		case '1':
			return 'st';

		case '2':
			return 'nd';

		case '3':
			return 'rd';

		default:
			return 'th';
	}
}

function log(m) {
	console.log(m);
}

function msg(m) {
	alert(m); 
}

function capitalizeFirstCharacter(word) {
	var word_split = null,
		line = "";
	if (word.trim().toLowerCase() === 'id' ||
		word.trim().toLowerCase() === 'ssn' ||
		word.trim().toLowerCase() === 'sku' ||
		word.trim().toLowerCase() === 'vm' ||
		word.trim().toLowerCase() === 'mac' ||
		word.trim().toLowerCase() === 'imei' ||
		word.trim().toLowerCase() === 'os' ||
		word.trim().toLowerCase() === 'atm' ||
		word.trim().toLowerCase() === 'pa') {
		word = word.toUpperCase();
	} else if (word.match(/[-]/)) {
		if (null !== (word_split = word.split(['-'])).length > 0) {
			for (var i = 0; i<word_split.length; i++) {
				if (i < (word_split.length - 1)) {
					line += word_split[i].substring(0,1).toUpperCase() + word_split[i].substring(1) + '-';
				} else {
					line += word_split[i].substring(0,1).toUpperCase() + word_split[i].substring(1);
				}
			}
			return line;
		}
	} else if (word.match(/[ ]/)) {
		if (null !== (word_split = word.split([' '])).length > 0) {
			for (var i = 0; i<word_split.length; i++) {
				if (i < (word_split.length - 1)) {
					line += word_split[i].substring(0,1).toUpperCase() + word_split[i].substring(1) + ' ';
				} else {
					line += word_split[i].substring(0,1).toUpperCase() + word_split[i].substring(1);
				}
			}
			return line;
		}
	} else {
		return word.substring(0,1).toUpperCase() + word.substring(1);
	}
	return word;
}

function cfc(word) {
	return capitalizeFirstCharacter(word);
}
