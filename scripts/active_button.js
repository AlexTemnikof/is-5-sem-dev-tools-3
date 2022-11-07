window.onload
{
    let loc = window.location.href
    let cur_url = '/' + loc.split('/').pop();

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
