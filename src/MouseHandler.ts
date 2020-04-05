import { MouseButton } from "./MouseButton";

/**
 * This class can be attached to an HTML Element in order to watch for mouse events and obtain actions.
 * 
 * @remarks
 * This class processes low-level mouse events such as 
 * - onmousedown
 * - onmousemove
 * - onmouseup
 * - onwheel
 * 
 * and emits higher-order actions to the ActionListener:
 * - onDrag
 * - onClick
 * - onWheel
 */
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
      this.mouseButton = this.getMouseButton(evt);
      this.target = evt.target;
    }

    element.onmousemove = (evt) => {
      evt.preventDefault();
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

  getMouseButton(evt:MouseEvent):MouseButton {
    if (evt.button == 0)
        return MouseButton.LEFT;
      if (evt.button == 1)
        return MouseButton.MIDDLE;
      if (evt.button == 2)
        return MouseButton.RIGHT;
  }
}

interface ActionListener {
  onDrag(event: DragEvent): void;
  onClick(event: ClickEvent): void;
  onWheel(event: WheelEvent): void;
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
  x: number, 
  y: number, 
  mouseButton: MouseButton, 
  initialDrag: {x:number, y:number} | null, 
  lastDrag:  {x:number, y:number} | null, 
  target:EventTarget | null
}

class DragEvent {
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