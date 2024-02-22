const text = document.querySelector('.text');
const prog = "приветствую тебя, странник";
setInterval(writeText, 50);
function writeText() {
    text.writeText = prog.slice(0, j)

    j++;

    if(j > prog.length) {
        j = 1    
    }
}

let name = prompt("кликуха на районе", "");
alert ("салам")