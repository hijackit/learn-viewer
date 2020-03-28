import { Panel } from "./Panel";

const thumbnailA = document.getElementById('thumbnail-A');
const thumbnailB = document.getElementById('thumbnail-B');
const thumbnailC = document.getElementById('thumbnail-C');
const thumbnailD = document.getElementById('thumbnail-D');
const thumbnailE = document.getElementById('thumbnail-E');

const canvas: HTMLCanvasElement | null = <HTMLCanvasElement>document.getElementById('main-canvas');
canvas.width = canvas.scrollWidth
canvas.height = canvas.scrollHeight

let ctx = canvas.getContext('2d')!;

thumbnailA!.onclick = () => {
    open('images/hand_0.jpg')
}
thumbnailB!.onclick = () => {
    open('images/dino.jpg')
}
thumbnailC!.onclick = () => {
    open('images/sf.jpg')
}
thumbnailD!.onclick = () => {
    open('images/rock.jpg')
}
thumbnailE!.onclick = () => {
    open('images/camping.jpg')
}

let panel = new Panel(canvas);

function open(url:string) {
    fetch(url)
    .then(response => response.blob())
    .then(blob => createImageBitmap(blob))
    .then(bitmap => {
        panel.setImage(bitmap);
        panel.fit();
    })
}

function render() {
    panel.render(ctx);
}

function loop() {
    render()
    window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop);