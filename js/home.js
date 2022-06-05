/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() 
{
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") 
  {
    x.className += " responsive";
  } 
  else 
  {
    x.className = "topnav";
  }
}

function randomtext() 
{
	var randomtxt =
	[
		'"Making games is easier than making websites"',
		'"Data has been saved"',
		'"Circa 2022"',
		'"Does not compute"',
		'"Set oven to 425F, then bake lightmaps for 30 minutes"',
		'"CSS, the bain of my existence"',
		'"Just open Gamemaker and type make_game()"',
		'"Take advantage of lazy evaluation"',
		'"Known from coast to coast like butter and toast"',
		'"With unpredictable games and antiquities"',
		'"No other place in the contiguous United States"',
		'"Only the professionals use COBOL"',
		'"Don\'t overcomplicate it"',
		'"Why doesn\'t Lua have switch statements..."',
		'"fps_real is not a perfect measurement of performance"',
		'"Local Unity programmer claims he is "not worried"'+
		'<br>about the 200 warnings and 74 errors"',
		'"Are you seriously refreshing the page for these?"',
		'"HTML is not a programming language"',
		'"Driver.java:329: error: ; expected"',
		'"Hold on... (busy for 1:42)..."',
		'"Now 6502 compatible!"',
		'10 PRINT "SPAM"'+
		'<br>20 GOTO 10'
	];
	return randomtxt[Math.floor((Math.random() * randomtxt.length))];
}
    
function loadRandomText()
{
	document.getElementById("footerMessage").innerHTML = randomtext();
}
    
    window.onload = loadRandomText;