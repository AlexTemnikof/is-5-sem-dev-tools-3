/**
 *@description Данный скрипт отвечает за события наведения мыши и нажатия на кнопку
 */


const Btn = document.querySelectorAll('button')

addButtonHandlers(Btn);

/**
 *
 * @param btn - кнопка
 * @description Добавление обработчика событий наведения и нажатия на кнопку
 */
function addButtonHandlers(btn){

    for(let i = 0; i < btn.length; i++) {
        // make gray button on mouseover
        btn[i].addEventListener('mouseover', () => {
            btn[i].style.backgroundColor = 'gray';
            btn[i].style.color = 'white';
        });

        // make white buton on mouseout
        btn[i].addEventListener('mouseout', () => {
            btn[i].style.backgroundColor = "rgb(87,103,102, 0.5)";
            btn[i].style.color = 'black';
        });
    }
}
