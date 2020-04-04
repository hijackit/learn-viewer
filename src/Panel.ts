import { scale, applyToPoint, Point, inverse, compose, translate, rotate, Matrix, rotateDEG } from "transformation-matrix";
import { MouseHandler, ActionListener, DragEvent, MouseButton } from "./MouseHandler";

enum Tool {
  PAN, ZOOM, ROTATE
}

class Panel implements ActionListener {
  id:number;
  canvas:HTMLCanvasElement;
  mouseHandler:MouseHandler;
  image:ImageBitmap|null = null;
  imageTx: number = 0;
  imageTy: number = 0;
  imageScale: number = 1;
  imageRotation: number = 0; //degrees
  leftButtonTool: Tool = Tool.ZOOM;
  middleButtonTool: Tool = Tool.PAN;
  rightButtonTool: Tool = Tool.ROTATE;
  horizontalFlip: boolean = false;
  verticalFlip: boolean = false;

  constructor(canvas:HTMLCanvasElement, id:number) {
    this.id = id;
    this.canvas = canvas;
    this.mouseHandler = new MouseHandler(canvas, this);
  }

  onMouseMove(e:MouseEvent) {
    this.mouseHandler.mouseMoved(e);
  }

  onMouseUp(e:MouseEvent) {
    this.mouseHandler.mouseUp(e);
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

  toggleHorizontalFlip() {
    this.horizontalFlip = !this.horizontalFlip;
  }

  toggleVerticalFlip() {
    this.verticalFlip = !this.verticalFlip;
  }

  setLeftButtonTool(tool:Tool) {
    this.leftButtonTool = tool;
  }

  setMiddleButtonTool(tool:Tool) {
    this.middleButtonTool = tool;
  }
  
  setRightButtonTool(tool:Tool) {
    this.middleButtonTool = tool;
  }

  onDrag(drag:DragEvent) {
    if (drag.type != 'DRAG')
      return;

    let tool = drag.mouseButton == MouseButton.LEFT 
      ? this.leftButtonTool
      : drag.mouseButton == MouseButton.RIGHT
        ? this.rightButtonTool
        : this.middleButtonTool; 

    switch (tool) {
      case Tool.PAN:
        this.translate(drag.lastDragEventDeltaX, drag.lastDragEventDeltaY);
        break;
      case Tool.ZOOM:
        this.zoom(drag.lastDragEventDeltaY < 0 ? +5 : -5, drag.initialDragEventX, drag.initialDragEventY);
        break;
      case Tool.ROTATE:
        let amount = Math.abs(drag.lastDragEventDeltaY)/2;
        let rightSide = drag.x > this.canvas.width/2;
        let delta = rightSide 
          ? drag.lastDragEventDeltaY > 0 ? +amount : -amount
          : drag.lastDragEventDeltaY > 0 ? -amount : +amount;
        this.rotate(delta);
      break;
    }
  }

  onWheel(x:number, y:number, delta:number) {
    let imagePoint = this.toImagePoint({x, y})
    if(delta > 0) {
      this.zoomOnImage(-30, imagePoint.x, imagePoint.y);
    } else {
      this.zoomOnImage(+30, imagePoint.x, imagePoint.y);
    }
  }

  zoomOnImage(amount:number, imageX:number, imageY:number) {
    let canvasPoint = this.toCanvasPoint({x: imageX, y: imageY});
    this.zoom(amount, canvasPoint.x, canvasPoint.y);
  }

  /**
   * Set the desired zoom value. The zoom will be applied to the center of the canvas.
   * 
   * @param newScale 
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
    return applyToPoint(matrix, canvasPoint);
  }

  /**
   * Given a point on the image, return the point on canvas
   */
  private toCanvasPoint(imagePoint:Point):Point{
      let matrix = this.getTransformationMatrix();
      return applyToPoint(matrix, imagePoint);
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