import React from "react";
import * as grid from "../Grid";
import * as dicom from "../Dicom";
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

          /*
          var sopInstanceUid = dataSet.string('x0020000d');
          var rows = dataSet.uint16('x00280010');
          var columns = dataSet.uint16('x00280011');
          var bitsAllocated = dataSet.uint16('x00280100');
          var bitsStored = dataSet.uint16('x00280101');
          var windowCenter = dataSet.intString('x00281050');
          var windowWidth = dataSet.intString('x00281051');
          var rescaleIntercept = dataSet.intString('x00281052');
          var rescaleSlope = dataSet.intString('x00281053');
          var photometricInterpretation = dataSet.string('x00280004');
          var pixelRepresentation = dataSet.uint16('x00280103');

          console.log('sopInstance', sopInstanceUid);
          console.log('rows and columns', rows, columns);
          console.log('bits allocated and stored', bitsAllocated, bitsStored);
          console.log('window center and width', windowCenter, windowWidth);
          console.log('rescale intercept and slope', rescaleIntercept, rescaleSlope);
          console.log('photometric interpretation', photometricInterpretation);
          console.log('pixelRepresentation', pixelRepresentation);

          // get the pixel data element (contains the offset and length of the data)
          var pixelDataElement = dataSet.elements.x7fe00010;

          console.log('pixeldata', pixelDataElement)
          console.log('pixeldata buffer', dataSet.byteArray.buffer)

          // create a typed array on the pixel data (this example assumes 16 bit unsigned data)
          var pixelData = pixelRepresentation == 0
            ? new Uint16Array(dataSet.byteArray.buffer, pixelDataElement.dataOffset, pixelDataElement.length / 2)
            : new Int16Array(dataSet.byteArray.buffer, pixelDataElement.dataOffset, pixelDataElement.length / 2);

          var canvas = new OffscreenCanvas(columns, rows);
          var ctx = canvas.getContext('2d');
          var imageData = ctx.getImageData(0, 0, columns, rows);

          // create LUT
          console.time('lut')
          const w1 = windowCenter - windowWidth/2 - rescaleIntercept;
          const w2 = windowCenter + windowWidth/2 - rescaleIntercept;
          const lut: number[] = new Array(Math.pow(2, 16));

          console.log('w1, w2, level', w1, w2, windowCenter)

          for (let i = 0; i < lut.length; i++) {
            // row between 2 points
            lut[i] = (((i - w1) / (w2 - w1)) * 255);

            if (i < w1)
              lut[i] = 0;
            if (i > w2)
              lut[i] = 255;
          }
          console.timeEnd('lut')

          console.time('wl')
          for (let index = 0; index < imageData.data.length; index+=4) {
            let storedValue = pixelData[index/4];
            let value = lut[storedValue];

            imageData.data[index] = value;    // R
            imageData.data[index+1] = value;  // G
            imageData.data[index+2] = value;  // B
            imageData.data[index+3] = 255;    // A
          }
          console.timeEnd('wl');

          console.time('putImageData');
          ctx.putImageData(imageData, 0, 0);
          console.timeEnd('putImageData');
          const image = new DrawableCanvas(canvas);
          grid.get().openImage(image);
          */
        }
      };

      console.time('read-file');
      reader.readAsArrayBuffer(input.files[0]);
    }} />
  </div>);
}

