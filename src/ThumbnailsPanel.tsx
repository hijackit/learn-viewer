import { Thumbnail } from "./Thumbnail";
import React from "react";

interface ThumbnailsPanelProps {
  setImage: (bitmap: ImageBitmap) => void;
}

export function ThumbnailsPanel(props: ThumbnailsPanelProps) {
  
  function openImage(url:string) {
    fetch(url)
    .then(response => response.blob())
    .then(blob => createImageBitmap(blob))
    .then(bitmap => {
      console.log('image loaded')
      props.setImage(bitmap);
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
