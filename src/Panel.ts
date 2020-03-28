import { scale, applyToPoint, Point, inverse, compose, translate } from "transformation-matrix";
import { MouseHandler, ActionListener, DragEvent } from "./MouseHandler";

class Panel implements ActionListener {
  canvas:HTMLCanvasElement;
  mouseHandler:MouseHandler;
  image:ImageBitmap|null = null;
  imageTx: number = 0;
  imageTy: number = 0;
  imageScale: number = 1;

  constructor(canvas:HTMLCanvasElement) {
    this.canvas = canvas;
    this.mouseHandler = new MouseHandler(canvas, this);
  }

  onClick(x:number, y:number) {
    let imagePoint = this.toImagePoint({x, y});
    console.log('clicked on', x, y, imagePoint)
  }

  onDrag(drag:DragEvent) {
    console.log('drag', drag.lastDragEventDeltaX)
    this.imageTx += drag.lastDragEventDeltaX;
    this.imageTy += drag.lastDragEventDeltaY;
  }

  onWheel(x:number, y:number, delta:number) {
    console.log('wheel', delta)
    if(delta > 0) {
      this.zoom(-20, x, y);
    } else {
      this.zoom(20, x, y);
    }
  }

  zoomOnImage(amount:number, imageX:number, imageY:number) {
    let canvasPoint = this.toCanvasPoint({x: imageX, y: imageY});
    this.zoom(amount, canvasPoint.x, canvasPoint.y);
  }

  zoom(amount:number, canvasX:number, canvasY:number) {
    let canvasZoomPoint = {x: canvasX, y: canvasY}

    let deltaScale = this.imageScale/100 * amount;
    let newScale = this.imageScale + deltaScale;

    let imageZoomPoint = this.toImagePoint(canvasZoomPoint);
    
    // first change the scale, then we can compute the point on canvas after zoom
    this.imageScale = newScale;
    let canvasPointAfterZoom = this.toCanvasPoint(imageZoomPoint);

    // translate back the image
    this.imageTx -= canvasPointAfterZoom.x - canvasZoomPoint.x;
    this.imageTy -= canvasPointAfterZoom.y - canvasZoomPoint.y;
  }

  setImage(image:ImageBitmap) {
    this.image = image;
  }

  fit() {
    if (this.image == null) {
      return;
    }

    // find the correct scale to fit the image inside the panel
    let scaleX = this.canvas.width/this.image.width;
    let scaleY = this.canvas.height/this.image.height;
    let newScale = scaleX < scaleY ? scaleX : scaleY;
    let scaleMatrix = scale(newScale);
    
    // center the image horizontally and vertically
    let imageCenterX = this.image.width/2;
    let imageCenterY = this.image.height/2;
    let imageCenterOnCanvas:Point = applyToPoint(scaleMatrix, [imageCenterX, imageCenterY]);

    // move the center of the image onto the center of the canvas
    let canvasCenterX = this.canvas.width/2;
    let canvasCenterY = this.canvas.height/2;
    let tx = canvasCenterX - imageCenterOnCanvas[0];
    let ty = canvasCenterY - imageCenterOnCanvas[1];

    // apply
    this.imageTx = tx;
    this.imageTy = ty;
    this.imageScale = newScale;
  }

  /**
   * Given a point on screen canvas, return the point on the image
   */
  toImagePoint(canvasPoint:Point): Point {
    let matrix = inverse(compose(translate(this.imageTx, this.imageTy), scale(this.imageScale)))
    return applyToPoint(matrix, canvasPoint);
  }

  /**
   * Given a point on the image, return the point on canvas
   */
  toCanvasPoint(imagePoint:Point):Point{
      let matrix = compose(translate(this.imageTx, this.imageTy), scale(this.imageScale));
      return applyToPoint(matrix, imagePoint);
  }

  render(ctx:CanvasRenderingContext2D) {
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    if (this.image == null) {
      return;
    }

    let width = this.image.width * this.imageScale;
    let height = this.image.height * this.imageScale;
    ctx.drawImage(this.image, this.imageTx, this.imageTy, width, height); 
  }
}

export {Panel};