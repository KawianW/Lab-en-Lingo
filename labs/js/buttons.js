var color = ["red", "blue", "purple", "black"];
var array = [];

for(i=1; i<31; i++){
	var but = document.createElement("button");
	but.setAttribute("class", "knop");
	but.innerHTML = ""+i;
	but.id = "button_" + i;
	but.setAttribute("onclick", "change(this)");
	document.getElementById("container").appendChild(but);
	array[but.id] = 0;
}

function change(but){
	if(array[but.id] == color.length){
		document.getElementById("container").removeChild(but);
	}
	but.style.backgroundColor = color[array[but.id]];
	array[but.id]++;
}