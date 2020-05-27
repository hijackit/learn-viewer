import React from "react";
import * as grid from "../Grid";
import { DrawableImageData } from "../DrawableImage";

export function OpenImageButton() {
  const fileInput = React.useRef<HTMLInputElement>();
  return (<div>
    <div className="toolbar-button" onClick={() => {
      fileInput.current.click();
    }}>Open..</div>

    <input type="file" ref={fileInput} accept="image/*" style={{ display: "none" }} onChange={e => {
      let input = e.target;
      var reader = new FileReader();
      reader.onload = function () {
        var dataURL = reader.result.toString();
        const image = new Image();

        image.onload = function () {
          const canvas = new OffscreenCanvas(image.width, image.height);
          const ctx = canvas.getContext('2d');
          ctx.drawImage(image, 0, 0);

          const drawableImage = new DrawableImageData(canvas);
          grid.get().openImage(drawableImage);
        };

        image.onerror = function (error) {
          console.error('error loading selected image')
        }

        image.src = dataURL;
      };
      
      reader.readAsDataURL(input.files[0]);
    }} />
  </div>);
}
