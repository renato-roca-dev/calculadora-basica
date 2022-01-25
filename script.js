screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
out = document.getElementById("out");
let answer = "";
for(item of buttons){
    item.addEventListener("click", (e) =>{
        buttonValue = e.target.innerHTML;
        if (buttonValue == "X") {
            buttonValue = "*";
            answer += buttonValue;
            screen.value = answer;
        } else if (buttonValue == "C"){
            answer = "";
            screen.value = answer;
        } else if (buttonValue == "DEL"){
            let del = screen.value.substring(0,screen.value.length -1);
            screen.value = del;
        } else if (buttonValue == "="){
            screen.value = eval(screen.value);
        } else {
            answer += buttonValue;
            screen.value = answer;
        }
    })
}
