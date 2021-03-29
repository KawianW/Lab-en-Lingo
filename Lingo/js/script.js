var inColumn = 1;
var inRow = 1;
var lingoWord = words[Math.floor(Math.random() * words.length)];
var guess = [];
var correctLetters = [lingoWord.charAt(0), " ", " ", " ", " "];
console.log(lingoWord);

const button1 = document.getElementById("button_1");
button1.onclick = create;


function create(){
	//Maakt de rijen aan
	for(i = 1; i < 6; i++){
		var Row = document.createElement("div");
		Row.id = "row_" + i;
		Row.setAttribute("class", "row");

	//Maakt de kolommen aan
		for(j = 1; j < 6; j++){
			var Column = document.createElement("div");
			Row.appendChild(Column);
			Column.id = "column_" + i + "." + j;
			Column.setAttribute("class", "column");

			var paragraph = document.createElement("p");
			paragraph.style.position = "absolute";
			paragraph.style.margin = "0";
			paragraph.style.lineHeight = "85px";
			paragraph.style.textAlign = "center";
			paragraph.style.width = "98px";
			Column.appendChild(paragraph);
		}
        document.getElementById("gameContainer").appendChild(Row);
		key();
	}
}

function key() {
	//Zorgt ervoor dat je het toetsenbord kan gebruiken en hierdoor later laat toevoegen aan de DIV
	document.onkeypress = function(event){
		//var key_press = String.fromCharCode(event.key);
		var key_press = String.fromCharCode(event.keyCode);
		if (key_press.match(/[a-z]/i)){
			document.getElementById("column_" + inRow + "." + inColumn).firstChild.style.opacity = "1";
			document.getElementById("column_" + inRow + "." + inColumn++).firstChild.innerHTML = key_press;
			guess.push(key_press);
			console.log(guess.length);
			console.log(guess);
			next();
		}else{
			alert("Dit is geen letter!");
		}
	}
}

function check(){
	//Checkt ofdat de letter van het woord gelijk is aan het de letter van het geraden woord, als dit zo is maakt het de achtergrond groen
	var answer = lingoWord.split("");
	console.log("answer");
	for(var i = 0; i < answer.lenght; i++){
		if(guess[i] == answer[i]){
			correctLetters[i] = answer[i];
			document.getElementById("column_" + inRow + "." + (i + 1)).style.backgroundColor = "green";
			guess[i] = " ";
			answer[i] = "*";
		}
	}
	if(checkAllValues(answer) == true){
		setTimeout(function(){
			alert("Goed gedaan!");
			window.location.reload();
		},500);
	}
	//Checkt ofdat de letter die je hebt ingevoerd ergens in het woord staat, als dit zo is dan maakt hij de achtergrond geel
	for(var i = 0; i < answer.length; i++){
		for(var j = 0; j < answer.length; j++){
			if (guess[i] == answer[j]){
				document.getElementById("column_" + inRow + "." + (i + 1)).style.backgroundColor = "yellow";
				guess[i] = " ";
				answer[j] = "*";
			}
		}
	}
}

// Zorgt ervoor dat je opnieuw een woord kan raden
function next(){
	if (inColumn > 5){
		setTimeout(function(){
			inColumn = 1;
			inRow++;
			if(inRow > 5){
				alert("Hey jammer man, je hebt het goed gedaan maar het woord was " + lingoWord + " probeer het anders nog eens ;)");
				location.reload();
			}
			addCorrectLetter();
			guess.splice(0, guess.length);}, 1000);
	}
}

// Laat de eerste letter van het woord zien
function addCorrectLetter() {
	for(i = 1; i < 6; i++){
		document.getElementById("column_" + inRow + "." + i).firstChild.innerHTML = correctLetters[i-1];
		document.getElementById("column_" + inRow + "." + i).firstChild.style.opacity = "0.5";
	}
}