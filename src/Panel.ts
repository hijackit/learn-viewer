import { scale, applyToPoint, Point, inverse, compose, translate, rotate, Matrix, rotateDEG } from "transformation-matrix";
import { MouseHandler, ActionListener, DragEvent } from "./MouseHandler";

class Panel implements ActionListener {
  canvas:HTMLCanvasElement;
  mouseHandler:MouseHandler;
  image:ImageBitmap|null = null;
  imageTx: number = 0;
  imageTy: number = 0;
  imageScale: number = 1;
  imageRotation: number = 0; //degrees

  constructor(canvas:HTMLCanvasElement) {
    this.canvas = canvas;
    this.mouseHandler = new MouseHandler(canvas, this);
  }

  onClick(x:number, y:number) {
    let imagePoint = this.toImagePoint({x, y});
    console.log('clicked on', x, y, imagePoint)
  }

  translate(deltaX:number, deltaY:number) {
    let rotationMatrix = inverse(rotateDEG(this.imageRotation))
    let rotatedPoint = applyToPoint(rotationMatrix, [deltaX, deltaY])
    this.imageTx += rotatedPoint[0];
    this.imageTy += rotatedPoint[1];
  }

  onDrag(drag:DragEvent) {
    this.translate(drag.lastDragEventDeltaX, drag.lastDragEventDeltaY)
  }

  onWheel(x:number, y:number, delta:number) {
    console.log('wheel', delta)
    let imagePoint = this.toImagePoint({x, y})
    if(delta > 0) {
      this.zoomOnImage(-20, imagePoint.x, imagePoint.y);
    } else {
      this.zoomOnImage(+20, imagePoint.x, imagePoint.y);
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
    console.log('zooming on', imageZoomPoint)
    
    // first change the scale, then we can compute the point on canvas after zoom
    this.imageScale = newScale;
    let canvasPointAfterZoom = this.toCanvasPoint(imageZoomPoint);

    // translate back the image
    let deltaX = canvasPointAfterZoom.x - canvasZoomPoint.x;
    let deltaY = canvasPointAfterZoom.y - canvasZoomPoint.y;

    this.translate(-deltaX, -deltaY)
  }

  rotate(degree: number) {
    console.log('should rotate')
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
    this.imageRotation = 0;
  }

  /**
   * Return the 'image to canvas' transformation matrix
   */
  getTransformationMatrix():Matrix {
    return compose(
      rotate(this.imageRotation*Math.PI/180, this.canvas.width/2, this.canvas.height/2),
      translate(this.imageTx, this.imageTy),
      scale(this.imageScale), 
    )
  }

  /**
   * Given a point on screen canvas, return the point on the image
   */
  toImagePoint(canvasPoint:Point): Point {
    let matrix = inverse(this.getTransformationMatrix())
    return applyToPoint(matrix, canvasPoint);
  }

  /**
   * Given a point on the image, return the point on canvas
   */
  toCanvasPoint(imagePoint:Point):Point{
      let matrix = this.getTransformationMatrix();
      return applyToPoint(matrix, imagePoint);
  }

  render(ctx:CanvasRenderingContext2D) {
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

    ctx.drawImage(this.image,0, 0); 
    ctx.restore()
  }
}

export {Panel};