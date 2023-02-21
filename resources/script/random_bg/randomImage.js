const fs = require('fs');
const Cookies = require('js-cookie');
const files = fs.readdirSync('../../images/backgrounds');

function getCookie(name) {
	// get cookie
	const cookie = Cookies.get(name);

	// if cookie doesn't exist, creates it and reruns function
	if (!cookie) {
		Cookies.set('previousImages', JSON.stringify([]), { expires: 7 });
		return getCookie('previousImages');
	}

	// runs setCookie function
	setCookie(cookie);
}

function setCookie(cookie) {
	// choose random image file
	var chosenFile = `../../images/backgrounds/${
		files[Math.floor(Math.random() * files.length)]
	}`;

	// parse array of stringified data, attained from cookie
	const imageArr = JSON.parse(cookie);

	// loops until new image is found (which is not present in array)
	while (imageArr.includes(chosenFile) && imageArr.length < 100) {
		chosenFile = `../../images/backgrounds/${
			files[Math.floor(Math.random() * files.length)]
		}`;
	}

	// adds chosen image to array
	imageArr.unshift(chosenFile);

	// removes all but 5 of the first array entries
	for (let i = imageArr.length - 1; i > 4; i--) {
		imageArr.pop();
	}

	// set cookie with new array of images
	Cookies.set('previousImages', JSON.stringify(imageArr), { expires: 7 });

	// run updateBackground function
	updateBackground(chosenFile);
}

function updateBackground(file) {
	document.documentElement.style.setProperty(
		'--wallpaper',
		`url(../images/backgrounds/${file})`
	);
}
getCookie('previousImages');
