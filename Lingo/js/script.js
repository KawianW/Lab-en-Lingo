
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
	}
}