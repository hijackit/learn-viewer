import { ImagePositionStateMachine } from "./ImagePositionStateMachine";
import {scale, rotate, translate, compose, applyToPoint, Point, inverse, Matrix, transform} from 'transformation-matrix';

console.log('hello from typescript, hola there!', 'great')

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

        console.log("image", image.width, image.height)
        console.log("canvas", canvas!.width, canvas!.height)

        let scaleX = canvas!.width/image.width;
        let scaleY = canvas!.height/image.height;
        let minScale = scaleX < scaleY ? scaleX : scaleY;
        
        let msx = canvas!.width/image.width;
        let msy = canvas!.height/image.height;
        let mms = msx < msy ? msx : msy;
        let matrix = scale(mms);
        console.log('matrixMinScale',mms)
        console.log("scale matrix", matrix)

        position.scale = minScale;

        let imageCenterX = image.width*position.scale/2;
        let imageCenterY = image.height*position.scale/2;

        let imageCenter = {x: image.width/2, y: image.height/2}

        let newCenter:Point = applyToPoint(matrix, imageCenter);
        console.log('center', imageCenter, newCenter)

        let canvasCenter = {x: canvas!.width/2, y:canvas!.height/2}
        let imatrix = inverse(matrix);
        let newCanvasCenter = applyToPoint(imatrix, canvasCenter);
        console.log('canvas center', canvasCenter, newCanvasCenter)

        let tx = canvasCenter.x - newCenter.x;
        let ty = canvasCenter.y - newCenter.y;

        let tmatrix = compose(translate(tx, ty), scale(mms))
        let itmatrix = inverse(tmatrix)

        position.tx = tx;
        position.ty = ty;
        console.log('image position', position)
    })
}



function render() {
    if(image == null)
        return;

        console.log('rendering')
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
        console.log('click', evt.offsetX, evt.offsetY)
        console.log(position.toImagePoint([evt.offsetX, evt.offsetY]))
    }

    dragging = false;
}

canvas.onwheel = (event) => {
    event.preventDefault();
    let zoomPoint = {x:event.offsetX, y:event.offsetY}
    console.log('zoomPoint on canvas', zoomPoint)

    let newScale = position.scale;
    newScale += event.deltaY * -0.002;

    let imageZoomPoint = position.toImagePoint(zoomPoint);
    console.log('zoomPoint on image', imageZoomPoint)

    position.scale = newScale;
    let pointAfterZoom = position.toCanvasPoint(imageZoomPoint);
    console.log('canvas zoomPoint after zoom', pointAfterZoom)

    position.scale = newScale;
    position.tx -= pointAfterZoom.x - zoomPoint.x;
    position.ty -= pointAfterZoom.y - zoomPoint.y;
}
