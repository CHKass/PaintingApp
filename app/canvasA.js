/*
Print Generation :
The purpose here is to generate random colours and depths for each bar. So that it will be possible to run the sequence any number of times and get completely different finished prints or 'paintings'.
*/

// Declared variables (named whatever you want) which need to be 'called' by a function.
var barColorOne, barHeightOne, barColorTwo, barHeightTwo, barColorThree, barHeightThree, barColorFour, barHeightFour, barColorFive, barHeightFive, activeGeneration;

// Starts the sequence by calling the 'init' function which is the last bit of code (also used to restart the game) and follows the D(on't)R(epeat)Y(ourself) philosophy. 
init();

// Clicking START button starts up the 'random' function which generates random numbers
document.querySelector('.btn-compose').addEventListener('click', function() {
	if(activeGeneration) {
// Random number (jQuery supplied random number generator)		
		var barColorOne = Math.floor(Math.random() * 6);
		var barHeightOne = Math.floor(Math.random() * 20);
		var barColorTwo = Math.floor(Math.random() * 6);
		var barHeightTwo = Math.floor(Math.random() * 20);
		var barColorThree = Math.floor(Math.random() * 6);
		var barHeightThree = Math.floor(Math.random() * 20);
		var barColorFour = Math.floor(Math.random() * 6);
		var barHeightFour = Math.floor(Math.random() * 20);
		var barColorFive = Math.floor(Math.random() * 6);
		var barHeightFive = Math.floor(Math.random() * 20);
			console.log(barColorOne, barHeightOne, barColorTwo, barHeightTwo, barColorThree, barHeightThree, barColorFour, barHeightFour, barColorFive, barHeightFive); 
	}

// Display the result – use this variable to do two things 1. display the colour of each bar (from 5 choices), and 2. choose the height of each bar (from 20 choices in units of 5%.
var barHeight = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500];
var barColor = ['962f34', '004023', '0a4159', '9b6c21', '724f10', 'ece5da'];

// These variables translate the random numbers into colors and sizes
var oneBar = barColor[barColorOne];
var oneSize = barHeight[barHeightOne];
var twoBar = barColor[barColorTwo];
var twoSize = barHeight[barHeightTwo];
var threeBar = barColor[barColorThree];
var threeSize = barHeight[barHeightThree];
var fourBar = barColor[barColorFour];
var fourSize = barHeight[barHeightFour];
var fiveBar = barColor[barColorFive];
var fiveSize = barHeight[barHeightFive];
	console.log(oneBar, oneSize, twoBar, twoSize, threeBar, threeSize, fourBar, fourSize, fiveBar, fiveSize);

// Code for the displayed colour bars on the canvas
	var bara = document.getElementById('bar-0');
		bara.style.backgroundColor = '#' + oneBar;
		bara.style.height = oneSize + 'px';
	var barb = document.getElementById('bar-1');
		barb.style.backgroundColor = '#' + twoBar;
		barb.style.height = twoSize + 'px';
	var barc = document.getElementById('bar-2');
		barc.style.backgroundColor = '#' + threeBar;
		barc.style.height = threeSize + 'px';
	var bard = document.getElementById('bar-3');
		bard.style.backgroundColor = '#' + fourBar;
		bard.style.height = fourSize + 'px';
	var bare = document.getElementById('bar-4');
		bare.style.backgroundColor = '#' + fiveBar;
		bare.style.height = fiveSize + 'px';
			
// Code for the two lists showing color and height of each bar in text form
		document.querySelector('#color-0').innerHTML = '#' + oneBar;
		document.querySelector('#color-1').innerHTML = '#' + twoBar;
		document.querySelector('#color-2').innerHTML = '#' + threeBar;
		document.querySelector('#color-3').innerHTML = '#' + fourBar;
		document.querySelector('#color-4').innerHTML = '#' + fiveBar;

		document.querySelector('#size-0').innerHTML = (oneSize/5) + '%';
		document.querySelector('#size-1').innerHTML = (twoSize/5) + '%';
		document.querySelector('#size-2').innerHTML = (threeSize/5) + '%';
		document.querySelector('#size-3').innerHTML = (fourSize/5) + '%';
		document.querySelector('#size-4').innerHTML = (fiveSize/5) + '%';
})

//Clicking CLEAR button starts up the 'init' function which also sets everything back to 0.
document.querySelector('.btn-clear').addEventListener('click', init);


		function init() {
				barColor = 0;
				barHeight = 0;
				activeGeneration = true;

		// Code for the displayed colour bars at startup
				document.querySelector('#bar-0').style.backgroundColor = '#ece5da';
				document.querySelector('#bar-1').style.backgroundColor = '#ece5da';
				document.querySelector('#bar-2').style.backgroundColor = '#ece5da';
				document.querySelector('#bar-3').style.backgroundColor = '#ece5da';
				document.querySelector('#bar-4').style.backgroundColor = '#ece5da';

				document.querySelector('#size-0').style.display = 'height:' + 'px';
				document.querySelector('#size-1').style.display = 'height:' + 'px';
				document.querySelector('#size-2').style.display = 'height:' + 'px';
				document.querySelector('#size-3').style.display = 'height:' + 'px';
				document.querySelector('#size-4').style.display = 'height:' + 'px';

		// Code for the two lists showing color and height of each bar in text form
				document.querySelector('#color-0').innerHTML = 'Colour of First Bar';
				document.querySelector('#color-1').textContent = 'Colour of Second Bar';
				document.querySelector('#color-2').textContent = 'Colour of Third Bar';
				document.querySelector('#color-3').textContent = 'Colour of Fourth Bar';
				document.querySelector('#color-4').textContent = 'Colour of Fifth Bar';

				document.querySelector('#size-0').innerHTML = 'Size of First Bar';
				document.querySelector('#size-1').textContent = 'Size of Second Bar';
				document.querySelector('#size-2').textContent = 'Size of Third Bar';
				document.querySelector('#size-3').textContent = 'Size of Fourth Bar';
				document.querySelector('#size-4').textContent = 'Size of Fifth Bar';
		}
	

// End of canvasA.js code.


