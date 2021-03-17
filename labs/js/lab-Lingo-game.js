const word = document.getElementById("word");
const guess = document.getElementById("guess");
const column = document.getElementsByClassName("column");

function check(){
   // woord in kunnen voeren
   // woord dan checken of het klopt
   // vergelijk woord met jouw gok
   // per letter kijken of het overeen komt met het woord

    const wordValue = word.value.toLowerCase();
    const guessValue = guess.value.toLowerCase();
    // const checkedValue = guess.charAt(0);
    
    for(i = 0; i <= 4; i++){
        column[i].innerHTML = guessValue.charAt(i);
            for(j = 0; j <= 4; j++){
                if(guessValue.charAt(i) == wordValue.charAt(j)){
                    if(wordValue.charAt(i) == guessValue.charAt(i)){
                        column[i].style.backgroundColor = 'green';
                        break;
                    } else{
                        column[i].style.backgroundColor = 'yellow';
                        column[i].style.borderRadius = "50%";
                        break;
                    }
                } else {
                    column[i].style.backgroundColor = "white";
                }
            }
        }
}