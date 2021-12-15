let screen = document.querySelector('#tela');
let clear = document.querySelector('#clear');
let userSelec = document.querySelector('.color.userSelect')
let ctx = screen.getContext('2d');
let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
userSelec.addEventListener('change', mudarSelect);

function mudarSelect() {
    userSelec.setAttribute('data-color', userSelec.value)
}
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active')
}
function mouseDownEvent(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}
function mouseMoveEvent(e) {
    if (canDraw) {
        draw(e.pageX, e.pageY)
    }
}
function mouseUpEvent() {
    canDraw = false;
}
function value() {
    var valor = document.querySelector('#value').value
    ctx.lineWidth = valor;
}
function draw(x, y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;
    ctx.beginPath();
    value()
    ctx.lineJoin = 'round';
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();
    mouseX = pointX;
    mouseY = pointY;
}
function limparTela() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

