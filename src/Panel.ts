import { scale, applyToPoint, inverse, compose, translate, rotate, Matrix, rotateDEG } from "transformation-matrix";
import { MouseHandler, ActionListener, DragEvent, MouseButton, ClickEvent, WheelEvent} from "./MouseHandler";
import { Tool } from "./Tool";

interface Point {
  x: number,
  y: number
}

class Panel {
  id:number;
  canvas:HTMLCanvasElement;
  image:ImageBitmap|null = null;
  imageTx: number = 0;
  imageTy: number = 0;
  imageScale: number = 1;
  imageRotation: number = 0; //degrees
  horizontalFlip: boolean = false;
  verticalFlip: boolean = false;

  constructor(canvas:HTMLCanvasElement, id:number) {
    this.id = id;
    this.canvas = canvas;
  }

  private viewportToCanvasPoint(event:Point):Point {
    const rect = this.canvas.getBoundingClientRect();
    const canvasX = event.x - rect.left;
    const canvasY = event.y - rect.top;
    return {x: canvasX, y: canvasY};
  }

  onClick(event:ClickEvent) {
    const canvasPoint = this.viewportToCanvasPoint(event);
    let imagePoint = this.toImagePoint(canvasPoint);
    console.log('clicked on', canvasPoint.x, canvasPoint.y, imagePoint)
  }

  translate(deltaX:number, deltaY:number) {
    let rotationMatrix = inverse(rotateDEG(this.imageRotation))
    let rotatedPoint = <Point>applyToPoint(rotationMatrix, {x: deltaX, y: deltaY})
    this.imageTx += rotatedPoint.x;
    this.imageTy += rotatedPoint.y;
  }

  toggleHorizontalFlip() {
    this.horizontalFlip = !this.horizontalFlip;
  }

  toggleVerticalFlip() {
    this.verticalFlip = !this.verticalFlip;
  }

  zoomOnImage(amount:number, imageX:number, imageY:number) {
    let canvasPoint = this.toCanvasPoint({x: imageX, y: imageY});
    this.zoom(amount, canvasPoint.x, canvasPoint.y);
  }

  /**
   * Set the desired zoom value. The zoom will be applied to the center of the canvas.
   */
  setZoom(newScale:number, canvasX:number=this.canvas.width/2, canvasY:number=this.canvas.height/2) {
    let canvasZoomPoint = {x: canvasX, y: canvasY}

    let imageZoomPoint = this.toImagePoint(canvasZoomPoint);
    
    // first change the scale, then we can compute the point on canvas after zoom
    this.imageScale = newScale;
    let canvasPointAfterZoom = this.toCanvasPoint(imageZoomPoint);

    // translate back the image
    let deltaX = canvasPointAfterZoom.x - canvasZoomPoint.x;
    let deltaY = canvasPointAfterZoom.y - canvasZoomPoint.y;

    this.translate(-deltaX, -deltaY)
  }

  zoom(amount:number, canvasX:number, canvasY:number) {
    let deltaScale = this.imageScale/100 * amount;
    let newScale = this.imageScale + deltaScale;
    this.setZoom(newScale, canvasX, canvasY);
  }

  rotate(degree: number) {
    this.imageRotation += degree;
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
    let imageCenterOnCanvas = <Point>applyToPoint(scaleMatrix, {x: imageCenterX, y: imageCenterY});

    // move the center of the image onto the center of the canvas
    let canvasCenterX = this.canvas.width/2;
    let canvasCenterY = this.canvas.height/2;
    let tx = canvasCenterX - imageCenterOnCanvas.x;
    let ty = canvasCenterY - imageCenterOnCanvas.y;

    // apply
    this.imageTx = tx;
    this.imageTy = ty;
    this.imageScale = newScale;
    this.imageRotation = 0;
  }

  /**
   * Return the 'image to canvas' transformation matrix
   */
  private getTransformationMatrix():Matrix {
    return compose(
      rotate(this.imageRotation*Math.PI/180, this.canvas.width/2, this.canvas.height/2),
      translate(this.imageTx, this.imageTy),
      scale(this.imageScale), 
    )
  }

  /**
   * Given a point on screen canvas, return the point on the image
   */
  private toImagePoint(canvasPoint:Point): Point {
    let matrix = inverse(this.getTransformationMatrix())
    return <Point>applyToPoint(matrix, canvasPoint);
  }

  /**
   * Given a point on the image, return the point on canvas
   */
  private toCanvasPoint(imagePoint:Point):Point{
      let matrix = this.getTransformationMatrix();
      return <Point>applyToPoint(matrix, imagePoint);
  }

  lastRenderedTx = 0;
  lastRenderedTy = 0;
  lastRenderedRotation = 0;

  render() {
    // if(this.imageTx == this.lastRenderedTx && this.imageTy == this.lastRenderedTy && this.lastRenderedRotation == this.imageRotation)
    //   return;

    let ctx = this.canvas.getContext('2d');

    // when the canvas has been resized, adjust the canvas dimensions accordingly
    if (this.canvas.scrollWidth != this.canvas.width || this.canvas.scrollHeight != this.canvas.height) {
      this.canvas.width = this.canvas.scrollWidth;
      this.canvas.height = this.canvas.scrollHeight;
      this.fit();
    }

    // clear the canvas
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    if (this.image == null) {
      return;
    }

    ctx.save()

    // rotation
    ctx.translate(this.canvas.width/2, this.canvas.height/2 );
    ctx.rotate(this.imageRotation*Math.PI/180);
    ctx.translate(-this.canvas.width/2, -this.canvas.height/2);

    // translation
    ctx.translate(this.imageTx, this.imageTy);

    // scale
    ctx.scale(this.imageScale, this.imageScale);

    if (this.horizontalFlip) {
      ctx.translate(this.image.width, 0);
      ctx.scale(-1, 1);
    }

    if (this.verticalFlip) {
      ctx.translate(0, this.image.height);
      ctx.scale(1, -1);
    }

    ctx.drawImage(this.image,0, 0); 
    ctx.restore()

    ctx.save();

    // draw borders on the angles of the panel when selected
    const lineWidth = Math.min(this.canvas.width, this.canvas.height) / 15;
    ctx.strokeStyle = "#FFF";
    ctx.moveTo(0, 0);
    ctx.lineTo(lineWidth, 0);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, lineWidth);

    ctx.moveTo(this.canvas.width, 0);
    ctx.lineTo(this.canvas.width - lineWidth, 0);
    ctx.moveTo(this.canvas.width, 0);
    ctx.lineTo(this.canvas.width, lineWidth);

    ctx.moveTo(this.canvas.width, this.canvas.height);
    ctx.lineTo(this.canvas.width, this.canvas.height - lineWidth);
    ctx.moveTo(this.canvas.width, this.canvas.height);
    ctx.lineTo(this.canvas.width - lineWidth, this.canvas.height);

    ctx.moveTo(0, this.canvas.height);
    ctx.lineTo(lineWidth, this.canvas.height);
    ctx.moveTo(0, this.canvas.height);
    ctx.lineTo(0, this.canvas.height - lineWidth);

    ctx.stroke();
    ctx.restore();

    this.lastRenderedTx = this.imageTx;
    this.lastRenderedTy = this.imageTy;
  }
}

export {Panel, Tool};