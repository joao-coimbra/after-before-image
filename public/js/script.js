import { addEventListenerAll } from './utilities.js';

let $range = document.querySelector('input'),
    $imgBox = document.querySelector('.image');

function widthConfig($value) {

    let $size = $value * $range.value / 100;

    $imgBox.style.width = `${$size}px`;

}

function verifyWidth() {
    if (window.innerWidth <= 480) {
        widthConfig(350);
    } else {
        widthConfig(400);
    }
}

addEventListenerAll(window, "load resize", verifyWidth);

$range.addEventListener('input', verifyWidth);