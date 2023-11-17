const timerId = setInterval(changeColor, 20);
let red = 255;
let blue = 0;
let green = 0;
let ccolor = "red"
const elements = document.querySelectorAll('.quest');
let rightAnswer = 0;

function changeColor() {

    if(ccolor == "lastRed"){
    red = red + Math.floor(Math.random() * -10);
    }
    else if(ccolor == "lastGreen"){
    green = green + Math.floor(Math.random() * -10);
    }
    else if(ccolor == "lastBlue"){
    blue = blue + Math.floor(Math.random() * -10);
    }
    else if(ccolor == "red"){
    red = red + Math.floor(Math.random() * 10);
    }
    else if(ccolor == "green"){
    green = green + Math.floor(Math.random() * 10);
    }
    else if(ccolor == "blue"){
    blue = blue + Math.floor(Math.random() * 10);
    }
    
    if (red >= 255 && ccolor == "red") {
        ccolor = "lastRed"
    }
    else if (blue >= 255 && ccolor == "blue") {
        ccolor = "lastBlue"
    }
    else if (green >= 210 && ccolor == "green") {
        ccolor = "lastGreen"
    }
    else if (green <= 90 && ccolor == "lastGreen") {
        ccolor = "red"
        green = 0
        red = 90
    }
    else if (blue <= 90 && ccolor == "lastBlue") {
        ccolor = "green"
        blue = 0
        green = 90
    }
    else if (red <= 90 && ccolor == "lastRed") {
        ccolor = "blue"
        red = 0
        blue = 90
    }
    
    document.getElementById("h1").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("bio").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("project").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("Undertale").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("Deltarune").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("music").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("music1").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("music2").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("music3").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("music4").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("music5").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("music5").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("questions").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
}
function startquest(){
    const elements2 = document.querySelectorAll('.every');

    elements2.forEach(element => {
    element.style.display = 'none';
});
    const elements3 = document.querySelectorAll('.quest');

    elements3.forEach(element => {
    element.style.display = 'block';
});
    setTimeout(quest, 50)
}

function quest(){
    const questions = ["Псевдоним композитора в данный момент", "Назови любой проект композитора", "В каком году был создан Undertale?", "Назови любой стиль музыки из игры UnderTale", "Назови любое произведение фокса, названное мной ранее"];
    const answers = [["Toby Fox", "3--=", "3--=", "3--=", "3--="], ["Undertale", "Deltarune", "3--=", "3--=", "3--="], ["2014", "3--=", "3--=", "3--=", "3--="], ["8-битный", "Оркестровый", "Электронный", "3--=", "3--="], ["megalovania", "save the world", "finale", "spear of justice", "spider dance"]];
    for(let i = 0; i < 5; i++){
        let trueAnswer = false;
        answer = prompt(questions[i]);
        if(answer == null){
            answer = ""
        }
        for(let i2 = 0; i2 < 5; i2++){
            if(answer.toLowerCase() == answers[i][i2].toLowerCase()){
                alert("Верно!");
                rightAnswer++;
                trueAnswer = true;
                break
            }
        }
        if(!trueAnswer){
            alert("Ответ не верный!");
        }
    }
    document.getElementById("a1").innerText = "Правильных ответов: " + rightAnswer;
    document.getElementById("thanks").style.display = "block"
}
