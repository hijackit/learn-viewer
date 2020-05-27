export class LinearLut {
    lastWindowCenter: number;
    lastWindowWidth: number;
    table: number[];
    constructor(readonly bits: number, readonly rescaleIntercept: number = 0) {
        this.table = new Array(Math.pow(2, bits));
    }
    get(windowCenter: number, windowWidth: number): number[] {
        if (windowCenter == this.lastWindowCenter && windowWidth == this.lastWindowWidth)
            return this.table;

        console.log('computing linear lut for wc/ww', windowCenter, windowWidth);
        const w1 = windowCenter - windowWidth / 2 - this.rescaleIntercept;
        const w2 = windowCenter + windowWidth / 2 - this.rescaleIntercept;

        for (let i = 0; i < this.table.length; i++) {
            // row between 2 points
            this.table[i] = (((i - w1) / (w2 - w1)) * 255);
            if (i < w1)
                this.table[i] = 0;
            if (i > w2)
                this.table[i] = 255;
        }
        
        this.lastWindowCenter = windowCenter;
        this.lastWindowWidth = windowWidth;
        return this.table;
    }
}
