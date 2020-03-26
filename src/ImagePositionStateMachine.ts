class ImagePositionStateMachine {
    tx: number = 0;
    ty: number = 0;
    scale: number = 1;
    txBeforeDrag: number = 0;
    tyBeforeDrag: number = 0;
    initialDragX: number = 0;
    initialDragY: number = 0;

    dragStart(x: number, y: number) {
        console.log('test')
        // save the initial image position
        this.txBeforeDrag = this.tx;
        this.tyBeforeDrag = this.ty;
        // save the initial mouse position
        this.initialDragX = x;
        this.initialDragY = y;
    }
    
    drag(x: number, y: number) {
        let deltaX = x - this.initialDragX;
        let deltaY = y - this.initialDragY;
        this.tx = deltaX + this.txBeforeDrag;
        this.ty = deltaY + this.tyBeforeDrag;
    }
}

export {ImagePositionStateMachine};