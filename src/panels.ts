import { Panel } from "./Panel";

const panels:Map<number,Panel> = new Map();

function newPanel(canvas:HTMLCanvasElement, image:ImageBitmap, id: number):Panel {
  console.log('Initializing a new panel with image', image);

  // set canvas dimension equals to the element
  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;

  const panel = new Panel(canvas, id);
  panel.setImage(image);
  panel.fit();
  panel.render();

  panels.set(id, panel);
  return panel;
}

function getPanel(id: number) {
  return panels.get(id);
}

function disposePanel(panel: Panel) {
  panels.delete(panel.id);
}

function render() {
  panels.forEach(panel => panel.render());
}

export {newPanel, disposePanel, render, getPanel};