class MouseHandler {
  element: HTMLElement;
  listener: ActionListener;
  mousedown: boolean = false;
  mouseButton: MouseButton;
  dragging: boolean = false;
  initialDrag: {x:number, y:number} | null = null;
  lastDrag: {x:number, y:number} | null = null;
  target: EventTarget;

  constructor(element: HTMLElement, listener: ActionListener) {
    this.element = element;
    this.listener = listener;

    element.onmousedown = (evt) => {
      evt.preventDefault();
      this.mousedown = true;
      this.mouseButton = getMouseButton(evt);
      this.target = evt.target;
    }

    element.onmousemove = (evt) => {
      evt.preventDefault();
      // const [offsetX, offsetY] = this.getOffset(evt);
      const clientX = evt.clientX;
      const clientY = evt.clientY;
      if (this.mousedown) {
        if (this.dragging) {
          let dragEvent = new DragEvent({
            x: clientX,
            y: clientY,
            mouseButton: this.mouseButton,
            initialDrag: this.initialDrag,
            lastDrag: this.lastDrag,
            target: this.target
          });
          this.lastDrag = dragEvent;
          listener.onDrag(dragEvent);
        } else {
          this.initialDrag = {x: clientX, y: clientY};
        }
        this.dragging = true;
      }
    }

    element.onmouseup = (evt) => {
      evt.preventDefault();
      this.mousedown = false;
      const clientX = evt.clientX;
      const clientY = evt.clientY;
      // const [offsetX, offsetY] = this.getOffset(evt);

      if (this.dragging) {
        this.initialDrag = null;
        this.lastDrag = null;
      } else {
        listener.onClick({
          x:clientX,
          y:clientY,
          target: evt.target,
          mouseButton: this.mouseButton,
        })
      }
      this.dragging = false;
    }

    element.onwheel = (evt) => {
      evt.preventDefault();
      // const [offsetX, offsetY] = this.getOffset(evt);
      const clientX = evt.clientX;
      const clientY = evt.clientY;
      const wheelEvent: WheelEvent = {
        x: clientX, 
        y: clientY, 
        delta: evt.deltaY,
        target: evt.target
      }
      listener.onWheel(wheelEvent);
    }
  }

  // get coordinates relative to the element
  getOffset(evt:MouseEvent):[number, number] {
    const rect = this.element.getBoundingClientRect();
    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;
    return [x, y];
  }
}

interface ActionListener {
  onDrag(event: DragEvent): void;
  onClick(event: ClickEvent): void;
  onWheel(event: WheelEvent): void;
}

enum MouseButton {
  LEFT = 'LEFT', MIDDLE = 'MIDDLE', RIGHT= 'RIGHT'
}

interface WheelEvent {
  x:number,
  y:number,
  delta: number,
  target: EventTarget
}

interface ClickEvent {
  x:number,
  y:number,
  target: EventTarget,
  mouseButton: MouseButton
}

interface DragEventProps {
  // type: "START" | "DRAG" | "STOP", 
  x: number, 
  y: number, 
  mouseButton: MouseButton, 
  initialDrag: {x:number, y:number} | null, 
  lastDrag:  {x:number, y:number} | null, 
  target:EventTarget | null
}

function getMouseButton(evt:MouseEvent):MouseButton {
  if (evt.button == 0)
      return MouseButton.LEFT;
    if (evt.button == 1)
      return MouseButton.MIDDLE;
    if (evt.button == 2)
      return MouseButton.RIGHT;
}

class DragEvent {
  // readonly type: "START" | "DRAG" | "STOP"
  readonly x: number;
  readonly y: number;
  readonly target: EventTarget;
  readonly mouseButton: MouseButton;

  // coordinates of the initial drag event
  readonly initialDragEventX: number = 0;
  readonly initialDragEventY: number = 0;

  // distance from the initial drag event
  readonly initialDragEventDeltaX: number = 0;
  readonly initialDragEventDeltaY: number = 0;

  // delta from the last drag event
  readonly lastDragEventDeltaX: number = 0;
  readonly lastDragEventDeltaY: number = 0;

  constructor(props: DragEventProps) {
    this.x = props.x;
    this.y = props.y;
    // this.type = props.type;
    this.mouseButton = props.mouseButton;

    if (props.initialDrag != null) {
      this.initialDragEventX = props.initialDrag.x;
      this.initialDragEventY = props.initialDrag.y;
      this.initialDragEventDeltaX = this.x - props.initialDrag.x;
      this.initialDragEventDeltaY = this.y - props.initialDrag.y;
    }

    if (props.lastDrag != null) {
      this.lastDragEventDeltaX = this.x - props.lastDrag.x;
      this.lastDragEventDeltaY = this.y - props.lastDrag.y;
    }

    this.target = props.target;
  }
}

export { MouseHandler, ActionListener, DragEvent, ClickEvent, WheelEvent, MouseButton }