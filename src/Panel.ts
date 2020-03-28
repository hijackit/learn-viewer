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

  onDrag(drag:DragEvent) {
    this.imageTx += drag.lastDragEventDeltaX;
    this.imageTy += drag.lastDragEventDeltaY
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
      translate(this.imageTx, this.imageTy), 
      rotate(this.imageRotation*Math.PI/180),
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
    
    ctx.translate(this.imageTx, this.imageTy);
    ctx.rotate(this.imageRotation*Math.PI/180);
    ctx.scale(this.imageScale, this.imageScale);

    ctx.drawImage(this.image,0, 0); 
    ctx.restore()

    // draw crosshair
    ctx.save()
    ctx.strokeStyle = '#ff0000';
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width/2-15, ctx.canvas.width/2);
    ctx.lineTo(ctx.canvas.width/2+15, ctx.canvas.width/2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width/2, ctx.canvas.width/2-15);
    ctx.lineTo(ctx.canvas.width/2, ctx.canvas.width/2+15);
    ctx.stroke();
    ctx.restore();
  }
}

export {Panel};