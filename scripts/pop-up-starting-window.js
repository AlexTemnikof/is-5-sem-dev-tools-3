/**
 * @description Данный скрипт отвечает за появление всплывающего окна.
 */

/**
 * @description Данная функция отвечает за нажатие на кнопку "Yes" в всплывающем окне
 */
function ShrekLove_yes(){
    document.getElementsByClassName('pop-up-window')[0].style.display = "none";
    document.getElementsByClassName('menu')[0].style.visibility = "visible";
}

/**
 * @description Данная функция отвечает за нажатие на кнопку "No" в всплывающем окне
 */

function ShrekLove_not(){
    window.open('https://www.kinopoisk.ru/film/430/', '_blank');
    let el = document.getElementsByClassName("pop-up-window__question");
    el[0].innerText = "А теперь?";
    el[0].style.marginLeft = "35%";
    el[0].style.marginRight = "35%";
}
