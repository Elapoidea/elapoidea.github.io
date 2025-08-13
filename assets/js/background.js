const container = document.getElementById('background');
const ctx = container.getContext("2d");
var style = window.getComputedStyle(container)

container.height = parseInt(style.getPropertyValue('height'));
container.width = parseInt(style.getPropertyValue('width'));


let h = container.width;
let w = container.width;
let s = 20;



let points1 = [];
let points2 = [];

let swap = false;

for (let u = 0; u < h; u ++ ) {
    let x = s*(u/w - 1/2);
    let A = -5;
    let B = 0;

    let f = x*x*x + A*x + B
    let y = Math.sqrt(f);
    let v = (-y/s + 1/2)*h;

    if (isNaN(v) && swap) {
        swap = false;
    }

    if (!isNaN(v)) {
        if (swap) {
            points1.push([u, v, (y/s + 1/2)*h])
        } else {
            points2.push([u, v, (y/s + 1/2)*h])
        }

        swap = true;
    }

}



ctx.lineWidth = 3
ctx.strokeStyle = "#22222222";

console.log(points1, points2);

ctx.beginPath();

let b = [points1[0][0], w/2, w/2]


for (p of points1) {
    ctx.moveTo(b[0], b[1])
    ctx.lineTo(p[0], p[1])

    b = p
}

ctx.stroke();


ctx.beginPath();

b = [points1[0][0], w/2, w/2]


for (p of points1) {
    ctx.moveTo(b[0], b[2])
    ctx.lineTo(p[0], p[2])

    b = p
}

ctx.stroke();


