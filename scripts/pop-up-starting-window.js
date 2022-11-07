//todo: make cookies

function ShrekLove_yes(){
    document.getElementsByClassName('pop-up-window')[0].style.display = "none";
    document.getElementsByClassName('menu')[0].style.visibility = "visible";
}

function ShrekLove_not(){
    window.open('https://www.kinopoisk.ru/film/430/', '_blank');
    let el = document.getElementsByClassName("pop-up-window__question");
    el[0].innerText = "А теперь?";
    el[0].style.marginLeft = "35%";
    el[0].style.marginRight = "35%";
}
