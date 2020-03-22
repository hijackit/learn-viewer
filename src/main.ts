import { ImagePositionStateMachine } from "./ImagePositionStateMachine.js";

console.log('hello from typescript, hola there!')

const thumbnailA = document.getElementById('thumbnail-A');
const thumbnailB = document.getElementById('thumbnail-B');
const thumbnailC = document.getElementById('thumbnail-C');
const thumbnailD = document.getElementById('thumbnail-D');
const thumbnailE = document.getElementById('thumbnail-E');

const canvas: HTMLCanvasElement | null = <HTMLCanvasElement>document.getElementById('main-canvas');
canvas.width = canvas.scrollWidth
canvas.height = canvas.scrollHeight

let ctx = canvas.getContext('2d')!;

let image: ImageBitmap|null;
let position:ImagePositionStateMachine = new ImagePositionStateMachine();

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

function open(url:string) {
    fetch(url)
    .then(response => response.blob())
    .then(blob => createImageBitmap(blob))
    .then(retrievedBitmap => {
        image = retrievedBitmap;
        

        let scaleX = canvas!.width/image.width;
        let scaleY = canvas!.height/image.height;

        position.scale = scaleX < scaleY ? scaleX : scaleY;

        let imageCenterX = image.width*position.scale/2;
        let imageCenterY = image.height*position.scale/2;

        let canvasCenterX = canvas!.width/2;
        let canvasCenterY = canvas!.height/2;

        position.tx = canvasCenterX - imageCenterX;
        position.ty = canvasCenterY - imageCenterY;
    })
}



function render() {
    if(image == null)
        return;

    ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);

    let width = image.width * position.scale
    let height = image.height * position.scale

    ctx.drawImage(image!, position.tx, position.ty, width, height); 
}

function loop() {
    render()
    window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop);

let mousedown: boolean = false;
let dragging: boolean = false;

canvas.onmousedown = (evt) => {
    mousedown = true;
}

canvas.onmousemove = (evt) => {
    if(mousedown) {
        if(dragging){
            position.drag(evt.offsetX, evt.offsetY)
        } else {
            position.dragStart(evt.offsetX, evt.offsetY)
        }
        dragging = true;
    }
}

canvas.onmouseup = (evt) => {
    mousedown = false;
    if(dragging) {
        console.log('stop dragging')

    } else {
        console.log('click!')
    }

    dragging = false;
}
