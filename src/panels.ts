import { Panel } from "./Panel";

const panels: Set<Panel> = new Set();

function newPanel(canvas:HTMLCanvasElement, image:ImageBitmap):Panel {
  console.log('Initializing a new panel with image', image);

  // set canvas dimension equals to the element
  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;

  const panel = new Panel(canvas);
  panels.add(panel);
  panel.setImage(image);
  panel.fit();
  panel.render();
  return panel;
}

function disposePanel(panel: Panel) {
  panels.delete(panel);
}

function render() {
  panels.forEach(panel => panel.render());
}

export {newPanel, disposePanel, render};