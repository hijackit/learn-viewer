import * as React from "react";
import { ThumbnailsPanel } from "./ThumbnailsPanel";
import { CanvasPanel } from "./CanvasPanel";
import { OpenImageButton } from "./OpenImageButton";

export interface HelloProps { compiler: string; framework: string; }

export function App(props:HelloProps) {
  const [image, setImage] = React.useState<ImageBitmap>(null);
  const fileInput = React.useRef<HTMLInputElement>();

  return (
    <div className="grid-wrapper">
        <div className="header">ROSSI MARIO</div>
        <ThumbnailsPanel setImage={setImage}/>
        <div className="main-area">
          <CanvasPanel image={image}/>
        </div>
        <div id="right-column">
          <OpenImageButton setImage={setImage} />
        </div>
        <div className="footer">footer</div>
    </div>
  )
}

