import React from "react";
import * as grid from "../Grid";
import { parseDicom } from 'dicom-parser';
import { DrawableDicomImage } from "../DrawableImage";

export function OpenDicomButton() {
  const fileInput = React.useRef<HTMLInputElement>();
  return (<div>
    <div className="toolbar-button" onClick={() => {
      fileInput.current.click();
    }}>Open dcm..</div>

    <input type="file" ref={fileInput} style={{ display: "none" }} onChange={e => {
      let input = e.target;
      var reader = new FileReader();

      reader.onload = function () {
        console.timeEnd('read-file');
        
        if (reader.result instanceof ArrayBuffer) {
          var arrayBuffer = reader.result;
          var byteArray = new Uint8Array(arrayBuffer);
          var dataSet = parseDicom(byteArray);
          var image = new DrawableDicomImage(dataSet);
          grid.get().openImage(image);
        }
      };

      console.time('read-file');
      reader.readAsArrayBuffer(input.files[0]);
    }} />
  </div>);
}

