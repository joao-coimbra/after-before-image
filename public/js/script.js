let $range = document.querySelector('input'),
    $imgBox = document.querySelector('.image');

function widthConfig() {
    $imgBox.style.width = `${$range.value}px`;
}

window.addEventListener('load', widthConfig);

$range.addEventListener('input', widthConfig);