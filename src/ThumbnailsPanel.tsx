import { Thumbnail } from "./Thumbnail";
import React from "react";
// import * as panels from "./panels";
import * as grid from "./Grid";

let panelIndex = 0;

export function ThumbnailsPanel() {
  
  function openImage(url:string) {
    fetch(url)
    .then(response => response.blob())
    .then(blob => createImageBitmap(blob))
    .then(bitmap => {
      // panels.getPanel(panelIndex).setImage(bitmap);
      // panels.getPanel(panelIndex).fit();
      // panelIndex++;
      // if(panelIndex >= panels.getPanels().size)
      //   panelIndex = 0;
      console.log('opening')
      grid.get().getPanel(0).setImage(bitmap);
      grid.get().getPanel(0).fit();
    })
  }

  return (
  <div>
    <Thumbnail onClick={() => openImage('images/hand_0.jpg')} title='Hands' />
    <Thumbnail onClick={() => openImage('images/camping.jpg')} title='Camping' />
    <Thumbnail onClick={() => openImage('images/dino.jpg')} title='Dino' />
    <Thumbnail onClick={() => openImage('images/rock.jpg')} title='Rockefeller' />
    <Thumbnail onClick={() => openImage('images/sf.jpg')} title='San Francisco' />
  </div>);
}
