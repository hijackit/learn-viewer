class MouseHandler {
  canvas:HTMLCanvasElement;
  mousedown: boolean = false;
  button: number;
  dragging: boolean = false;
  initialDrag:DragEvent|null = null;
  lastDrag:DragEvent|null = null;

  constructor(canvas:HTMLCanvasElement, listener?:ActionListener) {
    this.canvas = canvas;

    canvas.onmousedown = (evt) => {
      evt.preventDefault();
      this.mousedown = true;
      this.button = evt.button;
    }

    canvas.onmousemove = (evt) => {
      evt.preventDefault();
      if(this.mousedown) {
          if(this.dragging){
              let dragEvent = new DragEvent("DRAG", evt.offsetX, evt.offsetY, this.button, this.initialDrag, this.lastDrag);
              this.lastDrag = dragEvent;
              listener?.onDrag(dragEvent);
          } else {
              let dragEvent = new DragEvent("START", evt.offsetX, evt.offsetY, this.button, null, null);
              this.initialDrag = dragEvent;
              this.lastDrag = dragEvent;
              listener?.onDrag(dragEvent);
          }
          this.dragging = true;
      }
    }

    canvas.onmouseup = (evt) => {
      evt.preventDefault();
      this.mousedown = false;
      if(this.dragging) {
        listener?.onDrag(new DragEvent("STOP", evt.offsetX, evt.offsetY, this.button, this.initialDrag, this.lastDrag))
        this.initialDrag = null;
        this.lastDrag = null;
      } else {
        listener?.onClick(evt.offsetX, evt.offsetY)
      }
  
      this.dragging = false;
    }

    canvas.onwheel = (evt) => {
      evt.preventDefault();
      listener?.onWheel(evt.offsetX, evt.offsetY, evt.deltaY);
    }
  }
}

interface ActionListener {
  onDrag(event:DragEvent):void;
  onClick(x:number, y:number):void;
  onWheel(x:number, y:number, delta:number):void;
}

enum MouseButton {
  LEFT, MIDDLE, RIGHT
}

class DragEvent {
  readonly type:"START"|"DRAG"|"STOP"
  readonly x:number;
  readonly y:number;
  readonly mouseButton:MouseButton;

  // coordinates of the initial drag event
  readonly initialDragEventX:number = 0;
  readonly initialDragEventY:number = 0;

  // distance from the initial drag event
  readonly initialDragEventDeltaX:number = 0;
  readonly initialDragEventDeltaY:number = 0;

  // delta from the last drag event
  readonly lastDragEventDeltaX:number = 0;
  readonly lastDragEventDeltaY:number = 0;

  constructor(type:"START"|"DRAG"|"STOP", x:number, y:number, button:number, initialDrag:DragEvent|null, lastDrag:DragEvent|null) {
    this.x = x;
    this.y = y;
    this.type = type;

    if(button == 0)
      this.mouseButton=MouseButton.LEFT;
    if(button == 1)
      this.mouseButton=MouseButton.MIDDLE;
    if(button == 2)
      this.mouseButton=MouseButton.RIGHT;

    if(initialDrag != null) {
      this.initialDragEventX = initialDrag.x;
      this.initialDragEventY = initialDrag.y;
      this.initialDragEventDeltaX = this.x - initialDrag.x;
      this.initialDragEventDeltaY = this.y - initialDrag.y;
    }

    if (lastDrag != null) {
      this.lastDragEventDeltaX = this.x - lastDrag.x;
      this.lastDragEventDeltaY = this.y - lastDrag.y;
    }
  }
}

export {MouseHandler, ActionListener, DragEvent, MouseButton}