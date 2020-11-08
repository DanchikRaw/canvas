let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let color ='black';
document.getElementById('color').oninput = function () {
    color = this.value;
}

canvas.onmousedown = function (e) {
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    canvas.onmousemove = function (e) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }

    canvas.onmouseup = function () {
        canvas.onmousemove = null;
    }
    canvas.onmouseleave = function () {
        canvas.onmousemove = null;
    }
}