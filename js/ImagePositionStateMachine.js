class ImagePositionStateMachine {
    constructor() {
        this.tx = 0;
        this.ty = 0;
        this.scale = 1;
        this.txBeforeDrag = 0;
        this.tyBeforeDrag = 0;
        this.initialDragX = 0;
        this.initialDragY = 0;
    }
    dragStart(x, y) {
        // save the initial image position
        this.txBeforeDrag = this.tx;
        this.tyBeforeDrag = this.ty;
        // save the initial mouse position
        this.initialDragX = x;
        this.initialDragY = y;
    }
    drag(x, y) {
        let deltaX = x - this.initialDragX;
        let deltaY = y - this.initialDragY;
        this.tx = deltaX + this.txBeforeDrag;
        this.ty = deltaY + this.tyBeforeDrag;
    }
}
export { ImagePositionStateMachine };
//# sourceMappingURL=ImagePositionStateMachine.js.map