import * as React from "react";
import { ThumbnailsPanel } from "./ThumbnailsPanel";
import { CanvasPanel } from "./CanvasPanel";

export interface HelloProps { compiler: string; framework: string; }

export function App(props:HelloProps) {
  const [image, setImage] = React.useState<ImageBitmap>(null);

  function openImage(url:string) {
    console.log('click')
    fetch(url)
    .then(response => response.blob())
    .then(blob => createImageBitmap(blob))
    .then(bitmap => {
      console.log('image loaded')
      setImage(bitmap);
    })
  }

  return (
    <div className="grid-wrapper">
        <div className="header">ROSSI MARIO</div>
        <ThumbnailsPanel openImage={openImage}/>
        <div className="main-area">
          <CanvasPanel image={image}/>
        </div>
        <div id="right-column"></div>
        <div className="footer">footer</div>
    </div>
  )
}

