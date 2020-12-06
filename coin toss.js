var buttons = document.querySelectorAll(".btn");
var replaybtn = document.querySelector("#repaly");

var playerchoice ;
var computerchoice ;
var coinface="Heads";
var playerscore = 0;
var computerscore = 0;

replaybtn.addEventListener("click",function(){
var coinface="Heads";
playerscore = 0;
computerscore = 0;
document.getElementById("Tails").classList.add("invisible");
document.getElementById("Heads").classList.remove("invisible");
document.getElementById("playerchoice").textContent = " ";
document.getElementById("computerchoice").textContent = " " ;
document.getElementById("playerscore").textContent = playerscore;
document.getElementById("computerscore").textContent = computerscore;
document.getElementById("game").classList.remove("invisible");
document.getElementById("end").classList.add("invisible");
});
buttons.forEach(item=> {
item.addEventListener("click",function(e){
if (e.target.innerText == "Heads"){
	playerchoice ="Heads";
	computerchoice = randomselection();
	document.getElementById("playerchoice").textContent = playerchoice;
	document.getElementById("computerchoice").textContent = computerchoice ;
	cointoss();
}
if (e.target.innerText == "Tails"){
	playerchoice ="Tails";
	computerchoice =randomselection();
document.getElementById("playerchoice").textContent = playerchoice;
document.getElementById("computerchoice").textContent = computerchoice;
cointoss();
}
});
});

function cointoss(){
	var count = 0;
	var stop = Math.floor((Math.random()*10)+4); 
	var mytoss = setInterval(function(){ 
		if (count == stop){
			clearInterval(mytoss);
			setscore();

		}
		else if (count%2==0){
			document.getElementById("Heads").classList.add("invisible");
			document.getElementById("Tails").classList.remove("invisible");
			coinface="Tails";
			count++;
		}
		else{
			document.getElementById("Tails").classList.add("invisible");
			document.getElementById("Heads").classList.remove("invisible");
			coinface="Heads";
			count++;
		}
     }, 200);

	
}

function setscore(){
	if (coinface == playerchoice){
    playerscore++;
    document.getElementById("playerscore").textContent = playerscore;
if (playerscore == 5){
	document.getElementById("state").textContent = "Wiiin !! ";
    replay();
}
	}
	if (coinface == computerchoice) {
computerscore++;
document.getElementById("computerscore").textContent = computerscore;
	
	if (computerscore == 5 && playerscore < 5){
	document.getElementById("state").textContent = " Lose :( ";
    replay();
}}
}

function replay(){
document.getElementById("game").classList.add("invisible");
document.getElementById("end").classList.remove("invisible");
}

function randomselection (){
	var select = [0,1];
	if (select[Math.floor(Math.random()*2)]==0){
    return "Heads";
	}
	else {
    return "Tails";
	}
}

