import { Thumbnail } from "./Thumbnail";
import React from "react";
import { getPanel } from "./panels";

export function ThumbnailsPanel() {
  
  function openImage(url:string) {
    fetch(url)
    .then(response => response.blob())
    .then(blob => createImageBitmap(blob))
    .then(bitmap => {
      getPanel(0).setImage(bitmap);
      getPanel(0).fit();
    })
  }

  return (<div className="left-column">
    <Thumbnail onClick={() => openImage('images/hand_0.jpg')} title='Hands' />
    <Thumbnail onClick={() => openImage('images/camping.jpg')} title='Camping' />
    <Thumbnail onClick={() => openImage('images/dino.jpg')} title='Dino' />
    <Thumbnail onClick={() => openImage('images/rock.jpg')} title='Rockefeller' />
    <Thumbnail onClick={() => openImage('images/sf.jpg')} title='San Francisco' />
  </div>);
}
