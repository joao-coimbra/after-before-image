import { addEventListenerAll } from './utilities.js';

let $range = document.querySelector('input'),
    $imgBox = document.querySelector('.image');

function widthConfig() {
    $imgBox.style.width = `${$range.value}px`;
}

window.addEventListener('load', () => {
    widthConfig();
})

addEventListenerAll(window, "load resize", () => {
    
    if (window.innerWidth <= 480) {
        $range.value = 175;
        $range.max = 350;
    } else {
        $range.value = 200;
        $range.max = 400;
    }

});

$range.addEventListener('input', widthConfig);