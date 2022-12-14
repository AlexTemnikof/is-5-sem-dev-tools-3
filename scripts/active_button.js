/**
 * @Description DSADADAS
 */

window.onload
{
    /**
     * @param {let} loc - Текущее положение на саjsйте
     *
     */
    let loc = window.location.href
    /** Парсим полученный результат **/
    let cur_url = '/' + loc.split('/').pop();

    /** Проверка соответствия нахождения в документе
     * */
    if (cur_url === "/resume.html") {
        let button = document.getElementsByClassName("menu-button__home");
        for (let i = 0; i < button.length; i++) {
            button[i].style.borderLeft = '3px solid black';
            button[i].style.borderBottom = '3px solid black';
            button[i].style.background = 'grey';
            button[i].style.color = 'white';
            button[i].disabled = true;
        }
    }

    /**
     *
     */
    if (cur_url === "/friends.html") {
        let button = document.getElementsByClassName("menu-button__friends");
        for (let i = 0; i < button.length; i++) {
            button[i].style.borderLeft = '3px solid black';
            button[i].style.borderBottom = '3px solid black';
            button[i].style.background = 'grey';
            button[i].style.color = 'white';
            button[i].disabled = true;
        }
    }

    if (cur_url === "/cinema.html") {
        let button = document.getElementsByClassName("menu-button__cinema");
        for (let i = 0; i < button.length; i++) {
            button[i].style.borderLeft = '3px solid black';
            button[i].style.borderBottom = '3px solid black';
            button[i].style.background = 'grey';
            button[i].style.color = 'white';
            button[i].disabled = true;
        }
    }

    if (cur_url === "/memes.html") {
        let button = document.getElementsByClassName("menu-button__memes");
        for (let i = 0; i < button.length; i++) {
            button[i].style.borderLeft = '3px solid black';
            button[i].style.borderBottom = '3px solid black';
            button[i].style.background = 'grey';
            button[i].style.color = 'white';
            button[i].disabled = true;
        }
    }
}
