const map = document.getElementById('map_layer');
const ctx = map.getContext('2d');

let characterX = 50;
let characterY = 50;

const zoom = 3;

const mapImage = new Image();
mapImage.src = 'map.png';

mapImage.onload = () => {
    ctx.drawImage(mapImage, 0, 0, map.width, map.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(characterX, characterY, 10, 10);
}

function resizeCanvas() {
    map.width = window.innerWidth;
    map.height = window.innerHeight;
    drawMap();
}

function updateMapPosition(x, y) {
    characterX = x;
    characterY = y;d
    drawMap();
}

function drawMap() {
    ctx.clearRect(0, 0, map.width, map.height);
    ctx.drawImage(
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