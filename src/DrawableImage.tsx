import { DataSet } from "dicom-parser";
import { LinearLut } from "./LinearLut";

export interface DrawableImage {
    rows: number;
    columns: number;
    draw(context: CanvasRenderingContext2D, windowCenter?: number, windowWidth?: number): void;
}

type ImageSource = HTMLImageElement | HTMLCanvasElement | OffscreenCanvas | ImageBitmap;

export class DrawableImageData implements DrawableImage {
    backCanvas: OffscreenCanvas;
    rows: number;
    columns: number;

    constructor(readonly image: ImageSource) {
        this.rows = image.height;
        this.columns = image.width;
        this.backCanvas = new OffscreenCanvas(image.width, image.height);
    }

    draw(context: CanvasRenderingContext2D, windowCenter:number, windowWidth:number): void {
        context.drawImage(this.image, 0, 0);
    }
}

type PixelData = Uint16Array | Int16Array;

export class DrawableDicomImage implements DrawableImage {
    readonly rows: number;
    readonly columns: number;
    lut: LinearLut;
    backCanvas: OffscreenCanvas;
    pixelData: PixelData;
    windowCenter: number;
    windowWidth: number;
    lastWindowCenter: number;
    lastWindowWidth: number;

    constructor(readonly dataSet: DataSet) {
        this.rows = dataSet.uint16('x00280010');
        this.columns = dataSet.uint16('x00280011');
        this.windowCenter = this.dataSet.intString('x00281050');
        this.windowWidth = this.dataSet.intString('x00281051');
        const rescaleIntercept = dataSet.intString('x00281052');

        this.lut = new LinearLut(16, rescaleIntercept);
        this.backCanvas = new OffscreenCanvas(this.columns, this.rows);

        const pixelRepresentation = this.dataSet.uint16('x00280103');
        const pixelDataElement = this.dataSet.elements.x7fe00010;
        this.pixelData = pixelRepresentation == 0
            ? new Uint16Array(this.dataSet.byteArray.buffer, pixelDataElement.dataOffset, pixelDataElement.length / 2)
            : new Int16Array(this.dataSet.byteArray.buffer, pixelDataElement.dataOffset, pixelDataElement.length / 2);
    }

    windowLevel(windowCenterDelta: number, windowWidthDelta: number) {
        this.windowCenter += windowCenterDelta;
        this.windowWidth += windowWidthDelta;
    }

    draw(context: CanvasRenderingContext2D): void {
        if (this.lastWindowCenter == this.windowCenter && this.lastWindowWidth == this.windowWidth) {
            context.drawImage(this.backCanvas, 0, 0);
            return;
        }

        console.log('rendering dicom image with wc/ww', this.windowCenter, this.windowWidth);
        console.time('backrender')
        var backCanvasCtx = this.backCanvas.getContext('2d');
        var backCanvasImageData = backCanvasCtx.getImageData(0, 0, this.backCanvas.width, this.backCanvas.height);

        for (let index = 0; index < backCanvasImageData.data.length; index += 4) {
            let storedValue = this.pixelData[index / 4];
            let value = this.lut.get(this.windowCenter, this.windowWidth)[storedValue];

            backCanvasImageData.data[index] = value;      // R
            backCanvasImageData.data[index + 1] = value;  // G
            backCanvasImageData.data[index + 2] = value;  // B
            backCanvasImageData.data[index + 3] = 255;    // A
        }
        backCanvasCtx.putImageData(backCanvasImageData, 0, 0);
        context.drawImage(this.backCanvas, 0, 0);
        console.timeEnd('backrender')

        this.lastWindowCenter = this.windowCenter;
        this.lastWindowWidth = this.windowWidth;
    }
}


