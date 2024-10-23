const map = document.getElementById('map_layer');
const mapCtx = map.getContext('2d');

let characterX = 50;
let characterY = 50;

const zoom = 3;

const mapImage = new Image();
mapImage.src = 'map.png';

mapImage.onload = () => {
    drawMap();
}

function resizeCanvas() {
    map.width = window.innerWidth;
    map.height = window.innerHeight;
    drawMap();
}

function updateMapPosition(x, y) {
    characterX = x;
    characterY = y;
    drawMap();
}

function drawMap() {
    mapCtx.clearRect(0, 0, map.width, map.height);
    mapCtx.drawImage(
        mapImage,
        characterX - (map.width / (2 * zoom)),
        characterY - (map.height / (2 * zoom)),
        map.width / zoom,
        map.height / zoom,
        0,
        0,
        map.width,
        map.height
    );
}

window.addEventListener('load', () => {
    resizeCanvas();
});

window.addEventListener('resize', () => {
    resizeCanvas();
});