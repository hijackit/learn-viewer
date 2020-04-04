import { Panel } from "./Panel";

class Grid  {
  grid:HTMLDivElement;
  panels:Map<number,Panel> = new Map();
  rows:number = 2;
  columns:number = 2;

  constructor(grid:HTMLDivElement) {
    this.grid = grid;

    grid.className = 'grid';

    for (let index = 0; index < 4; index++) {
      const canvasContainer = document.createElement('div');
      const canvas = document.createElement('canvas');
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      const panel = new Panel(canvas, index);
      this.panels.set(index, panel);
      canvasContainer.appendChild(canvas);
      grid.appendChild(canvasContainer);

      canvas.width = canvas.scrollWidth;
      canvas.height = canvas.scrollHeight;
      console.log(canvas.scrollWidth);
    }

    this.showPanels();
    console.log('grid initialized')
  }

  showPanels() {
    const visiblePanels = this.rows * this.columns;
    for (let i = 0; i < this.grid.children.length; i++) {
      if(i >= visiblePanels) {
        let element = <HTMLScriptElement>this.grid.children[i];
        element.style.display = 'none';
      }
    }
  }

  render() {
    this.panels.forEach(panel => panel.render());
  }

  getPanel(id: number) {
    return this.panels.get(id);
  }
  
  getPanels() {
    return this.panels;
  }

  setLayout(rows:number, columns:number) {
    this.rows = rows;
    this.columns = columns;
    document.documentElement.style.setProperty("--gridRows", rows.toString());
    document.documentElement.style.setProperty("--gridCols", columns.toString());

    this.showPanels();
  }
}

let grid:Grid;

function init(div:HTMLDivElement) {
  grid = new Grid(div);
  window.requestAnimationFrame(loop);
}

function loop() {
  console.log('looop')
  grid.render();
  window.requestAnimationFrame(loop);
}

function get() {
  return grid;
}

export {init, get};