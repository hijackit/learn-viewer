import { Panel, Tool } from "./Panel";
import { MouseHandler, ActionListener, DragEvent, ClickEvent, WheelEvent } from "./MouseHandler";
import { MouseButton } from "./MouseButton";
import { DataSet } from "dicom-parser";
import { DrawableImage, DrawableDicomImage } from "./DrawableImage";

class Grid implements ActionListener {
  grid:HTMLDivElement;
  mouseHandler:MouseHandler;
  rows:number = 0;
  columns:number = 0;
  panels:Map<number,Panel> = new Map();
  cpanels:Map<HTMLCanvasElement,Panel> = new Map();
  linkPanels:boolean = false;
  leftButtonTool: Tool = Tool.ZOOM;
  middleButtonTool: Tool = Tool.PAN;
  rightButtonTool: Tool = Tool.ROTATE;
  selectedPanel:Panel|null;
  maximized:boolean = false;

  constructor(grid:HTMLDivElement) {
    this.mouseHandler = new MouseHandler(grid, this);
    this.grid = grid;
    grid.className = 'grid';
    this.setLayout(2, 2);
  }

  // ActionListener callback
  public onDrag(event: DragEvent): void {
    let targetPanel:Panel = this.cpanels.get(<HTMLCanvasElement>event.target);
    this.setSelected(targetPanel);

    let targetPanels:Array<Panel> = this.linkPanels 
      ? this.getVisiblePanels()
      : [this.cpanels.get(<HTMLCanvasElement>event.target)];

    let tool = event.mouseButton == MouseButton.LEFT 
      ? this.leftButtonTool
      : event.mouseButton == MouseButton.RIGHT
        ? this.rightButtonTool
        : this.middleButtonTool; 

    switch (tool) {
      case Tool.PAN:
        targetPanels.forEach(panel => {
          panel.translate(event.lastDragEventDeltaX, event.lastDragEventDeltaY);
        });
        break;
      case Tool.ZOOM:
        targetPanels.forEach(panel => {
          let x = event.initialDragEventX - targetPanel.canvas.offsetLeft;
          let y = event.initialDragEventY - targetPanel.canvas.offsetTop;
          panel.zoom(event.lastDragEventDeltaY < 0 ? +5 : -5, x, y);
        })
        break;
      case Tool.ROTATE:
        let amount = Math.abs(event.lastDragEventDeltaY)/2;
        let targetCanvasX = event.x - targetPanel.canvas.getBoundingClientRect().left;
        let rightSide = targetCanvasX > targetPanel.canvas.width/2;
        let delta = rightSide 
          ? event.lastDragEventDeltaY > 0 ? +amount : -amount
          : event.lastDragEventDeltaY > 0 ? -amount : +amount;
        targetPanels.forEach(panel => panel.rotate(delta));
      break;
      case Tool.WINDOW_LEVEL:
        targetPanels.forEach(panel => {
          if (panel.image instanceof DrawableDicomImage) {
            panel.image.windowLevel(event.lastDragEventDeltaX, event.lastDragEventDeltaY);
          }
        });
        break;
    }
  }

  private setSelected(panel:Panel) {
    this.selectedPanel = panel;
    this.panels.forEach(panel => panel.setSelected(false));
    panel.setSelected(true);
  }

  // ActionListener callback
  public onClick(event: ClickEvent): void {
    const targetPanel = this.cpanels.get(<HTMLCanvasElement>event.target);
    this.setSelected(targetPanel);
    targetPanel.onClick(event.x, event.y);
  }

  // ActionListener callback
  public onDoubleClick(event: ClickEvent): void {
    const targetPanel = this.cpanels.get(<HTMLCanvasElement>event.target);
    this.setSelected(targetPanel);
    this.toggleMaximization(targetPanel);
  }

  private toggleMaximization(targetPanel:Panel) {
    this.setSelected(targetPanel);
    
    if (this.maximized) {
      this.setLayout(this.rows, this.columns);
    } else {
      document.documentElement.style.setProperty("--gridRows", "1");
      document.documentElement.style.setProperty("--gridCols", "1");

      // hide all panels but the target one
      for (let idx = 0; idx < this.grid.children.length; idx++) {
        let canvasWrapper = <HTMLScriptElement>this.grid.children[idx];
        canvasWrapper.style.display = idx == targetPanel.id ? '' : 'none';
      }
    }

    this.maximized = !this.maximized;
  }

  // ActionListener callback
  public onWheel(event: WheelEvent): void {
    const targetPanel = this.cpanels.get(<HTMLCanvasElement>event.target);
    this.setSelected(targetPanel);

    let targetPanels:Array<Panel> = this.linkPanels 
      ? this.getVisiblePanels()
      : [this.cpanels.get(<HTMLCanvasElement>event.target)];

    targetPanels.forEach(panel => {
      let canvasX = event.x - targetPanel.canvas.offsetLeft;
      let canvasY = event.y - targetPanel.canvas.offsetTop;
      if(event.delta > 0) {
        panel.zoom(-30, canvasX, canvasY);
      } else {
        panel.zoom(+30, canvasX, canvasY);
      }
    });
  }

  private initPanel(id: number) {
    if (this.panels.has(id))
      return;

    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    const canvasWrapper = document.createElement('div');
    canvasWrapper.appendChild(canvas);
    this.grid.appendChild(canvasWrapper);

    const panel = new Panel(canvas, id);
    this.panels.set(id, panel);
    this.cpanels.set(canvas, panel);
  }

  public render() {
    // render all visible panels only
    this.getVisiblePanels().forEach(panel => panel.render());
  }

  private getVisiblePanels() {
    let visiblePanels = this.rows * this.columns;
    return Array.from(this.panels.values()).filter((panel, index) => index < visiblePanels);
  }
  
  public setLeftButton(tool:Tool) {
    this.leftButtonTool = tool;
  }

  public toggleLink() {
    this.linkPanels = !this.linkPanels;
  }

  getPanel(id: number) {
    return this.panels.get(id);
  }
  
  getPanels() {
    return this.panels;
  }

  public fit() {
    if(this.linkPanels) {
      this.panels.forEach(panel => panel.fit())
    } else {
      this.selectedPanel?.fit();
    }
  }

  public actualSize() {
    if(this.linkPanels) {
      this.panels.forEach(panel => panel.setZoom(1))
    } else {
      this.selectedPanel?.setZoom(1);
    }
  }

  public toggleHorizontalFlip() {
    if(this.linkPanels) {
      this.panels.forEach(panel => panel.toggleHorizontalFlip())
    } else {
      this.selectedPanel?.toggleHorizontalFlip();
    }
  }  
  
  public toggleVerticalFlip() {
    if(this.linkPanels) {
      this.panels.forEach(panel => panel.toggleVerticalFlip())
    } else {
      this.selectedPanel?.toggleVerticalFlip();
    }
  }

  public openImage(image:DrawableImage) {
    let panels = Array.from(this.panels.values());
    let firstEmptyPanel = panels.find(panel => panel.image == null);
    if (firstEmptyPanel && !this.maximized) {
      firstEmptyPanel.setImage(image);
      firstEmptyPanel.fit();
      this.setSelected(firstEmptyPanel);
    } else {
      this.selectedPanel.setImage(image);
      this.selectedPanel.fit();
    }
  }

  // change the css grid rows/columns and hide exceeding canvas
  public setLayout(rows:number, columns:number) {
    console.log(rows, columns)
    this.rows = rows;
    this.columns = columns;
    document.documentElement.style.setProperty("--gridRows", rows.toString());
    document.documentElement.style.setProperty("--gridCols", columns.toString());

    // assert that all the visible panels have been initialized
    const visiblePanels = this.rows * this.columns;
    for (let idx=0; idx < visiblePanels; idx++){
      this.initPanel(idx);
    }

    // hide any exceeding panels
    for (let idx = 0; idx < this.grid.children.length; idx++) {
      let canvasWrapper = <HTMLScriptElement>this.grid.children[idx];
      canvasWrapper.style.display = idx < visiblePanels ? '' : 'none';
    }
  }
  
}

// the grid
let grid:Grid;

function init(div:HTMLDivElement) {
  grid = new Grid(div);
  window.requestAnimationFrame(loop);
}

function loop() {
  grid.render();
  window.requestAnimationFrame(loop);
}

function get() {
  return grid;
}

export {init, get};